const hamburger = document.querySelector(".hamburger");

console.log(hamburger);

const [firstBar, secondBar, thirdBar] = hamburger.querySelectorAll(".bar");
const mobileNav = document.querySelector(".mobile-nav");

function hamburgerHangler(event) {
    event.preventDefault();

    firstBar.classList.toggle("firstbar");
    secondBar.classList.toggle("secondbar");
    thirdBar.classList.toggle("thirdbar");
    mobileNav.classList.toggle("openMobileNav");
}

hamburger.addEventListener("click", hamburgerHangler);