<template>
  <v-stepper-content step="1">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Outcome Meaure
            </h1>
            <h2 class="text-h6 grey--text">
              Select the type of outcome variable being analyzed or compared
            </h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="card-container">
            <Card
              v-for="outcomeType of outcomes"
              :key="outcomeType.name"
              :identifier="outcomeType.name"
              :title="outcomeType.displayName"
              :description="outcomeType.description"
              :currentlySelected="selected"
              :disabled="outcomeType.name !== 'categorical'"
              @selected="setOutcomeSelection(outcomeType.name)"
            />
          </div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="prepareToBackUp">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="prepareToAdvance" :disabled="selected === ''">{{
              t(k.NEXT)
            }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="prepareToBackUp">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="prepareToAdvance" :disabled="selected === ''">{{
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
import outcomes from '../../assets/aggregatedDecisionTree';
import { bus, CLEAR_SELECTION } from '../../services/bus';

export default {
  components: { Card },
  computed: {},
  mounted() {
    bus.$on(CLEAR_SELECTION, (step) => {
      if (step === 1) {
        this.$store.dispatch('SET_OUTCOMEMEAURE', undefined);
        this.selected = '';
      }
    });
  },
  methods: {
    prepareToAdvance() {
      bus.$emit(CLEAR_SELECTION, 2);
      bus.$emit(CLEAR_SELECTION, 3);
      this.advanceStep();
    },
    prepareToBackUp() {
      bus.$emit(CLEAR_SELECTION, 1);
      bus.$emit(CLEAR_SELECTION, 2);
      bus.$emit(CLEAR_SELECTION, 3);
      this.goBackStep();
    },
    setOutcomeSelection(name) {
      this.$store.dispatch('SET_OUTCOMEMEAURE', name);
      this.selected = name;
    },
  },
  data() {
    return {
      selected: '',
      outcomes,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
