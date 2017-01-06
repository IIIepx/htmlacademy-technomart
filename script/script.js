
"use strict";

$(document).ready(function () {
    
  $(document).on( 'click', '.items-slider__switch , .items-slider__icon-font-switch', function() {
    $('.items-slider__slide1').toggle();
    $('.items-slider__slide2').toggle();
  });
  
  $('.top-menu__logo').click(function() {
    $(this).effect( "bounce", {times: 3}, "slow" );
  });
});


