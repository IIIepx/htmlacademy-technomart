/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  "use strict";

  // slider-code----------------------------------------
  $('.items-slider__icon-font-switch').hide();
  $('.items-list__item_slider').mouseover(function () {
    $('.items-slider__icon-font-switch').show();
  });
  $('.items-list__item_slider').mouseleave(function () {
    $('.items-slider__icon-font-switch').hide();
  });
  
  $.fn.sliderSwitch = function () {
    $('.items-slider__slides').fadeToggle(1000);
  };

  $(document).on('click', '.items-slider__switch , .items-slider__icon-font-switch', function () {
    $(this).sliderSwitch();
  });

  setInterval($.fn.sliderSwitch, 4000);

  // va-tests---------------------------------------------
  $('.logo_header, .loho_footer').click(function () {
    $(this).effect("bounce", {
      times: 3
    }, "slow");

  });
  // -----------------------------------------------------  

});