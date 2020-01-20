let currentlySelected = 'homeline';
let timeline = gsap.timeline();

const toggleClasses = (eleOne, eleTwo, className) => {
  eleOne.classList.remove(className);
  eleTwo.classList.add(className);
};

const select = ele => document.querySelector(ele);
const selectAll = ele => document.querySelectorAll(ele);

// Animations
const moveCircle = yVal => timeline.to('.circle', 0.2, { y: yVal });
const fromLineAnimation = target => timeline.to(target, 0.3, { width: '25px' });

const toLineAnimation = target => timeline.to(target, 0.3, { width: '0px' });

const projectsAnimationIn = target =>
  timeline.to(target, 0.25, { x: 20, opacity: 1, stagger: 0.3 });

const projectsAnimationOut = target => {
  timeline.to(target, 0.25, {
    x: -20,
    opacity: 0,
    stagger: -0.3
  });
};

const slideDown = target => {
  timeline.to(target, 0.3, {
    y: 80
  });
};

const slideUp = target => {
  timeline.to(target, 0.3, {
    y: 0
  });
};
// let lines = document.querySelectorAll('.line');
let aside = document.querySelector('aside');
let body = aside.getBoundingClientRect().top;
let spans = document.querySelectorAll('.nav-option');

spans.forEach(span => {
  span.addEventListener('click', e => {
    if (currentlySelected === 'projectline') {
      projectsAnimationOut('.project');
      toLineAnimation(`#${currentlySelected}`);
      slideUp('#contact-tag');
    }
    toLineAnimation(`#${currentlySelected}`);
    //33 is padding from top... def a better way than just hard coding but i'm too lazy right now.
    // need to figure out the height of slideDown function instead of hard coding as well...
    moveCircle(e.target.offsetTop - 123);
    currentlySelected = e.target.previousElementSibling.id;
    fromLineAnimation(`#${currentlySelected}`);
    if (currentlySelected === 'projectline') {
      slideDown('#contact-tag');
      projectsAnimationIn('.project');
    }
  });
});

fromLineAnimation('#homeline');
