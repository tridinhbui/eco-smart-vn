
window.addEventListener('scroll', function () {
  var target = document.querySelector('#customer_style');
  var targetPos = target.getBoundingClientRect().top + window.pageYOffset;

  var scrollPos = window.scrollY + window.innerHeight;
  if (scrollPos >= targetPos) {
    document.querySelector('.customer_loading').classList.add('show');
  }
});
