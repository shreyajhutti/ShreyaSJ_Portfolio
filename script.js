$(document).ready(function(){
    
    let menu = document.querySelector('.menu');
    let cancel = document.querySelector('.cancel');
    let mobileNav = document.querySelector('.mobile-nav');

    menu.addEventListener('click',function(){
        mobileNav.classList.add('open');
    });
    cancel.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });
})
