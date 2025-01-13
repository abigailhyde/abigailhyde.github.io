// Rough Notation
const taglineElement = document.querySelector('#tagline');
const hciElement = document.querySelector('#hci');
const githubButtonHoverElement = document.querySelector('#githubText');
const linkedinButtonHoverElement = document.querySelector('#linkedinText');
const backToTopHoverElement = document.querySelector('#backToTopText');
const homeHoverElement = document.querySelector('#home');
const projectsHoverElement = document.querySelector('#projectsLink');
const contactHoverElement = document.querySelector('#contactLink');
const submitHoverElement = document.querySelector('#submit');
const footerElement = document.querySelector('#footerText');
const byuhElement = document.querySelector('#byuh')
const gtElement = document.querySelector('#gt')

//highlighter colors
// purple: dbcdf0
// blue: C6DEF1
// orange: F7D9C4
// red: F9C6C9
// green: C9E4DE
// pink: F2C6DE

const taglineAnnotation = RoughNotation.annotate(taglineElement, {
    type: 'highlight',
    color: '#dbcdf0',
    padding: 5,
    animationDuration: 2000,
    iterations: 2,
    multiline: true,
});
const hciAnnotation = RoughNotation.annotate(hciElement, {
    type: 'circle',
    color: '#999999',
    padding: 5,
    multiline: true,
});
const byuhAnnotation = RoughNotation.annotate(byuhElement, {
    type: 'highlight',
    color: '#F2C6DE',
    padding: 5,
    multiline: true,
});
const gtAnnotation = RoughNotation.annotate(gtElement, {
    type: 'highlight',
    color: '#e0e065',
    padding: 5,
    multiline: true,
});
const footerAnnotation = RoughNotation.annotate(footerElement, {
    type: 'bracket',
    color: '#999999',
    padding: 5,
    brackets: ['left', 'right'],
});

// Group annotations and show them together
const annotationGroup = RoughNotation.annotationGroup([taglineAnnotation, hciAnnotation, byuhAnnotation,gtAnnotation]);
annotationGroup.show();

footerAnnotation.show();

// The buttons
const linkedinButtonHoverAnnotation= RoughNotation.annotate(linkedinButtonHoverElement, {
    type: 'highlight',
    color: '#C9E4DE',
    padding: 5,
});
const githubinButtonHoverAnnotation = RoughNotation.annotate(githubButtonHoverElement, {
    type: 'highlight',
    color: '#C9E4DE',
    padding: 5,
});
const backToTopHoverAnnotation = RoughNotation.annotate(backToTopHoverElement, {
    type: 'highlight',
    color: '#C9E4DE',
    padding: 5,
});
const homeHoverAnnotation = RoughNotation.annotate(homeHoverElement, {
    type: 'box',
    color: '#999999',
    padding: 5,
});
const projectsHoverAnnotation = RoughNotation.annotate(projectsHoverElement, {
    type: 'box',
    color: '#999999',
    padding: 5,
});
const contactHoverAnnotation = RoughNotation.annotate(contactHoverElement, {
    type: 'box',
    color: '#999999',
    padding: 5,
});
const submitHoverAnnotation = RoughNotation.annotate(submitHoverElement, {
    type: 'highlight',
    color: '#F7D9C4',
    padding: 5,
});

// linkedin button animation
linkedinButtonHoverElement.addEventListener('mouseover', () => {
    linkedinButtonHoverAnnotation.show(); // Show annotation on hover
});
linkedinButtonHoverElement.addEventListener('mouseout', () => {
    linkedinButtonHoverAnnotation.hide(); // Hide annotation when hover ends
});

// github button animation
githubButtonHoverElement.addEventListener('mouseover', () => {
    githubinButtonHoverAnnotation.show(); // Show annotation on hover
});
githubButtonHoverElement.addEventListener('mouseout', () => {
    githubinButtonHoverAnnotation.hide(); // Hide annotation when hover ends
});

// back to top button animation
backToTopHoverElement.addEventListener('mouseover', () => {
    backToTopHoverAnnotation.show(); // Show annotation on hover
});
backToTopHoverElement.addEventListener('mouseout', () => {
    backToTopHoverAnnotation.hide(); // Hide annotation when hover ends
});

// home button animation
homeHoverElement.addEventListener('mouseover', () => {
    homeHoverAnnotation.show(); // Show annotation on hover
});
homeHoverElement.addEventListener('mouseout', () => {
    homeHoverAnnotation.hide(); // Hide annotation when hover ends
});

// projects button animation
projectsHoverElement.addEventListener('mouseover', () => {
    projectsHoverAnnotation.show(); // Show annotation on hover
});
projectsHoverElement.addEventListener('mouseout', () => {
    projectsHoverAnnotation.hide(); // Hide annotation when hover ends
});

// contact button animation
contactHoverElement.addEventListener('mouseover', () => {
    contactHoverAnnotation.show(); // Show annotation on hover
});
contactHoverElement.addEventListener('mouseout', () => {
    contactHoverAnnotation.hide(); // Hide annotation when hover ends
});

// submit button animation
submitHoverElement.addEventListener('mouseover', () => {
    submitHoverAnnotation.show(); // Show annotation on hover
});
submitHoverElement.addEventListener('mouseout', () => {
    submitHoverAnnotation.hide(); // Hide annotation when hover ends
});

// Smooth scrolling for navigation links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Back to Top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});