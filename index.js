const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

var typeData = new Typed(".role", {
    strings: [
        "Web Developer",
        "UI-UX Designer",
        "Coder",
        "Graphic Designer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});
