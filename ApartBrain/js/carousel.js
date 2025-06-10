const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// Posiciona os slides lado a lado
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

// Função para mover para o slide desejado
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Configura o slide inicial
slides[0].classList.add('current-slide');

// Avança para o próximo slide
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
    } else {
    moveToSlide(track, currentSlide, slides[0]); // Volta ao primeiro slide
    }
});

// Volta para o slide anterior
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
    } else {
    moveToSlide(track, currentSlide, slides[slides.length - 1]); // Vai para o último slide
    }
});

function setSlideWidth() {
    const slideWidth = document.querySelector('.carousel-container').offsetWidth;
    slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
    });
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

window.addEventListener('resize', setSlideWidth);
setSlideWidth(); // Chamada inicial para configurar os slides