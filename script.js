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

//////////////////

const items = gsap.utils.toArray(".card");
const lastCard = items[items.length - 1];

// Calculate the height of the last card
let lastCardHeight = lastCard.clientHeight;

items.forEach((item, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 40%",
      endTrigger: ".container",
      end: `bottom top+=${lastCardHeight}px`,
      pin: true,
      pinSpacing: false,
      scrub: true,
      markers: true,
    },
  });
  if (item === lastCard) {
    tl.to(item, {
      scale: 1,
      transformOrigin: "center center",
    });
  } else {
    tl.to(item, {
      scale: 0.8 + 0.02 * index,
      transformOrigin: "center center",
    });
  }
});
