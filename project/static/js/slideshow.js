window.addEventListener('scroll', function() {
  var target = document.querySelector('#container-slideshow');
  var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
  var scrollPos = window.scrollY + window.innerHeight;
  if (scrollPos >= targetPos) {
    document.querySelector('.slideshow_loading').classList.add('show');
  }
});

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

