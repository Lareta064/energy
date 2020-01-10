$(document).ready(function() {

    let gumburger = document.querySelector('.fa-bars');
    let aside = document.querySelector('.aside');

    gumburger.addEventListener('click', function(){
        aside.classList.toggle('show');
    });

})
