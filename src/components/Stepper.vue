<template>
  <v-stepper v-model="currentStep">
    <v-stepper-header>
      <v-stepper-step :complete="currentStep > 1" step="1">
        Outcome Measure
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 2" step="2">
        Focus of Analysis
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 3" step="3">
        Further choices
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 4" step="4">
        Results
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
import { bus, GO_BACK, ADVANCE } from '../services/bus';

export default {
  components: { ...Steps },
  mounted() {
    bus.$on(GO_BACK, () => {
      this.currentStep--;
    });
    bus.$on(ADVANCE, () => {
      this.currentStep++;
    });
  },
  data() {
    return {
      currentStep: 0,
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
