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