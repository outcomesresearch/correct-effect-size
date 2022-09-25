<template>
  <v-stepper-content step="2">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title>
          <div>
            <h1 class="text-h5">
              Focus of Analysis
            </h1>
            <h2 class="text-h6 font-italic grey--text">
              Focus of analysis subtitle
            </h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="card-container">
            <Card
              identifier="ccm"
              title="Correlation with continuous measure"
              description="Correlation with continuous measure description"
              :currentlySelected="selected"
              @selected="selected = 'ccm'"
            />
            <Card
              identifier="c2g"
              title="Comparison of 2 groups"
              description="Comparison of 2 groups description"
              :currentlySelected="selected"
              @selected="selected = 'c2g'"
            />
            <Card
              identifier="c3g"
              title="Comparison of 3 or more groups"
              description="Comparison of 3 or more groups description"
              :currentlySelected="selected"
              @selected="selected = 'c3g'"
            />
            <Card
              identifier="regression"
              title="Regression model"
              description="Regression model card description"
              :currentlySelected="selected"
              @selected="selected = 'regression'"
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
