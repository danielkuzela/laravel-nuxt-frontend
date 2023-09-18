export default defineNuxtPlugin((nuxtApp) => {

    const cookieControl = useCookieControl()
    const { grantConsent, revokeConsent } = useGtag()

    watch(
        () => cookieControl.cookiesEnabledIds.value,
        (current, previous) => {
            if (
                !previous?.includes('analytical') &&
                current?.includes('analytical')
            ) {
                grantConsent();
            } else{
                revokeConsent();
            }
        },
        { deep: true }
    );

})