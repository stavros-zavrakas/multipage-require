requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../vendor/jquery',
    'globalJqueryEvents': 'common/global-jquery-events',
    'konakart': 'common/konakart',
    'currency': 'common/currency',
    'libs': 'common/libs'
  }
});

define(['globalJqueryEvents', 'currency'], function (globalJqueryEvents, currency) {
  globalJqueryEvents.bindEvents();
  currency.getAvailableCurrencies();
});