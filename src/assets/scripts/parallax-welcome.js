const parallaxContainer = document.querySelector('.welcome__parallax');
const layers = Array.from(parallaxContainer.children);

const moveLayers = e=>{

    
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    //console.log(initialX + " " + initialY);
    layers.forEach((layer, i) => {
        const divider = i / 100;
        // console.log(divider);
        const positionX = initialX * divider;
        const positionY = initialY * divider;
        layer.style.transform =`translate(${positionX}px, ${positionY}px)`;
    })
}
window.addEventListener ('mousemove', moveLayers)