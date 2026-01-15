$(function () {
  // 1)메뉴: 마우스 오버 시 서브메뉴 표시
  $(".navi > li").hover(
    function () {
      $(this).find(".submenu").stop().slideDown(200);
    },
    function () {
      $(this).find(".submenu").stop().slideUp(200);
    }
  );
  let idx = 0;
  const $slides = $(".imgslide > a");

  console.log($slides.length);

  $slides.hide().eq(0).show();

  setInterval(function () {
    $slides.eq(idx).fadeOut(600);
    idx = (idx + 1) % $slides.length;
    $slides.eq(idx).fadeIn(600);
  }, 3000);

  $(".notice .open-modal").click(function (e) {
    e.preventDefault();
    $("#modal").addClass("active").attr("aria-hidden", "false");
  });
  $("#closeBtn").click(function (e) {
    $("#modal").removeClass("active").attr("aria-hidden", "true");
  });
  $("#modal").click(function (e) {
    if ($(e.target).is("#modal")) {
      $(this).removeClass("active").attr("aria-hidden", "true");
    }
  });
});
