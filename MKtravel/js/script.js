const btnMenu = document.querySelector('.btn-menu');
const sideBar = document.getElementById('sideBar');
const menuBtnIcon = btnMenu.querySelector('i');

btnMenu.addEventListener('click', (e) => {
    const isOpen = sideBar.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen /* condição */ ? 'ri-menu-line' /* valor true */ : 'ri-close-line' /* valor false */);
    if (isOpen) {
        sideBar.classList.add('close');
        sideBar.addEventListener (
            'animationend',
            (e) => {
                sideBar.classList.remove('open');
                sideBar.classList.remove('close');
            },
            { once: true }
        );
    } else {
        sideBar.classList.add('open');
    }
});

function scrollAbout() {
    const sectionAbout = document.getElementById('about');
    sectionAbout.scrollIntoView({behavior: 'smooth'});
}

function scrollItems() {
    const sectionItems = document.getElementById('items');
    sectionItems.scrollIntoView({behavior: 'smooth'});
}

function scrollBlog() {
    const sectionBlog = document.getElementById('blog');
    sectionBlog.scrollIntoView({behavior: 'smooth'});
}

function scrollDown() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({behavior: 'smooth'});
}