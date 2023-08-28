<script setup>

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    w: {
        type: String,
        default: "w-6",
    },
    h: {
        type: String,
        default: "h-6",
    },
    size: {
        type: [String, Number],
        default: null,
    },
});

/*
I recommend this Bootstrap svg library: https://icons.getbootstrap.com/icons/
*/

const svgIcons = {
    file: 'M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z',
}

const spanClass = computed(
    () => `inline-flex justify-center items-center ${props.w} ${props.h}`
);

const iconSize = computed(() => props.size ?? 16);
</script>

<template>
  <span :class="spanClass">
    <svg
            viewBox="0 0 16 16"
            :width="iconSize"
            :height="iconSize"
            class="inline-block"
    >
      <path fill="currentColor" :d="svgIcons[type]" />
    </svg>
    <slot />
  </span>
</template>
