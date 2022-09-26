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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

#app .v-application--wrap {
  padding: 10px;
}

#app .v-card__title {
  word-break: normal;
}

#app .text-h6 {
  font-weight: 400;
}

#app .theme--light.v-card > .v-card__subtitle,
#app .theme--light.v-card > .v-card__text {
  color: rgba(0, 0, 0, 0.9);
}

#app .theme--dark.v-card > .v-card__subtitle,
#app .theme--dark.v-card > .v-card__text {
  color: hsla(0, 0%, 100%, 0.9);
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
