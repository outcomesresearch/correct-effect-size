<template>
  <v-stepper v-model="currentStep">
    <Step1 />
    <Step2 />
  </v-stepper>
</template>

<script>
import * as Steps from './steps';
export default {
  components: { ...Steps },
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
