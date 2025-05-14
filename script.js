gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    scrub: 4,
    start: "top 30%",
    end: "top 2%",
  },
});
