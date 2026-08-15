<script setup lang="ts">
useSeoMeta({
    title: "Alternate Era Minecraft | Join the Community SMP",
    description: "Apply to join the Alternate Era Minecraft server. A community survival server supporting Java, Bedrock, and console players via BedrockConnect.",
    ogTitle: "Alternate Era Minecraft | Join the Community SMP",
    ogDescription: "Apply to join our community-driven Minecraft survival server for Java, Bedrock, and console players.",
});

const config = useRuntimeConfig();
const discordInviteUrl = computed(() => config.public.discordInviteUrl || "#discord-required");
const platforms = ["Java PC", "Bedrock PC", "Xbox", "PlayStation", "Nintendo Switch", "Mobile", "Other"];
const ageRanges = ["Under 13", "13–17", "18+"];
const playerTypeOptions = ["Builder", "Explorer", "Redstone Engineer", "Farmer", "Miner", "PvP", "Casual", "Content Creator / Stream Viewer"];
const steps = [
    "Join the Alternate Era Discord (required)",
    "Submit your SMP application",
    "Staff reviews your application",
    "Approved players are whitelisted",
    "Begin your adventure as a Trial Member",
    "Earn Trusted Member status by being a positive part of the community",
];
const rules = [
    "No griefing.",
    "No stealing.",
    "No hacking.",
    "No x-ray mods or resource packs.",
    "No duping or exploit abuse.",
    "No world seed viewers, seed mapping tools, or software that reveals undiscovered terrain, structures, ores, or hidden world information.",
    "No harassment, hate speech, threats, or inappropriate content.",
    "Respect spawn, community builds, and other players' bases.",
    "Follow the Discord and livestream community rules.",
    "Staff decisions are final when protecting the community.",
];

const form = reactive({
    email: "",
    discordUsername: "",
    joinedDiscord: false,
    javaUsername: "",
    bedrockGamertag: "",
    platform: "",
    ageRange: "",
    whyJoin: "",
    playerTypes: [] as string[],
    banHistory: "",
    banExplanation: "",
    agreesRules: false,
    understandsNoGuarantee: false,
    emailOptIn: false,
});
const errors = ref<Record<string, string>>({});
const submitting = ref(false);
const submitted = ref(false);
const submitError = ref("");
const recaptchaContainer = ref<HTMLElement | null>(null);
const recaptchaWidgetId = ref<number | null>(null);
const recaptchaSiteKey = "6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD";

function renderRecaptcha() {
    const grecaptcha = (window as any).grecaptcha;
    if (!recaptchaContainer.value || !grecaptcha?.render || recaptchaWidgetId.value !== null) return;
    recaptchaWidgetId.value = grecaptcha.render(recaptchaContainer.value, { sitekey: recaptchaSiteKey });
}

onMounted(() => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src^="https://www.google.com/recaptcha/api.js"]');
    if (existingScript) {
        renderRecaptcha();
        existingScript.addEventListener("load", renderRecaptcha, { once: true });
        return;
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderRecaptcha, { once: true });
    document.body.appendChild(script);
});

watch(() => form.platform, (platform) => {
    if (platform === "Java PC") form.bedrockGamertag = "";
    else form.javaUsername = "";
});

function validate() {
    const next: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.discordUsername.trim()) next.discordUsername = "Discord username is required.";
    if (!form.joinedDiscord) next.joinedDiscord = "Join Discord before applying.";
    if (!form.platform) next.platform = "Choose your primary platform.";
    if (form.platform === "Java PC" && !form.javaUsername.trim()) next.javaUsername = "Java username is required.";
    if (form.platform && form.platform !== "Java PC" && !form.bedrockGamertag.trim()) next.bedrockGamertag = "Bedrock gamertag is required.";
    if (!form.ageRange) next.ageRange = "Choose an age range.";
    if (!form.whyJoin.trim()) next.whyJoin = "Tell us why you want to join.";
    if (!form.playerTypes.length) next.playerTypes = "Choose at least one player type.";
    if (!form.banHistory) next.banHistory = "Answer this question.";
    if (form.banHistory === "Yes" && !form.banExplanation.trim()) next.banExplanation = "Please explain the ban.";
    if (!form.agreesRules) next.agreesRules = "You must agree to the rules.";
    if (!form.understandsNoGuarantee) next.understandsNoGuarantee = "You must confirm this statement.";
    errors.value = next;
    return !Object.keys(next).length;
}

