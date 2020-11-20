// Load static fonts
// require('typeface-merriweather');
// require('fontsource-nunito');
// require('fontsource-libre-baskerville');

exports.onInitialClientRender = require('./src/gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./src/gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./src/gatsby/browser/shouldUpdateScroll');
