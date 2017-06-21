$(document).ready(function () {
  $('.dropdown > a ').click(function() {
      $(this).parentsUntil('.container').find('ul.dropdown-menu:visible').slideUp();
      $(this).next('.dropdown-menu').slideToggle("slow");
      //$(this).parentUntil('.navmenu-nav').css('color', 'red')
  });
  // $('.dropdown.open').click(function() {
  //     $(this).slideUp("slow");
  //
  // });

  // $('.dropdown').on('click', function() {
  //   var slide_el = $(this).next().find('.dropdown-menu');
  //
  //   // don't slide up if clicking on the already visible element
  //   if (!slide_el.is(':visible')) {
  //     $('.dropdown-menu').slideUp();
  //   }
  //   slide_el.slideToggle(); // only slide clicked element
  // });


});
