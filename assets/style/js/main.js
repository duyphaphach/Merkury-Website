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
      $('#navbar').removeClass('navbar-shrink')
    }
  })

})