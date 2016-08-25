define(['jquery', 'libs'], function ($, libs) {
  console.log('generic events loaded');

  function bindEvents () {
    libs.styleInputElements();
    //init mobile top bar
    $('#nav-toggle').click(function () {
      if ($('.top-bar-section').is(':visible')) {
        $('.toggle-topbar').click();
      }
      $('#top-bar-nav-currency').hide();
      $('#top-bar-nav-cart').hide();
      $('#top-bar-nav').toggle();
    });

    if (libs.isTouchDevice(document)) {
      var $tbd = $('.top-bar.default');
      $tbd.data('options', 'is_hover:false;');
    }

    libs.openModalDeelLink();
  }

  return {
    bindEvents: bindEvents
  }
});
