$(".close-btn").click(function () {
  $(this).toggleClass("active");
  $(".nav").toggleClass("active");
});

$(".nav li").click(function () {
  $(".nav").removeClass("active");
  $(".close-btn").toggleClass("active");
});