//Variable
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');

//Page preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);
});

//Contact box 
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

//Opening and closing modal quote 
for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-overlay');
        var modalQuote = document.querySelector('#jl-modal-quote');

        overlay.classList.toggle('jl-is-open');
        modalQuote.classList.toggle('jl-is-open');
        modalQuote.classList.toggle('jl-slide-top-in');
    });
}

//Scroll animation
var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '70%'
});

//Portfolio Slider

//Variable - Slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;

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
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;

nextItem.addEventListener('click', function () {
    var lastItem = sliderListWidth - containerWidth;
    if ((-1 * sliderPos) === lastItem) {
        return;
    }

    sliderPos -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
});

prevItem.addEventListener('click', function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
});