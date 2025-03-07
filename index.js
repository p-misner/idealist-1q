gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const textBlocks = [
  { text: "I believe that together we can change the world." },
  { text: "You and I and everyone who wants to join us" },
  {
    text: "I believe we can do it thoughtfully, one day and one community at a time. ",
  },
  { text: "I believe we can start right now, and learn and adapt as we go. " },
  { text: "I believe we can get there by doing three simple things" },
  {
    text: "First, agree on a broad and inclusive vision to help build a world where ",
  },
  {
    text: "all people can lead free and dignified lives ",
  },
  {
    text: "and do so in a spirit of generosity and mutual respect.",
  },
  {
    text: "Second, every month, on 3/3, 4/4, 5/5, etc., invite people everywhere to do one thing",
  },
  {
    text: "for something or someone they care about. To share, teach, build, advocate...",
  },
  {
    text: "or simply celebrate the great but often quiet work that so many people are already doing for all of us.",
  },
  {
    text: "  ",
  },
  {
    text: "and finally, make all this visible.",
  },
  {
    text: "to see and support one another across cultures and languages",
  },
  {
    text: "share a joyful symbol that anyone can adopt and adapt in any way they like.",
  },
  {
    text: "I believe that if we do this consistently, going wider and deeper day after day",
  },
  {
    text: "and month after month",
  },
  {
    text: "the world could be a very different place by the end of next year.",
  },
];

