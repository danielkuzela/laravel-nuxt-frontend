<script setup>
import { useStyleStore } from "~/stores/style";

const styleStore = useStyleStore();

const props = defineProps({
    fixed: {
       type: Boolean,
       default: false
    },
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

const MobileMenuOpened = ref(false);
provide('mobile_menu_opened', MobileMenuOpened);

</script>


<template>
    <header :class="[headerClasses]">

        <div :class="[
             headerContainerClasses ]"
        >
            <NuxtLinkLocale to="/">
                <ElementsWebsiteLogo />
            </NuxtLinkLocale>

            <LayoutNavigation position="header" />
        </div>
    </header>
    <LayoutNavigation position="mobile" />
</template>


