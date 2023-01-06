export function disableScroll() {
  // To get the scroll position of current webpage
  const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  // if scroll happens, set it to the previous value
  window.onscroll = function () {
    window.scrollTo(LeftScroll, TopScroll);
  };
}

export function enableScroll() {
  window.onscroll = function () {};
}
