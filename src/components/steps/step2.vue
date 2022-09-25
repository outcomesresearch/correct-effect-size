<template>
  <v-stepper-content step="2">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          results for jeffreypiccirillo@gmail.com
        </v-card-title>
        <v-card-text style="padding: 0px;" v-if="historicalData.length">
          <Chart :historicalData="historicalData" />
        </v-card-text>
        <v-card-text v-else>
          <div>no data available</div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="$emit('step-change', 1)">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="addData" :disabled="!canAddNewScore">
              Add Data
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="closeModalFromBus">{{ t(k.CLOSE) }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="addData" :disabled="!canAddNewScore">
              add data
            </v-btn>
            <v-btn text @click="$emit('step-change', 1)">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="closeModalFromBus">{{ t(k.CLOSE) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
export default {
  components: {},
  computed: {},
  methods: {},
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
