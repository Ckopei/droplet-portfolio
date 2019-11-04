$(document).ready(function () {
  AOS.init();
  //if scroll is past 900px, changed the navbar into a sticky-top nav
  var headerHeight = 675;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > headerHeight) {
      $('#myNav').addClass('sticky-top');
      $('#myNav').addClass('navColor')
    } else {
      $('#myNav').removeClass('sticky-top');
      $('#myNav').removeClass('navColor')
    }
  });

  $(".myBtn").click(function () {
    $("body,html").animate(
      {
        scrollTop: $("#portfolio").offset().top
      },
      800 //speed
    );
  });

})