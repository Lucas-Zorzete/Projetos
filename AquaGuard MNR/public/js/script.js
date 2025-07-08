const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cards = document.querySelector('.box-news');
const items = document.querySelectorAll('.accordion-item');
const btnUp = document.getElementById('btn-up');
const containerHeader = document.getElementById('container-header');
const buttons = document.querySelectorAll('.btn-dropdown-sidebar');
const btnMenu = document.getElementById('btn-menu');
const btnClose = document.getElementById('btn-close');
const sideBar = document.getElementById('sidebar');

btnMenu.addEventListener('click', () => {
    sideBar.style.opacity = 1;
});
btnClose.addEventListener('click', () => {
    sideBar.style.opacity = 0;
});

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

buttons.forEach(button => {
    const menu = button.querySelector('.accordion-sidebar');

    menu.addEventListener('click', () => {
        const isActive = button.classList.contains('active');

        buttons.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            button.classList.add('active');
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