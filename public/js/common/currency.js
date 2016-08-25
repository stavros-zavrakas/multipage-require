define(['konakart'], function (konakart) {
  console.log('currency loaded');

  function getAvailableCurrencies () {
    konakart.retrieveCurrencies(function (err, data) {
      console.log('available currencies:', data);
    });
  }

  return {
    getAvailableCurrencies: getAvailableCurrencies
  };
  
});
