// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls */
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//jquery src needs to be added
//Move the gallery images with the keyboard arrows

$(window).keyup(function(e) {
  var key = e.which;
  if (key == 13 || key == 39) {
    // the enter key code or right arrow
    $(".next").click();
    return false;
  } else if (key == 37) {
    // left arrow
    $(".prev").click();
    return false;
  }
});

//WORK ON IT. Close when you click on an empty area.

//var specifiedElement = document.getElementById("slideclose");
//document.addEventListener("click", function(event) {
// var isClickInside = specifiedElement.contains(event.target);
// if (!isClickInside) {
//  closeModal();
//  }
//});
