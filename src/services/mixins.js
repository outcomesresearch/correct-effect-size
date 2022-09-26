import locale_keys from '../assets/locales/keys';
import { bus, GO_BACK, ADVANCE, CLEAR_SELECTION } from '../services/bus';

export default [
  {
    data: function () {
      return { k: locale_keys };
    },
    methods: {
      goBackStep() {
        bus.$emit(GO_BACK);
      },
      advanceStep() {
        bus.$emit(ADVANCE);
      },
      clearSelection(step) {
        bus.$emit(CLEAR_SELECTION, step);
      },
      t(key) {
        return this.$vuetify.lang.t(`$vuetify.${key}`);
      },
    },
  },
];
