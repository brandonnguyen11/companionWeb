document.addEventListener("DOMContentLoaded", () => {
     const productsButton = document.getElementById("products");
     const popupBox = document.getElementById("popupBox");
     let hideTimeout;
   
     // Show popup on hover
     productsButton.addEventListener("mouseenter", () => {
       clearTimeout(hideTimeout); // Cancel any pending hide action
       popupBox.style.opacity = "1";
       popupBox.style.visibility = "visible";
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
   });
   