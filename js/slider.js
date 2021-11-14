//Portfolio Slider

//Variable - Slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
const slideTotalItem = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.jl-current-slide');
var totalSlide = document.querySelector('.jl-total-slide');
var currentCounter = 1;

//Getting individual width
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Assign dynamic width
sliderContainer.style.width = containerWidth + 'px';

for (var j = 0; j < sliderItem.length; j++) {
    sliderItem[j].style.width = containerWidth + 'px';

    var sliderItemWidth = sliderItem[j].offsetWidth;
    sliderListWidth += sliderItemWidth;
};

sliderList.style.width = sliderListWidth + 'px';

//Animation Slider onClick

//HANDLERS
var nextSlideAnim = function () {
    var lastItem = sliderListWidth - containerWidth;
    if ((-1 * sliderPos) === lastItem) {
        return;
    }

    sliderPos -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

var prevSlideAnim = function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Counter formater
var counterFormater = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

//Counter add
var counterAdd = function () {
    if (currentCounter >= 0 && currentCounter < slideTotalItem) {
        currentCounter++;
        currentSlide.innerHTML = counterFormater(currentCounter);
    }
}

//Counter remove
var counterRemove = function () {
    if (currentCounter > 1 && currentCounter <= slideTotalItem) {
        currentCounter--
        currentSlide.innerHTML = counterFormater(currentCounter);
    }
}

//Actions
totalSlide.innerHTML = counterFormater(slideTotalItem);

nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
});