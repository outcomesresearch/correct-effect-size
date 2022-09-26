<template>
  <v-card
    class="mx-auto"
    :class="unselectable ? 'unselectable' : ''"
    width="350"
    @click="$emit('selected', identifier)"
    :color="getBackgroundColor"
    :dark="isSelected"
  >
    <v-card-text>
      <p class="text-h6">
        {{ title }}
      </p>
      <div class="">
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    'identifier',
    'currentlySelected',
    'title',
    'description',
    'unselectable',
  ],
  components: {},
  computed: {
    getBackgroundColor() {
      return this.isSelected ? 'success' : 'white';
    },
    isSelected() {
      return this.identifier === this.currentlySelected;
    },
  },
  methods: {},
  data() {
    return {
      historicalData: [],
    };
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
</style>
