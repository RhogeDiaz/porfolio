function darkMode() {
    document.body.classList.toggle('dark');
    document.querySelectorAll('img').forEach(img => img.classList.toggle('dark-img'));
}

function $(selector) {
    return document.querySelector(selector);
}

const home = $('#homeNav')
const skills = $('#skillsNav')
const projects = $('#projectsNav')
const contact = $('#contactNav')


