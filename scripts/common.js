$(".close-btn").click(function () {
  $(this).toggleClass("active");
  $(".nav").toggleClass("active");
});


let introSectionImgContent = {
  imgPath : "images/gmail.png",
  imgAlt : "This is an Images.",
}


let introSectionImgTemplate = `<img src="${introSectionImgContent.imgPath}" alt="${introSectionImgContent.imgAlt}">`;

document.querySelector(".about-section")