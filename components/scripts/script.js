$(document).ready(function() {

    // $('.navbar-nav li').on('click', function(){
    //   $(this).find('.dropdown-menu').css('border', 'red').slideToggle('slow');
    //   console.log('hello')
    //     });

    $('#search').on('click', '.btn--search', function(){
    $('.navmenu-fixed-left').toggleClass('navmenu-fixed-left-high');
    $('.navmenu .container:last-child').toggleClass('container-open');
    });



    $(window).resize(function() {

      if ($(window).width() < 992) {
        $('.navmenu-fixed-left').removeClass('navmenu-fixed-left-high');
        $('.navmenu .container:last-child').removeClass('container-open');
      }


    });
});


//   // $('.dropdown > a ').click(function(e) {
//   //     $(this).parentsUntil('.container').find('ul.dropdown-menu:visible').slideUp();
//   //     $(this).next('.dropdown-menu').slideToggle("slow");
//   //     //$(this).parentUntil('.navmenu-nav').css('color', 'red')
//   // });
//   $('.dropdown').on('show.bs.dropdown', function(e){
//   $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
// });
//
// $('.dropdown').on('hide.bs.dropdown', function(e){
//   $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
// });
//   // $('.dropdown.open').click(function() {
//   //     $(this).slideUp("slow");
//   //
//   // });
//
//   // $('.dropdown').on('click', function() {
//   //   var slide_el = $(this).next().find('.dropdown-menu');
//   //
//   //   // don't slide up if clicking on the already visible element
//   //   if (!slide_el.is(':visible')) {
//   //     $('.dropdown-menu').slideUp();
//   //   }
//   //   slide_el.slideToggle(); // only slide clicked element
//   // });
//
