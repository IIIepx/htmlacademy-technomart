/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  "use strict";

  // slider-code----------------------------------------
  $.fn.sliderSwitch = function () {
    $('.items-slider__slides').fadeToggle(1000);
  };

  $(document).on('click', '.items-slider__switch , .items-slider__icon-font-switch', function () {
    $(this).sliderSwitch();
  });

  setInterval($.fn.sliderSwitch, 4000);

  // va-tests---------------------------------------------
  $('.top-menu__logo').click(function () {
    $(this).effect("bounce", {
      times: 3
    }, "slow");

  });
  // -----------------------------------------------------  

});