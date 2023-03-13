window.addEventListener('scroll', function() {
    var target = document.querySelector('#map-loading');
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    var scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos >= targetPos) {
      document.querySelector('.map_loading').classList.add('show');
    }
  });