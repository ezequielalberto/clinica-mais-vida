// Acordion Sobre
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const accordionBody = accordion.querySelector('.accordion-body');
        accordionBody.classList.toggle('AcordionAberto');
    })
})