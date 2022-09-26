<template>
  <v-stepper-content step="3">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Further choices
            </h1>
            <h2 class="text-h6 grey--text">
              Description about what the investigator is choosing here
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
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="advanceStep">{{ t(k.NEXT) }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="advanceStep">{{ t(k.NEXT) }}</v-btn>
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

export default {
  components: { Card },
  computed: {
    ...mapGetters(['getOutcomeMeasure', 'getFocusOfAnalysis']),
    validFurtherChoices() {
      return outcomes
        .find((outcome) => outcome.name === this.getOutcomeMeasure)
        .focusOfAnalysis.find((focus) => focus.name === this.getFocusOfAnalysis)
        .furtherChoices;
    },
  },
  methods: {
    setFurtherChoiceSelection(name) {
      console.log({ name });
      this.$store.dispatch('SET_FURTHERCHOICE', name);
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
