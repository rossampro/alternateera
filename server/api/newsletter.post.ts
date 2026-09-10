export default defineEventHandler(async (event) => {
    const body = await readBody<Record<string, unknown>>(event);
    assertNotSpam(body);

    if (typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
        throw createError({ statusCode: 400, statusMessage: "Please enter a valid email address." });
    }
    if (typeof body.name !== "string" || !body.name.trim() || body.optIn !== true) {
        throw createError({ statusCode: 400, statusMessage: "Complete all required fields." });
    }

    const formData = new URLSearchParams();
    formData.append("fields[email]", body.email.trim());
    formData.append("fields[name]", body.name.trim());
    formData.append("ml-submit", "1");
    formData.append("anticsrf", "true");

    const response = await $fetch.raw("https://assets.mailerlite.com/jsonp/1433077/forms/151165306525451401/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
    });

    if (response.status >= 400) {
        throw createError({ statusCode: 502, statusMessage: "Subscription failed. Please try again later." });
    }

    return { ok: true };
});