for (let i = 0; i < textBlocks.length; i++) {
  let h1 = document.createElement("h1");
  h1.id = `header${i}`;
  h1.appendChild(document.createTextNode(textBlocks[i].text));
  document.getElementsByClassName("textWrapper")[0].appendChild(h1);
  h1.style.opacity = i == 0 ? "1" : "0";

  let triggerBox = document.createElement("div");
  triggerBox.id = `trigger${i}`;
  triggerBox.class = "box";
  document.getElementsByClassName("triggerBoxes")[0].appendChild(triggerBox);
}

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".progressBar", {
    width: "100vw",
    scrollTrigger: { scrub: 0.3 },
  });

  for (let i = 0; i < textBlocks.length; i++) {
    gsap.to(`#header${i}`, {
      scrollTrigger: {
        trigger: `#trigger${i + 1}`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none reverse reset",
      },
      autoAlpha: "0",
    });
    gsap.to(`#header${i + 1}`, {
      scrollTrigger: {
        trigger: `#trigger${i + 1}`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none reverse reset",
      },
      autoAlpha: "1",
    });
  }
  //trigger 0 stagger pulsing points
  gsap.to(".pulsingPoint", {
    scrollTrigger: {
      trigger: `#trigger0`,
    },
    stagger: Math.random() / 2,
    autoAlpha: "1",
    duration: 1,
  });
  //trigger 1 pulse points
  const outerCircle = document.querySelectorAll(`.outer`);
  outerCircle.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger1`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none none reset",
      },
      strokeWidth: 5,
      r: 20 + Math.random() * 20,
      duration: Math.random() * 5 + 1,
      repeat: Math.floor(Math.random() * 1),
      opacity: 0,
      stroke: `${
        Math.random() < 0.8
          ? "#76C237"
          : Math.random() > 0.5
          ? "#FBD001"
          : "#0297E4"
      }`,
    });
  });
  //trigger 2
  gsap.to(".countries", {
    scrollTrigger: {
      trigger: `#trigger2`, // start the animation when ".box" enters the viewport (once)
      toggleActions: "play none reverse reset",
    },
    autoAlpha: "0",
    duration: 1,
  });
  gsap.to(".distorted", {
    scrollTrigger: {
      trigger: `#trigger2`, // start the animation when ".box" enters the viewport (once)
      toggleActions: "play none reverse reset",
    },
    autoAlpha: "0",
    duration: 0.5,
  });
  //trigger 3 circle swarm appears
  const circularCircles = document.querySelectorAll(`.circular`);
  circularCircles.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger2`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none reverse reset",
      },
      delay: 1,
      x: `${Math.random() < 0.5 ? "-" : "+"}=${Math.random() * 100 + 100}`,
      y: `${Math.random() < 0.5 ? "-" : "+"}=${Math.random() * 100 + 120}`,
      autoAlpha: "0",
      duration: 3,
      r: 20,
    });
  });

  gsap.to(".circleSwarm", {
    scrollTrigger: {
      trigger: `#trigger3`, // start the animation when ".box" enters the viewport (once)
      toggleActions: "play none reverse reset",
    },
    autoAlpha: "1",
    duration: 0.01,
  });

  gsap.to(".greenDot", {
    scrollTrigger: {
      //   toggleActions: "play reverse reverse reset",
      trigger: `#trigger3`,
      scrub: 0.6,
    },
    motionPath: {
      path: "#greenPath1",
      align: "#greenPath1",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0,
    },
    // duration: 6,
  });
  gsap.to(".yellowDot", {
    scrollTrigger: {
      //   toggleActions: "play reverse reverse reset",
      trigger: `#trigger3`,
      scrub: 0.2,
    },
    motionPath: {
      path: "#yellowPath1",
      align: "#yellowPath1",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
      start: 0.99,
      end: 0.01,
    },
    // duration: 6,
  });
  gsap.to(".blueDot", {
    scrollTrigger: {
      trigger: `#trigger3`,
      scrub: 1,
    },
    motionPath: {
      path: "#bluePath1",
      align: "#bluePath1",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
      start: 0.99,
      end: 0.01,
    },
    // duration: 6,
  });

  const ellipses = document.querySelectorAll(".pe>circle");
  const path = document.querySelectorAll(".pe>path");

  ellipses.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger3`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none none reset",
      },
      duration: Math.random() * 1.5 + 2,
      autoAlpha: 1,
    });
  });
  ellipses.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger3`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none none reset",
        scrub: true,
        ease: "linear",
      },
      motionPath: {
        path: path[index],
        align: path[index],
      },
    });
  });

  //trigger 4 three circles line up, other circles spin and dissappear
  gsap.to(".greenDot", {
    scrollTrigger: {
      //   toggleActions: "play reverse reverse reset",
      trigger: `#trigger4`,
      scrub: 0.6,
    },
    motionPath: {
      path: "#greenPath2",
      align: "#greenPath2",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
      start: 0.99,
      end: 0.01,
    },
    // duration: 6,
  });

  gsap.to(".yellowDot", {
    scrollTrigger: {
      //   toggleActions: "play reverse reverse reset",
      trigger: `#trigger4`,
      scrub: 0.2,
    },
    motionPath: {
      path: "#yellowPath2",
      align: "#yellowPath2",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
      start: 0.99,
      end: 0.01,
    },
    // duration: 6,
  });

  gsap.to(".blueDot", {
    scrollTrigger: {
      //   toggleActions: "play reverse reverse reset",
      trigger: `#trigger4`,
      scrub: 1,
    },
    motionPath: {
      path: "#bluePath2",
      align: "#bluePath2",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
      start: 0.99,
      end: 0.01,
    },
    // duration: 6,
  });
  ellipses.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger4`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none none reset",
        scrub: true,
        ease: "linear",
      },
      motionPath: {
        path: path[index],
        align: path[index],
      },
      fill: "white",
    });
  });
  //trigger 5 to globe
  gsap.to(".blueDot", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger5`,
      //   scrub : 0.6,
    },
    delay: 0.5,
    cx: "-=10",
    cy: "+=0",
    r: 148,
    duration: 2,
  });
  gsap.to(".greenDot", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger5`,
      //   scrub : 0.6,
    },
    delay: 0.5,

    zIndex: 100,
    cx: "+=67",
    cy: "+=25",
    transformOrigin: "center center",
    r: 55,
    duration: 2,
  });
  gsap.to(".yellowDot", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger5`,
    },

    transformOrigin: "center center",
    r: 0,
    autoAlpha: 0,
    duration: 1,
    delay: 0.5,
  });

  gsap.to(".globe>path", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger5`,
    },
    autoAlpha: 1,
    duration: 2,
    delay: 0.7,
  });

  const circleGlobeElements = document
    .querySelector(".globe")
    .querySelectorAll("circle");
  circleGlobeElements.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger5`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none none reset",
      },
      duration: 0.5,
      // svgOrigin: "605.5 600",
      autoAlpha: 1,
      delay: Math.random() * 0.5 + 1,
      ease: "sine.inOut",
    });
  });

  //trigger 6 to globe background and stars
  const grayCircles = document.querySelectorAll(".grayCircle");
  grayCircles.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: `#trigger6`, // start the animation when ".box" enters the viewport (once)
        toggleActions: "play none none reset",
        scrub: index / 5,
      },
      rotate: 360,
      transformOrigin: "center center",
      autoAlpha: 0.35 - index / 10,
      r: index * 40 + 200,
      ease: "sine.inOut",
    });
  });

  //trigger 7 stars
  gsap.to(".star", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger7`,
    },
    duration: 3,
    autoAlpha: 1,
    stagger: 0.3,
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger6`,
    },
    repeat: -1,
    repeatDelay: 0.001,
  });

  tl.to(".star", {
    scale: 1.2,
    duration: 1,
    rotate: 5,
  });
  tl.to(".star", {
    scale: 1,
    duration: 1,
    rotate: -5,
  });

  //   trigger 8 all globe dissappear and calendar appears
  gsap.to(".circleSwarm", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger8`,
    },
    autoAlpha: 0,
  });

  gsap.to(".globe", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger8`,
    },
    autoAlpha: 0,
  });

  gsap.to(".date", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger8`,
    },
    autoAlpha: 1,
    stagger: 0.1,
    duration: 1,
  });

  //   trigger 9 calendar starts to scroll
  gsap.to(".calendarWrapper", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger9`,
      scrub: 1,
    },
    left: "-20%",
  });
  //   trigger 10 calendar dates dissappear, 5/5 celebrates
  gsap.to(".noCircle", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger10`,
    },
    duration: 0.5,
    opacity: 0,
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger10`,
    },
  });

  tl2.to("#circle1", {
    ease: "linear",
    delay: 0.2,
    r: 100,
    duration: 1,
  });
  tl2.to("#circle1", {
    ease: "linear",
    r: 200,
    opacity: 0,
    duration: 1,
  });

  gsap.to("#circle2", {
    ease: "linear",
    delay: 0.2,
    r: 200,
    duration: 3,
    strokeWidth: 12,
    opacity: 0,
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger10`,
    },
  });

  tl3.to("#circle3", {
    ease: "linear",
    delay: 0.2,
    r: 75,
    duration: 1.5,
  });
  tl3.to("#circle3", {
    ease: "linear",
    r: 150,
    opacity: 0,
    duration: 2,
    strokeWidth: 12,
  });

  let tl4 = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger10`,
    },
  });

  tl4.to("#circle4", {
    ease: "linear",
    delay: 0.6,
    r: 225,
    duration: 2.25,
  });
  tl4.to("#circle4", {
    r: 300,
    opacity: 0,
    duration: 1,
    ease: "linear",
  });

  //   trigger 11 only blue dot remains
  gsap.to(".calendarVanish", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger11`,
    },
    duration: 0.5,
    opacity: 0,
  });
  gsap.to("#blueDotCalendar", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger11`,
    },
    delay: 1,
    duration: 1,
    r: 0,
  });

  const starBurst = document.querySelectorAll(".starburst");
  starBurst.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        toggleActions: "play none none reset",
        trigger: `#trigger11`,
      },
      delay: 2,
      duration: 2,
      opacity: 1,
      backgroundColor: `${Math.random() < 0.8 ? "#76C237" : "#0297E4"}`,
      x: `${Math.random() < 0.5 ? "-" : "+"}=${Math.random() * 800 + 100}`,
      y: `${Math.random() < 0.5 ? "-" : "+"}=${Math.random() * 800 + 120}`,
    });
  });
  // trigger 12  dots vanish
  starBurst.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        toggleActions: "play none none reset",
        trigger: `#trigger12`,
      },
      duration: 1,
      opacity: 0,
    });
  });
  gsap.to(".sceneWrapper", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger12`,
    },
    delay: 1,
    duration: 2,
    autoAlpha: 1,
  });

  // trigger 13  symbols appear

  gsap.to(".logo", {
    scrollTrigger: {
      toggleActions: "play none none reset",
      trigger: `#trigger13`,
    },
    stagger: 1,
    duration: 1,
    autoAlpha: 1,
  });

  //this is the closing tag
});
