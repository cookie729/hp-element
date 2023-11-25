'use strict';

// Jquery;
$(document).ready(function () {
  $('#j-open').click(function () {
    $('.j-overlay').fadeIn();
  });

  $('#j-close').click(function () {
    $('.j-overlay').fadeOut();
  });
});