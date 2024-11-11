jQuery(function ($) {
  // ハンバーガーメニュー
  $(function () {
      $(".js-hamburger").click(function () {
          $(this).toggleClass("is-open");
          $(".js-drawer").fadeToggle();
      });

      // ドロワーナビのaタグをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
          $(".js-hamburger").removeClass("is-open");
          $(".js-drawer").fadeOut();
      });

      // resizeイベント
      $(window).on('resize', function() {
          if (window.matchMedia("(min-width: 768px)").matches) {
              $(".js-hamburger").removeClass("is-open");
              $(".js-drawer").fadeOut();
          }
      });
  });
});
