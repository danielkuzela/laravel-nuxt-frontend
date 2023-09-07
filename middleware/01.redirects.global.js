export default defineNuxtRouteMiddleware(async (to, from) => {

        const config = useRuntimeConfig()

        // get redirects list from api
        const { data: redirectData, error} = await useCustomFetch('/api/redirects')

        const redirects = await redirectData.value;

        // Check if the current route needs to be redirected
        const matchingRedirect = redirects.find(redirect => redirect.from === to.path);

        if (matchingRedirect) {
                return navigateTo(matchingRedirect.to, { redirectCode: matchingRedirect.code, external: matchingRedirect.external })
        }

        // admin redirects to admin panel url
        if(to.path === '/admin') return navigateTo(config.public.serverUrl, { external: true })
})