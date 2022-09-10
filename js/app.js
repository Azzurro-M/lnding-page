// ADDING NAV + SECTION TITLE + CONNECTING NAV TO SESSIONS AND SMOOTH BEHAVIOUR

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

//FORM SUBMISSION EVENT

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("The Form Has Been Submitted Successfully");
});

//SCROLL HIGHLIGHT

const navLi = document.querySelectorAll(".navbar__menu ul li");

addEventListener("scroll", () => {
  let current = "";
  let searching = true;
  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect();
    const sectionHeight = section.clientHeight;

    if (65 < sectionPosition.bottom && searching) {
      searching = false;
      section.classList.add("active");
      navLi.forEach((li) => {
        if (section.dataset.nav === li.textContent) {
          li.classList.add("active");
        }
      });
    } else {
      section.classList.remove("active");
      navLi.forEach((li) => {
        if (section.dataset.nav === li.textContent) {
          li.classList.remove("active");
        }
      });
    }
  });
});

//mobile navigation

const hambIcon = document.querySelector("#hamburger");
const navbarMenu = document.querySelector(".navbar__menu");

hambIcon.addEventListener("click", (e) => {
  navbarMenu.classList.toggle("navmenu-active");
  navbarList.classList.toggle("navlist-active");
  console.log("hello");
});
