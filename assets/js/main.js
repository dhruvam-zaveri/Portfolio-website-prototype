const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled');
  }
});

// For the animation on scroll 
let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };
const elementsToShow = document.querySelectorAll('.scroll-to-show');

function loop() {
  elementsToShow.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('is-visible');
    }
    // else {
    //     el.classList.remove('is-visible');
    // }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

