<template>
  <v-stepper-content step="2">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          Focus of Analysis
        </v-card-title>
        <v-card-subtitle class="grey--text">
          Select the focus of analysis
        </v-card-subtitle>
        <v-card-text>
          <div class="card-container" v-if="getOutcomeMeasure">
            <Card
              v-for="focusOfAnalysis of validFociOfAnalysis"
              :key="focusOfAnalysis.name"
              :identifier="focusOfAnalysis.name"
              :title="focusOfAnalysis.displayName"
              :description="focusOfAnalysis.description"
              :currentlySelected="selected"
              @selected="setFocusSelection(focusOfAnalysis.name)"
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
import { mapGetters } from 'vuex';
import { bus, CLEAR_SELECTION } from '../../services/bus';

export default {
  components: { Card },
  mounted() {
    bus.$on(CLEAR_SELECTION, (step) => {
      if (step === 2) {
        this.$store.dispatch('SET_FOCUSOFANALYSIS', undefined);
        this.selected = '';
      }
    });
  },
  computed: {
    ...mapGetters(['getOutcomeMeasure']),
    validFociOfAnalysis() {
      if (!this.getOutcomeMeasure) return [];
      return outcomes.find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis;
    },
  },
  methods: {
    prepareToAdvance() {
      bus.$emit(CLEAR_SELECTION, 3);
      this.advanceStep();
    },
    prepareToBackUp() {
      bus.$emit(CLEAR_SELECTION, 2);
      bus.$emit(CLEAR_SELECTION, 3);
      this.goBackStep();
    },
    setFocusSelection(name) {
      this.$store.dispatch('SET_FOCUSOFANALYSIS', name);
      this.selected = name;
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
