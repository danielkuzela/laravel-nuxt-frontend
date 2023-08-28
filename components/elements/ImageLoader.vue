<script setup>
const props = defineProps({
    data: {
        type: Object
    },
    classes: {
        type: String,
        default: ''
    },
    rounded: {
        type: Boolean,
        default: false
    },
    zoomable: {
        type: Boolean,
        default: false
    },
    transparent: {
        type: Boolean,
        default: false
    },

})

const resolution = props.data.image_resolution.split('x');
const aspect = (resolution[0] / resolution[1]).toFixed(2);
const zoomed = ref(false);

</script>

<template>
    <div>
        <div :class="[
            'aspect-[2/' + aspect + ']',
            'block relative overflow-hidden group',
            rounded ? 'rounded-xl' : ''
            ]">
            <div class="bg-gray-200 absolute w-full h-full animate-pulse" v-if="!transparent"></div>
            <div class="grid place-items-center h-full w-full absolute" v-if="!transparent">
                <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-50" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            <div v-if="zoomable" class="absolute z-20 right-4 top-4" @click="zoomable ? zoomed = !zoomed : ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="fill-gray-200 max-w-0 transition-all	duration-200 group-hover:max-w-full" viewBox="0 0 16 16" @click="zoomable ? zoomed = !zoomed : ''">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>
            </div>
            <nuxt-img :src="data.url"
                      :alt="data.description"
                      loading="lazy"
                      sizes="sm:500px"
                      :width="resolution[0]"
                      :height="resolution[1]"
                      :class="[
                          classes,
                          'w-full z-10 relative',
                          rounded ? 'rounded-xl' : '',
                          zoomable ? 'cursor-pointer' : '']"
                      fit="cover"
                      @click="zoomable ? zoomed = !zoomed : ''"
            />
        </div>
        <div
            v-if="zoomable && zoomed"
            class="fixed w-full h-full bg-black/80 inset-0 flex justify-center items-center z-50"
            @click="zoomable ? zoomed = !zoomed : ''"
            >
            <div class="relative w-[95%] h-[95%] max-h-screen max-w-screen">
                <div class="grid place-items-center h-full w-full absolute">
                    <svg class="animate-spin -ml-1 mr-3 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <nuxt-img :src="data.url"
                          :alt="data.description"
                          loading="lazy"
                          sizes="sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
                          :width="resolution[0]"
                          :height="resolution[1]"
                          :class="[
                              'absolute left-1/2 translate-x-[-50%] z-20 h-full w-auto',
                              'aspect-[2/' + aspect + ']',
                              rounded ? 'rounded-xl' : '']"
                          fit="inside"
                          @click="zoomable ? zoomed = !zoomed : ''"
                />
            </div>
            <div class="absolute right-5 top-5 z-20 cursor-pointer group" @click="zoomable ? zoomed = !zoomed : ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="fill-white/75 group-hover:fill-white" viewBox="0 0 16 16" @click="zoomable ? zoomed = !zoomed : ''">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    </div>
</template>
