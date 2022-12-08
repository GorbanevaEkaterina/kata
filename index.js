let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const button = document.querySelector('.footer__more_button');
const footer__button = document.querySelector('.footer__brand_button')
button.addEventListener('click', function (evt) {
    evt.preventDefault();
    footer__button.classList.toggle('.button__more');
});
