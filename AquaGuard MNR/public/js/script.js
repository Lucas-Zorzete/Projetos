const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cards = document.querySelector('.box-news');
const items = document.querySelectorAll('.accordion-item');
const btnUp = document.getElementById('btn-up');
const containerHeader = document.getElementById('container-header');

prev.addEventListener('click', () => {
    cards.scrollBy({
        left: -370,
        behavior: "smooth",
    });
});

next.addEventListener('click', () => {
    cards.scrollBy({
        left: 370,
        behavior: "smooth",
    });
});

items.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
            
        items.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });  
});

btnUp.addEventListener('click', () => {
    containerHeader.scrollIntoView({behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    if (window.scrollY > 50) {
        container.classList.add('shrink');
    } else {
        container.classList.remove('shrink');
    }
});