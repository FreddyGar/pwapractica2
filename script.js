let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function changeSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active-slide');
}

// Iniciar con el primer slide activo
slides[currentSlide].classList.add('active-slide');
