let projectContent = [
    {
        projectId: 1,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Project Name',
        projectTec: ["html","css","hello"],
    }
];

console.log()

let projectBoxTemplate = "";
for (let i = 0; i < skillContent.length; i++) {
    projectBoxTemplate = '<div class="project-box"><div class="project-img mb-25"><img src=' + projectContent[0].projectImg + ' alt= "'+ projectContent[0].projectImgAlternateText +'"></div><div class="project-info"><h4 class="project-name mb-25">' +  projectContent[0].projectName + '</h4></div>';
}
console.log(projectBoxTemplate);

document.querySelector(".project-wrap").innerHTML = projectBoxTemplate;