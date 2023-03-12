<template>
  <v-stepper-content step="5">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          Example
        </v-card-title>
        <v-card-subtitle class="grey--text">
          Here is an example showing the flow you just took
        </v-card-subtitle>
        <div>
          <v-card-text>
            Chosen effect size measurement to show example for:
            {{ getChosenEffectSizeMeasure }}
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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getOutcomeMeasure',
      'getFocusOfAnalysis',
      'getFurtherChoice',
      'getChosenEffectSizeMeasure',
    ]),
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
