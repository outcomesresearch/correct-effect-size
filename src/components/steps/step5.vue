<template>
  <v-stepper-content step="5">
    <v-card class="past-scores">
      <v-container class="container-override">
        <div>
          <v-card-text>
            <div class="card-container" v-if="getFocusOfAnalysis">
              <Card
                :identifier="`outcomeMeasure`"
                :title="outcomeMeasureDisplayName"
                :subtitle="`Outcome Measure`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
              />
              <Card
                :identifier="`focusOfAnalysis`"
                :title="focusOfAnalysisDisplayName"
                :subtitle="`Focus of Analysis`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
              />
              <Card
                v-if="getFurtherChoice !== 'skip'"
                :identifier="`furtherChoices`"
                :title="getFurtherChoice"
                :subtitle="`Further specifiers`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
              />
              <Card
                :identifier="`chosenEffectSize`"
                :title="getChosenEffectSizeMeasureDisplayname"
                :subtitle="`Chosen Effect Size`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
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
      'getChosenEffectSizeMeasure',
    ]),
    outcomeMeasureDisplayName() {
      return outcomes.find((outcome) => outcome.name == this.getOutcomeMeasure)
        .displayName;
    },
    focusOfAnalysisDisplayName() {
      return outcomes
        .find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis.find((focus) => focus.name === this.getFocusOfAnalysis)
        .displayName;
    },
    getFurtherChoicesDisplayName() {
      return outcomes
        .find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis.find((focus) => focus.name === this.getFocusOfAnalysis)
        .furtherChoices.find(
          (furtherChoice) => furtherChoice.name === this.getFurtherChoice,
        ).displayName;
    },
    getChosenEffectSizeMeasureDisplayname() {
      return 'Chosen Effect Size Measure Display Name';
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
