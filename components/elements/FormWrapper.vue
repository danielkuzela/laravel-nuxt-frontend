<script setup>
import { useStyleStore } from "~/stores/style";
const styleStore = useStyleStore();

const props = defineProps({
    data: {
        type: Object
    }
});
</script>

<template>
    <div :class="[ styleStore.formWrapperStyle, '' ]">
        <h3 :class="[ styleStore.h3baseStyle, 'text-center']">{{ data.name }}</h3>
        <div :class="[ styleStore.formGridStyle ]">
            <ElementsForm :data="data" />
        </div>
    </div>
</template>