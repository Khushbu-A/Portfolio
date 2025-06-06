// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    // Check if the element exists before trying to set its innerHTML
    var displayYearElement = document.querySelector("#displayYear");
    if (displayYearElement) {
        displayYearElement.innerHTML = currentYear;
    }
}

getYear();

// owl carousel initialization wrapped in ready handler
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 6
          }
      }
  });
});