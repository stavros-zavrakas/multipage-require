define(['jquery', 'libs'], function ($, libs) {
  console.log('generic events loaded');

  function bindEvents () {
    $('.click').click(function () {
      console.log('button clicked');
    });
  }

  return {
    bindEvents: bindEvents
  }
});
