<script setup>

const props = defineProps({
    data: {
        type: Object
    },
    status: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div v-for="item in data">
        <template v-if="item.module == 'View'">
            <ModulesView :data="item.configuration" />
        </template>
        <template v-else-if="item.module == 'Image'">
            <ModulesImage :data="item.configuration" />
        </template>
        <template v-else-if="item.module == 'Text'">
            <div v-html="item.configuration.content"></div>
        </template>
        <template v-else-if="item.module == 'FormsPlugin'">
            <ModulesForm :data="item.configuration.form" />
        </template>
        <template v-else-if="item.module == 'UniversalModule'">
            <ModulesUniversalModule :data="item" />
        </template>
    </div>
</template>
