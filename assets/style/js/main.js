$(document).ready(() => {

  // ***************************** NAVIGATION ***********************************

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
    console.log("1");
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

})