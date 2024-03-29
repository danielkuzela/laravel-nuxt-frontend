import { defineStore } from "pinia";
import { base as styleDefault } from '@/composables/styles'
import { darkModeKey } from '@/composables/config'

export const useStyleStore = defineStore("style", {
    state: () => ({
        /* Dark mode */
        darkMode: false,
    }),
    actions: {
        setStyle () {
            for (const key in styleDefault) {
                this[`${key}Style`] = styleDefault[key]
            }
        },

        setDarkMode(payload = null) {
            this.darkMode = payload !== null ? payload : !this.darkMode;

            if (typeof localStorage !== "undefined") {
                localStorage.setItem(darkModeKey, this.darkMode ? "1" : "0");
            }

            if (typeof document !== "undefined") {
                document.body.classList[this.darkMode ? "add" : "remove"](
                    "dark-scrollbars"
                );

                document.documentElement.classList[this.darkMode ? "add" : "remove"](
                    "dark-scrollbars-compat"
                );
            }
        },
    },
});
