const menuBtn = document.querySelector('.menu__btn');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

menuBtn.addEventListener('click', () => {    //add class "active"
    hamburger.classList.add('hamb');   
});

close.addEventListener('click', () => {    //add class "active"
    hamburger.classList.remove('hamb');   
});