import { createHash } from "node:crypto";

const platforms = ["Java PC", "Bedrock PC", "Xbox", "PlayStation", "Nintendo Switch", "Mobile", "Other"];
const ageRanges = ["Under 13", "13–17", "18+"];
const playerTypes = ["Builder", "Explorer", "Redstone Engineer", "Farmer", "Miner", "PvP", "Casual", "Content Creator / Stream Viewer"];
const clip = (value: unknown) => String(value || "—").slice(0, 1024);
const normalizeEmail = (value: unknown) => String(value).trim().toLowerCase();
const hashEmail = (email: string) => createHash("sha256").update(email).digest("hex");

function supabaseEndpoint(config: ReturnType<typeof useRuntimeConfig>) {
    if (!config.supabaseUrl || !config.supabaseServiceRoleKey) {
        throw createError({ statusCode: 503, statusMessage: "Application duplicate check is not configured yet." });
    }

    return `${config.supabaseUrl.replace(/\/$/, "")}/rest/v1/${config.supabaseMinecraftApplicationEmailsTable}`;
}

function supabaseHeaders(config: ReturnType<typeof useRuntimeConfig>) {
    return {
        apikey: config.supabaseServiceRoleKey,
        Authorization: `Bearer ${config.supabaseServiceRoleKey}`,
    };
}

async function reserveApplicationEmail(config: ReturnType<typeof useRuntimeConfig>, emailHash: string, submittedAt: string) {
    try {
        await $fetch(supabaseEndpoint(config), {
            method: "POST",
            headers: {
                ...supabaseHeaders(config),
                Prefer: "return=minimal",
            },
            body: {
                email_hash: emailHash,
                submitted_at: submittedAt,
            },
        });
    } catch (error: any) {
        if (error?.statusCode === 409) {
            throw createError({ statusCode: 409, statusMessage: "An application has already been submitted for this email." });
        }
        throw error;
    }
}

async function releaseApplicationEmail(config: ReturnType<typeof useRuntimeConfig>, emailHash: string) {
    await $fetch(`${supabaseEndpoint(config)}?email_hash=eq.${emailHash}`, {
        method: "DELETE",
        headers: supabaseHeaders(config),
    });
}

export default defineEventHandler(async (event) => {
    const body = await readBody<Record<string, unknown>>(event);
    const requiredStrings = ["email", "discordUsername", "platform", "ageRange", "whyJoin", "banHistory"];

    if (requiredStrings.some((field) => typeof body[field] !== "string" || !body[field]?.toString().trim())) {
        throw createError({ statusCode: 400, statusMessage: "Complete all required fields." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email as string)) {
        throw createError({ statusCode: 400, statusMessage: "Enter a valid email address." });
    }
    if (!platforms.includes(body.platform as string) || !ageRanges.includes(body.ageRange as string)) {
        throw createError({ statusCode: 400, statusMessage: "Choose a valid platform and age range." });
    }
    const usernameField = body.platform === "Java PC" ? "javaUsername" : "bedrockGamertag";
    if (typeof body[usernameField] !== "string" || !body[usernameField].trim()) {
        throw createError({ statusCode: 400, statusMessage: body.platform === "Java PC" ? "Enter your Java username." : "Enter your Bedrock gamertag." });
    }
    if (!Array.isArray(body.playerTypes) || !body.playerTypes.length || body.playerTypes.some((type) => !playerTypes.includes(type))) {
        throw createError({ statusCode: 400, statusMessage: "Choose at least one player type." });
    }
    if (body.banHistory !== "No" && body.banHistory !== "Yes") {
        throw createError({ statusCode: 400, statusMessage: "Answer the server ban question." });
    }
    if (body.banHistory === "Yes" && (typeof body.banExplanation !== "string" || !body.banExplanation.trim())) {
        throw createError({ statusCode: 400, statusMessage: "Explain the previous server ban." });
    }
    if (body.joinedDiscord !== true || body.agreesRules !== true || body.understandsNoGuarantee !== true) {
        throw createError({ statusCode: 400, statusMessage: "Confirm Discord membership and both required agreements." });
    }

    const config = useRuntimeConfig(event);
    if (!config.minecraftApplicationDestination && !config.discordMinecraftApplicationWebhook) {
        throw createError({ statusCode: 503, statusMessage: "Application service is not configured yet." });
    }
    if (body.emailOptIn === true && (!config.mailerliteApiToken || !config.mailerliteGroupId)) {
        throw createError({ statusCode: 503, statusMessage: "Email opt-in service is not configured yet." });
    }

    const submittedAt = new Date().toISOString();
    const email = normalizeEmail(body.email);
    const emailHash = hashEmail(email);

    try {
        await reserveApplicationEmail(config, emailHash, submittedAt);
    } catch (error: any) {
        if (error?.statusCode === 409) throw error;
        throw createError({ statusCode: 503, statusMessage: "Application duplicate check is unavailable." });
    }

    try {
        const application = {
            ...body,
            email,
            submittedAt,
            emailProvider: body.emailOptIn ? config.minecraftEmailProvider || "MailerLite" : null,
        };

        if (config.minecraftApplicationDestination) {
            await $fetch(config.minecraftApplicationDestination, {
                method: "POST",
                body: application,
            });
        }

        if (config.discordMinecraftApplicationWebhook) {
            await $fetch(config.discordMinecraftApplicationWebhook, {
                method: "POST",
                body: {
                    username: "Minecraft Applications",
                    allowed_mentions: { parse: [] },
                    embeds: [{
                        title: "New Minecraft Application",
                        color: 0x57f287,
                        timestamp: submittedAt,
                        fields: [
                            { name: "Email", value: clip(body.email), inline: true },
                            { name: "Discord", value: clip(body.discordUsername), inline: true },
                            { name: "Platform", value: clip(body.platform), inline: true },
                            { name: "Minecraft Name", value: clip(body.javaUsername || body.bedrockGamertag), inline: true },
                            { name: "Age", value: clip(body.ageRange), inline: true },
                            { name: "Email opt-in", value: body.emailOptIn ? "Yes" : "No", inline: true },
                            { name: "Player types", value: clip((body.playerTypes as string[]).join(", ")) },
                            { name: "Ban history", value: clip(body.banHistory === "Yes" ? body.banExplanation : "No") },
                            { name: "Why join?", value: clip(body.whyJoin) },
                        ],
                    }],
                },
            });
        }

        if (body.emailOptIn === true) {
            await $fetch("https://connect.mailerlite.com/api/subscribers", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${config.mailerliteApiToken}`,
                    Accept: "application/json",
                },
                body: {
                    email,
                    groups: [config.mailerliteGroupId],
                    fields: {
                        discord_username: body.discordUsername,
                        minecraft_platform: body.platform,
                    },
                },
            });
        }
    } catch (error: any) {
        try {
            await releaseApplicationEmail(config, emailHash);
        } catch {}
        throw createError({ statusCode: 502, statusMessage: "Application could not be delivered. Please try again later." });
    }

    return { ok: true };
});
