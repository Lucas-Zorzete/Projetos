const toggleColors = document.getElementById('toggleColors');
const toggleSaturated = document.getElementById('toggleSaturated');
const toggleSize = document.getElementById('toggleSize');
const toggleBold = document.getElementById('toggleBold');
const toggleContrast = document.getElementById('toggleContrast');

const boxScroll = document.getElementById('boxView');

toggleColors.addEventListener('click', function() {
    document.body.classList.toggle('inverted');
});

toggleSaturated.addEventListener('click', function() {
    document.body.classList.toggle('saturated');
});

toggleSize.addEventListener('click', function() {
    document.body.classList.toggle('font-size');
    boxScroll.style.overflowY = "auto";
}); 

toggleBold.addEventListener('click', () => {
    document.body.classList.toggle('font-bold');
});

toggleContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// LEITOR DE SITES
let leitorAtivo = false;

const readerBtn = document.getElementById('reader');
readerBtn.addEventListener('click', () => {
    leitorAtivo = !leitorAtivo;
    const readerWarning = document.getElementById('readerWarning');

    if (leitorAtivo) {
        readerBtn.style.backgroundColor = "#d1d1d1";
        readerWarning.style.opacity = "1";
        setTimeout(() => {
            readerWarning.style.opacity = "0"
        }, 3000);
    } else {
        readerBtn.style.backgroundColor = "";
    }
});

// detecta a seleção e fala automaticamente
function handleTextSelection() {
    if (!leitorAtivo) return;

    const text = window.getSelection().toString().trim();

    if (text.length > 0) {
        window.speechSynthesis.cancel(); // para qualquer leitura anterior
        const speak = new SpeechSynthesisUtterance(text);
        speak.lang = 'pt-BR';
        speak.rate = 1;
        speak.pitch = 1;

        window.speechSynthesis.speak(speak);
    }
}
document.addEventListener('mouseup', handleTextSelection);
document.addEventListener('touchend', handleTextSelection);
