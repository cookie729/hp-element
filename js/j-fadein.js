'use strict';

// $(function () {
//   $(window).scroll(function () {
//     $('.fade').each(function () {
//       var pos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > pos - windowHeight + 100) {
//         $(this).addClass('scroll');
//       }
//     });
//   });
// });
$(function () {
  $('.fade').each(function () {
    var pos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > pos - windowHeight + 100) {
      $(this).addClass('scroll');
    }
  });

  $(window).scroll(function () {
    $('.fade').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('scroll');
      } else {
        $(this).removeClass('scroll'); // 追加: スクロールから外れたら非表示にする
      }
    });
  });
});
