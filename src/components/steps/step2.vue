<template>
  <v-stepper-content step="2">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Focus of Analysis
            </h1>
            <h2 class="text-h6 font-italic grey--text">
              Focus of analysis subtitle
            </h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="card-container" v-if="getOutcomeMeasure">
            <Card
              v-for="focusOfAnalysis of validFociOfAnalysis"
              :key="focusOfAnalysis.name"
              :identifier="focusOfAnalysis.name"
              :title="focusOfAnalysis.displayName"
              :description="focusOfAnalysis.description"
              :currentlySelected="selected"
              @selected="setFocusSelection(focusOfAnalysis.name)"
            />
          </div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="advanceStep">{{ t(k.NEXT) }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="advanceStep">{{ t(k.NEXT) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import Card from '../Card.vue';
import outcomes from '../../assets/aggregatedDecisionTree';
import { mapGetters } from 'vuex';

export default {
  components: { Card },
  computed: {
    ...mapGetters(['getOutcomeMeasure']),
    validFociOfAnalysis() {
      return outcomes.find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis;
    },
  },
  methods: {
    setFocusSelection(name) {
      this.$store.dispatch('SET_FOCUSOFANALYSIS', name);
      this.$store.dispatch('SET_FURTHER_CHOICE', undefined);
      this.selected = name;
    },
  },
  data() {
    return {
      selected: '',
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
