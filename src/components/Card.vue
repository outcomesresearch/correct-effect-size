<template>
  <v-card
    class="mx-auto"
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
  props: ['identifier', 'currentlySelected', 'title', 'description'],
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

<style scoped lang="scss"></style>
