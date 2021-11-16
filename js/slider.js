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
var navItems = document.querySelectorAll('.jl-item-navigator a');
var navCounter = document.querySelector('.jl-navigator-counter span')

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
        navCounter.innerHTML = counterFormater(currentCounter);
    }
}

//Counter remove
var counterRemove = function () {
    if (currentCounter > 1 && currentCounter <= slideTotalItem) {
        currentCounter--
        currentSlide.innerHTML = counterFormater(currentCounter);
        navCounter.innerHTML = counterFormater(currentCounter);
    }
}

//Set active nav
var setActiveNav = function () {
    for (var n = 0; n < navItems.length; n++) {
        let myNavNum = parseInt(navItems[n].getAttribute('data-nav'));

        if (myNavNum === currentCounter) {
            navItems[n].classList.add('jl-item-active');

            anime({
                targets: '.jl-item-active',
                width: 82
            });
        }
    }
}

var changeActive = function () {
    for (var r = 0; r < navItems.length; r++) {
        navItems[r].classList.remove('jl-item-active');

        anime({
            targets: navItems[r],
            width: 20
        });
    }
    setActiveNav();
}

//Actions
totalSlide.innerHTML = counterFormater(slideTotalItem);

anime({
    targets: '.jl-item-active',
    width: 82
});

nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();
});