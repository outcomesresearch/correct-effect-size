<template>
  <v-stepper-content step="3">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Further modifiers
            </h1>
            <h2 class="text-h6 grey--text">
              Select any relevant modifiers
            </h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="card-container" v-if="getFocusOfAnalysis">
            <Card
              v-for="furtherChoice of validFurtherChoices"
              :key="furtherChoice.name"
              :identifier="furtherChoice.name"
              :title="furtherChoice.displayName"
              :description="furtherChoice.description"
              :currentlySelected="selected"
              @selected="setFurtherChoiceSelection(furtherChoice.name)"
            />
          </div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="prepareToBackUp">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="advanceStep" :disabled="selected === ''">{{
              t(k.NEXT)
            }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="prepareToBackUp">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="advanceStep" :disabled="selected === ''">{{
              t(k.NEXT)
            }}</v-btn>
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
import { bus, CLEAR_SELECTION } from '../../services/bus';

export default {
  components: { Card },
  mounted() {
    bus.$on(CLEAR_SELECTION, (step) => {
      if (step === 3) {
        this.$store.dispatch('SET_FURTHERCHOICE', undefined);
        this.selected = '';
      }
    });
  },
  computed: {
    ...mapGetters(['getOutcomeMeasure', 'getFocusOfAnalysis']),
    validFurtherChoices() {
      if (!this.getOutcomeMeasure || !this.getFocusOfAnalysis) return [];
      return outcomes
        .find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis.find((focus) => focus.name === this.getFocusOfAnalysis)
        .furtherChoices;
    },
  },
  methods: {
    setFurtherChoiceSelection(name) {
      this.$store.dispatch('SET_FURTHERCHOICE', name);
      this.selected = name;
    },
    prepareToBackUp() {
      bus.$emit(CLEAR_SELECTION, 3);
      this.goBackStep();
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
