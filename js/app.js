// Homepage Product Slider
let thumbsSwiper = new Swiper(".product-slider .thumbs-slider .swiper", {
  slidesPerView: 4,
});

let productSwiper = new Swiper(".product-slider .slider .swiper", {
  thumbs: {
    swiper: thumbsSwiper,
  },
});