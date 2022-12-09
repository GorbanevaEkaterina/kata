let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});



const button = document.querySelector('.footer__more_button');
const footer__button = document.querySelector('.hidden');
const arrow__button = document.querySelector('.more__expand');
const arrow__buttonn = document.querySelector('.more__expand_active');
button.addEventListener('click', (e)=> {
    footer__button.classList.toggle('button__more');
    arrow__button.classList.toggle('see');
    arrow__buttonn.classList.toggle('seee');
    if (button.innerText === "Показать всё") {
        arrow__button.style.display = 'none';
        button.innerText = "Скрыть";
    } else {
        button.innerText = "Показать всё";
        arrow__button.style.display = 'block';
    }
});
