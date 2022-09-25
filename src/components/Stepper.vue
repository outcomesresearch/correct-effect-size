<template>
  <v-stepper v-model="currentStep">
    <v-stepper-header>
      <v-stepper-step :complete="currentStep > 1" step="1">
        Name of step 1
      </v-stepper-step>
      <v-stepper-step :complete="currentStep > 2" step="2">
        Name of step 2
      </v-stepper-step>
      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
      <v-stepper-step step="4">
        Name of step 4
      </v-stepper-step>
    </v-stepper-header>

    <Step1 />
    <Step2 />
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
      currentStep: 1,
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
