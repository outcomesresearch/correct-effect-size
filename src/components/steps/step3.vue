<template>
  <v-stepper-content step="3">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          Further modifiers
        </v-card-title>
        <v-card-subtitle class="grey--text">
          Select any relevant modifiers
        </v-card-subtitle>
        <v-card-text>
          <div class="card-container" v-if="getFocusOfAnalysis">
            <Card
              v-for="furtherChoice of validFurtherChoices"
              :key="furtherChoice.name"
              :identifier="furtherChoice.name"
              :title="furtherChoice.displayName"
              :description="furtherChoice.description"
              :currentlySelected="selected === furtherChoice.name"
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
    ...mapGetters(['getFocusOfAnalysis']),
    validFurtherChoices() {
      return this.getFocusOfAnalysis
        ? this.getFocusOfAnalysis.furtherChoices
        : [];
    },
  },
  methods: {
    setFurtherChoiceSelection(name) {
      this.$store.dispatch(
        'SET_FURTHERCHOICE',
        this.getFocusOfAnalysis.furtherChoices.find((a) => a.name === name),
      );
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
