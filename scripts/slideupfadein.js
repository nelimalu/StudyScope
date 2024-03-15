const elementIsVisibleInViewport = (el) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
};


setInterval(() => {
  const elements = document.querySelectorAll('.sufi');

  for (let element of elements) {
    if (elementIsVisibleInViewport(element)) {
      element.classList.add('slide-up-fade-in');
      element.classList.remove('sufi');
    }
  }

}, 1)
