'use strict';

{
  // 要素が画面の表示範囲に入るときに表示される -----------
  function callback(entries, obs) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.wrapper, .fade-wrap');

  targets.forEach((target) => {
    observer.observe(target);
  });
}
