let skillContent = [
    {
        skillId: 1,
        skillIcon: '<i class="fa-brands fa-html5"></i>',
        skillText: 'HTML',
    },
    {
        skillId: 2,
        skillIcon: '<i class="fa-brands fa-css3-alt"></i>',
        skillText: 'CSS',
    },
    {
        skillId: 3,
        skillIcon: '<i class="fa-brands fa-sass"></i>',
        skillText: 'SASS',
    },
    {
        skillId: 4,
        skillIcon: '<i class="fa-brands fa-bootstrap"></i>',
        skillText: 'Bootstrap',
    },
    {
        skillId: 5,
        skillIcon: '<i class="fa-brands fa-js"></i>',
        skillText: 'Javascript',
    },
    {
        skillId: 6,
        skillIcon: '<i class="fa-brands fa-square-js"></i>',
        skillText: 'JQuery',
    },
    {
        skillId: 7,
        skillIcon: '<i class="fa-brands fa-wordpress"></i>',
        skillText: 'Wordpress',
    },
    {
        skillId: 8,
        skillIcon: '<i class="fa-brands fa-python"></i>',
        skillText: 'Python',
    }
];


let skillBoxTemplate = "";
for (let i = 0; i < skillContent.length; i++) {
    skillBoxTemplate += '<div class="skills-icon-box mb-50"><div class="skills-icon">' + skillContent[i].skillIcon + '</div><h3>' + skillContent[i].skillText + '</h3></div>';
}

document.querySelector(".skills-icon-wrap").innerHTML = skillBoxTemplate;