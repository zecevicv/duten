import pngSequence from './pngSequence.js';
import textScrollAnimation from './textScrollAnimation.js';
import onloadAnimation from './onloadAnimation.js';

// Homepage Product Slider
let thumbsSwiper = new Swiper('.product-slider .thumbs-slider .swiper', {
	slidesPerView: 4,
});

let productSwiper = new Swiper('.product-slider .slider .swiper', {
	thumbs: {
		swiper: thumbsSwiper,
	},
});

// modules
pngSequence.init();
textScrollAnimation.init();
onloadAnimation.init();
