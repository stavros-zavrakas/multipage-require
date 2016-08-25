define([], function () {
  console.log('konakart loaded');

  function retrieveCurrencies (callback) {
    return callback(null, 'EUR, GBP, USD')
  }

  return {
    retrieveCurrencies: retrieveCurrencies
  };
  
});
