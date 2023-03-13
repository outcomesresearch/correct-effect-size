<template>
  <v-stepper-content step="0">
    <v-card class="step-card">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          Selecting the Correct Effect Size Measurement
        </v-card-title>
        <v-card-text>
          <div>
            <p>
              Effect size is a critical measurement used in clinical studies to
              evaluate the impact of an intervention on the outcome of interest.
              It quantifies the magnitude of the treatment effect, allowing
              researchers to determine whether the intervention is clinically
              significant or not. Choosing the correct effect size measurement
              is crucial as it directly impacts the power of the study, which in
              turn affects the study's ability to detect a true treatment
              effect.
            </p>
            <p>
              There are several effect size measurements available, each with
              its own strengths and weaknesses. Selecting the appropriate effect
              size measurement requires careful consideration of the study
              design, the research question, and the data being collected. The
              choice of effect size can have a significant impact on the study's
              interpretation, and incorrect selection can lead to underpowered
              studies or erroneous conclusions.
            </p>

            <p>
              This wizard-based web tool helps investigators select the
              appropriate effect size measurement for planning and reporting the
              results of their research.
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
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
