// Sponsors slider
const slider = document.querySelector('.slider');
const logos = document.querySelectorAll('.slider img');

let index = 0;

function slide() {
    index++;
    if (index >= logos.length) {
        index = 0;
    }
    const offset = -index * logos[0].clientWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

setInterval(slide, 1000); // Change slide every 5 seconds (adjust as needed)
