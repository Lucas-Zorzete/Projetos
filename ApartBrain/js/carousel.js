const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const intervalTime = 3000; // 3 segundos

const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
let currentIndex = 0; // Começa no primeiro slide (índice 0)

// Posiciona os slides lado a lado e ajusta a largura inicial
const setSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    // Atualiza a posição do track para o slide atual
    track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
};

// Chamada inicial para posicionar os slides
setSlidePosition();

// Função para mover para o slide desejado
const moveToSlide = (targetIndex) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + (slideWidth * targetIndex) + 'px)';

    // Remove a classe do slide anterior e adiciona ao novo
    slides[currentIndex].classList.remove('current-slide');
    slides[targetIndex].classList.add('current-slide');
    currentIndex = targetIndex; // Atualiza o índice atual
};

// Configura o slide inicial
slides[0].classList.add('current-slide');

// --- Funções de Navegação ---

// Avança para o próximo slide
const goNextSlide = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) {
        newIndex = 0; // Volta para o primeiro slide se for o último
    }
    moveToSlide(newIndex);
};

// Volta para o slide anterior
const goPrevSlide = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = slides.length - 1; // Vai para o último slide se for o primeiro
    }
    moveToSlide(newIndex);
};

// --- Event Listeners para os botões ---
nextButton.addEventListener('click', () => {
    goNextSlide();
    resetAutoplay(); // Reseta o autoplay ao clicar
});

prevButton.addEventListener('click', () => {
    goPrevSlide();
    resetAutoplay(); // Reseta o autoplay ao clicar
});

// --- Autoplay ---
let autoplayInterval = setInterval(goNextSlide, intervalTime);

// Função para resetar o intervalo do autoplay
const resetAutoplay = () => {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(goNextSlide, intervalTime);
};

// --- Ajuste de Redimensionamento ---
const handleResize = () => {
    setSlidePosition(); // Reposiciona os slides e ajusta o track
    resetAutoplay(); // Reseta o autoplay para evitar pulos
};

window.addEventListener('resize', handleResize);