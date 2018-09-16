import 'slick-carousel';
import { $window, throttle } from '../_helpers';

class Slider {
  constructor({ el= '.js-slider', showCount = 1, scrollCount = 1, ...opts } = {}) {
    this.$slider = $(el);
    this.showCount = showCount;
    this.scrollCount = scrollCount;
    this.responsive = opts.responsive;
    this.arrows = opts.arrows || false;
    this.infinite = opts.infinite || false;
    this.function = opts.function || false;
    this.dots = opts.dots || true;
    this.dotsClass = opts.dotsClass || 'slider-dots';

    this.defaultOptions = {
      slidesToShow: this.showCount,
      slidesToScroll: this.scrollCount,
      infinite: this.infinite,
      speed: 800,
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      arrows: this.arrows,
      dots: this.dots,
      dotsClass: this.dotsClass,
      rows: 0,
      responsive: this.responsive
    };

    if (this.$slider.length) this.init();
  }

  init() {
    this.initSlider();

    if (typeof this.function !== 'function') return;
    this.function();
  }

  initSlider() {
    this.$slider.slick($.extend({}, this.defaultOptions));
  }
}

export default new Slider();

const testimonialsSld = new Slider({
  el: '.js-testimonials-slider',
  showCount: 3,
  scrollCount: 3,
  dotsClass: 'testimonials__slider-dots slider-dots slider-dots_white',
  resposnive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  function() {
    const _this = this;

    setContentHeight();

    const setOnResize = throttle(() => {
      setContentHeight();
    }, 0, this);

    function setContentHeight() {
      const contentHeights = [];
      const $content = _this.$slider.find('.testimonials__item-content');

      $content
        .each((i, el) => {
          contentHeights.push($(el).outerHeight());
        })
        .css({ height: Math.max(...contentHeights) });
    }

    $window.on('resize', setOnResize);
  }
});

const partnersSld = new Slider({
  el: '.js-partners-slider',
  showCount: 5,
  scrollCount: 5,
  dotsClass: 'partners__slider-dots slider-dots slider-dots_blue',
  resposnive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
