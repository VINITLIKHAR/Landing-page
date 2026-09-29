let currentIndex = 0;
const shoeImages = document.querySelectorAll('.shoe-img');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const addToCartBtn = document.getElementById('addToCart');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

const shoeNames = ['Classic Runner', 'Sport Edition', 'Urban Style'];

function updateSlide() {
    shoeImages.forEach(function(img) {
        img.classList.remove('active');
    });
    shoeImages[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % shoeImages.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + shoeImages.length) % shoeImages.length;
    updateSlide();
}

function openMenu() {
    menuToggle.classList.add('open');
    mobileMenu.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

function toggleMenu() {
    if (mobileMenu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

rightArrow.addEventListener('click', function() {
    nextSlide();
});

leftArrow.addEventListener('click', function() {
    prevSlide();
});

menuToggle.addEventListener('click', function() {
    toggleMenu();
});

addToCartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showToast(shoeNames[currentIndex] + ' added to cart!');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape') closeMenu();
});

var touchStartX = 0;
var touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});