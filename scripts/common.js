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
});

$(".contact-form .close-btn").click(function(){
  $(".contact-form").removeClass("active");
});

$(".sort-project button").click(function(e){
  e.stopPropagation();
  $(".sort-project ul").toggleClass("active");
});

$(document).click(function(){
  $(".sort-project ul").removeClass("active");
});

$(".sort-project ul a").click(function(){
  let txt = $(this).text();
  $(".sort-project button span").text(txt);
  $(".project-wrap").toggleClass("active");
});