async function submitApplication() {
    submitError.value = "";
    if (!validate()) return;
    const grecaptcha = (window as any).grecaptcha;
    const recaptchaResponse = recaptchaWidgetId.value !== null && grecaptcha?.getResponse
        ? grecaptcha.getResponse(recaptchaWidgetId.value)
        : document.querySelector<HTMLTextAreaElement>('[name="g-recaptcha-response"]')?.value;
    if (!recaptchaResponse) {
        submitError.value = "Please complete the reCAPTCHA.";
        return;
    }
    submitting.value = true;
    try {
        await $fetch("/api/minecraft-application", { method: "POST", body: form });
        submitted.value = true;
    } catch (error: any) {
        submitError.value = error?.data?.statusMessage || "Application could not be submitted. Please try again later.";
    } finally {
        submitting.value = false;
    }
}
</script>

<template>
    <div class="bg-base-100">
        <section class="minecraft-grid relative isolate overflow-hidden border-b border-secondary/30 py-24 md:py-36">
            <div class="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-base-100/90 to-secondary/20"></div>
            <div class="container mx-auto px-4 text-center">
                <p class="mb-4 font-mono text-sm font-bold uppercase tracking-[0.35em] text-secondary">Application-only community SMP</p>
                <h1 class="mx-auto max-w-5xl text-5xl font-black uppercase tracking-tight text-neon md:text-7xl">Join the Alternate Era Minecraft Server</h1>
                <p class="mx-auto mt-6 max-w-3xl text-lg text-base-content/80 md:text-xl">A community-driven survival server for Alternate Era viewers, builders, adventurers, creators, and chill players who want a long-term world free from griefers and toxicity.</p>
                <div class="mt-8 flex flex-wrap justify-center gap-3" aria-label="Supported Minecraft editions">
                    <span class="badge badge-lg badge-primary">Java Edition</span>
                    <span class="badge badge-lg badge-secondary">Bedrock Edition</span>
                    <span class="badge badge-lg badge-success">Console via BedrockConnect</span>
                </div>
                <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <a :href="discordInviteUrl" :target="config.public.discordInviteUrl ? '_blank' : undefined" rel="noopener noreferrer" class="btn btn-primary btn-lg box-neon-primary">Join the Discord</a>
                    <a href="#application" class="btn btn-outline btn-secondary btn-lg">Apply for Whitelist</a>
                </div>
            </div>
        </section>

        <section class="border-b border-base-300 bg-base-200 py-20">
            <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
                <div>
                    <p class="mb-3 font-mono uppercase tracking-widest text-secondary">A world worth protecting</p>
                    <h2 class="text-4xl font-black uppercase md:text-5xl">Community over player count</h2>
                    <p class="mt-6 text-lg text-base-content/80">This is not intended to be a massive public server. We grow slowly so players can know and trust one another. Protecting the community comes first.</p>
                </div>
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div v-for="item in ['Building', 'Exploring', 'Community projects', 'Livestream events', 'Helping others', 'A lasting world']" :key="item" class="card border border-primary/30 bg-base-100 p-5 text-center font-bold shadow-lg">{{ item }}</div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto max-w-4xl px-4 text-center">
                <Icon name="heroicons:lock-closed" class="mx-auto mb-5 h-12 w-12 text-secondary" />
                <h2 class="text-4xl font-black uppercase md:text-5xl">Why application only?</h2>
                <div class="mt-6 space-y-4 text-lg text-base-content/80">
                    <p>The Alternate Era Minecraft server is intentionally application-based. We would rather build a smaller community filled with trustworthy people than a giant public server full of griefers, hackers, and trolls.</p>
                    <p>Every player helps shape the world, so we take time to get to know new members before opening the gates.</p>
                    <p class="font-bold text-base-content">Looking for a long-term Minecraft home where people respect one another and work together? You’ll fit right in.</p>
                </div>
            </div>
        </section>

        <section class="border-y border-secondary/30 bg-base-300 py-20">
            <div class="container mx-auto px-4">
                <h2 class="mb-12 text-center text-4xl font-black uppercase md:text-5xl">How it works</h2>
                <ol class="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
                    <li v-for="(step, index) in steps" :key="step" class="card border border-secondary/30 bg-base-100 p-6 shadow-xl">
                        <span class="mb-3 font-mono text-3xl font-black text-secondary">0{{ index + 1 }}</span>
                        <span class="font-bold">{{ step }}</span>
                    </li>
                </ol>
            </div>
        </section>

        <section id="rules" class="py-20">
            <div class="container mx-auto max-w-5xl px-4">
                <h2 class="mb-4 text-center text-4xl font-black uppercase md:text-5xl">Protect the world</h2>
                <p class="mb-10 text-center text-base-content/70">Simple standards. Good neighbors. Staff decisions are final when protecting the community.</p>
                <ul class="grid gap-3 md:grid-cols-2">
                    <li v-for="rule in rules" :key="rule" class="flex gap-3 rounded-box border border-base-300 bg-base-200 p-4">
                        <Icon name="heroicons:check-circle" class="h-6 w-6 shrink-0 text-success" />
                        <span>{{ rule }}</span>
                    </li>
                </ul>
            </div>
        </section>

        <section id="application" class="border-t border-primary/30 bg-base-200 py-20">
            <div class="container mx-auto max-w-4xl px-4">
                <div v-if="submitted" class="card border border-success/40 bg-base-100 p-8 text-center shadow-2xl md:p-12" role="status">
                    <Icon name="heroicons:check-badge" class="mx-auto mb-5 h-16 w-16 text-success" />
                    <h2 class="text-3xl font-black uppercase">Application received!</h2>
                    <p class="mt-4 text-lg">Join us in Discord while our staff reviews your application. We'll contact you there if you're accepted.</p>
                    <a :href="discordInviteUrl" class="btn btn-primary mx-auto mt-8">Join the Discord</a>
                </div>

                <div v-else>
                    <div class="mb-10 text-center">
                        <p class="mb-3 font-mono uppercase tracking-widest text-primary">Whitelist application</p>
                        <h2 class="text-4xl font-black uppercase md:text-5xl">Ready to build?</h2>
                        <p id="discord-required" class="mt-4 text-lg"><strong>Discord membership is required before applying.</strong> <a :href="discordInviteUrl" class="link link-secondary">Join Discord first</a>, then return here.</p>
                    </div>

                    <form class="card space-y-8 border border-primary/30 bg-base-100 p-6 shadow-2xl md:p-10" novalidate @submit.prevent="submitApplication">
                        <div class="grid gap-6 md:grid-cols-2">
                            <label class="form-control">
                                <span class="label-text mb-2 font-bold">Email address *</span>
                                <input v-model.trim="form.email" type="email" autocomplete="email" class="input input-bordered" :class="{ 'input-error': errors.email }" aria-describedby="email-error" required />
                                <span v-if="errors.email" id="email-error" class="mt-1 text-sm text-error">{{ errors.email }}</span>
                            </label>
                            <label class="form-control">
                                <span class="label-text mb-2 font-bold">Discord username *</span>
                                <input v-model.trim="form.discordUsername" type="text" autocomplete="username" class="input input-bordered" :class="{ 'input-error': errors.discordUsername }" aria-describedby="discord-error" required />
                                <span v-if="errors.discordUsername" id="discord-error" class="mt-1 text-sm text-error">{{ errors.discordUsername }}</span>
                            </label>
                        </div>

                        <label class="flex items-start gap-3">
                            <input v-model="form.joinedDiscord" type="checkbox" class="checkbox checkbox-primary mt-1" required />
                            <span><strong>I have joined the Alternate Era Discord. *</strong><span v-if="errors.joinedDiscord" class="block text-sm text-error">{{ errors.joinedDiscord }}</span></span>
                        </label>

                        <div class="grid gap-6 md:grid-cols-2">
                            <label class="form-control">
                                <span class="label-text mb-2 font-bold">Primary platform *</span>
                                <select v-model="form.platform" class="select select-bordered" :class="{ 'select-error': errors.platform }" required>
                                    <option disabled value="">Choose a platform</option>
                                    <option v-for="platform in platforms" :key="platform">{{ platform }}</option>
                                </select>
                                <span v-if="errors.platform" class="mt-1 text-sm text-error">{{ errors.platform }}</span>
                            </label>
                            <label v-if="form.platform === 'Java PC'" class="form-control">
                                <span class="label-text mb-2 font-bold">Minecraft Java username *</span>
                                <input v-model.trim="form.javaUsername" type="text" class="input input-bordered" :class="{ 'input-error': errors.javaUsername }" required />
                                <span v-if="errors.javaUsername" class="mt-1 text-sm text-error">{{ errors.javaUsername }}</span>
                            </label>
                            <label v-else-if="form.platform" class="form-control">
                                <span class="label-text mb-2 font-bold">Minecraft Bedrock gamertag *</span>
                                <input v-model.trim="form.bedrockGamertag" type="text" class="input input-bordered" :class="{ 'input-error': errors.bedrockGamertag }" required />
                                <span v-if="errors.bedrockGamertag" class="mt-1 text-sm text-error">{{ errors.bedrockGamertag }}</span>
                            </label>
                            <label class="form-control">
                                <span class="label-text mb-2 font-bold">Age range *</span>
                                <select v-model="form.ageRange" class="select select-bordered" :class="{ 'select-error': errors.ageRange }" required>
                                    <option disabled value="">Choose an age range</option>
                                    <option v-for="age in ageRanges" :key="age">{{ age }}</option>
                                </select>
                                <span v-if="errors.ageRange" class="mt-1 text-sm text-error">{{ errors.ageRange }}</span>
                            </label>
                        </div>

                        <div v-if="form.ageRange === 'Under 13'" class="alert alert-warning" role="note">
                            <Icon name="heroicons:information-circle" class="h-6 w-6" />
                            <span>Younger players may need permission from a parent or guardian under community policy. Please do not include extra personal information in your answers.</span>
                        </div>

                        <label class="form-control">
                            <span class="label-text mb-2 font-bold">Why do you want to join the Alternate Era Minecraft server? *</span>
                            <textarea v-model.trim="form.whyJoin" rows="5" class="textarea textarea-bordered" :class="{ 'textarea-error': errors.whyJoin }" required></textarea>
                            <span v-if="errors.whyJoin" class="mt-1 text-sm text-error">{{ errors.whyJoin }}</span>
                        </label>

                        <fieldset>
                            <legend class="mb-3 font-bold">What kind of player are you? *</legend>
                            <div class="grid gap-3 sm:grid-cols-2">
                                <label v-for="type in playerTypeOptions" :key="type" class="flex items-center gap-3 rounded-box border border-base-300 p-3">
                                    <input v-model="form.playerTypes" type="checkbox" :value="type" class="checkbox checkbox-secondary" />
                                    <span>{{ type }}</span>
                                </label>
                            </div>
                            <p v-if="errors.playerTypes" class="mt-2 text-sm text-error">{{ errors.playerTypes }}</p>
                        </fieldset>

                        <fieldset>
                            <legend class="mb-3 font-bold">Have you ever been banned from a Minecraft server? *</legend>
                            <div class="flex gap-6">
                                <label v-for="answer in ['No', 'Yes']" :key="answer" class="flex items-center gap-2"><input v-model="form.banHistory" type="radio" :value="answer" class="radio radio-primary" /> {{ answer }}</label>
                            </div>
                            <p v-if="errors.banHistory" class="mt-2 text-sm text-error">{{ errors.banHistory }}</p>
                        </fieldset>

                        <label v-if="form.banHistory === 'Yes'" class="form-control">
                            <span class="label-text mb-2 font-bold">Please explain *</span>
                            <textarea v-model.trim="form.banExplanation" rows="4" class="textarea textarea-bordered" :class="{ 'textarea-error': errors.banExplanation }"></textarea>
                            <span v-if="errors.banExplanation" class="mt-1 text-sm text-error">{{ errors.banExplanation }}</span>
                        </label>

                        <div class="space-y-4 border-t border-base-300 pt-6">
                            <label class="flex items-start gap-3"><input v-model="form.agreesRules" type="checkbox" class="checkbox checkbox-primary mt-1" required /><span>I have read and agree to follow the <a href="#rules" class="link link-secondary">server rules</a>. *<span v-if="errors.agreesRules" class="block text-sm text-error">{{ errors.agreesRules }}</span></span></label>
                            <label class="flex items-start gap-3"><input v-model="form.understandsNoGuarantee" type="checkbox" class="checkbox checkbox-primary mt-1" required /><span>I understand that submitting an application does not guarantee acceptance. *<span v-if="errors.understandsNoGuarantee" class="block text-sm text-error">{{ errors.understandsNoGuarantee }}</span></span></label>
                            <label class="flex items-start gap-3"><input v-model="form.emailOptIn" type="checkbox" class="checkbox checkbox-secondary mt-1" /><span>I'd like emails about Alternate Era events, Minecraft updates, livestreams, and community announcements. (Optional)</span></label>
                        </div>

                        <div ref="recaptchaContainer"></div>
                        <div v-if="submitError" class="alert alert-error" role="alert">{{ submitError }}</div>
                        <button type="submit" class="btn btn-primary btn-lg w-full" :disabled="submitting">{{ submitting ? "Submitting…" : "Submit application" }}</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.minecraft-grid {
    background-image: linear-gradient(rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.035) 1px, transparent 1px);
    background-size: 32px 32px;
}
</style>
