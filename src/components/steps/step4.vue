<template>
  <v-stepper-content step="4">
    <v-card class="past-scores">
      <v-container class="container-override" v-if="getFurtherChoice">
        <v-card-title class="text-h5">
          <div>
            <h1 class="text-h5">
              Appropriate Effect Size Measurements
            </h1>
            <h2 class="text-h6 grey--text">
              Based on the inputs you've given, these are the appropriate effect
              size measurements to consider for your investigation.
            </h2>
          </div></v-card-title
        >
        <div v-for="header in validEffectSizeMeasures" :key="header.header">
          <v-toolbar
            v-if="header.header !== 'general'"
            color="black--text lighten-2 grey"
            dark
            flat
          >
            <v-toolbar-title>{{ header.header }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="card-container">
              <Card
                v-for="result of header.items"
                :key="result.name"
                :identifier="result.name"
                :title="result.displayName"
                :description="result.description"
                :currentlySelected="selected"
                :unselectable="true"
              />
            </div>
          </v-card-text>
        </div>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import Card from '../Card.vue';
import { mapGetters } from 'vuex';
import outcomes from '../../assets/aggregatedDecisionTree';

export default {
  components: { Card },
  computed: {
    ...mapGetters([
      'getOutcomeMeasure',
      'getFocusOfAnalysis',
      'getFurtherChoice',
    ]),
    validEffectSizeMeasures() {
      return outcomes
        .find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis.find((focus) => focus.name === this.getFocusOfAnalysis)
        .furtherChoices.find(
          (furtherChoice) => furtherChoice.name === this.getFurtherChoice,
        ).appropriateEffectSizeMeasures;
    },
  },
  methods: {
    addData() {
      console.log('Add Data');
    },
    hasSpecialHeaders() {
      this.validEffectSizeMeasures[0].header !== 'general';
    },
  },
  data() {
    return {
      selected: '',
      historicalData: [],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
