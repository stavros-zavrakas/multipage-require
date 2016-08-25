define([], function () {
  console.log('libs loaded');

  function getQueryParamByName(qs, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(qs);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  function openModalDeelLink() {
    var $modal;
    var aopOpenModal = getQueryParamByName(window.location.search, 'aopOpenModal');

    if (aopOpenModal) {
      $modal = $('#' + aopOpenModal);
      if ($modal.length > 0) {
        $modal.foundation('reveal', 'open');
      }
    }
  }

  /* style checkboxes and radio inputs */
  function styleInputElements(container) {
    var selector;

    if (container) {
      selector = $('label > input[type=checkbox], label > input[type=radio]', container).not('.styled');
    } else {
      selector = $('label > input[type=checkbox], label > input[type=radio]').not('.styled');
    }

    selector.each(function (i, el) {
      $(this).addClass('styled');
      el = $(el)[0];
      var doneAlready = (el && el.nextElementSibling && el.nextElementSibling.outerHTML === '<span></span>');

      if (!doneAlready) {
        $(this).after($('<span></span>'));
      }
    });
  }

  function inputFieldCounterHandler($el) {
    var $indicator = $el.siblings('.lengthCounter');
    var inputValueLength = $el.val().length;
    var maxLength = $el.attr('maxLength');

    $indicator.html(inputValueLength + '/' + maxLength);

    if (inputValueLength === maxLength) {
      $indicator.removeClass('info').addClass('secondary');
    } else {
      $indicator.removeClass('secondary').addClass('info');
    }
  }

  function isTouchDevice(document) {
    return 'ontouchstart' in document;
  }

  return {
    getQueryParamByName: getQueryParamByName,
    openModalDeelLink: openModalDeelLink,
    styleInputElements: styleInputElements,
    inputFieldCounterHandler: inputFieldCounterHandler,
    isTouchDevice: isTouchDevice
  };
  
});
