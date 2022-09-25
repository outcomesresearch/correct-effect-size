<template>
  <outcomes-research-wrapper
    :_title="`Choosing the Correct Effect Size Measurement`"
  >
    <v-app class="app-container">
      <Stepper />
      <v-footer :padless="true">
        <v-card flat tile width="100%" class="text-center">
          <v-card-text>{{ t(k.FOOTER_COPYWRIGHT) }}</v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </outcomes-research-wrapper>
</template>

<script>
import Stepper from './components/Stepper';

export default {
  name: 'App',
  components: {
    Stepper,
  },
};
</script>

<style lang="scss">
@import './assets/scss/breakpoints.scss';

#app .v-footer {
  flex-grow: 1 !important;
  align-content: end;
  background: none;
}

.app-container {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

#app .v-application--wrap {
  padding: 10px;
}

@media only screen and (max-width: $SMALL) {
  #app .v-stepper,
  #app .v-stepper__wrapper,
  #app .v-card {
    height: 100%;
  }

  #app .v-stepper__content {
    flex-grow: 1;
  }

  #app .v-stepper {
    display: flex;
    flex-direction: column;
  }
}
</style>
