let nextButton = document.querySelector('.next')
let prevButton = document.querySelector('.prev')
let imgSlader = document.querySelectorAll('li')
let arrOfImages = [...imgSlader]
for (let i = 0; i < arrOfImages.length; i++) {
    arrOfImages[i].style.order = i
}
let currentOrder = 0
nextButton.addEventListener('click' , function(){
    arrOfImages[currentOrder].style.order = currentOrder
    currentOrder = (currentOrder + 1) % arrOfImages.length
    if (currentOrder === 1){
        arrOfImages[0].style.order = 1
    }
    arrOfImages[currentOrder].style.order = 0
})
prevButton.addEventListener('click' , function(){
    if(currentOrder === 0){
        arrOfImages[5].style.order = 0
        arrOfImages[0].style.order = 1
    }
    currentOrder = (currentOrder - 1 + arrOfImages.length) % arrOfImages.length;
    if (arrOfImages[currentOrder + 1]) {
        arrOfImages[currentOrder + 1].style.order = currentOrder + 1;
    }
    arrOfImages[currentOrder].style.order = 0
})
