<script setup>
const props = defineProps({
    data: {
        type: Object
    },
    status: {
        type: String,
        default: ''
    }
});
</script>

<script>
export default {
    searchable_name: "speakers"
}
</script>

<template>
    <div>
        <h2 class="text-lg font-bold py-6">{{ $t('universal_modules.speakers.title') }}</h2>

        <div class="grid grid-cols-3 gap-5">
            <template v-if="status != 'success'" v-for="index in data.per_page" :key="index">
                <Transition
                    appear
                    leave-to-class="opacity-0"
                    leave-from-class="opacity-100"
                    leave-active-class="transition-all duration-500">
                    <PlaceholdersSpeakerItem />
                </Transition>
            </template>
            <template v-else v-for="item in data.data">
                <Transition
                    appear
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    enter-active-class="transition-all duration-1000">
                    <ElementsUniversalSpeakerItem :data="item" v-show="status == 'success'" />
                </Transition>
            </template>
        </div>

        <Transition
            appear
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            enter-active-class="transition-all duration-1000">
            <LayoutPagination
                v-if="status == 'success' && data.last_page != 1"
                type="pagination"
                route="speakers"
                :last-page="data.last_page"
                :links="data.links"
            />
        </Transition>
    </div>
</template>