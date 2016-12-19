$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 384) /* .header-top height */ {
      $('.navigation-menu').addClass('--fixed');
    } else {
      $('.navigation-menu').removeClass('--fixed');
    }
  });
});