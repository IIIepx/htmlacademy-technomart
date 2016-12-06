'use strict';

$(document).ready( function() {
  $('.nav-menu__element_js').on('click', function(){
    $(this).toggleClass('nav-menu__js_active');
    /*$(this).fadeOut(3000);*/
  });
});