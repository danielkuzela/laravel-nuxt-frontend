<script setup>
import { useI18n } from "vue-i18n";
import Speakers from "~/components/modules/universal_module/Speakers.vue";

const { locale } = useI18n();
const props = defineProps({
    data: {
        type: Object
    },
    status: {
        type: String,
        default: ''
    }
});

// you must include here every universal module view component you want to use
const components = shallowRef([Speakers])

// Full logic of finding Universal Module View components by string from props data
// Search for a component by name and assign it to selectedComponent
const selectedComponent = shallowRef(null);
const searchedComponentName = props.data.prefix;
const foundComponent = components.value.find(comp => comp.searchable_name === searchedComponentName);
if (foundComponent) {
    selectedComponent.value = foundComponent;
} else {
    console.warn(`Component '${searchedComponentName}' not found.`);
}

// fetch all universal items data
const fetchedData = ref([]);
const fetchedStatus = ref('');
const currentPage = ref(props.data.page ? props.data.page : 1);
const loadMoreStyle = ref(false);

const { data: ItemsData, error, status: ItemsStatus } = await useCustomLazyFetch('/api/universal', { params: { entity: props.data.id, module: props.data.prefix, paginate: props.data.paginate, page: currentPage, lang: locale.value} })

const fetchData = async () => {
    fetchedData.value = ItemsData.value;
    fetchedStatus.value = ItemsStatus.value;
};

onMounted(async () => {
    fetchData();
});

watch(ItemsStatus, (newData) => {
    if (loadMoreStyle.value == false) {
        fetchedStatus.value = ItemsStatus.value;
    }
});

watch(ItemsData, (newData) => {
    if (loadMoreStyle.value == true) {
        fetchedData.value.data = [...fetchedData.value.data, ...ItemsData.value.data];
    } else fetchedData.value = newData;

    currentPage.value = ItemsData.value.current_page;
})

provide('current_page', currentPage);
provide('load_more', loadMoreStyle);

</script>

<template>
    <component :is="selectedComponent" :data="fetchedData" :status="fetchedStatus"></component>
</template>