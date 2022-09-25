import locale_keys from '../assets/locales/keys';

export default [
  {
    data: function () {
      return { k: locale_keys };
    },
    methods: {
      t(key) {
        return this.$vuetify.lang.t(`$vuetify.${key}`);
      },
    },
  },
];
