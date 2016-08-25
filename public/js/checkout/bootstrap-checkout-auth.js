//Load common code that includes config, then load the app logic for this page.
requirejs(['../common'], function (common) {
  console.log('inside bootstrap checkout auth');
  
  requirejs(['checkout/auth/app']);
});
