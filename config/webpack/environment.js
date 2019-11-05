
// in config/webpack/environment.js
const { environment } = require('@rails/webpacker');

// ADD THIS ---------------
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)
// -------------------------------
module.exports = environment
