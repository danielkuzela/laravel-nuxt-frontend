<script setup>
const props = defineProps({
    data: {
        type: Object
    }
});

/*

    HERE WE ONLY LOAD FORM WRAPPER
    which is wrapper for inline form element (not modal or popup)
    that wrapper than loads Form component which has all the logic

 */
</script>

<template>
    <ElementsFormWrapper :data="data"></ElementsFormWrapper>
</template>