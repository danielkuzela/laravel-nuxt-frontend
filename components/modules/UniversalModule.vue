<script setup>

const props = defineProps({
    data: {
        type: Object
    }
});
</script>

<template>
    <ModulesUniversalModuleWrapper :data="data" />
</template>
