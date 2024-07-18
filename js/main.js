// Hero Images
const images = [
    // './images/hero/hero-sm.webp',
    // './images/hero/hero-sm.webp',
    './images/hero/1.webp',
    './images/hero/3.webp',
    './images/hero/7.webp',
    './images/hero/4.webp',
    './images/hero/2.webp',
    './images/hero/5.webp',
    './images/hero/6.webp',
];

const imageElement = document.getElementById('hero-image');
let currentIndex = 0;

function changeImage() {
    imageElement.style.opacity = 1;
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


// Sidebar Code
const toggleBtn = document.getElementById('toggleBtn');
const toggleBtnText = document.getElementById('toggleBtnText');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

toggleBtnText.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

document.addEventListener('click', (event) => {
    const target = event.target;
    const isSidebar = target === sidebar || sidebar.contains(target);
    const isToggleBtn = target === toggleBtn;
    const isToggleBtnText = target === toggleBtnText;

    if (!isSidebar && !isToggleBtn && !isToggleBtnText && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});


// Scroll To Animation

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      console.error(`Section with id '${sectionId}' not found.`);
      return;
    }

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }