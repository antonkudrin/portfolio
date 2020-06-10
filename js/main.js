$(document).ready(function () {

  //! Подключения видео фона
  $("#header").vide("./video/Codes", {
    bgColor: "rgba(0, 0, 0, 0.7)",
  });
  
  $(window).on("load", function () {
    //! Подлюченикя прокрутки по #ID
    $("a[rel='mPageScroll2id'], a[rel='header'], a[rel='portfolio'").mPageScroll2id();
  });

    //! WOW Анимация
    new WOW().init();



});
