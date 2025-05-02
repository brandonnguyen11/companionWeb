let slideIndex=1;


// Initialize slideshow when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);

  // Auto-advance every 5 seconds
  setInterval(() => {
    plusSlides(1);
  }, 5000);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  Array.from(slides).forEach(slide => {
    slide.style.display = "none";
  });

  // Update dots
  Array.from(dots).forEach(dot => {
    dot.classList.remove("active");
  });

  // Show current slide (with null safety)
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const productsButton = document.getElementById("products");
  const popupBox = document.getElementById("popupBox");
  let hideTimeout;

  // Show popup on hover
  productsButton.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout); // Cancel any pending hide action
    popupBox.style.opacity = "1";
    popupBox.style.pointerEvents = "auto"; // Enable interaction
    showSlides(); // Start slideshow when the popup is shown
  });

  // Hide popup after a delay when leaving the button or box
  productsButton.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      popupBox.style.opacity = "0";
      // Delay pointer-events removal to match fade-out duration
      setTimeout(() => {
        if (popupBox.style.opacity === "0") {
          popupBox.style.pointerEvents = "none";
        }
      }, 500); // Adjust to match the CSS transition time
    }, 200); // Adjust delay time as needed
  });

  popupBox.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout); // Prevent hiding while hovering the box
    popupBox.style.opacity = "1";
    popupBox.style.pointerEvents = "auto"; // Ensure interaction stays active
  });

  popupBox.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      popupBox.style.opacity = "0";
      setTimeout(() => {
        if (popupBox.style.opacity === "0") {
          popupBox.style.pointerEvents = "none";
        }
      }, 500);
    }, 200);
  });


});
