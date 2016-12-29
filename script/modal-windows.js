
'use strict';

$(document).ready( function() {
  $(document).on('click', '.items-slider__switch', function(){
    $('.items-slider__slide1').toggle();
    $('.items-slider__slide2').toggle();
  });
  $(document).on('click', '.items-slider__icon-font', function(){
    $('.items-slider__slide1').toggle();
    $('.items-slider__slide2').toggle();
  });
});


