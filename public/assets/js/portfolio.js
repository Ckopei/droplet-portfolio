$(document).ready(function () {
  AOS.init();
  //if scroll is past 900px, changed the navbar into a sticky-top nav
  var headerHeight = 675;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > headerHeight) {
      $('#myNav').removeClass('sticky-top');
      $('#myNav').addClass('fixed-top');
      

    } else {
      $('#myNav').addClass('sticky-top');
      $('#myNav').removeClass('fixed-top');
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
  $("#skillsNav").click(function () {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(".skills").offset().top
      },
      800 //speed
    );
  });
  $("#aboutNav").click(function () {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $("#about").offset().top
      },
      800 //speed
    );
  });
  $("#portNav").click(function () {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $("#portfolio").offset().top
      },
      800 //speed
    );
  });
  $("#contactNav").click(function () {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $("#contact").offset().top
      },
      800 //speed
    );
  });

})