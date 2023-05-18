import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const paragraphs = document.querySelectorAll(".text");

gsap.registerPlugin(ScrollTrigger);


function removeActive(trigger: Element) {
  paragraphs.forEach((element) => {
    if (element !== trigger) {
      element.classList.remove("active");
    }
  });
}

Array.from(paragraphs).forEach((element, index) =>{
  ScrollTrigger.create({
    trigger: element,
    start: `center ${70 - index * 5}%`,
    end: `bottom ${50 - index * 5}%`,
    onEnter: (self) => removeActive(self.trigger!),
    onEnterBack: (self) => removeActive(self.trigger!),
    toggleClass: 'active'
  })
})

