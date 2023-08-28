<script setup>

const props = defineProps({
    name: {
        type: String,
        default: null,
    },
    id: {
        type: String,
        default: null,
    },
    autocomplete: {
        type: String,
        default: null,
    },
    maxlength: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    inputmode: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    options: {
        type: Array,
        default: null,
    },
    type: {
        type: String,
        default: "text",
    },
    error: {
        type: String,
        default: "",
    },
    step: {
        type: String,
        default: null,
    },
    min: {
        type: String,
        default: null,
    },
    max: {
        type: String,
        default: null,
    },
    modelValue: {
        type: [String, Number, Boolean, Array, Object],
        default: "",
    },
    required: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    ctrlKFocus: Boolean,
    disabled: Boolean,
    classes: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["update:modelValue", "setRef"]);

const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});

const inputElClass = computed(() => {
    const base = [
        "px-3 py-2 max-w-full focus:border-violet-400 focus:ring focus:ring-timberly-300 focus:outline-none border-gray-200 rounded w-full placeholder:text-gray-400 text-gray-700",
        "dark:placeholder-gray-300 dark:text-gray-100 dark:border-slate-600",
        computedType.value === "textarea" ? "h-24" : "h-12",
        props.borderless ? "border-0" : "border",
        props.transparent ? "bg-transparent" : "bg-gray-100 dark:bg-slate-800",
        props.error ? "border-red-500" : "",
        props.classes ? props.classes : "",
    ];

    if (props.icon) {
        base.push("pl-12");
    }

    return base;
});

const computedType = computed(() => (props.options ? "select" : props.type));

const controlIconH = computed(() =>
    props.type === "textarea" ? "h-full" : "h-12"
);

const selectEl = ref(null);

const textareaEl = ref(null);

const inputEl = ref(null);

onMounted(() => {
    if (selectEl.value) {
        emit("setRef", selectEl.value);
    } else if (textareaEl.value) {
        emit("setRef", textareaEl.value);
    } else {
        emit("setRef", inputEl.value);
    }
});


</script>

<template>
    <div class="relative">
        <select
                v-if="computedType === 'select'"
                :id="id"
                v-model="computedValue"
                :name="name"
                :class="inputElClass"
        >
            <option
                    v-for="option in options"
                    :key="option.id ?? option"
                    :value="option.id"
            >
                {{ option.label ?? option }}
            </option>
        </select>
        <textarea
                v-else-if="computedType === 'textarea'"
                :id="id"
                v-model="computedValue"
                :class="inputElClass"
                :name="name"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :required="required"
        />
        <input
                v-else
                :id="id"
                ref="inputEl"
                v-model="computedValue"
                :name="name"
                :maxlength="maxlength"
                :inputmode="inputmode"
                :autocomplete="autocomplete"
                :required="required"
                :placeholder="placeholder"
                :type="computedType"
                :class="inputElClass"
                :step="step"
                :disabled="disabled"
                :min="min"
                :max="max"
        />
        <ElementsFormInputError v-if="props.error" :message="props.error" class="mt-2" />
    </div>
</template>

<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

</style>
