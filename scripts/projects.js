let projectContent = [
    {
        projectId: 1,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'PRl',
        projectTec: 'HTML',
        projectLink:'https://developers.google.com/search/docs/crawling-indexing/special-tags'
    },
    {
        projectId: 2,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'PRl',
        projectTec: 'HTML',
        projectLink:'https://developers.google.com/search/docs/crawling-indexing/special-tags'
    },
    {
        projectId: 3,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'PRl',
        projectTec: ["HTML", "SASS"],
        projectLink:'https://developers.google.com/search/docs/crawling-indexing/special-tags'
    }
];

// let len = projectContent[0].projectTec
// console.log(len.length);

console.log()

let projectBoxTemplate = "";

for (let j = 0; j < projectContent.length; j++) {
    
    let tech = "";
    for (let h = 0; h < projectContent[j].projectTec.length; h++) {   
        tech += '<button>'+ projectContent[j].projectTec[h] +'</button>';
    }
    // document.querySelector(".techology-name").innerHTML = tech;  
    projectBoxTemplate += '<div class="project-box"><a href="'+ projectContent[j].projectLink +'" target="_blank"><div class="project-img mb-25"><img src='+ projectContent[j].projectImg + ' alt="'+ projectContent[j].projectImgAlternateText +'"></div><div class="project-info"><h4 class="project-name mb-25">' +  projectContent[j].projectName + '</h4></a><div class="techology-name">'+ tech +'</div></div></div>';

}
// console.log(projectBoxTemplate);
document.querySelector(".project-wrap").innerHTML = projectBoxTemplate;


