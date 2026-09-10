export function assertNotSpam(body: Record<string, unknown>) {
    if (String(body.website || "").trim()) {
        throw createError({ statusCode: 400, statusMessage: "Submission could not be accepted." });
    }

    const formStartedAt = Number(body.formStartedAt);
    if (!Number.isFinite(formStartedAt) || Date.now() - formStartedAt < 3000) {
        throw createError({ statusCode: 400, statusMessage: "Please wait a moment before submitting." });
    }
}
