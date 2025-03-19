document.addEventListener("DOMContentLoaded", () => {
  const productsButton = document.getElementById("products");
  const popupBox = document.getElementById("popupBox");
  let hideTimeout;
  
  // Show popup on hover
  productsButton.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout); // Cancel any pending hide action
    popupBox.style.opacity = "1";
    popupBox.style.visibility = "visible";
    showSlides(); // Start slideshow when the popup is shown
  });

  // Hide popup after a delay when leaving the button or box
  productsButton.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      popupBox.style.opacity = "0";
      popupBox.style.visibility = "hidden";
    }, 200); // Adjust delay time as needed
  });

  popupBox.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout); // Prevent hiding while hovering the box
    popupBox.style.opacity = "1";
    popupBox.style.visibility = "visible";
  });

  popupBox.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      popupBox.style.opacity = "0";
      popupBox.style.visibility = "hidden";
    }, 200); // Adjust delay time as needed
  });

  // Slideshow logic
  let slideIndex = 0;

  function showSlides() {
    const slides = document.querySelectorAll(".fade");
    slideIndex = 0; // Reset slide index when the slideshow starts

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});
