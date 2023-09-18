import { defineStore } from "pinia";

export const useRedirectStore = defineStore("redirect", {
    state: () => ({
        fetched: false,
        redirects: {},
    }),
    actions: {
        setRedirects (redirects) {
            this[`redirects`] = redirects
            this['fetched'] = true
        },
    },
});
