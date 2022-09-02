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
    li.textContent = 'Showcase';
    // ul.appendChild(document.createTextNode("Showcase"));
    li.setAttribute("id", "element1"); // added line
    ul.appendChild(li);
};

createShowcase();

function createHowWeDoIt() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    li.textContent = 'How We Do It';
    // ul.appendChild(document.createTextNode("Showcase"));
    li.setAttribute("id", "element2"); // added line
    ul.appendChild(li);
};

createHowWeDoIt();

function createOurProject() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    li.textContent = 'Our Project';
    // ul.appendChild(document.createTextNode("Showcase"));
    li.setAttribute("id", "element3"); // added line
    ul.appendChild(li);
};

createOurProject();

function createTestimonials() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    li.textContent = 'Testimonials';
    // ul.appendChild(document.createTextNode("Showcase"));
    li.setAttribute("id", "element4"); // added line
    ul.appendChild(li);
};

createTestimonials();

function createSubscribe() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    li.textContent = 'Subscribe';
    // ul.appendChild(document.createTextNode("Showcase"));
    li.setAttribute("id", "element5"); // added line
    ul.appendChild(li);
};

createSubscribe();

