/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// navigation adding HTML

function createShowcase() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Showcase';
    li.setAttribute("id", "#element1"); 
    ul.appendChild(li);
};

createShowcase();

function showLink() {
    let liShow = document.getElementById("#element1");
    let a= document.createElement("a");
    a.setAttribute('href', '#section1');
    a.textContent = 'Showcase';
    liShow.appendChild(a);
};

showLink();



function createHowWeDoIt() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'How We Do It';
    li.setAttribute("id", "#element2"); 
    ul.appendChild(li);
};

createHowWeDoIt();

function howLink() {
    let liHow = document.getElementById("#element2");
    let a= document.createElement("a");
    a.setAttribute('href', '#section2');
    a.textContent = 'How We Do It';
    liHow.appendChild(a);
};

howLink();




function createOurProject() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Our Project';
    li.setAttribute("id", "#element3"); 
    ul.appendChild(li);
};

createOurProject();

function projectLink() {
    let liPro = document.getElementById("#element3");
    let a= document.createElement("a");
    a.setAttribute('href', '#section3');
    a.textContent = 'Our Projects';
    liPro.appendChild(a);
};

projectLink();




function createTestimonials() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Testimonials';
    li.setAttribute("id", "#element4"); 
    ul.appendChild(li);
};

createTestimonials();

function testimonialsLink() {
    let liTest = document.getElementById("#element4");
    let a= document.createElement("a");
    a.setAttribute('href', '#section4');
    a.textContent = 'Testimonials';
    liTest.appendChild(a);
};

testimonialsLink();




function createSubscribe() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Subscribe';
    li.setAttribute("id", "#element5");
    ul.appendChild(li);
};

createSubscribe();

function subLink() {
    let liSub = document.getElementById("#element5");
    let a= document.createElement("a");
    a.setAttribute('href', '#section5');
    a.textContent = 'Subscribe';
    liSub.appendChild(a);
};

subLink();






// adding H2 elements

function createTitle() {
    let sectionTitle = document.querySelector("#section1");
    let h2 = document.createElement("h2");
    h2.textContent = 'Our Showcase';
    h2.setAttribute('id', 'our_showcase')
    sectionTitle.appendChild(h2);
    sectionTitle.insertAdjacentElement("afterbegin", h2);
    
};

createTitle();


function howWeDoIt() {
    let sectionTitle = document.querySelector("#section2");
    let h2 = document.createElement("h2");
    h2.textContent = 'How We Do It';
    h2.setAttribute('id', 'how_we_do_it')
    sectionTitle.appendChild(h2);
    sectionTitle.insertAdjacentElement("afterbegin", h2);
    
};

howWeDoIt();


function ourProjects() {
    let sectionTitle = document.querySelector("#section3");
    let h2 = document.createElement("h2");
    h2.textContent = 'Our Projects';
    h2.setAttribute('id', 'our_projects')
    sectionTitle.appendChild(h2);
    sectionTitle.insertAdjacentElement("afterbegin", h2);
};

ourProjects();

function testimonials() {
    let sectionTitle = document.querySelector("#section4");
    let h2 = document.createElement("h2");
    h2.textContent = 'Testimonials';
    h2.setAttribute('id', 'testimonials')
    sectionTitle.appendChild(h2);
    sectionTitle.insertAdjacentElement("afterbegin", h2);
    
};

testimonials();

//events

const section = querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar__menu ul li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach(section => {
        const sectionTop=section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >sectionTop) {
            current = section.getAttribute('id');

        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
        li.classList.add('active')
        }
    })
})
