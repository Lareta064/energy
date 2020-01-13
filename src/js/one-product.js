$(document).ready(function () {
    // Страница one-product скрытие и пока второго блока
    let textall = document.getElementById('textall');
    let textroll = document.getElementById('textroll');
    let textBlock = document.querySelector('.one-product-info');
    let textBlockFull = document.querySelector('.one-product-info-full');

    textall.addEventListener('click', function(){
        textBlock.classList.add('product-info-hide');
        textBlockFull.classList.add('product-info-show');
    });

    textroll.addEventListener('click', function(){
        textBlock.classList.remove('product-info-hide');
        textBlockFull.classList.remove('product-info-show');
    });
});