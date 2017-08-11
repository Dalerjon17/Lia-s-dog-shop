$(document).ready(function() {
  $('body').scrollspy({ target: ".navbar", offset: 50 });
  $('ul li').click(function() {

    var clicked_tab = $(this);

    clicked_tab.addClass('active');


    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');

  });





  // Add smooth scrolling on all links inside the navbar
  $("#myNavBar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });

});
