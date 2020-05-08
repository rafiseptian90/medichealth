window.onload = init();

function init(){
    SliderContainer = document.querySelector('.slider-container');
    slideItems = document.querySelectorAll('img.image-slider');
    dotsActive = document.querySelectorAll('.dot');
    counter = 0;
    imgWidth = slideItems[0].scrollWidth;

    runInterval = setInterval(() => {
        slider();
    }, 5000);

    clickDots();
}

function slider(){
    if(counter < slideItems.length - 1){
        counter++;
    }
    else{
        counter = 0;
    }

    dotsActive[counter].classList.add('active');
    dotsActive[counter === 0 ? 2 : counter - 1].classList.remove('active');

    SliderContainer.style.transform = `translateX(${-imgWidth * counter}px)`;
}

function clickDots(){
    Array.from(dotsActive).forEach((dot) => {
        dot.addEventListener('click', function(){
            removeActiveClass(dotsActive);
            clearInterval(runInterval);
            dot.classList.add('active');
            counter = this.getAttribute('data-slide') - 1;
            SliderContainer.style.transform = `translateX(${-imgWidth * counter}px)`;
        })
    });
}

function removeActiveClass(dots){
    Array.from(dots).forEach((dot) => {
        dot.classList.remove('active');
    })
}