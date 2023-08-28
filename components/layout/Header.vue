<script setup>

import { useStyleStore } from "~/stores/style";
import WebsiteLogo from "~/components/elements/WebsiteLogo.vue";
import Navigation from "~/components/layout/Navigation.vue";

const styleStore = useStyleStore();

const props = defineProps({
   fixed: {
       type: Boolean,
       default: false
   }
});

const scrollY = ref(0);
const isSticky = ref(false);

const headerClasses = computed(() => {
    return [
        styleStore.headerStyle,
        hasStickyHeader ? 'fixed z-30' : '',
    ];
});

const headerContainerClasses = computed(() => {
    return [
        styleStore.headerContainerStyle,
        containerMaxW,
        isSticky.value == true ? '!py-2' : '',
    ];
});

if(hasStickyHeader) {
    /*
    sticky header management
     */
    const handleScroll = () => {
        scrollY.value = window.scrollY;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    watch(scrollY, (newValue) => {
        isSticky.value = newValue > stickyHeaderPoint;
    });
}
</script>



<template>
    <header :class="[headerClasses]">
        <div :class="[
             headerContainerClasses ]"
        >
            <NuxtLinkLocale to="/">
                <WebsiteLogo />
            </NuxtLinkLocale>

            <Navigation />
        </div>
    </header>
</template>


