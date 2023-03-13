<template>
  <v-stepper-content step="4">
    <v-card class="step-card">
      <v-container class="container-override" v-if="getFurtherChoice">
        <v-card-title class="text-h5">
          Appropriate Effect Size Measurements
        </v-card-title>
        <v-card-subtitle class="grey--text">
          Based on the inputs you've given, these are the appropriate effect
          size measurements to consider for your investigation.
        </v-card-subtitle>
        <div v-for="header in validEffectSizeMeasures" :key="header.header">
          <v-toolbar
            v-if="header.header !== 'general'"
            color="black--text lighten-2 grey"
            dark
            flat
          >
            <v-toolbar-title>{{ header.header }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="card-container">
              <Card
                v-for="result of header.items"
                :key="result.name"
                :identifier="result.name"
                :title="result.displayName"
                :description="result.description"
                :currentlySelected="selected === result.name"
                :unselectable="true"
                :supportSeeExample="
                  exampleExistsForThisDecisionPath(result.name)
                "
                @show-example="
                  handleAppropriateEffectSizeMeasureCardClicked(result)
                "
              />
            </div>
          </v-card-text>
        </div>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="prepareToBackUp">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="prepareToBackUp">{{ t(k.BACK) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import Card from '../Card.vue';
import { mapGetters } from 'vuex';
import { bus, CLEAR_SELECTION } from '../../services/bus';
import examples from '../../assets/examples';

export default {
  components: { Card },
  mounted() {
    bus.$on(CLEAR_SELECTION, (step) => {
      if (step === 4) {
        this.$store.dispatch('SET_CHOSENEFFECTSIZEMEASURE', undefined);
        this.selected = '';
      }
    });
  },
  computed: {
    ...mapGetters([
      'getOutcomeMeasure',
      'getFocusOfAnalysis',
      'getFurtherChoice',
      'getChosenEffectSizeMeasure',
    ]),
    validEffectSizeMeasures() {
      return this.getFurtherChoice.appropriateEffectSizeMeasures;
    },
  },
  methods: {
    hasSpecialHeaders() {
      this.validEffectSizeMeasures[0].header !== 'general';
    },
    handleAppropriateEffectSizeMeasureCardClicked(cardInfo) {
      this.$store.dispatch('SET_CHOSENEFFECTSIZEMEASURE', cardInfo);
      this.advanceStep();
    },
    prepareToBackUp() {
      bus.$emit(CLEAR_SELECTION, 4);
      this.goBackStep();
    },
    exampleExistsForThisDecisionPath(chosenEffectSize) {
      // If anything step is incomplete whether we're on it or not, early exit
      if (
        !this.getOutcomeMeasure ||
        !this.getFocusOfAnalysis ||
        !this.getFurtherChoice
      )
        return false;

      const outcomeMeasure = examples[this.getOutcomeMeasure.name];
      const focusOfAnalysis =
        outcomeMeasure && outcomeMeasure[this.getFocusOfAnalysis.name];
      const furtherChoice =
        focusOfAnalysis && focusOfAnalysis[this.getFurtherChoice.name];
      const chosenEffectSizeExample =
        furtherChoice && furtherChoice[chosenEffectSize];

      return (
        examples &&
        outcomeMeasure &&
        focusOfAnalysis &&
        furtherChoice &&
        chosenEffectSizeExample
      );
    },
  },
  data() {
    return {
      selected: '',
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
