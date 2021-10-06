$(document).ready(function() {
    $("h2").click(function() {
        $(this).css("background-color", "#FF8C00");
    })
});

// buttons and vac links click

$(".button-order").click(function() {
    $("html, body").animate({scrollTop: $("#how-to-order-section").offset().top}, 1000);
});
$(".button-more").click(function() {
    $("html, body").animate({scrollTop: $("#restaurant-description").offset().top}, 1000);
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//Animation

  var waypoint = new Waypoint({
    element: document.getElementById('restaurant-description'),
    handler: function(direction) {
       $(".anim1").addClass("animated fadeIn");
    },
      offset: 60
  });

