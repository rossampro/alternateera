export const useColorStore = defineStore('theme', {
    state: () => ({
        theme: 'dracula'
    }),

    getters: {
        getTheme: (state) => state.theme
    },

    actions: {
        setTheme(theme: string): string {
            this.theme = theme;
            return this.theme;
        }
    }
})
