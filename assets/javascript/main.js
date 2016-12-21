$(function() {

  function fixmenu() {
    if ($(this).scrollTop() > 384) {
      $('.navigation-menu').addClass('--fixed');
    } else {
      $('.navigation-menu').removeClass('--fixed');
    }
  }

  fixmenu();

  $(window).scroll(function() {
    fixmenu();
  });

});