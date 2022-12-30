const webpackParams = {
  title: 'Choose the Correct Effect Size',
  description:
    'Applet to help clinical study investigators select the appropriate effect size measure for planning and reporting the results of their research.',
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/correct-effect-size/',
};

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/correct-effect-size/' : '/',
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value;
      });
      return args;
    });
  },
};
