(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

  });

})(jQuery);

document.addEventListener( 'turbolinks:load', function() {
    TurbolinksAnimate.init({ element: document.querySelector('body.turbolinks-animate') });
});


// $("#contactme")[0].reset();

// $('input[value="submit"]').click(function() {
//     $(this).siblings('input[type="text"]').removeAttr('required');
// });

// function resetForm() {
//     e.preventDefault();
//     document.getElementById("contact-me-name");
//     document.getElementById("contact-me-email");
//     document.getElementById("contact-me-subject");
//     document.getElementById("contact-me.message").value = "";
// }

// function resetForm() {
//     document.getElementById("contact-me-name").reset();
//     document.getElementById("contact-me-email").value = "";
//     document.getElementById("contact-me-subject").value = "";
//     document.getElementById("contact-me.message").value = "";
//     return true;
// }
