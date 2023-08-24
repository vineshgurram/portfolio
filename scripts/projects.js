let projectContent = [
    {
        projectId: 1,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Simple Registration Page',
        projectTec: ["HTML","CSS"],
        projectLink:'projects/register-page/index.html'
    },
    {
        projectId: 2,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Tribute Page',
        projectTec: ["HTML","CSS"],
        projectLink:'projects/tribute-page/index.html'
    },
    {
        projectId: 3,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Random Hex Code Generator',
        projectTec: ["HTML", "CSS","JavaScript",],
        projectLink:'projects/random-hexcode-generator/index.html'
    },
    {
        projectId: 4,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Random Quote Generator',
        projectTec: ["HTML", "CSS","JavaScript"],
        projectLink:'projects/random-quotes-generator/index.html'
    },
    {
        projectId: 5,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Rock Paper Scissors Game',
        projectTec: ["HTML", "CSS","JavaScript"],
        projectLink:'https://developers.google.com/search/docs/crawling-indexing/special-tags'
    },
    {
        projectId: 6,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'CRUD Operations',
        projectTec: ["HTML", "CSS","JavaScript","Bootstrap"],
        projectLink:'https://developers.google.com/search/docs/crawling-indexing/special-tags'
    }
];

let projectBoxTemplate = "";

for (let j = 0; j < projectContent.length; j++) {
    let tech = "";
    for (let h = 0; h < projectContent[j].projectTec.length; h++) {   
        tech += '<button>'+ projectContent[j].projectTec[h] +'</button>';
    }
    projectBoxTemplate += '<div class="project-box"><a href="'+ projectContent[j].projectLink +'" target="_blank"><div class="project-img mb-25"><img src='+ projectContent[j].projectImg + ' alt="'+ projectContent[j].projectImgAlternateText +'"></div></a><div class="project-info"><a href="'+ projectContent[j].projectLink +'" target="_blank"><h4 class="project-name mb-25">' + projectContent[j].projectName + '</h4></a><div class="techology-name">'+ tech +'</div></div></div>';
}

document.querySelector(".project-wrap").innerHTML = projectBoxTemplate;


