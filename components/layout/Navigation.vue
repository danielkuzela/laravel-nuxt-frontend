<script setup>
import { useStyleStore } from "~/stores/style";
import { useI18n } from "vue-i18n";
import { useRoute } from "#app";

const props = defineProps({
    position: {
        type: String
    },
});

const { locale } = useI18n();
const route = useRoute();

const { data } = await useCustomFetch('/api/menu', { params: { name: 'primary', lang: locale.value}})
const menuData = ref(data.value);

watch(() => locale.value, async (newLocale, oldLocale) => {
    const response = await useCustomFetch('/api/menu', {
        params: { name: 'primary', lang: newLocale }
    });
    menuData.value = response.data.value;
});

const styleStore = useStyleStore();
const MobileMenuOpened = inject('mobile_menu_opened');
const CTAModalOpened = inject('cta_modal_opened');
const MenuPosition = ref('translate-x-0');

watch(MobileMenuOpened, (newValue) => {
    if (newValue == true) {
        setTimeout(() => {
            MenuPosition.value = '-translate-x-full';
        }, 200);
    } else {
        MenuPosition.value = 'translate-x-0';
    }
});

</script>

<template>
    <div v-if="position == 'header'">
      <ul class="hidden min-[1400px]:flex gap-5">
          <template v-for="item in menuData.items">
            <li v-if="item.parent_id == null && !item.submenu.length" class="flex items-center">
                <NuxtLinkLocale
                        v-if="item.url.substring(0,4) != '#cta'"
                        :to="(item.is_homepage === true ? '/' : '/' + item.url)"
                        :class="[ styleStore.navigationLinkStyle] ">{{ item.name }}</NuxtLinkLocale>
                <button v-else
                        type="button"
                        @click="CTAModalOpened = !CTAModalOpened"
                        :class="[ styleStore.navigationLinkStyle, styleStore.navigationLinkCtaStyle ]">{{ item.name }}</button>
            </li>
            <li v-else-if="item.parent_id == null"
                :class="[ styleStore.navigationLinkStyle, `flex items-center group/item relative` ]">
                {{ item.name }} <ElementsBaseIcon type="chevron_down" class="ml-1 -mr-2 group-hover/item:rotate-180 transition-all duration-300" />
                <ul :class="[ styleStore.navigationDropdownWrapperStyle, `hidden group-hover/item:flex whitespace-nowrap` ] ">
                    <template v-for="subitem in item.submenu">
                        <li >
                            <NuxtLinkLocale :to="'/' + subitem.url" :class="[ styleStore.navigationDropdownLinkStyle ] ">{{ subitem.name }}</NuxtLinkLocale>
                        </li>
                    </template>
                </ul>
            </li>
          </template>
          <li><NuxtLink :to="localePath('index', 'en')">EN</NuxtLink> &middot; <NuxtLink :to="localePath('index', 'cs')">CS</NuxtLink>
          </li>
      </ul>
      <div class="hidden max-[1399px]:flex">
          <ElementsBaseButton @click="MobileMenuOpened = !MobileMenuOpened" icon="hamburger" color="basicDark" rounded-full></ElementsBaseButton>
      </div>
    </div>
  <div v-else>
      <Transition
              appear
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              enter-active-class="transition duration-700"
              leave-active-class="transition duration-500"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
      >
        <div class="fixed w-screen h-screen z-50" v-if="MobileMenuOpened">
            <div class="absolute w-full h-full bg-black/80" @click="MobileMenuOpened = !MobileMenuOpened"></div>
            <div :class="[ styleStore.mobileMenuWrapperStyle, MenuPosition
                ]">
                <div class="relative cursor-pointer group text-right" @click="MobileMenuOpened = !MobileMenuOpened">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="inline-block fill-gray-300 group-hover:fill-gray-900" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <ul class="flex gap-5 flex-col">
                    <template v-for="item in menuData.items">
                        <li v-if="item.parent_id == null && !item.submenu.length" class="flex items-center">
                            <NuxtLinkLocale
                                    v-if="item.url.substring(0,4) != '#cta'"
                                    :to="(item.is_homepage === true ? '/' : '/' + item.url)"
                                    :class="[ styleStore.navigationLinkStyle] ">{{ item.name }}</NuxtLinkLocale>
                            <button v-else
                                    type="button"
                                    @click="CTAModalOpened = !CTAModalOpened"
                                    :class="[ styleStore.navigationLinkStyle, styleStore.navigationLinkCtaStyle ]">{{ item.name }}</button>
                        </li>
                    </template>
                    <li><NuxtLink :to="localePath('index', 'en')">EN</NuxtLink> &middot; <NuxtLink :to="localePath('index', 'cs')">CS</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
      </Transition>
  </div>
</template>