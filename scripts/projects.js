let projectContent = [{
    projectId: 1,
    projectImg: "images/register-page-thumbnail.jpg",
    projectImgAlternateText: "Thumbnail image for Registration Page",
    projectName: "Simple Registration Page",
    projectTec: ["HTML", "CSS"],
    projectLink: "projects/register-page/index.html"
}, {
    projectId: 2,
    projectImg: "images/ss-rajamouli.jpg",
    projectImgAlternateText: "Thumbnail image for Tribute Page",
    projectName: "Tribute Page",
    projectTec: ["HTML", "CSS"],
    projectLink: "projects/tribute-page/index.html"
}, {
    projectId: 3,
    projectImg: "images/random-hexcode-generator-thumbnail.jpg",
    projectImgAlternateText: "Thumbnail image for Random Hex Code Generator",
    projectName: "Random Hex Code Generator",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "projects/random-hexcode-generator/index.html"
}, {
    projectId: 4,
    projectImg: "images/random-quote-generator-thumbnail.jpg",
    projectImgAlternateText: "Thumbnail image for",
    projectName: "Random Quote Generator",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "projects/random-quotes-generator/index.html"
}, {
    projectId: 5,
    projectImg: "images/rock-paper-scissor-thumbnail.jpg",
    projectImgAlternateText: "Thumbnail image for Rock Paper Scissors Game",
    projectName: "Rock Paper Scissors Game",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "projects/rock-paper-scissor/index.html"
}, {
    projectId: 6,
    projectImg: "images/crud-operation-thumbnail.jpg",
    projectImgAlternateText: "Thumbnail image for CRUD - Create Read Update Delete Operations",
    projectName: "CRUD Operations",
    projectTec: ["HTML", "JavaScript", "Bootstrap"],
    projectLink: "https://vineshgurram.github.io/crud/"
}, {
    projectId: 7,
    projectImg: "images/doreen-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Doreen Corporate Website",
    projectName: "Doreen Corporate",
    projectTec: ["HTML", "CSS", "JavaScript", "Wordpress"],
    projectLink: "https://doreen.com/"
}, {
    projectId: 8,
    projectImg: "images/fareportal-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Fareportal India",
    projectName: "Fareportal India",
    projectTec: ["HTML", "CSS", "JavaScript", "Wordpress"],
    projectLink: "https://www.fareportal.com/"
}, {
    projectId: 9,
    projectImg: "images/mis-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Mindfulness India Summit",
    projectName: "Mindfulness India Summit",
    projectTec: ["HTML", "CSS", "JavaScript", "Wordpress"],
    projectLink: "https://mindfulnessindiasummit.com/"
}, {
    projectId: 10,
    projectImg: "images/mpbirla-logo.jpg",
    projectImgAlternateText: "Thumbnail image for MP Birla Cement",
    projectName: "MP Birla Cement",
    projectTec: ["HTML", "CSS", "JavaScript", "Wordpress"],
    projectLink: "https://www.mpbirlacement.com/"
}, {
    projectId: 11,
    projectImg: "images/doreen-dev-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Doreen Development",
    projectName: "Doreen Development",
    projectTec: ["HTML", "CSS", "JavaScript", "Wordpress"],
    projectLink: "https://doreendevelopment.com/"
},
{
    projectId: 12,
    projectImg: "images/mytask-app-logo.jpg",
    projectImgAlternateText: "Thumbnail image for MyTask App",
    projectName: "MyTask App",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://vineshgurram.github.io/mytask-app/"
},
{
    projectId: 13,
    projectImg: "images/pro-thumb-2.jpg",
    projectImgAlternateText: "Thumbnail image for Image Gallery",
    projectName: "Image Gallery",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://vineshgurram.github.io/image-gallery/"
}
    , {
    projectId: 14,
    projectImg: "images/calculator-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Calculator",
    projectName: "Calculator",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://vineshgurram.github.io/calculator/"
}, {
    projectId: 15,
    projectImg: "images/property-crm-logo.jpg",
    projectImgAlternateText: "Thumbnail image for PropertyCRM",
    projectName: "PropertyCRM",
    projectTec: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://propertycrm.in/"
}, {
    projectId: 16,
    projectImg: "images/mirania-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Mirania",
    projectName: "Mirania",
    projectTec: ["HTML", "CSS", "JavaScript","Jquery"],
    projectLink: "https://www.mirania.com/"
}, {
    projectId: 17,
    projectImg: "images/tribal-box-studios-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Tribal Box Studio",
    projectName: "Tribal Box Studio",
    projectTec: ["HTML", "CSS", "JavaScript","Jquery"],
    projectLink: "https://www.tribalboxstudio.com/"
}, {
    projectId: 18,
    projectImg: "images/doreen-logo.jpg",
    projectImgAlternateText: "Thumbnail image for Doreen Developments",
    projectName: "Doreen Developments",
    projectTec: ["HTML", "CSS", "JavaScript","Jquery"],
    projectLink: "https://doreendevelopments.com/"
}
]
projectBoxTemplate = "";
oldProject = () => {
    projectBoxTemplate = "";
    for (let e = 0; e < projectContent.length; e++) {
        let t = "";
        for (let r = 0; r < projectContent[e].projectTec.length; r++) t += "<button>" + projectContent[e].projectTec[r] + "</button>";
        projectBoxTemplate += '<div class="project-box" data-scroll><a href="' + projectContent[e].projectLink + '" target="_blank" title="Click here to see Project"><div class="project-img mb-25"><img src=' + projectContent[e].projectImg + ' alt="' + projectContent[e].projectImgAlternateText + '" loading="lazy"></div></a><div class="project-info"><a href="' + projectContent[e].projectLink + '" target="_blank" title="Click here to see Project"><h4 class="project-name mb-25">' + projectContent[e].projectName + '</h4></a><div class="techology-name">' + t + "</div></div></div>", document.querySelector(".project-wrap").innerHTML = projectBoxTemplate
    }
}

latestProject = () => {
    projectBoxTemplate = "";
    for (let e = projectContent.length - 1; e >= 0; e--) {
        let t = "";
        for (let r = 0; r < projectContent[e].projectTec.length; r++) t += "<button>" + projectContent[e].projectTec[r] + "</button>";
        projectBoxTemplate += '<div class="project-box" data-scroll><a href="' + projectContent[e].projectLink + '" target="_blank"><div class="project-img mb-25"><img src=' + projectContent[e].projectImg + ' alt="' + projectContent[e].projectImgAlternateText + '"></div></a><div class="project-info"><a href="' + projectContent[e].projectLink + '" target="_blank"><h4 class="project-name mb-25">' + projectContent[e].projectName + '</h4></a><div class="techology-name">' + t + "</div></div></div>"
    }
    document.querySelector(".project-wrap").innerHTML = projectBoxTemplate;
}

oldProject();