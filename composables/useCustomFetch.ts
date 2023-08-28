import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useCustomFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig()
    const token = useCookie('XSRF-TOKEN')

    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.baseUrl,
        // cache request - causes trouble with url
        // key: url,

        // set user token if connected
        headers: {
            Authorization: `Bearer ${config.public.accessToken}`,
            Accept: 'application/json',
            'X-XSRF-TOKEN': token
        },

        credentials: 'include',

        onResponse (_ctx) {
            // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        },

        onResponseError (_ctx) {
            // throw new myBusinessError()
        }
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)
}
