$(function() {

  $('header a').click(function() {
    let id = $(this).attr('href');
    let position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 1250);
  });

});
