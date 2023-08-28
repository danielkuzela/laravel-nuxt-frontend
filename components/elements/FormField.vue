<script setup>

const props = defineProps({
    label: {
        type: String,
        default: null,
    },
    labelFor: {
        type: String,
        default: null,
    },
    help: {
        type: String,
        default: null,
    },
    cols: {
        type: String,
        default: 1,
    },
});

const slots = useSlots();

const wrapperClass = computed(() => {
    const base = [];

    if (props.cols > 1) {
        base.push("grid grid-cols-1 gap-3");
    }

    if (props.cols == 2) {
        base.push("md:grid-cols-2");
    }


    if (props.cols == 3) {
        base.push("md:grid-cols-3");
    }

    return base;
});
</script>

<template>
    <div class="mb-6 last:mb-0">
        <label v-if="props.label" :for="props.labelFor" class="block font-normal text-gray-500 text-sm mb-2">{{
            props.label
            }}</label>
        <div :class="wrapperClass">
            <slot />
        </div>
        <div v-if="props.help" class="text-xs text-gray-500 dark:text-slate-400 mt-1">
            {{ props.help }}
        </div>
    </div>
</template>
