import 'slick-carousel';

class Slider {
  constructor({ el= '.js-slider', showCount = 1, scrollCount = 1, ...opts } = {}) {
    this.$slider = $(el);
    this.showCount = showCount;
    this.scrollCount = scrollCount;
    this.arrows = opts.arrows || false;
    this.dots = opts.dots || true;
    this.dotsClass = opts.dotsClass || 'slider-dots';
    this.responsive = opts.responsive;
    this.function = opts.function || false;

    this.defaultOptions = {
      slidesToShow: this.showCount,
      slidesToScroll: this.scrollCount,
      infinite: false,
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
  }
});
