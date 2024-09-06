/*<!--==================== Cursor Animation ====================--> */
// const cursor = document.getElementById("cursor");

// document.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, {
//     x: e.x,
//     y: e.y,
//     duration: 0.4,
//     opacity: 1,
//   });
// });

/*<!--==================== Navbar Animation ====================--> */
const open = document.querySelector(".nav__open");
const close = document.querySelector(".nav__close");

let mm = gsap.matchMedia();
const tl = gsap.timeline();

mm.add("(max-width: 768px)", () => {
  tl.to(".nav__list ", {
    right: 0,
    duration: 0.6,
  });
  tl.from(".nav__list--item ", {
    x: 150,
    opacity: 0,
    durarion: 0.7,
    stagger: 0.25,
  });
  tl.from(close, {
    y: -40,
    opacity: 0,
  });
  tl.pause();
  open.addEventListener("click", () => {
    tl.play();
  });
  close.addEventListener("click", () => {
    tl.reverse();
  });
});

/*<!--==================== Hero Title Animation ====================--> */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".home__hero",
  start: "-30% 5%",
  end: "15%% -15%",
  // end: "+=500",
  markers: true,
  onUpdate: (self) => {
    const progress = self.progress;
    console.log(progress);

    gsap.to(".hero__title--left", {
      x: -progress * 200,
      duration: 1,
    });

    gsap.to("#line", {
      scaleX: progress * 2 + 1,
      duration: 1,
    });

    gsap.to(".hero__title--right", {
      x: progress * 200,
      duration: 1,
    });
  },
});
