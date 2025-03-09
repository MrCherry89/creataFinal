gsap.utils.toArray(".essence-info .img-wrap img").forEach((img) => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			start: "top bottom",
			end: "bottom top", 
			scrub: true,
		},
		rotateY: -60,
		rotateX: -5,
		translateZ: 100,
		ease: "none"
	});
});