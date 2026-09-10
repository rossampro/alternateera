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

            <input v-model="website" type="text" name="website" autocomplete="off" tabindex="-1" aria-hidden="true"
                class="hidden" />

            <button type="submit" class="btn btn-primary w-full" :disabled="loading || !isEmailValid">
                {{ loading ? 'Submitting...' : 'Subscribe' }}
            </button>
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
const website = ref('')
const formStartedAt = Date.now()

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))

const submitForm = async () => {
    loading.value = true
    try {
        await $fetch('/api/newsletter', {
            method: 'POST',
            body: { email: email.value, name: name.value, optIn: optIn.value, website: website.value, formStartedAt }
        })
        formSubmitted.value = true
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
