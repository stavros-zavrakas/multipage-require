define(['jquery', 'libs', '../checkout-libs'], function ($, libs, checkoutLibs) {
    console.log('checkout auth app loaded');
    checkoutLibs.getCustomer();
});
