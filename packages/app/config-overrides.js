const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = config => {
  // Remove the ModuleScopePlugin which throws when we try
  // to import something outside of src/.
  console.log(config.resolve.plugins)
  config.resolve.plugins.pop();
  
  // Resolve the path aliases.
  config.resolve.plugins.push(new TsconfigPathsPlugin());
  
  console.log(config.resolve.plugins)
  console.log("----")
  console.log(config.module.rules[1])
  // Let Babel compile outside of src/.
  const tsRule = config.module.rules[1].oneOf[2];
  tsRule.include = undefined;
  tsRule.exclude = /node_modules/;

  return config;
};
