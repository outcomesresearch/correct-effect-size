<template>
  <outcomes-research-wrapper
    :_title="`Choosing the Correct Effect Size Measurement`"
  >
    <v-app>
      <outcomes-navbar />
      <div class="app-container">
        <Stepper />
      </div>
      <outcomes-footer :copyright="t(k.FOOTER_COPYRIGHT)" />
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

#app,
.app-container,
.v-application--wrap {
  max-width: 100%;
  box-sizing: border-box;
}

#app .v-footer {
  flex-grow: 1 !important;
  align-content: end;
  background: none;
}

.app-container {
  width: max-content;
  margin-left: auto;
  margin-right: auto;
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

// Special styling for titles cards used by Step5
.example-card-container .v-card__title {
  line-height: 1.15em;
  margin-bottom: 10px;
  font-weight: 400;
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
