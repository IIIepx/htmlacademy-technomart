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
    var
      $curInputChecked = $('.items-list__input:checked'),
      $nextInputChecked = $curInputChecked.next(),
      $prevInputChecked = $curInputChecked.prev();
    
    $curInputChecked.removeAttr('checked');
    if ($nextInputChecked.prop('type') === 'radio') {
      $nextInputChecked.prop('checked', 'checked');
    } else {
      $nextInputChecked = $('.items-list__input').first().prop('checked', 'checked');
    }
    
    $('.items-slider__icon-font-switch_left').on('click', function () {
      if ($curInputChecked.prev().prop('type') === 'radio') {
        $curInputChecked = $curInputChecked.prev().prop('checked', 'checked');
      } else {
        $curInputChecked = $('.items-list__input').last().prop('checked', 'checked');
      }
    });
    
    $('.items-slider__icon-font-switch_right').on('click', function () {
      if ($curInputChecked.next().prop('type') === 'radio') {
        $curInputChecked = $curInputChecked.next().prop('checked', 'checked');
      } else {
        $curInputChecked = $('.items-list__input').first().prop('checked', 'checked');
      }
    });
    
  };
  
  setInterval($.fn.sliderSwitch, 3000);

  // va-tests---------------------------------------------
  $('.logo_header, .loho_footer').click(function () {
    $(this).effect("bounce", {
      times: 3
    }, "slow");

  });
  // -----------------------------------------------------  

});