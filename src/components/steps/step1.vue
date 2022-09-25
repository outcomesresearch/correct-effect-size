<template>
  <v-stepper-content step="1">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Outcome Meaure
            </h1>
            <h2 class="text-h6 font-italic grey--text">
              Variable being analyzed / compared
            </h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="card-container">
            <Card
              identifier="cont"
              title="Continuous"
              description="Continuous outcomes are often measured at both baseline and
                  followup time points. Results of continuous data can be
                  reported as means, mean differences, or differences in change
                  score from baseline, and measures of precision are reported as
                  standard deviation (SD), standard error (SE), or confidence
                  intervals."
              :currentlySelected="selected"
              @selected="selected = 'cont'"
            />
            <Card
              identifier="category"
              title="Categorical"
              description="These are dependent variables that have mutually exclusive
                  outcomes. That is, the choice of one outcome means non-use of
                  the other outcome. An example is a household that may choose
                  to use charcoal, LPG, or electricity for cooking but not the
                  use of two of these categories at a time."
              :currentlySelected="selected"
              @selected="selected = 'category'"
            />
            <Card
              identifier="tte"
              title="Time To Event"
              description="Time-to-event outcomes take account of whether an event takes
                  place and also the time at which the event occurs, such that
                  both the event and the timing of the event are important."
              :currentlySelected="selected"
              @selected="selected = 'tte'"
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

export default {
  components: { Card },
  computed: {},
  methods: {},
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
