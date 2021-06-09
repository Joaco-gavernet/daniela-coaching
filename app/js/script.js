$(document).ready(function(){
  $('a').on('click', function(event) {
    // store the destination of the link in a variable
    let hash = this.hash;
    // check if is an internal link or an external one
    if (hash.charAt(0) == '#') {
      event.preventDefault();

      // switch for mobile
      if ($(window).width() < 1024) {
        switch (hash) {
          case '#section3':
            window.scrollTo({
              top: 503,
              behavior: 'smooth'
            });
            break;
          case '#section4':
            window.scrollTo({
              top: 1169,
              behavior: 'smooth'
            });
            break;
            case '#section5':
            window.scrollTo({
              top: 1960,
              behavior: 'smooth'
            });
            break;
          case '#index':
          default:
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
        }
      }
  
      // switch for desktop
      if ($(window).width() >= 1024) {
        switch (hash) {
          case '#section3':
            window.scrollTo({
              top: 708,
              behavior: 'smooth'
            });
            break;
          case '#section4b':
            window.scrollTo({
              top: 1342,
              behavior: 'smooth'
            });
            break;
          case '#section5':
            window.scrollTo({
              top: 1983,
              behavior: 'smooth'
            });
            break;
          case '#index':
          default:
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
        }
      }
    }
  })

  mainNav();
  $(window).scroll(function() {
    mainNav();
  });
  function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 596) $('.nav-desktop').stop().animate({
      "opacity": '1'
    });
    else $('.nav-desktop').stop().animate({
      "opacity": '0'
    });
  }

}) // dom checking

