const path = require('path');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'codemotion',
    projectName: 'card-widget',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      path: path.resolve(process.cwd(), 'build/static/js'),
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
