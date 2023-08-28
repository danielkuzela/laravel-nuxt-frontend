<script setup>
import { colorsBgLight, colorsOutline } from "~/composables/colors";
import PillTagPlain from "@/components/elements/PillTagPlain.vue";

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    classes: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: null,
    },
    small: Boolean,
    outline: Boolean,
});

const componentClass = computed(() => [
    props.small ? "py-1 px-3" : "py-1.5 px-4",
    props.classes ? props.classes : (props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]),
]);
</script>

<template>
    <PillTagPlain
            class="border rounded-full "
            :class="componentClass"
            :icon="icon"
            :label="label"
            :small="small"
    />
</template>
