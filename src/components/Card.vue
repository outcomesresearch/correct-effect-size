<template>
  <v-card
    class="mx-auto card"
    :class="unselectable ? 'unselectable' : ''"
    :width="width"
    @click="$emit('selected', identifier)"
    :color="getBackgroundColor"
    :dark="currentlySelected"
    :disabled="disabled"
    :flat="true"
    :outlined="true"
  >
    <v-card-title
      v-if="title"
      :class="getShowDescriptions && description ? '' : 'justTitle'"
      ><span v-html="title"></span>
      <v-spacer></v-spacer>
      <span>
        <v-menu offset-y :close-on-content-click="true">
          <template v-slot:activator="{ on }">
            <v-icon
              class="all-pointer-events"
              v-if="supportSeeExample || supportCopyText"
              title="More Options"
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
              <v-list-item
                v-if="supportSeeExample"
                @click="$emit('show-example', identifier)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="`See example`"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </span>
    </v-card-title>
    <v-card-subtitle v-if="subtitle" class="grey--text">
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text v-if="getShowDescriptions && description">
      <div class="" v-html="description"></div>
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
      default: undefined,
    },
    description: {
      default: '',
    },
    unselectable: {
      default: false,
    },
    width: {
      default: `calc(50% - 30px)`,
    },
    subtitle: {
      default: undefined,
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(['getShowDescriptions']),
    getBackgroundColor() {
      return this.currentlySelected ? 'success' : '';
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

  .card {
    width: 100% !important;
  }
}
.unselectable {
  pointer-events: none;
  cursor: none;
}

.all-pointer-events {
  pointer-events: all;
  cursor: pointer;
}

.justTitle {
  margin-bottom: 0px;
}

.card {
  height: min-content;
}
</style>
