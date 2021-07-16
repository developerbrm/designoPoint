let options = {
  root: null,
  rootMargin: "-100px",
};

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const { target } = entry;
      const { dataset } = target;

      const delay = dataset["delay"] || 10;

      target.style.animation = `${dataset["animName"]} ${
        dataset["duration"] || "1"
      }s ${dataset["timingFunction"] || "ease"} ${dataset["delay"] || "0"}s forwards`;
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

const selectors = [`[data-animate]`, `[data-anim-name]`];

const elements = selectors.map((selector) =>
  [...document.querySelectorAll(selector)]
);

elements.flat(Infinity).forEach((element) => {
  observer.observe(element);
});
