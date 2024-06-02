const pngSequence = {
	animationBlock: document.querySelector('.js-scrollbox-animation'),
	frames: document.querySelectorAll('.js-scrollbox-frame'),
	stickyWrap: document.querySelector('.js-scrollbox-sticky-wrap'),

	currentFrame: { value: 0 },

	offset: 0,

	init: function () {
		this.initialSetup();
		this.initSticky();
		this.detectScroll();
	},

	initialSetup: function () {
		this.frames.forEach((frame) => {
			frame.style.visibility = 'hidden';
		});
		this.frames[0].style.visibility = 'visible';
	},

	initSticky: function () {
		window.addEventListener('load', () => {
			const windowHeight = window.innerHeight;
			const imageHeight = this.stickyWrap.offsetHeight;

			const top = (windowHeight - imageHeight) / 2;

			this.stickyWrap.style.top = `${top}px`;
		});
	},

	detectScroll: function () {
		window.addEventListener('scroll', () => {
			const rect = this.animationBlock.getBoundingClientRect();
			const rectTop = document.documentElement.scrollTop - window.innerHeight;
			const scrollTop = rect.top + rectTop + this.offset;

			const animationBlockHeight = this.animationBlock.offsetHeight;

			const scrollBottom = scrollTop + animationBlockHeight + window.innerHeight;
			const currentScroll = window.scrollY;

			const isInViewport = currentScroll >= scrollTop && currentScroll <= scrollBottom;

			if (isInViewport) {
				const rangePx = scrollBottom - scrollTop;
				const currPositionPercent = (currentScroll - scrollTop) / rangePx;

				const nextFrame = Math.round(currPositionPercent * 90);

				gsap.to(this.currentFrame, {
					value: nextFrame,
					onUpdate: () => {
						this.frames.forEach((frame) => {
							frame.style.visibility = 'hidden';
						});
						this.frames[Math.round(this.currentFrame.value)].style.visibility = 'visible';
					},
				});
			}
		});
	},
};

export default pngSequence;
