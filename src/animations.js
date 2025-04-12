import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const section = document.querySelector(".main-top--section");



function animateHeader() {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power3.out"
    }
  });

  tl
    .from(".nav-logo", { opacity: 0, y: -50 })
    .from(".nav-search--input", { opacity: 0, y: -50 }, "-=0.5")
    .from(".nav-items li", { opacity: 0, y: -30, stagger: 0.2 }, "-=0.4")
    .from(".login-signup", { opacity: 0, scale: 0.9 }, "-=0.3");
}


function popupMainTopSection() {
  gsap.fromTo(section, 
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
  );

  gsap.from(".main-top .items", {
    opacity: 0,
    scale:1,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.3,
  });
}


 const animateItemSection = () => {
  const section = document.querySelector(".item-section-1");
  if (!section) return;

 

  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );
};

// Animate new product cards with stagger
 const animateNewItems = (newElements) => {
  gsap.from(newElements, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });
};









export {animateHeader,
  popupMainTopSection,
  animateItemSection,
  animateNewItems,
  
  }
