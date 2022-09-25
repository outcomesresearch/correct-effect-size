<template>
  <outcomes-research-wrapper
    :_title="`Choosing the Correct Effect Size Measurement`"
  >
    <v-app>
      <v-footer :padless="true">
        <v-card flat tile width="100%" class="text-center">
          <v-card-text>{{ t(k.FOOTER_COPYWRIGHT) }}</v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </outcomes-research-wrapper>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
@import './assets/scss/breakpoints.scss';
</style>
