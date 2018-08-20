// import ScrollReveal from './scrollreveal.min.js';

$(document).ready(() => {

  // ***************************** NAVIGATION ***********************************
  // if ($('#main-nav').offset().top > 50) {
  //   $('#main-nav').addClass('navbar-shrink');
  // }

  // Close navbar after an item is clicked - The collapse() is from bootstrap.min.js
  $('.nav-link').click(function () {
    $('.navbar-collapse').collapse('hide');
  })

  // Active Scrollspy
  $('body').scrollspy({
    target: '#main-nav',
    offset: 75,
  })

  // Shrink navbar if the offset is higher than 50 px
  $(window).scroll(function () {
    if ($('#main-nav').offset().top > 50) {
      $('#main-nav').addClass('navbar-shrink');
    } else {
      $('#main-nav').removeClass('navbar-shrink')
    }
  })

  // ***************************** DRAG AND DROP ***********************************
  $(function () {
    $('#draggable').draggable({
      grid: [1, 0]
    });
    $('#droppable').droppable({
      drop: function () {
        $('.card').css('border', 'transparent');
        $('#droppable').find('.card-title').html('')
      }
    })
  })

  // ***************************** SMOOTH SCROLLING **********************************
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

  // ***************************** SCROLL REVEAL **********************************

  ScrollReveal().reveal('#dashboard-group', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    mobile: true,
    viewFactor: 0.2
  });

  ScrollReveal().reveal('#template-img', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    delay: 900, // delay before reveal
    mobile: true,
    viewFactor: 0.2
  });

  // For Cards
  ScrollReveal().reveal('#first', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2
  });
  ScrollReveal().reveal('#second', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    delay: 500, // delay before reveal
    viewFactor: 0.2
  });
  ScrollReveal().reveal('#third', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    delay: 1000, // delay before reveal
    viewFactor: 0.2
  });

})