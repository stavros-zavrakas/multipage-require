requirejs.config({
  paths: {
    'jquery': 'vendor/jquery',
    'globalJqueryEvents': 'shared-components/global-jquery-events',
    'libs': 'shared-components/libs'
  }
});

define(['globalJqueryEvents'], function (globalJqueryEvents) {
  globalJqueryEvents.bindEvents();
});