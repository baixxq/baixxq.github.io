function initBlogSwiper() {
  var el = document.querySelector('#swiper_container.blog-slider')
  if (!el || typeof Swiper === 'undefined' || el.swiper) return

  var swiper = new Swiper(el, {
    passiveListeners: true,
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: false,
    observer: true,
    observeParents: true,
    autoplay: {
      disableOnInteraction: true,
      delay: 3000
    },
    mousewheel: false,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true
    }
  })

  el.addEventListener('mouseenter', function () {
    if (swiper.autoplay) swiper.autoplay.stop()
  })
  el.addEventListener('mouseleave', function () {
    if (swiper.autoplay) swiper.autoplay.start()
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlogSwiper)
} else {
  initBlogSwiper()
}
