window.addEventListener('scroll', function() {
    var target = document.querySelector('#container-product');
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    var scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos >= targetPos) {
      document.querySelector('.productfeature_loading').classList.add('show');
    }
  });