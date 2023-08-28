<script setup>
const props = defineProps({
    status: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'pagination'
    },
    lastPage: {
        type: Number,
        default: 1
    },
    links: {
        type: Object
    },
    route: {
        type: String,
        default: null
    }
});

const getPageParamFromUrl = (url) => {
    if (url) {
        const urlObj = new URL(url, window.location.origin);
        const pageQueryParam = urlObj.searchParams.get('page');
        return pageQueryParam;
    }
    return null;
};

const extractLabelWithoutHtmlEntities = (label) => {
    const labelWithoutEntities = label.replace(/(&raquo;|&laquo;)/g, '');
    return labelWithoutEntities;
};

const currentPage = inject('current_page');
const loadMore = inject('load_more');

</script>

<template>
  <div v-if="type == 'pagination'" class="py-6">
      <ul class="w-full flex items-center justify-center">
          <template v-for="(item, index) in links" :key="index">
              <li class="mx-px">
                <ElementsBaseButton
                        v-if="item.url != null"
                        as="a"
                        :href="route ? '/' + route + '/page/' + getPageParamFromUrl(item.url) : ''"
                        @click.prevent="currentPage = getPageParamFromUrl(item.url)"
                        type="button"
                        :label="(extractLabelWithoutHtmlEntities(item.label) == ' Předchozí' ? $t('pagination.previous') : (extractLabelWithoutHtmlEntities(item.label) == 'Další ' ? $t('pagination.next') : item.label))"
                        :color="getPageParamFromUrl(item.url) != currentPage ? 'basicGray' : 'primary'"
                />
              </li>
          </template>
      </ul>
  </div>
  <div v-else-if="type == 'simple'" class="py-6">
      <ul class="w-full flex items-center justify-center">
          <template v-for="(item, index) in links" :key="index">
              <li class="mx-px" v-if="(extractLabelWithoutHtmlEntities(item.label) == ' Předchozí' || extractLabelWithoutHtmlEntities(item.label) == 'Další ')">
                  <ElementsBaseButton
                          as="a"
                          :href="route ? '/' + route + '/page/' + getPageParamFromUrl(item.url) : ''"
                          v-if="item.url != null"
                          @click.prevent="currentPage = getPageParamFromUrl(item.url)"
                          type="button"
                          :label="(extractLabelWithoutHtmlEntities(item.label) == ' Předchozí' ? $t('pagination.previous') : (extractLabelWithoutHtmlEntities(item.label) == 'Další ' ? $t('pagination.next') : item.label))"
                          :color="getPageParamFromUrl(item.url) != currentPage ? 'basicGray' : 'primary'"
                  />
              </li>
          </template>
      </ul>
  </div>
  <div v-else-if="type == 'loadmore'" class="py-6">
      <ul class="w-full flex items-center justify-center">
          <li class="mx-px" v-if="(currentPage != lastPage)">
              <ElementsBaseButton
                      as="a"
                      :href="route ? '/' + route + '/page/' + (currentPage + 1) : ''"
                      @click.prevent="[loadMore = true, currentPage = currentPage + 1]"
                      type="button"
                      :label="$t('pagination.loadmore')"
                      color="basicGray"
              />
          </li>
      </ul>
  </div>
</template>
