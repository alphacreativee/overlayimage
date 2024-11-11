gsap.registerPlugin(ScrollTrigger);

// Set initial transform on the element
gsap.set(".strategies_image", {
  y: 140, // Equivalent to translate3d(0px, 95.0528px, 0px)
  willChange: "transform",
  transformStyle: "preserve-3d",
});
gsap.set(".strategies_image-overlay", {
  y: 140, // Equivalent to translate3d(0px, 95.0528px, 0px)
  willChange: "transform",
  transformStyle: "preserve-3d",
});

// Animate with ScrollTrigger
gsap.to(".strategies_image", {
  y: 0, // Animates to translate3d(0px, 0px, 0px)
  easing: "ease",
  duration: 500,
  scrollTrigger: {
    trigger: ".strategies_image-wrapper",
    start: "top 60%", // Start when the element is at the bottom of the viewport
    end: "top 20%", // End when the element reaches the center
    scrub: true, // Smooth animation synced with scroll
    markers: true,
  },
});
gsap.to(".strategies_image-overlay", {
  y: 0, // Animates to translate3d(0px, 0px, 0px)
  easing: "ease",
  duration: 500,
  scrollTrigger: {
    trigger: ".strategies_image-wrapper",
    start: "top 60%", // Start when the element is at the bottom of the viewport
    end: "top 20%", // End when the element reaches the center
    scrub: true, // Smooth animation synced with scroll
    markers: true,
  },
});
