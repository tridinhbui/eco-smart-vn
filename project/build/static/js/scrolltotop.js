
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // scrolled down
    document.querySelector(".myBtn").classList.remove("show");
  } else {
    // scrolled up
    document.querySelector(".myBtn").classList.add("show");
  }

  lastScrollTop = currentScroll;
});


// Get the button
let mybutton = document.getElementsByClassName("myBtn")[0];

// When the user scrolls down, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollContainer().scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (scrollContainer().scrollTop > showOnPx) {
    mybutton.classList.remove("hidden")
  } else {
    mybutton.classList.add("hidden")
  }

  // Get the height of the footer
  const mapHeight = document.getElementById("map-loading").offsetHeight;
  const footerHeight = document.querySelector("footer").offsetHeight;

  // Check if the footer is visible in the viewport
  if (scrollContainer().scrollTop + window.innerHeight > scrollContainer().scrollHeight - mapHeight - footerHeight) {
    // If the footer is visible, position the button above it
    mybutton.style.position = "fixed";
    mybutton.style.bottom = `${mapHeight + footerHeight +17}px`;
  } 
  
  
  else {
    // If the footer is not visible, reset the button's position
    mybutton.style.position = "fixed";
    mybutton.style.bottom = "20px"; // Change this value to adjust the distance from the bottom
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const showOnPx = 100;
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  mybutton.style.display = "block";
})


