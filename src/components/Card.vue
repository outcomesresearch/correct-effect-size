<template>
  <v-card
    class="mx-auto card"
    :class="unselectable ? 'unselectable' : ''"
    width="350"
    @click="$emit('selected', identifier)"
    :color="getBackgroundColor"
    :dark="currentlySelected"
    :disabled="disabled"
  >
    <v-card-title
      :class="getShowDescriptions && description ? '' : 'justTitle'"
    >
      {{ title }}
      <v-spacer></v-spacer>
      <span>
        <v-menu offset-y :close-on-content-click="true">
          <template v-slot:activator="{ on }">
            <v-icon
              v-if="supportSeeExample || supportCopyText"
              title="copy text"
              v-on="on"
              @mousedown.stop
            >
              mdi-dots-horizontal
            </v-icon>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item v-if="supportCopyText">
                <v-list-item-content>
                  <v-list-item-title v-text="`Copy text`"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="supportSeeExample">
                <v-list-item-content>
                  <v-list-item-title v-text="`See example`"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </span>
    </v-card-title>
    <v-card-text>
      <div
        class=""
        v-if="getShowDescriptions && description"
        v-html="description"
      ></div>
    </v-card-text>
  </v-card>
</template>

<script>
import loremIpsum from '../services/loremIpsum';
import { mapGetters } from 'vuex';

export default {
  props: {
    supportCopyText: {
      default: false,
    },
    supportSeeExample: {
      default: false,
    },
    disabled: {
      default: false,
    },
    identifier: {
      default: '',
    },
    currentlySelected: {
      default: false,
    },
    title: {
      default: '',
    },
    description: {
      default: '',
    },
    unselectable: {
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(['getShowDescriptions']),
    getBackgroundColor() {
      return this.currentlySelected ? 'success' : 'white';
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';

@media only screen and (max-width: $SMALL) {
  #app .text-h6 {
    font-size: 1.1rem !important;
  }
}
.unselectable {
  pointer-events: none;
  cursor: none;
}

.justTitle {
  margin-bottom: 0px;
}

.card {
  height: min-content;
}
</style>
