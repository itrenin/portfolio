//console.log('Это гамбургер')
const hamBtn = document.querySelector('.nav__hamburger');
const clsBtn = document.querySelector('.nav__hamburger--close');
//const hamBtnStyle = getComputedStyle(hamBtn);
//const clsBtnStyle = getComputedStyle(clsBtn);
const fulscreenMenu = document.querySelector('.header__fullscreen-menu');
const wrapper = document.querySelector('.wrapper');

hamBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log('Это гамбургер');

    if( !fulscreenMenu.classList.contains('header__fullscreen-menu--active')
        && !wrapper.classList.contains('wrapper--blocked')){
        fulscreenMenu.classList.add('header__fullscreen-menu--active');
        wrapper.classList.add('wrapper--blocked');
        
        clsBtn.style.display = 'block'; 
        hamBtn.style.display = 'none';  
    }
           
        
});
clsBtn.addEventListener('click', (e)=>{
     e.preventDefault();

     if( fulscreenMenu.classList.contains('header__fullscreen-menu--active')
        && wrapper.classList.contains('wrapper--blocked')){
        fulscreenMenu.classList.remove('header__fullscreen-menu--active');
        wrapper.classList.remove('wrapper--blocked');
        
        clsBtn.style.display = 'none'; 
        hamBtn.style.display = 'block'; 
        } 
});