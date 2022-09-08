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

// function createShowcase() {
//   let ul = document.getElementById("navbar__list");
//   let li = document.createElement("li");
//   // li.textContent = 'Showcase';
//   li.setAttribute("id", "#element1");
//   ul.appendChild(li);
// }

// createShowcase();

// function showLink() {
//   let liShow = document.getElementById("#element1");
//   let a = document.createElement("a");
//   a.setAttribute("href", "#section1");
//   a.textContent = "Showcase";
//   liShow.appendChild(a);
// }

// showLink();

// function createHowWeDoIt() {
//   let ul = document.getElementById("navbar__list");
//   let li = document.createElement("li");
//   // li.textContent = 'How We Do It';
//   li.setAttribute("id", "#element2");
//   ul.appendChild(li);
// }

// createHowWeDoIt();

// function howLink() {
//   let liHow = document.getElementById("#element2");
//   let a = document.createElement("a");
//   a.setAttribute("href", "#section2");
//   a.textContent = "How We Do It";
//   liHow.appendChild(a);
// }

// howLink();

// function createOurProject() {
//   let ul = document.getElementById("navbar__list");
//   let li = document.createElement("li");
//   // li.textContent = 'Our Project';
//   li.setAttribute("id", "#element3");
//   ul.appendChild(li);
// }

// createOurProject();

// function projectLink() {
//   let liPro = document.getElementById("#element3");
//   let a = document.createElement("a");
//   a.setAttribute("href", "#section3");
//   a.textContent = "Our Projects";
//   liPro.appendChild(a);
// }

// projectLink();

// function createTestimonials() {
//   let ul = document.getElementById("navbar__list");
//   let li = document.createElement("li");
//   // li.textContent = 'Testimonials';
//   li.setAttribute("id", "#element4");
//   ul.appendChild(li);
// }

// createTestimonials();

// function testimonialsLink() {
//   let liTest = document.getElementById("#element4");
//   let a = document.createElement("a");
//   a.setAttribute("href", "#section4");
//   a.textContent = "Testimonials";
//   liTest.appendChild(a);
// }

// testimonialsLink();

// function createSubscribe() {
//   let ul = document.getElementById("navbar__list");
//   let li = document.createElement("li");
//   // li.textContent = 'Subscribe';
//   li.setAttribute("id", "#element5");
//   ul.appendChild(li);
// }

// createSubscribe();

// function subLink() {
//   let liSub = document.getElementById("#element5");
//   let a = document.createElement("a");
//   a.setAttribute("href", "#section5");
//   a.textContent = "Subscribe";
//   liSub.appendChild(a);
// }

// subLink();

//event listener for anchor (link)

//SMOOTH BEHAVIOUR

document.querySelectorAll(".navbar__menu a").forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    const id = a.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ADDING NAV + SECTION TITLE

const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
sections.forEach((section) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  h2.textContent = section.getAttribute("data-nav");
  li.appendChild(h2);
  navbarList.appendChild(li);

  h2.addEventListener("click", () => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  });

  const h1 = document.createElement("h1");
  h1.textContent = h2.textContent;
  h1.classList.add("section-title");
  section.prepend(h1);
});

//scroll and highlight nav events

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("The Form Has Been Submitted Successfully");
});

const navLi = document.querySelectorAll(".navbar__menu ul li");

addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY + 68 > sectionTop) {
      current = section.getAttribute("id");
    }
  });
});

navLi.forEach((li) => {
  li.classList.remove("active");
  if () {
    li.classList.add("active");
  }
});

//mobile navigation

const hambIcon = document.querySelector("#hamburger");
const navbarMenu = document.querySelector(".navbar__menu");

// list.forEach((title) => {
//   const li = document.createElement("li");
//   li.textContent = list.title;
//   const a = document.createElement("a");
//   li.appendChild(a);
// });

hambIcon.addEventListener("click", (e) => {
  navbarMenu.classList.toggle("navmenu-active");
  navbarList.classList.toggle("navlist-active");
  console.log("hello");
});
