export default defineNuxtPlugin(() => {
    const interval = setInterval(() => {
        if (typeof window !== 'undefined' && typeof window.ml !== 'undefined') {
            window.ml('account', '1433077')
            clearInterval(interval)
        }
    }, 200)
})
