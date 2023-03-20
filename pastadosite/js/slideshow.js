


let time = 3000,
currentImageIndex = 0,
images = document.querySelectorAll('#slider img');


function nextImage(){

    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++;

    if(currentImageIndex >= images.length){
        currentImageIndex = 0
    }
    images[currentImageIndex].classList.add('selected')
}

function start(){
    setInterval( () => {
        nextImage();
    }, time)
}
window.addEventListener('load',start);
