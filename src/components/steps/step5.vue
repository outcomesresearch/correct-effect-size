<template>
  <v-stepper-content step="5">
    <v-card class="step-card">
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
              v-if="
                getFocusOfAnalysis &&
                getFurtherChoice &&
                getChosenEffectSizeMeasure
              "
            >
              <Card
                :identifier="`outcomeMeasure`"
                :subtitle="`${outcomeMeasureDisplayName} outcome measure`"
                :title="getExampleText().outcomeMeasure"
                :currentlySelected="false"
                :unselectable="true"
                width="100%"
                :flat="true"
              />
              <Card
                :identifier="`focusOfAnalysis`"
                :subtitle="`Focusing on ${focusOfAnalysisDisplayName}`"
                :title="getExampleText().focusOfAnalysis"
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
                :title="getExampleText().chosenEffectSizeMeasure"
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
import examples from '../../assets/examples/';

export default {
  components: { Card },
  methods: {
    getExampleText() {
      return examples[this.getOutcomeMeasure.name][
        this.getFocusOfAnalysis.name
      ][this.getFurtherChoice.name][this.getChosenEffectSizeMeasure.name];
    },
  },
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
