<template>
  <v-stepper v-model="currentStep">
    <!-- <v-switch
      v-model="fillerDescriptions"
      :label="`Filler descriptions`"
      @change="handleSwitchChange"
      style="margin-left: auto; margin-right: 10px; width: max-content;"
    ></v-switch> -->
    <v-stepper-header>
      <v-stepper-step :complete="currentStep > 1" step="1">
        Outcome Measure
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 2" step="2">
        Focus of Analysis
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 3" step="3">
        Further modifiers
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 4" step="4">
        Effect Size Measurement
      </v-stepper-step>
    </v-stepper-header>

    <Step0 />
    <Step1 />
    <Step2 />
    <Step3 />
    <Step4 />
  </v-stepper>
</template>

<script>
import * as Steps from './steps';
import { bus, GO_BACK, ADVANCE, CLEAR_SELECTION } from '../services/bus';
import { mapGetters } from 'vuex';
import outcomes from '../assets/aggregatedDecisionTree';

export default {
  components: { ...Steps },
  computed: {
    ...mapGetters([
      'getOutcomeMeasure',
      'getFocusOfAnalysis',
      'getFurtherChoice',
      'getShowDescriptions',
    ]),
  },
  mounted() {
    this.fillerDescriptions = this.getShowDescriptions;
    bus.$on(GO_BACK, () => {
      this.currentStep--;
      // Go back twice if we're on step 3 and this focusOfAnalysis offers no further choices
      if (this.currentStep === 3 && this.hasNoFurtherChoices()) {
        bus.$emit(CLEAR_SELECTION, 3);
        this.$store.dispatch('SET_FURTHERCHOICE', undefined);
        this.currentStep--;
      }
    });
    bus.$on(ADVANCE, () => {
      this.currentStep++;
      // Advance again if we're on step 3 and this focusOfAnalysis offers no further choices
      if (this.currentStep === 3 && this.hasNoFurtherChoices()) {
        this.$store.dispatch('SET_FURTHERCHOICE', 'skip');
        this.currentStep++;
      }
    });
  },
  methods: {
    handleSwitchChange(switchValue) {
      this.$store.dispatch('SET_SHOWDESCRIPTIONS', switchValue);
      this.fillerDescriptions = switchValue;
    },
    hasNoFurtherChoices() {
      // Whenever navigating forward thru step 3, or backwards thru step 3,
      // we need to check if there are actually choices here.
      // Some focuses of analyses allow user to skip directly to the recommended effect size measurements

      const { focusOfAnalysis } = outcomes.find(
        ({ name }) => name === this.getOutcomeMeasure,
      );

      const { furtherChoices } = focusOfAnalysis.find(
        ({ name }) => name === this.getFocusOfAnalysis,
      );

      return furtherChoices[0].name === 'skip';
      // We've come across a focus of analysis which has no further choices and
      // we can proceed directly to the effect size measurements the investigator should use
    },
  },
  data() {
    return {
      currentStep: 0,
      fillerDescriptions: true,
    };
  },
};
</script>

<style lang="scss" scoped>
#app .v-stepper {
  margin-bottom: 20px;
  // height: 3000px;
  margin-top: 20px;
}
</style>
