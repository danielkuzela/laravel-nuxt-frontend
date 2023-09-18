import { useRedirectStore } from "@/stores/redirect";

export default defineNuxtRouteMiddleware(async (to, from) => {

        const redirectStore = useRedirectStore();

        // get config data
        const config = useRuntimeConfig()

        // check if we have fetched data already
        if(!redirectStore.fetched){

                // get redirects list from api
                const { data: redirectData, error} = await useCustomFetch('/api/redirects')

                const redirects = await redirectData.value;

                redirectStore.setRedirects(redirects);

        }

        const redirects = redirectStore.redirects;

        // Check if the current route needs to be redirected
        const matchingRedirect = redirects.find(redirect => redirect.from === to.path);

        if (matchingRedirect) {
                return navigateTo(matchingRedirect.to, { redirectCode: matchingRedirect.code, external: matchingRedirect.external })
        }

        // admin redirects to admin panel url
        if(to.path === '/admin') return navigateTo(config.public.serverUrl, { external: true })
})