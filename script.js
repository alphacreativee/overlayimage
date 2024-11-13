// A $( document ).ready() block.
$(document).ready(function () {
  const lenis = new Lenis({
    smooth: true,
    easing: (t) => 1 - Math.pow(1 - t, 3), // Eases out the scroll
    duration: 2, // Adjust for smoother scroll duration
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Adjusting speed factor for smoother performance
  });

  gsap.ticker.lagSmoothing(0);
  parallaxImage();
  pinCard();
  // Initialize Lenis
});
function parallaxImage() {
  gsap.registerPlugin(ScrollTrigger);

  // Set initial transform on the elements
  gsap.set([".strategies_image", ".strategies_image-overlay"], {
    y: 120,
    willChange: "transform",
    transformStyle: "preserve-3d",
  });

  // Create a timeline to animate both elements together
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".strategies_image-wrapper",
      start: "top 40%",
      end: "top top",
      scrub: true,
      // markers: true,
    },
  });

  // Add animations to the timeline
  tl.to(".strategies_image", { y: 0, ease: "none", duration: 5 }).to(
    ".strategies_image-overlay",
    { y: 0, ease: "none", duration: 5 },
    "<"
  ); // The "<" aligns both animations to start simultaneously
}
//////////////////
function pinCard() {
  const items = gsap.utils.toArray(".card");
  const lastCard = items[items.length - 1];
  let lastCardHeight = lastCard.clientHeight;
  let endPointImage =
    document.querySelector(".card-animation").clientHeight - lastCardHeight;

  gsap.timeline({
    scrollTrigger: {
      trigger: ".background-image",
      start: "top top",
      end: `+=${endPointImage}px`,
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    },
  });

  // Timeline for each card pinning and scaling
  items.forEach((item, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 25%",
        endTrigger: ".container-card",
        end: `bottom top+=${lastCardHeight}px`,
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
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
}
