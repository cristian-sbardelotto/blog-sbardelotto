export function enableScroll() {
  window.onscroll = () => {};
}

export function disableScroll() {
  window.scrollTo(0, 0);

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
