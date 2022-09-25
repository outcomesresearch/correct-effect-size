<template>
  <v-stepper-content step="3">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Further choices
            </h1>
            <h2 class="text-h6 font-italic grey--text">
              Description about what the investigator is choosing here
            </h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="card-container">
            <Card
              identifier="1"
              title="Reporting pairwise differences"
              description="description for reporting pairwise differences"
              :currentlySelected="selected"
              @selected="selected = '1'"
            />
            <Card
              identifier="2"
              title="Reporting overall effect"
              description="description for reporting on overall effect"
              :currentlySelected="selected"
              @selected="selected = '2'"
            />
            <Card
              identifier="3"
              title="Adjusted association with predictor"
              description="descrpition for adjusted association with predictor"
              :currentlySelected="selected"
              @selected="selected = '3'"
            />
            <Card
              identifier="4"
              title="Overall model"
              description="over all model card description"
              :currentlySelected="selected"
              @selected="selected = '4'"
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
