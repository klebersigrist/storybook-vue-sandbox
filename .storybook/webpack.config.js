const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
      },
    ],
  });

  config.module.rules.push({
    test: /\.vue$/,
    enforce: 'post'
  });

  // Return the altered config
  return config;
};
