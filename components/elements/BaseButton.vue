<script setup>
import { getButtonColor} from "~/composables/colors";
import { NuxtLink } from "#components";
import BaseIcon from "~/components/elements/BaseIcon.vue";

const props = defineProps({
    status: {
        type: String
    },
    label: {
        type: [String, Number],
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    iconSize: {
        type: [String, Number],
        default: null,
    },
    href: {
        type: String,
        default: null,
    },
    target: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: "basic",
    },
    as: {
        type: String,
        default: null,
    },
    onclick: {
        type: String,
        default: null,
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean,
    hasPendingState: Boolean,
});

const is = computed(() => {
    if (props.as) {
        return props.as;
    }

    if (props.href) {
        return NuxtLink;
    }

    return "button";
});

const computedType = computed(() => {
    if (is.value === "button") {
        return props.type ?? "button";
    }

    return null;
});

const labelClass = computed(() =>
    props.small && props.icon ? "px-1" : "px-2"
);

const componentClass = computed(() => {
    const base = [
        "inline-flex relative justify-center items-center",
        "whitespace-nowrap",
        "focus:outline-none focus:ring",
        "transition-colors duration-150",
        "border",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded",
        getButtonColor(props.color, props.outline, !props.disabled, props.active),
    ];

    if (!props.label && props.icon) {
        base.push("p-1");
    } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
    } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
    }


    return base;
});

const buttonRoot = ref(null);
</script>

<template>
    <component
            :is="is"
            :class="componentClass"
            :href="localePath(href)"
            :type="computedType"
            :target="target"
            :disabled="disabled"
            :onclick="onclick"
            ref="buttonRoot"
    >
        <BaseIcon v-if="icon" :type="icon" :size="iconSize" :class="[ (hasPendingState && status == 'pending' ? 'opacity-0' : '') ]" />
        <span v-if="label" :class="[ labelClass, (hasPendingState && status == 'pending' ? 'opacity-0' : '') ]">{{ label }}</span>

        <span v-if="hasPendingState && status == 'pending'" class="absolute flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
    </component>
</template>
