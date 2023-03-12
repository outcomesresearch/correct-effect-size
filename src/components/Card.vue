<template>
  <v-card
    class="mx-auto card"
    :class="unselectable ? 'unselectable' : ''"
    width="350"
    @click="$emit('selected', identifier)"
    :color="getBackgroundColor"
    :dark="isSelected"
    :disabled="disabled"
  >
    <v-card-text>
      <p
        class="text-h6"
        :class="getShowDescriptions && description ? '' : 'justTitle'"
      >
        {{ title }}
      </p>
      <div
        class=""
        v-if="getShowDescriptions && description"
        v-html="fillerDescription"
      ></div>
    </v-card-text>
  </v-card>
</template>

<script>
import loremIpsum from '../services/loremIpsum';
import { mapGetters } from 'vuex';

export default {
  props: [
    'disabled',
    'identifier',
    'currentlySelected',
    'title',
    'description',
    'unselectable',
  ],
  data() {
    return {
      fillerDescription: this.description,
    };
  },
  components: {},
  computed: {
    ...mapGetters(['getShowDescriptions']),
    getBackgroundColor() {
      return this.isSelected ? 'success' : 'white';
    },
    isSelected() {
      return this.identifier === this.currentlySelected;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';

@media only screen and (max-width: $SMALL) {
  #app .text-h6 {
    font-size: 1.1rem !important;
  }
}
.unselectable {
  pointer-events: none;
  cursor: none;
}

.justTitle {
  margin-bottom: 0px;
}

.card {
  height: min-content;
}
</style>
