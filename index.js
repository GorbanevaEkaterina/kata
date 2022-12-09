let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const button = document.querySelector('.footer__more_button');
const footer__button = document.querySelector('.hidden')
button.addEventListener('click', (e)=> {
    footer__button.classList.toggle('button__more');
    if (button.innerText === "Показать всё") {
        button.innerText = "Скрыть";
    } else {
        button.innerText = "Показать всё";
    }
});


