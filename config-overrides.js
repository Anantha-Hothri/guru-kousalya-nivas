const path = require('path');
const { override, addWebpackAlias, disableEsLint } = require('customize-cra');

// Disable the fork-ts-checker-webpack-plugin to avoid ajv dependency conflicts
const disableTypeChecking = () => config => {
  const plugins = config.plugins;
  const forkTsCheckerIndex = plugins.findIndex(
    plugin => plugin.constructor.name === 'ForkTsCheckerWebpackPlugin'
  );
  if (forkTsCheckerIndex !== -1) {
    plugins.splice(forkTsCheckerIndex, 1);
  }
  return config;
};

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  disableEsLint(),
  disableTypeChecking()
);
