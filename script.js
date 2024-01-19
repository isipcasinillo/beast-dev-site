gsap.registerPlugin(ScrollTrigger);

// gsap.to(".devour-container-text-wrapper", {
//   scrollTrigger: {
//     trigger: ".devour-container-text-wrapper",
//     markers: true,
//     scrub: true,
//     start: "50% center",
//     end: "+=300",
//   },
//   x: 400,
//   rotation: 360,
//   duration: 3,
// });

gsap.to(".devour-svg-3", {
  scrollTrigger: {
    trigger: ".jagged-edge-container-bottom",
    // markers: true,
    scrub: true,
    start: "-=800 center",
    end: "top",
  },
  x: -800,

  duration: 2,
});

gsap.to(".devour-svg-1", {
  scrollTrigger: {
    trigger: ".jagged-edge-container-bottom",
    // markers: true,
    scrub: true,
    start: "-=800 center",
    end: "top",
  },
  x: -600,

  duration: 4,
});

gsap.to(".devour-svg-2", {
  scrollTrigger: {
    trigger: ".jagged-edge-container-bottom",
    // markers: true,
    scrub: true,
    start: "-=800 center",
    end: "top",
  },
  x: 400,
  duration: 4,
});

// gsap.to(".devour-svg-3-b", {
//   scrollTrigger: {
//     trigger: ".devour-container-text-wrapper-b",
//     // markers: true,
//     scrub: true,
//     start: "50% center",
//     end: "+=800 center",
//   },
//   x: -400,
//   duration: 5,
// });

// gsap.to(".devour-svg-1-b", {
//   scrollTrigger: {
//     trigger: ".devour-container-text-wrapper-b",
//     // markers: true,
//     scrub: true,
//     start: "50% center",
//     end: "+=800 center",
//     ease: "bounce.out",
//   },
//   x: -600,
//   duration: 2,
// });

// gsap.to(".devour-svg-2-b", {
//   scrollTrigger: {
//     trigger: ".devour-container-text-wrapper-b",
//     // markers: true,
//     scrub: true,
//     start: "50% center",
//     end: "+=800 center",
//     ease: "bounce.out",
//   },
//   x: 600,

//   duration: 2,
// });

gsap.to(".about-content-card-container-marker-1", {
  scrollTrigger: {
    trigger: ".about-card-marker-1",
    scrub: true,
    markers: true,
    start: "40% center",
    end: "+=100",
    ease: "bounce.out",
  },
  duration: 2,
  opacity: 1,
  // rotation: 27,

  y: -450,
});

gsap.to(".about-content-card-container-marker-2", {
  scrollTrigger: {
    trigger: ".about-card-marker-2",
    scrub: true,
    // markers: true,
    start: "30% center",
    end: "+=20%",
    ease: "bounce.out",
  },
  duration: 2,
  opacity: 1,
  // rotation: 27,

  y: -400,
});

gsap.to(".about-content-card-container-marker-3", {
  scrollTrigger: {
    trigger: ".about-card-marker-3",
    scrub: true,
    // markers: true,
    start: "40% center",
    end: "+=200",
    ease: "bounce.out",
  },
  duration: 2,
  opacity: 1,
  // rotation: 27,

  y: -450,
});

gsap.to(".lion-border-1", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    scale: 1,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

gsap.to(".lion-border-2", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    scale: 1,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

gsap.to(".lion-border-3", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    transformOrigin: "left top",
    scale: 1.05,
    left: "46%",
    top: "52%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

gsap.to(".lion-border-4", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    transformOrigin: "left top",
    scale: 1.05,
    left: "45%",
    top: "54%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

gsap.to(".lion-border-5", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    transformOrigin: "left top",
    scale: 1.05,
    left: "45%",
    top: "54%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

gsap.to(".lion-border-6", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    transformOrigin: "left top",
    scale: 1.05,
    left: "45%",
    top: "54%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

gsap.to(".lion-border-7", {
  scrollTrigger: {
    trigger: ".header-container",
    scrub: true,
    // markers: true,
    start: "50% center",
    end: "+=100",

    duration: 1,
  },
  css: {
    transformOrigin: "left top",
    scale: 1.04,
    left: "46%",
    top: "54%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});
