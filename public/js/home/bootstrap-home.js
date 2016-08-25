//Load common code that includes config, then load the app logic for this page.
requirejs(['../common'], function (common) {
  console.log('inside bootstrap home');
  
  requirejs(['home/app']);
});
