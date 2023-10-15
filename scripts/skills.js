let skillContent = [{
    skillId: 1,
    skillIcon: '<i class="fa-brands fa-html5"></i>',
    skillText: "HTML"
}, {
    skillId: 2,
    skillIcon: '<i class="fa-brands fa-css3-alt"></i>',
    skillText: "CSS"
}, {
    skillId: 3,
    skillIcon: '<i class="fa-brands fa-sass"></i>',
    skillText: "SASS"
}, {
    skillId: 4,
    skillIcon: '<i class="fa-brands fa-less"></i>',
    skillText: "Less"
}
, {
    skillId: 5,
    skillIcon: '<i class="fa-brands fa-bootstrap"></i>',
    skillText: "Bootstrap"
}, {
    skillId: 6,
    skillIcon: '<i class="fa-brands fa-js"></i>',
    skillText: "Javascript"
}, {
    skillId: 7,
    skillIcon: '<i class="fa-brands fa-square-js"></i>',
    skillText: "JQuery"
}, {
    skillId: 8,
    skillIcon: '<i class="fa-brands fa-wordpress"></i>',
    skillText: "Wordpress"
}, {
    skillId: 9,
    skillIcon: '<i class="fa-brands fa-react"></i>',
    skillText: "React"
}, {
    skillId: 10,
    skillIcon: '<i class="fa-brands fa-git-alt"></i>',
    skillText: "Git"
}, {
    skillId: 11,
    skillIcon: '<i class="fa-brands fa-github-alt"></i>',
    skillText: "GitHub"
}

],
skillBoxTemplate = "";
for (let l = 0; l < skillContent.length; l++) skillBoxTemplate += '<div class="skills-icon-box mb-50"><div class="skills-icon">' + skillContent[l].skillIcon + "</div><h3>" + skillContent[l].skillText + "</h3></div>";
document.querySelector(".skills-icon-wrap").innerHTML = skillBoxTemplate;