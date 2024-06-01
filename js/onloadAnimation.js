const onloadAnimation = {
	animationElements: document.querySelectorAll('.js-onload-animation'),

	init: function () {
		this.handleAnimation();
	},

	handleAnimation: function () {
		window.addEventListener('load', () => {
			const tl = gsap
				.timeline()
				.add('first')
				.add(gsap.fromTo(this.animationElements[0], { opacity: 0, y: '-100%' }, { opacity: 1, y: '0%' }), 'first')
				.add('second')
				.add(gsap.fromTo(this.animationElements[1], { opacity: 0, y: '200%' }, { opacity: 1, y: '-50%' }), 'second');
		});
	},
};

export default onloadAnimation;
