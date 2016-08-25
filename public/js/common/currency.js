define(['jquery', 'konakart'], function ($, konakart) {
  console.log('currency loaded');

  var $SELECTOR = $('.currency').find('span');
  function getAvailableCurrencies () {
    konakart.retrieveCurrencies(function (err, data) {
      console.log('available currencies:', data);
      $SELECTOR.text(data);
    });
  }

  return {
    getAvailableCurrencies: getAvailableCurrencies
  };
  
});
