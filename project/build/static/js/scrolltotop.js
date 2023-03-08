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
