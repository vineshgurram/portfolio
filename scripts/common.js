$(".btn-wrap .close-btn").click(function () {
  $(this).toggleClass("active");
  $(".nav").toggleClass("active");
});

$(".nav li").click(function () {
  $(".nav").removeClass("active");
  $(".close-btn").toggleClass("active");
});

$("#get-form").click(function(){
  $(".contact-form").toggleClass("active");
})

$(".contact-form .close-btn").click(function(){
  $(".contact-form").removeClass("active");
})