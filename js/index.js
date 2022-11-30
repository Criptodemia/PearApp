/*==================== LOADER ====================*/
onload = () => {
    const load = document.getElementById('load')

    setTimeout(() => {
        load.style.display = 'none'
    }, 1000)
}
/*==================== MENU SHOW Y HIDDEN ====================*/
const  navMenu = document.getElementById('nav-menu'), 
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 200,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular_container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop:true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
    }, 

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '40px',
    duration: 1000,
    reset: false,
});

sr.reveal(`.about,
           .footer__content, 
           .contact, 
           .services`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.home_container,
            .about.primary`, {
    origin: 'top',
    interval: 200,
    delay: 1000,
})

sr.reveal(` .send__content`, {
    origin: 'left'
})

sr.reveal(` .send__img, 
            .services__container`, {
    origin: 'right'
})
