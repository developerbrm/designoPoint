import "./animationObserver.js"

document.body.onscroll = () => {
  const header = document.querySelector("header");

  if (pageYOffset > 250) header.classList.add("drop-shadow");
  else header.classList.remove("drop-shadow");
};
