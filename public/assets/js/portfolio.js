
$(document).ready(function () {
  AOS.init();

  $(".alert").alert();
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
  $("#openEmail").click(function () {
    window.open('mailto:cameron@kopel.dev');
  })

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

  $("#formBtn").on("click", function () {
    event.preventDefault();
    let namePost = toString($("#namePost").val());
    let emailPost = toString($("#emailPost").val());
    let messagePost = toString($("#messagePost").val());

    let data = {
      name: namePost,
      email: emailPost,
      message: messagePost,
    };
    
  
    $.ajax({
      type: 'POST',
      url:'/contact',
      contentType: 'application/json',
      data: JSON.stringify(data), // access in body
    }).done
      (function (res, err) {
        if (res) {
          $("#contactForm").trigger("reset");
          $("#alert-success").show();
          console.log(res);
        } else console.log(err);
      });
  });

});