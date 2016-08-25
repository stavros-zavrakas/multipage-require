define([], function () {
  console.log('libs loaded');

  function getQueryParam() {
    console.log('getQueryParam');
  }

  function print(msg) {
    console.log(msg);
  }

  return {
    getQueryParam: getQueryParam,
    print: print
  }
});
