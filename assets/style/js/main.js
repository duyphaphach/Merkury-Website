$(document).ready(() => {

  // ************************ NAVIGATION *****************************

  // Close Responsive menu when a link is clicked
  $('.nav-link').click(function () {
    $('.navbar-collapse').collapse('hide');
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navbar',
    offset: 75
  })

  // ON Scroll Down if the offset is higher than 50px add navbar-shrink class
  // Else remove that class
  $(window).scroll(function () {
    if ($('#navbar').offset().top > 50) {
      $('#navbar').addClass('navbar-shrink');
    } else {
      $('#navbar').removeClass('navbar-shrink');
    }
  })
  // MEMBERS SLIDER JavaScript
  $('#members-slider').owlCarousel({
    margin: 25,
    smartSpeed: 500,
    nav: false,
    dots: true,
    dotsEach: true,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  // ANIMATION CONTROL

  // Flash button
  $('#flashbtn').hover(function () {
    $('#flashbtn').removeClass('infinite');
  }, function () {
    $('#flashbtn').addClass('infinite');
  })

  // Show mission section
  $('#mission').mouseenter(function () {
    $('#mission').css('opacity', '1');
  })

  // SMOOTH SCROLL
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // BLOG SLIDER JavaScript
  $('#blog-slider').owlCarousel({
    margin: 15,
    smartSpeed: 500,
    dots: false,
    dotsEach: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
})