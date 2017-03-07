/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  "use strict";

/*event.preventDefault() check for IE9*/
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  
/* slider-code----------------------------------------*/
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
      $nextInput = $curInputChecked.next(),
      $prevInput = $curInputChecked.prev();
    
    $curInputChecked.removeAttr('checked');
    if ($nextInput.prop('type') === 'radio') {
      $nextInput.prop('checked', 'checked');
    } else {
      $nextInput = $('.items-list__input').first().prop('checked', 'checked');
    }
    
    $('.items-slider__icon-font-switch_left').on('click', function () {
      if ($curInputChecked.prev().prop('type') === 'radio') {
        $curInputChecked = $prevInput.prop('checked', 'checked');
      } else {
        $curInputChecked = $('.items-list__input').last().prop('checked', 'checked');
      }
    });
    
    $('.items-slider__icon-font-switch_right').on('click', function () {
      if ($curInputChecked.next().prop('type') === 'radio') {
        $curInputChecked = $nextInput.prop('checked', 'checked');
      } else {
        $curInputChecked = $('.items-list__input').first().prop('checked', 'checked');
      }
    });
  };
  
  setInterval($.fn.sliderSwitch, 3000);
  
/*Modal windows(write-us, map)*/
  $('.about-us__button_contacts').on('click', function () {
    $.fn.eventPreventDefaultSafe();
    $('.overlay').show('rotate');
    $('.write-us_index').fadeIn('slow');
  });
  
  $('.contacts__map').on('click', function () {
    $.fn.eventPreventDefaultSafe();
    $('.overlay').show('rotate');
    $('.map').fadeIn('slow');
  });
  
  $('.modal__close-btn').on('click', function () {
    $.fn.eventPreventDefaultSafe();
    $('.overlay').hide();
    $('.write-us_index, .map').fadeOut('slow');
  });
    
/* va-tests---------------------------------------------*/
  $('.logo_header-index, .logo_footer-index').click(function () {
    $(this).effect("bounce", {times: 3}, "slow");
  });

});