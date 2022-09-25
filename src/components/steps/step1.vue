<template>
  <v-stepper-content step="1">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          Step 1
        </v-card-title>
        <v-card-text style="padding: 0px;" v-if="historicalData.length">
          <Chart :historicalData="historicalData" />
        </v-card-text>
        <v-card-text v-else>
          <div>no data available</div>
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
import { bus, MODAL_CLOSED } from '../../services/bus';

export default {
  components: {},
  computed: {},
  methods: {
    addData() {
      console.log('Add Data');
    },
  },
  data() {
    return {
      historicalData: [],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/stepStyle.scss';
</style>
