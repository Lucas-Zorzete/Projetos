window.alert("Bem vindo! Antes de jogar, ajuste o zoom em 67% da página");


const board = document.getElementById('game-board');
const players = [
    document.getElementById('player1'),
    document.getElementById('player2'),
    document.getElementById('player3'),
    document.getElementById('player4')
];

let currentPlayer = 0;
const scores = [0, 0, 0, 0];

const pairs = [
    ["Marie Curie", "Descoberta do rádio e polônio, pioneira na radioatividade."],
    ["Rosalind Franklin", "Estrutura do DNA (imagem de difração crucial)."],
    ["Ada Lovelace", "Primeira programadora da história."],
    ["Katherine Johnson", "Cálculos orbitais fundamentais para a NASA."],
    ["Dorothy Hodgkin", "Estrutura da penicilina e vitamina B12."],
    ["Barbara McClintock", "Elementos genéticos móveis (genes saltadores)."],
    ["Chien-Shiung Wu", "Experimentos que comprovaram a não conservação da paridade."],
    ["Rachel Carson", "Fundadora da ecologia moderna, impacto dos pesticidas."],
    ["Lise Meitner", "Co-descoberta da fissão nuclear."],
    ["Hedy Lamarr", "Inventora da base do Wi-Fi, GPS e Bluetooth."],
    ["Tu Youyou", "Descoberta de tratamento contra malária (artemisinina)."],
    ["Mae Jemison", "Primeira mulher negra no espaço."],
    ["Jane Goodall", "Estudo pioneiro com chimpanzés."],
    ["Emmy Noether", "Teorema que fundamenta leis de conservação na física."],
    ["Valentina Tereshkova", "Primeira mulher a viajar para o espaço."]
];

let cardArray = [];

pairs.forEach(pair => {
    cardArray.push({ name: pair[0], content: pair[0] });
    cardArray.push({ name: pair[0], content: pair[1] });
});

cardArray = cardArray.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createCard(cardInfo) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = cardInfo.name;

    const inner = document.createElement('div');
    inner.classList.add('card-inner');

    const front = document.createElement('div');
    front.classList.add('card-front');
    front.textContent = '?';

    const back = document.createElement('div');
    back.classList.add('card-back');
    back.textContent = cardInfo.content;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => handleFlip(card));

    return card;
}

function handleFlip(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    checkMatch();
}

function checkMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        disableCards();
        updateScore();
    } else {
        lockBoard = true;
        setTimeout(unflipCards, 1000);
    }
}

function disableCards() {
    firstCard.removeEventListener('click', () => handleFlip);
    secondCard.removeEventListener('click', () => handleFlip);

    resetBoard();
}

function unflipCards() {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');

    nextPlayer();
    resetBoard();
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function nextPlayer() {
    players[currentPlayer].classList.remove('active');
    currentPlayer = (currentPlayer + 1) % 4;
    players[currentPlayer].classList.add('active');
}

function updateScore() {
    scores[currentPlayer]++;
    const span = players[currentPlayer].querySelector('span');
    span.textContent = scores[currentPlayer];
}

function initGame() {
    cardArray.forEach(cardInfo => {
        const card = createCard(cardInfo);
        board.appendChild(card);
    });
}

const hintButton = document.getElementById('hint-button');
const hintPanel = document.getElementById('hint-panel');
const closeHint = document.getElementById('close-hint');
const hintList = document.getElementById('hint-list');

hintButton.addEventListener('click', () => {
    hintPanel.classList.add('active');
});

closeHint.addEventListener('click', () => {
    hintPanel.classList.remove('active');
});

pairs.forEach(pair => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${pair[0]}</strong>: ${pair[1]}`;
    hintList.appendChild(item);
});

initGame();
