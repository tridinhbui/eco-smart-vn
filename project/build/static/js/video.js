window.addEventListener('scroll', function() {
    var target = document.querySelector('#youtube-video');
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    var scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos >= targetPos) {
      document.querySelector('.youtube-vid-loading').classList.add('show');
    }
  });