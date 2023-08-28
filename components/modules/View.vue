<script setup>
import BasicHero from "~/components/modules/view/BasicHero.vue";
import AnotherComponent from "~/components/modules/view/AnotherComponent.vue";


// you must include here every view component you want to use
const components = shallowRef([BasicHero, AnotherComponent])


const props = defineProps({
   data: {
       type: Object
   }
});

// Full logic of finding View components by string from props data
// Search for a component by name and assign it to selectedComponent
const selectedComponent = shallowRef(null);
const searchedComponentName = props.data.view_component;
const foundComponent = components.value.find(comp => comp.searchable_name === searchedComponentName);
if (foundComponent) {
    selectedComponent.value = foundComponent;
} else {
    console.warn(`Component '${componentName}' not found.`);
}

</script>

<template>
    <div class="bg-gray-100 p-6">
        <h2 class="text-lg pb-6">View Component: {{ data.view_component }}</h2>
        <component :is="selectedComponent" :data="data"></component>
    </div>
</template>