// Add interactivity to the navigation menu
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});



// Add interactivity to the hero image
const heroImage = document.querySelector(".pat");
const heroTitle = document.querySelector(".pat h1");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  pat.style.backgroundPositionY = -scrollY * 0.5 + "px";
  patTitle.style.transform = "translateY(" + scrollY * 0.7 + "px)";
});
