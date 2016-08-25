requirejs.config({
  paths: {
    'jquery': '../vendor/jquery',
    'globalJqueryEvents': 'common/global-jquery-events',
    'libs': 'common/libs'
  }
});

define(['globalJqueryEvents'], function (globalJqueryEvents) {
  globalJqueryEvents.bindEvents();
});