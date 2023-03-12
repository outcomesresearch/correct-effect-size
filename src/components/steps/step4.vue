<template>
  <v-stepper-content step="4">
    <v-card class="past-scores">
      <v-container class="container-override" v-if="getFurtherChoice">
        <v-card-title class="text-h5">
          Appropriate Effect Size Measurements
        </v-card-title>
        <v-card-subtitle class="grey--text">
          Based on the inputs you've given, these are the appropriate effect
          size measurements to consider for your investigation.
        </v-card-subtitle>
        <div v-for="header in validEffectSizeMeasures" :key="header.header">
          <v-toolbar
            v-if="header.header !== 'general'"
            color="black--text lighten-2 grey"
            dark
            flat
          >
            <v-toolbar-title>{{ header.header }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="card-container">
              <Card
                v-for="result of header.items"
                :key="result.name"
                :identifier="result.name"
                :title="result.displayName"
                :description="result.description"
                :currentlySelected="selected === result.name"
                :unselectable="true"
                :supportSeeExample="true"
                @show-example="
                  handleAppropriateEffectSizeMeasureCardClicked(result)
                "
              />
            </div>
          </v-card-text>
        </div>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="goBackStep">{{ t(k.BACK) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import Card from '../Card.vue';
import { mapGetters } from 'vuex';

export default {
  components: { Card },
  computed: {
    ...mapGetters(['getFurtherChoice']),
    validEffectSizeMeasures() {
      return this.getFurtherChoice.appropriateEffectSizeMeasures;
    },
  },
  methods: {
    hasSpecialHeaders() {
      this.validEffectSizeMeasures[0].header !== 'general';
    },
    handleAppropriateEffectSizeMeasureCardClicked(cardInfo) {
      this.$store.dispatch('SET_CHOSENEFFECTSIZEMEASURE', cardInfo);
      this.advanceStep();
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
