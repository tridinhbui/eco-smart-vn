window.addEventListener('scroll', function () {
  var target = document.querySelector('#achievement-loading');
  var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
  var scrollPos = window.scrollY + window.innerHeight;
  if (scrollPos >= targetPos) {
    document.querySelector('.achievement_loading').classList.add('show');
  }
});