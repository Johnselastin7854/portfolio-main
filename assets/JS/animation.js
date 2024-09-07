/**/
// const cursor = document.getElementById("cursor");

// document.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, {
//     x: e.x,
//     y: e.y,
//     duration: 0.4,
//     opacity: 1,
//   });
// });

/**/
const open = document.querySelector(".nav__open");
const close = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const heroTitleTopDesktop = document.querySelector(".hero__title .desktop");
const heroTitleBottomDesktop = document.querySelector(".bottom__left");
console.log(heroTitleBottomDesktop);

gsap.set(heroTitleBottomDesktop, {
  opacity: 1,
});
gsap.set(heroTitleTopDesktop, {
  opacity: 1,
});

let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  const mobileTl = gsap.timeline();

  mobileTl.to(".nav__list", {
    right: 0,
    duration: 0.6,
  });
  mobileTl.from(".nav__list--item", {
    x: 150,
    opacity: 0,
    duration: 0.7,
    stagger: 0.25,
  });
  mobileTl.from(close, {
    y: -40,
    opacity: 0,
  });

  mobileTl.pause();

  open.addEventListener("click", () => {
    mobileTl.play();
    navList.style.display = "flex";
  });
  close.addEventListener("click", () => {
    mobileTl.reverse();
  });

  return () => {
    mobileTl.kill();
  };
});

mm.add("(min-width: 769px)", () => {
  const desktopTl = gsap.timeline();

  desktopTl.from(".nav", {
    y: -70,
    opacity: 1,
    durarion: 0.8,
  });
  desktopTl.from(".hero__title--top.desktop", {
    y: 70,
    opacity: 0,
    duration: 0.6,
  });

  desktopTl.from(".bottom__left.desktop", {
    y: 50,
    opacity: 0,
    duration: 0.6,
  });

  desktopTl.from(".bottom__right", {
    y: 50,
    rotate: 360,
    opacity: 0,
    duration: 0.5,
  });

  return () => {
    desktopTl.kill();
  };
});

/**/
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".home__hero",
  start: "-32% 1%",
  end: "15% -15%",
  // end: "+=500",
  // markers: true,
  onUpdate: (self) => {
    const progress = self.progress;
    console.log(progress);

    gsap.to(".hero__title--left", {
      x: -progress * 200,
      duration: 0.8,
    });

    gsap.to("#line", {
      scaleX: progress * 2 + 1,
      duration: 0.8,
    });

    gsap.to(".hero__title--right", {
      x: progress * 200,
      duration: 0.8,
    });
  },
});
