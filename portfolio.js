$(function() {

  // ナビゲーション部分
  $('header a').click(function() {
    let id = $(this).attr('href');
    let position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 1250);
  });
  // スクロールボタン部分
  setTimeout('scroll()');
  // down部分
  $('.down').click(function() {
    let position = $('#about').offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 1250);
  });
  // up部分
  $('.up').click(function() {
    $('html, body').animate({
      'scrollTop': 0
    }, 1250);
  });
});
// スクロールボタン部分
function scroll() {
  $('.nav-btn').animate({
    'width':'50px',
    'height':'50px'
  }, 1000).animate({
    'width':'55px',
    'height': '55px'
  }, 1000);
  setTimeout('scroll()', 2000);
}
