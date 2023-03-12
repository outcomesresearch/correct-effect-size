<template>
  <v-stepper-content step="5">
    <v-card class="past-scores">
      <v-container class="container-override">
        <div>
          <v-card-title
            class="text-h5"
            v-if="
              outcomeMeasureDisplayName &&
              focusOfAnalysisDisplayName &&
              chosenEffectSizeMeasureDisplayName
            "
            >Example situation
          </v-card-title>
          <v-card-subtitle class="grey--text">
            Using a {{ outcomeMeasureDisplayName }} outcome measure, focusing on
            {{ focusOfAnalysisDisplayName }}, with an effect size measurement of
            {{ chosenEffectSizeMeasureDisplayName }}</v-card-subtitle
          >
          <v-card-text>
            <div
              class="card-container example-card-container"
              v-if="getFocusOfAnalysis"
            >
              <Card
                :identifier="`outcomeMeasure`"
                :subtitle="`${outcomeMeasureDisplayName} outcome measure`"
                :title="`A state infectious disease epidemiologist collected data on antibiotic consumption at each health care facility (HCF) in the state and examined whether there was an association between type of antibiotic and type of HCF.`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
                :flat="true"
              />
              <Card
                :identifier="`focusOfAnalysis`"
                :subtitle="`Focusing on ${focusOfAnalysisDisplayName}`"
                :title="`The state epidemiologist is interested in assessing the strength of association between type of antibiotic use and type of health care facility.`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
                :flat="true"
              />
              <Card
                v-if="getFurtherChoice && getFurtherChoice.name !== 'skip'"
                :identifier="`furtherChoices`"
                :subtitle="furtherChoiceDisplayName"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
                :flat="true"
              />
              <Card
                :identifier="`chosenEffectSize`"
                :subtitle="`Effect size measurement of ${chosenEffectSizeMeasureDisplayName}`"
                :title="`<p>The state epidemiologist is interested in assessing the strength of association between type of antibiotic use and type of health care facility.</p><p>The state epidemiologist reported 𝑉 = 0.28; 95% CI 0.19 to 0.37. The epidemiologist can state, with 95% confidence, that the observed moderate effect size is also true in the population with the range of values between 0.19 and 0.37.</p>`"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
                :flat="true"
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
      return this.getOutcomeMeasure && this.getOutcomeMeasure.displayName;
    },
    focusOfAnalysisDisplayName() {
      return (
        this.getFocusOfAnalysis &&
        this.getFocusOfAnalysis.displayName.toLowerCase()
      );
    },
    furtherChoiceDisplayName() {
      return this.getFurtherChoice && this.getFurtherChoice.displayName;
    },
    chosenEffectSizeMeasureDisplayName() {
      return (
        this.getChosenEffectSizeMeasure &&
        this.getChosenEffectSizeMeasure.displayName
      );
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
