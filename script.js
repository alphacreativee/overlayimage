// gsap.registerPlugin(ScrollTrigger);

// // Set initial transform on the element
// gsap.set(".strategies_image", {
//   y: 100,
//   willChange: "transform",
//   transformStyle: "preserve-3d",
// });
// gsap.set(".strategies_image-overlay", {
//   y: 100,
//   willChange: "transform",
//   transformStyle: "preserve-3d",
// });

// // Animate with ScrollTrigger
// gsap.to(".strategies_image", {
//   y: 0, // Animates to translate3d(0px, 0px, 0px)
//   easing: "ease",
//   duration: 1000,
//   scrollTrigger: {
//     trigger: ".strategies_image-wrapper",
//     start: "top 40%", // Start when the element is at the bottom of the viewport
//     end: "top 20%", // End when the element reaches the center
//     scrub: true, // Smooth animation synced with scroll
//     markers: true,
//   },
// });
// gsap.to(".strategies_image-overlay", {
//   y: 0, // Animates to translate3d(0px, 0px, 0px)
//   easing: "ease",
//   duration: 1000,
//   scrollTrigger: {
//     trigger: ".strategies_image-wrapper",
//     start: "top 40%", // Start when the element is at the bottom of the viewport
//     end: "top 20%", // End when the element reaches the center
//     scrub: true, // Smooth animation synced with scroll
//     markers: true,
//   },
// });

gsap.registerPlugin(ScrollTrigger);

// Set initial transform on the elements
gsap.set([".strategies_image", ".strategies_image-overlay"], {
  y: 100,
  willChange: "transform",
  transformStyle: "preserve-3d",
});

// Create a timeline to animate both elements together
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".strategies_image-wrapper",
    start: "top 30%",
    end: "top 20%",
    scrub: true,
    markers: true,
  },
});

// Add animations to the timeline
tl.to(".strategies_image", { y: 0, ease: "none" }).to(
  ".strategies_image-overlay",
  { y: 0, ease: "none" },
  "<"
); // The "<" aligns both animations to start simultaneously
