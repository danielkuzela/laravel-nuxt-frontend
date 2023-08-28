<script setup>
const props = defineProps({
    data: {
        type: Object
    }
});
</script>

<template>
  <ElementsImageLoader :data="data.image" />
</template>
