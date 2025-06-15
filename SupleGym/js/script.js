document.addEventListener('DOMContentLoaded', function () {
    // Carrossel 1: Imagens com translateX
    const transformCarousel = document.querySelector('.transform-carousel');
    const transformSlides = Array.from(transformCarousel.children);
    const btnPrevTransform = document.querySelector('.carousel-button.prev');
    const btnNextTransform = document.querySelector('.carousel-button.next');
    let currentIndex = 0; // O slide inicial é o primeiro (índice 0)
    const intervalTime = 3000; // Tempo em milissegundos para o autoplay (3 segundos)
    let autoplayInterval; // Variável para armazenar o ID do intervalo do autoplay

    // Função para atualizar a posição do carrossel
    function updateTransformCarousel() {
        const slideWidth = transformSlides[0].getBoundingClientRect().width;
        transformCarousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // --- Funções para navegação manual e autoplay ---

    // Avança para o próximo slide
    const goToNextSlide = () => {
        currentIndex = (currentIndex + 1) % transformSlides.length;
        updateTransformCarousel();
    };

    // Volta para o slide anterior
    const goToPrevSlide = () => {
        currentIndex = (currentIndex - 1 + transformSlides.length) % transformSlides.length;
        updateTransformCarousel();
    };

    // --- Autoplay ---

    // Inicia o autoplay
    const startAutoplay = () => {
        autoplayInterval = setInterval(goToNextSlide, intervalTime);
    };

    // Para e reinicia o autoplay (útil ao clicar nos botões)
    const resetAutoplay = () => {
        clearInterval(autoplayInterval); // Limpa o intervalo atual
        startAutoplay(); // Inicia um novo intervalo
    };

    // --- Event Listeners dos Botões ---

    btnNextTransform.addEventListener('click', () => {
        goToNextSlide(); // Avança o slide
        resetAutoplay(); // Reinicia o autoplay
    });

    btnPrevTransform.addEventListener('click', () => {
        goToPrevSlide(); // Volta o slide
        resetAutoplay(); // Reinicia o autoplay
    });

    // --- Event Listeners de Redimensionamento e Inicialização ---

    // Ajusta o carrossel quando a janela é redimensionada
    window.addEventListener('resize', () => {
        updateTransformCarousel();
        resetAutoplay(); // Reinicia o autoplay para garantir a continuidade
    });

    // Chamada inicial para configurar o carrossel e iniciar o autoplay
    updateTransformCarousel();
    startAutoplay();
});

function openSideBar() {
    const sideBar = document.getElementById('sideBar');
    sideBar.style.display = "block";
}
function closeSideBar() {
    const sideBar = document.getElementById('sideBar');
    sideBar.style.display = "none";
}

function openView() {
    const view = document.getElementById('view');
    view.style.display = "block";
}

function closeView() {
    const view = document.getElementById('view');
    view.style.display = "none";
}

// MICROFONE
const micBtn = document.getElementById('mic-btn');
const input = document.getElementById('input-search');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    micBtn.addEventListener('click', () => {
        recognition.start();
        micBtn.classList.add('recording');
    });

    recognition.addEventListener('result', (event) => {
        const text = event.results[0][0].transcript;
        input.value = text;
    });

    recognition.addEventListener('end', () => {
        micBtn.classList.remove('recording');
    });
};

// MICROFONE RESPONSIVIDADE
const micBtnRes = document.getElementById('mic-btn-responsive');
const inputRes = document.getElementById('input-search-responsive');

const SpeechRecognitionRes = window.SpeechRecognitionRes || window.webkitSpeechRecognition;

if (SpeechRecognitionRes) {
    const recognition = new SpeechRecognitionRes();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    micBtnRes.addEventListener('click', () => {
        recognition.start();
        micBtnRes.classList.add('recording');
    });

    recognition.addEventListener('result', (event) => {
        const text = event.results[0][0].transcript;
        inputRes.value = text;
    });

    recognition.addEventListener('end', () => {
        micBtnRes.classList.remove('recording');
    });
};

// ACESSIBILIDADE COM ATALHOS DE TECLADO
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();

    const keyToButtom = {
        'm': 'mic-btn',
        'e': 'eye-view',
        'c': 'close-btn',
        '1': 'toggleColors',
        '2': 'toggleSaturated',
        '3': 'toggleSize',
        '4': 'reader',
        '5': 'toggleBold',
        '6': 'toggleContrast',
    };

    const buttonId = keyToButtom[key];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.click();
        }
    }
});