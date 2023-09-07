<script setup>
import { articlesPerPage } from "~/composables/config";
import Breadcrumbs from "~/components/layout/Breadcrumbs.vue";
import BaseButton from "~/components/elements/BaseButton.vue";
import ImageLoader from "~/components/elements/ImageLoader.vue";
import { useI18n } from "vue-i18n";
import {useStyleStore} from "~/stores/style";
import {useRoute} from "nuxt/app";

const { locale, t } = useI18n();

const props = defineProps({
    data: {
        type: Object
    }
})

const config = useRuntimeConfig();
const route = useRoute();
const styleStore = useStyleStore();

const fetchedData = ref([]);
const fetchedStatus = ref('');
const fetched = ref(0);
const currentPage = ref(props.data.page ? props.data.page : 1);
const currentTag = ref(props.data.tag ? props.data.tag : null);
const currentCategory = ref(props.data.category ? props.data.category : null);
const loadMoreStyle = ref(false);

const { data, status } = await useCustomLazyFetch('/api/articles', { params: { prefix: props.data.prefix[locale.value], lang: locale.value, per_page: articlesPerPage, page: currentPage, tag: currentTag, category: currentCategory }})
const fetchData = async () => {
    fetchedData.value = data.value;
    fetchedStatus.value = status.value;
};

onMounted(async () => {
    fetchData();
});

watch(status, (oldData, newData) => {
    if (loadMoreStyle.value == false) {
        fetchedStatus.value = status.value;
    }
});

watch(data, (newData) => {
    if (loadMoreStyle.value == true) {
        fetchedData.value.articles.data = [...fetchedData.value.articles.data, ...data.value.articles.data];
    } else fetchedData.value = newData;

    fetched.value++;
    currentPage.value = data.value.articles.current_page;
})



provide('current_page', currentPage);
provide('load_more', loadMoreStyle);

if(data && data.value) {
    useSeoMeta({
        title: data.value.flag.seo_title ? data.value.flag.seo_title : data.value.flag.name,
        description: data.value.flag.seo_description,
        ogTitle: t('web.title') + ' | ' + (data.value.flag.open_graph.title ? data.value.flag.open_graph.title : (data.value.flag.seo_title ? data.value.flag.seo_title : data.value.flag.name)),
        ogDescription: data.value.flag.open_graph.description ? data.value.flag.open_graph.description : data.value.flag.seo_description,
        ogType: data.value.flag.open_graph.type,
        ogUrl: config.public.baseUrl + route.path,
        ogImage: config.public.serverUrl + '/media/example-theme-assets/media-placeholder.png',
    })
}

</script>

<template>
    <div :class="[
        containerMaxW,
        'py-6'
    ]">

        <template v-if="fetchedStatus == 'success' || fetched > 0">
            <Breadcrumbs v-if="props.data.tag" :data="{ 0: { name: fetchedData.flag.name, path: fetchedData.flag.url }, 1: { name: $t('article.tags') }, 2: { name: fetchedData.tag.name }}"></Breadcrumbs>
            <Breadcrumbs v-else-if="props.data.category" :data="{ 0: { name: fetchedData.flag.name, path: fetchedData.flag.url }, 1: { name: $t('article.categories') }, 2: { name: fetchedData.category.name }}"></Breadcrumbs>
            <Breadcrumbs v-else :data="{ 0: { name: fetchedData.flag.name }}"></Breadcrumbs>
            <h1 :class="[ styleStore.h1baseStyle, 'text-center mx-auto']">{{ fetchedData.category.name ? fetchedData.category.name : fetchedData.flag.name }}</h1>
            <p class="max-w-4xl text-center mx-auto" v-if="fetchedData.flag.description && !fetchedData.category.description">{{ fetchedData.flag.description }}</p>
            <p class="max-w-4xl text-center mx-auto" v-else-if="fetchedData.category.description">{{ fetchedData.category.description }}</p>
        </template>

        <div class="columns-3 gap-10 my-10" v-show="fetchedStatus == 'success'">
            <template v-for="item in fetchedData.articles.data" v-if="fetchedStatus == 'success'">
                <Transition
                        appear
                        enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        enter-active-class="transition-all duration-1000">
                    <ElementsArticleItem :data="item" :flag="props.data.prefix[locale]" />
                </Transition>
            </template>
        </div>

        <Transition
                appear
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                enter-active-class="transition-all duration-1000">
            <LayoutPagination
                    v-if="fetchedStatus == 'success' && fetchedData.articles.last_page != 1"
                    type="loadmore"
                    :route="$route.path"
                    :last-page="fetchedData.articles.last_page"
                    :links="fetchedData.articles.links"
            />
        </Transition>
    </div>
</template>


