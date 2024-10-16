//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika diklik
document.querySelector("#home").onclick = () => {
  navbarNav.classList.toggle("active");
};

//ketika diluar sidebar
const home = document.querySelector("#home");

document.addEventListener("click", function (e) {
  if (!home.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
