// react-app-rewired allows you to override the webpack config via this file.
// We want external paths to be included in hot reloading.

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = config => {
  // Remove the ModuleScopePlugin which throws when we try
  // to import something outside of src/.
  config.resolve.plugins.pop();
  // Resolve the path aliases.
  config.resolve.plugins.push(new TsconfigPathsPlugin());
  // Find the oneOf property in rules array
  const oneOfRule = config.module.rules.filter(rule => Boolean(rule.oneOf));
  const oneOf = oneOfRule[0] && oneOfRule[0].oneOf;

  if (oneOf) {
    oneOf.forEach(tsRule => {
      // find the rule test: /\.(js|mjs|jsx|ts|tsx)$/
      if (tsRule.test && tsRule.test instanceof RegExp && tsRule.test.test("file.tsx")) {
        // We're removing this rule for loaders to let Babel compile outside
        //   include: '/<mypath>/total-repo/packages/app/src',
        tsRule.include = undefined;
        // And must exclude node_modules folders
        tsRule.exclude = /node_modules/;
      }
    });
  } else {
    throw new Error("oneOf property not found")
  }
  return config;
};
