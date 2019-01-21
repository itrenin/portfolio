const blur = (function(){
    const blurLayer = document.querySelector('.about__form-background'),
          blurContainer = document.querySelector('.about__form');
          //commentsBg = document.querySelector('.about__img-bg');

    
    return {
        set: function(){
            const imgWidth = document.querySelector('.about__img-bg').offsetWidth,
            positionLeft = -blurContainer.offsetLeft,
            positionTop = -blurContainer.offsetTop,
            blurCSS = blurLayer.style;


            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = positionLeft + 'px ' + positionTop + 'px';

            
        }
    }

}());

blur.set();
window.onresize = function(){
    blur.set();
}