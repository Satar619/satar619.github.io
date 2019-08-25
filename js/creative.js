(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,  9
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
})(jQuery); // End of use strict

// drink event
function addMultipleListeners(element, events, handler, useCapture, args) {
  if (!(events instanceof Array)) {}
  var handlerFn = function (e) {
    handler.apply(this, args && args instanceof Array ? args : []);
  };
  for (var i = 0; i < events.length; i += 1) {
    element.addEventListener(events[i], handlerFn, useCapture);
  }
}
let span = document.querySelector('#drink-span-healthy');

function handler(e) {
  audio = new Audio();
  audio.src = './vendor/audio/water.mp3';
  audio.loop = false;
  audio.play();
  span.style.visibility = 'visible';
}
addMultipleListeners(document.querySelector('.fa-glass-martini-alt'),
  ['mouseover', 'click'], handler, false); // End of Drink event