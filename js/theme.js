(function($) {

  $(document).ready(function() {



    $('.home .current-menu-item a').css('font-family', 'HelsinkiGrotesk-Regular, Georgia, sans-serif');



    $(".search-open").click(function() {


      $('.search-box').attr("aria-expanded", function (i, attr) {
        return attr == "true" ? "false" : "true";
      });

    // $('.search-box').toggle('fast');
    $('.search-box').addClass('open');
    $('#s').focus();
    $(".search-open").blur(); 
    $('.search-open .fa-search, .search-open .fa-times').toggle();
  });


    $('.search-open').keypress(function (e) {
     var key = e.which;
     if(key == 13)  {
       $('.search-open').click();
       $(this).addClass('remove-focus');
       // return false;  
     }
   });



    $(".menu-toggle").click( function (){
      $(this).next().toggleClass("open");
      $(this).toggleClass("open");

      $(this).children().toggleClass("hds-icon--angle-up");

      $(this).attr("aria-expanded", function (i, attr) {
        return attr == "true" ? "false" : "true";
      });

    });


    // Owl Carousel DOM Elements
    var carousel1 = '#sync1';
    var carousel2 = '#sync2';

  // Initialize plugin
  var owlCarousel1 = $(carousel1).owlCarousel({
    items: 1,
    margin: 10,
    nav: true,
    navText: ['<div class="hds-icon hds-icon--size-xl hds-icon--arrow-left">', '<div class="hds-icon hds-icon--size-xl hds-icon--arrow-right">'],
  });
  var owlCarousel2 = $(carousel2).owlCarousel({
    items: 5,
    margin: 10,
  });

  // Sync carousel & add current class
  carouselSyncCurrentClass();

  // On carousel change: Sync carousel & add current class
  owlCarousel1.on('changed.owl.carousel', function() {
    carouselSyncCurrentClass();
  });
  owlCarousel2.on('changed.owl.carousel', function(event) {
    carouselSyncCurrentClass();
  });

  // Thumbs switch click event.
  owlCarousel2.find('.item').click(function () {
    var itemIndex = $(this).parent().index();
    owlCarousel1.trigger('to.owl.carousel', itemIndex);
    carouselSyncCurrentClass();
  });


  function carouselSyncCurrentClass() {
    setTimeout(function () {
      var carousel1ActiveIndex = $('#sync1 .owl-item.active').index();
      $('#sync2 .owl-item').removeClass('current');
      var currentItem = $('#sync2 .owl-item:nth-child('+(carousel1ActiveIndex+1)+')');
      currentItem.addClass('current');

      if(!currentItem.hasClass('active')){
        if(currentItem.prevAll('.active').length > 0){
          owlCarousel2.trigger('next.owl.carousel');
        }
        if(currentItem.nextAll('.active').length){
          owlCarousel2.trigger('prev.owl.carousel');
        }
      }
    }, 100);
  }

  // Accordion
  $('.acs-item-title').click(function(){
    if($(this).next('.acs-item-content').is(':visible')) {
      $(this).find('.hds-icon').removeClass('hds-icon--angle-up');
      $(this).find('.hds-icon').addClass('hds-icon--angle-down');
      $(this).next('.acs-item-content').slideUp();
    } else {
      $(this).find('.hds-icon').removeClass('hds-icon--angle-down');
      $(this).find('.hds-icon').addClass('hds-icon--angle-up');
      $(this).next('.acs-item-content').slideDown();
    }
  });

  // Mobile menu
  $('#mobile-menu-open-btn').click(function(){
    $('#header-mobile-menu').slideDown();
  });
  $('#mobile-menu-close-btn').click(function(){
    $('#header-mobile-menu').slideUp();
  });

});

}(jQuery));