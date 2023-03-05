const currentPageUrl = window.location.href;

// Loop through all nav links and add the 'active' class to the one that matches the current page URL
const pagLinks = document.querySelectorAll('.page-link');
pagLinks.forEach((link) => {
  if (link.href === currentPageUrl) {
    link.classList.add('active');
  }
});