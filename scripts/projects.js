let projectContent = [
    {
        projectId: 1,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'Thumbnail image for Simple Registration Page',
        projectName:'Simple Registration Page',
        projectTec: ["HTML","CSS"],
        projectLink:'projects/register-page/index.html'
    },
    {
        projectId: 2,
        projectImg: 'images/pro-thumb-2.jpg',
        projectImgAlternateText:'Thumbnail image for Tribute Page',
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
        projectImg: 'images/pro-thumb-2.jpg',
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
        projectImg: 'images/pro-thumb-2.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'CRUD Operations',
        projectTec: ["HTML", "CSS","JavaScript","Bootstrap"],
        projectLink:'https://developers.google.com/search/docs/crawling-indexing/special-tags'
    },
    {
        projectId: 7,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Doreen Corporate',
        projectTec: ["HTML", "CSS","JavaScript","Wordpress","JQuery"],
        projectLink:'https://doreen.com/'
    },
    {
        projectId: 8,
        projectImg: 'images/pro-thumb-2.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Fareportal',
        projectTec: ["HTML", "CSS","JavaScript","Wordpress" ],
        projectLink:'https://www.fareportal.com/'
    },
    {
        projectId: 9,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Mindfulness India Summit',
        projectTec: ["HTML", "CSS","JavaScript","Wordpress"],
        projectLink:'https://mindfulnessindiasummit.com/'
    },
    {
        projectId: 10,
        projectImg: 'images/pro-thumb-2.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'MP Birla Cement',
        projectTec: ["HTML", "CSS","JavaScript","Wordpress"],
        projectLink:'https://www.mpbirlacement.com/'
    },
    {
        projectId: 11,
        projectImg: 'images/pro-thumb-1.jpg',
        projectImgAlternateText:'hii images is here',
        projectName:'Doreen Development',
        projectTec: ["HTML", "CSS","JavaScript","Wordpress"],
        projectLink:'https://doreendevelopment.com/'
    }
];

let projectBoxTemplate = "";

oldProject = () =>{
    projectBoxTemplate = "";
    for (let j = 0; j < projectContent.length; j++) {
        let tech = "";
        for (let h = 0; h < projectContent[j].projectTec.length; h++) {   
            tech += '<button>'+ projectContent[j].projectTec[h] +'</button>';
        }
        projectBoxTemplate += '<div class="project-box"><a href="'+ projectContent[j].projectLink +'" target="_blank"><div class="project-img mb-25"><img src='+ projectContent[j].projectImg + ' alt="'+ projectContent[j].projectImgAlternateText +'"></div></a><div class="project-info"><a href="'+ projectContent[j].projectLink +'" target="_blank"><h4 class="project-name mb-25">' + projectContent[j].projectName + '</h4></a><div class="techology-name">'+ tech +'</div></div></div>';
        document.querySelector(".project-wrap").innerHTML = projectBoxTemplate;
    }
}


latestProject = () =>{
    projectBoxTemplate = "";
    for (let j = projectContent.length-1 ; j > 0; j--) {
        let tech = "";
        for (let h = 0; h < projectContent[j].projectTec.length; h++) {   
            tech += '<button>'+ projectContent[j].projectTec[h] +'</button>';
        }
        projectBoxTemplate += '<div class="project-box"><a href="'+ projectContent[j].projectLink +'" target="_blank"><div class="project-img mb-25"><img src='+ projectContent[j].projectImg + ' alt="'+ projectContent[j].projectImgAlternateText +'"></div></a><div class="project-info"><a href="'+ projectContent[j].projectLink +'" target="_blank"><h4 class="project-name mb-25">' + projectContent[j].projectName + '</h4></a><div class="techology-name">'+ tech +'</div></div></div>';
    }
    
    document.querySelector(".project-wrap").innerHTML = projectBoxTemplate;
}

oldProject();


