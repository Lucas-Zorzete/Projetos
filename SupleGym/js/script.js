document.addEventListener('DOMContentLoaded', function () {
    //  Carrossel 1: Imagens com translateX
    const transformCarousel = document.querySelector('.transform-carousel');
    const transformSlides = Array.from(transformCarousel.children);
    const btnPrevTransform = document.querySelector('.carousel-button.prev');
    const btnNextTransform = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateTransformCarousel() {
        const slideWidth = transformSlides[0].getBoundingClientRect().width;
        transformCarousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    btnPrevTransform.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % transformSlides.length;
        updateTransformCarousel();
    });

    btnNextTransform.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + transformSlides.length) % transformSlides.length;
        updateTransformCarousel();
    });

    window.addEventListener('resize', updateTransformCarousel);
    updateTransformCarousel();
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