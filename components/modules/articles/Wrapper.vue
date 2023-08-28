<script setup>
import { articlesPerPage } from "~/composables/config";
import Breadcrumbs from "~/components/layout/Breadcrumbs.vue";
import BaseButton from "~/components/elements/BaseButton.vue";
import ImageLoader from "~/components/elements/ImageLoader.vue";
import { useI18n } from "vue-i18n";
import {useStyleStore} from "~/stores/style";

const { locale } = useI18n();

const props = defineProps({
    data: {
        type: Object
    }
})

const styleStore = useStyleStore();

const fetchedData = ref([]);
const fetchedStatus = ref('');
const fetched = ref(0);
const currentPage = ref(props.data.page ? props.data.page : 1);
const currentTag = ref(props.data.tag ? props.data.tag : null);
const loadMoreStyle = ref(false);

const { data, status } = await useCustomLazyFetch('/api/articles', { params: { prefix: props.data.prefix, lang: locale.value, per_page: articlesPerPage, page: currentPage, tag: currentTag }})

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


</script>

<template>
    <div :class="[
        containerMaxW,
        'py-6'
    ]">
        <template v-if="fetchedStatus == 'success' || fetched > 0">
            <Breadcrumbs :data="{ 0: { name: fetchedData.flag.name, path: fetchedData.flag.url }, 1: { name: $t('article.tags') }, 2: { name: fetchedData.tag.name }}" v-if="props.data.tag"></Breadcrumbs>
            <Breadcrumbs :data="{ 0: { name: fetchedData.flag.name }}" v-else></Breadcrumbs>
            <h1 :class="[ styleStore.h1baseStyle, 'text-center mx-auto']">{{ fetchedData.flag.name }}</h1>
            <p class="max-w-4xl text-center mx-auto" v-if="fetchedData.flag.description">{{ fetchedData.flag.description }}</p>
        </template>

        <div class="columns-3 gap-10 my-10" v-show="fetchedStatus == 'success'">
            <template v-for="item in fetchedData.articles.data" v-if="fetchedStatus == 'success'">
                <Transition
                        appear
                        enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        enter-active-class="transition-all duration-1000">
                    <ElementsArticleItem :data="item" :flag="props.data.prefix" />
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
                    route="clanky"
                    :last-page="fetchedData.articles.last_page"
                    :links="fetchedData.articles.links"
            />
        </Transition>
    </div>
</template>


