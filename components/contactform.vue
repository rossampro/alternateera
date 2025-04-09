<template>
    <div class="max-w-md mx-auto mt-8 p-6 rounded-box border border-base-300 bg-base-100 shadow-xl">
        <div v-if="!formSubmitted" class="text-center mb-6">
            <h4 class="text-primary text-2xl font-semibold">Sway With Us</h4>
            <p class="text-base-content text-sm mt-2">
                Join our Email List! You’ll get access to unreleased content, and strange things.
            </p>
        </div>

        <form v-if="!formSubmitted" @submit.prevent="submitForm" class="space-y-4">
            <div>
                <input v-model="email" aria-label="email" aria-required="true" type="email" name="fields[email]"
                    placeholder="Email" autocomplete="email" class="input input-bordered w-full" required />
                <p v-if="email && !isEmailValid" class="text-error text-xs mt-1">Please enter a valid email address.</p>
            </div>

            <input v-model="name" aria-label="name" aria-required="true" type="text" name="fields[name]"
                placeholder="First Name" autocomplete="given-name" class="input input-bordered w-full" required />

            <p class="text-sm text-base-content">
                You can unsubscribe anytime. For more details, review our Privacy Policy.
            </p>

            <label class="flex items-start gap-2 text-sm">
                <input v-model="optIn" type="checkbox" required class="checkbox checkbox-primary mt-1" />
                <span class="leading-tight">Opt in to receive news and updates.</span>
            </label>

            <div class="ml-form-recaptcha">
                <div class="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
            </div>

            <input type="hidden" name="ml-submit" value="1" />
            <button type="submit" class="btn btn-primary w-full" :disabled="loading || !isEmailValid">
                {{ loading ? 'Submitting...' : 'Subscribe' }}
            </button>
            <input type="hidden" name="anticsrf" value="true" />
        </form>

        <div v-else class="ml-form-successBody row-success mt-4 text-center">
            <h4 class="text-success text-xl font-semibold">Thank you!</h4>
            <p class="text-base-content mt-1">You have successfully joined our subscriber list.</p>
        </div>
    </div>
</template>

<script setup>
const email = ref('')
const name = ref('')
const optIn = ref(false)
const formSubmitted = ref(false)
const loading = ref(false)

const isEmailValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.value)
})

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
})

const submitForm = async () => {
    const recaptchaResponse = document.querySelector('[name="g-recaptcha-response"]')?.value
    if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA.')
        return
    }

    loading.value = true
    try {
        const formData = new URLSearchParams()
        formData.append('fields[email]', email.value)
        formData.append('fields[name]', name.value)
        formData.append('ml-submit', '1')
        formData.append('anticsrf', 'true')
        formData.append('g-recaptcha-response', recaptchaResponse)

        const response = await fetch('https://assets.mailerlite.com/jsonp/1433077/forms/151165306525451401/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString()
        })

        if (response.ok) {
            formSubmitted.value = true
        } else {
            alert('Something went wrong. Please try again later.')
        }
    } catch (error) {
        alert('Submission failed. Try again later.')
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
@import url("https://assets.mlcdn.com/fonts.css?version=1743581");
</style>
