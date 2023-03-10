window.addEventListener('scroll', function() {
    var target = document.querySelector('#sponsor-loading');
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    var scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos >= targetPos) {
      document.querySelector('.sponsor_loading').classList.add('show');
    }
  });