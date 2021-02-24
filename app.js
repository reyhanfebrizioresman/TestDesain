const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links .nav-item');
    // Tooggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

    })
}
navSlide()


$(window).scroll(function(){
    if($(window).scrollTop() <= 1000){
      $('.btn-article').addClass('animated wobble');
    } else {
      $('.btn-article').removeClass('animated wobble');
    }
});