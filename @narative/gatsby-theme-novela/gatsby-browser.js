// Load static fonts
// require('typeface-merriweather');
// require('fontsource-nunito');
// require('fontsource-libre-baskerville');
require('fontsource-dm-sans');
require('fontsource-dm-sans/700.css');
require('fontsource-source-serif-pro');
require('fontsource-source-serif-pro/700.css');

exports.onInitialClientRender = require('./src/gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./src/gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./src/gatsby/browser/shouldUpdateScroll');
