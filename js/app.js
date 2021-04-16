let swiper1 = new Swiper('.swiper-container.banner', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
    },

});
let swiper2 = new Swiper('.swiper-container.menu', {
    // Optional parameters
    slidesPerView: 'auto',
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

document.querySelector(".video__play").addEventListener("click", function () {
    document.querySelector(".video__play").style.display = "none";
    document.querySelector(".yt-video").setAttribute("src", "https://www.youtube.com/embed/EGdtKlmD8Kg?autoplay=1");
})