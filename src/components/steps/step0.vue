<template>
  <v-stepper-content step="0">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          Selecting the Correct Effect Size Measurement
        </v-card-title>
        <v-card-text>
          <div>
            <p>
              This wizard-based web tool helps investigators select the
              appropriate effect size measure for planning and reporting the
              results of their research.
            </p>
            <p>
              First, investigators will select the type of Outcome Measure
              (Continuous, Categorial, and Time to Event)
            </p>
            <p>
              Next, investigators identify the Focus of Analysis (correlation
              with continuous measure, comparison of 2 groups, or comparison of
              3 or more groups)
            </p>
            <p>
              Lastly, define whether you are reporting pair-wise differences, an
              overall effect, an adjusted association with predictor, or overall
              model.
            </p>
            <p>
              After completing these steps, the app will provide the most
              accurate Effect Size measurement to use for the given inputs.
            </p>
          </div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-spacer></v-spacer>
            <v-btn text @click="prepareToAdvance">{{ t(k.BEGIN) }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="prepareToAdvance">{{ t(k.BEGIN) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import { bus, CLEAR_SELECTION } from '../../services/bus';

export default {
  components: {},
  computed: {},
  methods: {
    prepareToAdvance() {
      bus.$emit(CLEAR_SELECTION, 1);
      bus.$emit(CLEAR_SELECTION, 2);
      bus.$emit(CLEAR_SELECTION, 3);
      this.advanceStep();
    },
  },
  data() {
    return {
      historicalData: [],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
