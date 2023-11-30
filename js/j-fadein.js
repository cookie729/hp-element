'use strict';

$(document).ready(function () {
  // 要素が画面の表示範囲に入るときに表示される -----------
  function callback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass('appear');
        observer.unobserve(entry.target);
      }
    });
  }

  const options = {
    threshold: 0.2,
  };

  var observer = new IntersectionObserver(callback, options);

  $('.wrapper, .fade-wrap').each(function () {
    observer.observe(this);
  });
});
