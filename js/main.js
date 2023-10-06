// Sidebar Code
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

document.addEventListener('click', (event) => {
    const target = event.target;
    const isSidebar = target === sidebar || sidebar.contains(target);
    const isToggleBtn = target === toggleBtn;

    if (!isSidebar && !isToggleBtn && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Impact Counter
const counters = document.querySelectorAll('.counter');
const targets = [3, 5, 70, 2000]; // Events, Summits, Organizations, Attendees
let animationPlayed = false;

function playCountdownAnimation() {
    if (!animationPlayed) {
        counters.forEach((counter, index) => {
            let currentCount = 0;
            const target = targets[index];
            const increment = Math.ceil(target / 100);

            const updateCounter = () => {
                if (currentCount < target) {
                    currentCount += increment;
                    if (currentCount > target) {
                        currentCount = target;
                    }
                    counter.innerText = currentCount;
                    setTimeout(updateCounter, 10);
                }
            };

            updateCounter();
        });

        animationPlayed = true;
    }
}

window.addEventListener('scroll', () => {
    playCountdownAnimation();
});


// TABS
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and contents
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Add 'active' class to the clicked tab and its content
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        const selectedTabContent = document.getElementById(tabId);
        selectedTabContent.classList.add('active');
    });
});

// By default, click the first tab to display its content
tabs[0].click();

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

// Hero Images
const images = [
    './img/hero/1.webp',
    './img/hero/2.webp',
    './img/hero/3.webp',
    './img/hero/5.webp',
    './img/hero/6.webp',
    './img/hero/7.webp',
];

const imageElement = document.getElementById('hero-image');
let currentIndex = 0;

function changeImage() {
    imageElement.style.opacity = 0.3;
    setTimeout(() => {
        imageElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.style.opacity = 1;
    }, 500);
}

// Initial image change
changeImage();

// Change image every 3 seconds
setInterval(changeImage, 3000);
