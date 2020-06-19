$(document).ready(function () {
  //! Подключения видео фона
  $("#header").vide("./video/Codes", {
    bgColor: "rgba(0, 0, 0, 0.7)",
  });

  //! Подлюченикя прокрутки по #ID
  $("a[rel='about'], a[rel='header']").mPageScroll2id();

  //! WOW Анимация
  new WOW().init();

  $(window).scroll(function () {
    var st = $(this).scrollTop();

    $("#avatar").css({
      transform: "translate(0%, " + st / 3 + "%)",
    });

    $("#header_title").css({
      transform: "translate(0%, " + st / 1.6 + "%)",
    });

    $("#header_subtitle").css({
      transform: "translate(0%, " + st / 1.2 + "%)",
    });

   
  });
});
