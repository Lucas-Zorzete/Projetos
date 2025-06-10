const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal('.container', {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.guide', {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal('.title', {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal('.scroll', {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal('.follow-box', {
    ...scrollRevealOption,
    delay: 2000,
    origin: "top",
});

ScrollReveal().reveal('.image-1', {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal('.image-3', {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal('.image-2', {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal('.subtitle', {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal('.title-about', {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal('.info-about', {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal('.read-more', {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal('.box-info-footer', {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal('.footer-bar', {
    ...scrollRevealOption,
    origin: "top",
});