let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.querySelector("#backbtn");
let nextbtn = document.querySelector("#nextbtn");

// Calculate scroll amount based on screen size
function getScrollAmount() {
    if (window.innerWidth <= 480) {
        return 300; // Smaller scroll for mobile
    } else if (window.innerWidth <= 768) {
        return 500; // Medium scroll for tablet
    } else {
        return 900; // Default scroll for desktop
    }
}

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});

nextbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += getScrollAmount();
});

backbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= getScrollAmount();
});

// Touch swipe support for mobile
let startX;
let scrollLeft;

scrollcontainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - scrollcontainer.offsetLeft;
    scrollLeft = scrollcontainer.scrollLeft;
});

scrollcontainer.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - scrollcontainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast factor
    scrollcontainer.scrollLeft = scrollLeft - walk;
});