export default defineNuxtRouteMiddleware(async (to, from) => {

        const { data: redirectData} = await useCustomFetch('/api/redirects')
        const redirects = await redirectData.value;

        // Check if the current route needs to be redirected
        const matchingRedirect = redirects.find(redirect => redirect.from === to.path);

        if (matchingRedirect) {
                return navigateTo(matchingRedirect.to, { redirectCode: matchingRedirect.code, external: matchingRedirect.external })
        }
})