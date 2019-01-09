const hedaerImg = document.querySelector('.header__bg-img');

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);


var yScrollPosition;

function scrollLoop() {

    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.3, hedaerImg);
    

    requestAnimationFrame(scrollLoop);
}
