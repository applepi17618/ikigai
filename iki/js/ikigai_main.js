document.addEventListener("DOMContentLoaded", function() {
  console.log(document.querySelector(".card__content"));
  let swiperCards = new Swiper('.card__content', {
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          600: {
              slidesPerView: 2,
          },
          968: {
              slidesPerView: 3,
          },
      },
  });
});
