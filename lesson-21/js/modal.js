import { galleryItems } from "./gallery-items.js"
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const bntClose = document.querySelector('.bnt-close')
const bigImgUrl = document.querySelector('.module-img')
const gallery = document.querySelector('.gallery')
let curentIndex = 0;
gallery.addEventListener('click' , event => {
    const imgClick = event.target
    if (imgClick.tagName !== 'IMG') return;
    const numberOfImg = Number(imgClick.dataset.index);
    bigImgUrl.src = galleryItems[numberOfImg].original
    bigImgUrl.alt = galleryItems[numberOfImg].description
    bigImgUrl.onload = () => {
      document.querySelector('.backdrop').style.display = 'flex'
  };
  document.querySelector('.modale').style.setProperty('--content' , `"${galleryItems[numberOfImg].description}"`)
  curentIndex = numberOfImg
})
bntClose.addEventListener('click' , () => {
    document.querySelector('.backdrop').style.display = 'none'
})
nextBtn.addEventListener('click' , () => {
  curentIndex += 1
  if(curentIndex === Array.from(galleryItems).length ){
      curentIndex = 0
  }
  console.log(curentIndex)
  bigImgUrl.src = `${galleryItems[curentIndex].original}`
  bigImgUrl.alt = `${galleryItems[curentIndex].description}`
  document.querySelector('.modale').style.setProperty('--content' , `"${galleryItems[curentIndex].description}"`)
 })
  prevBtn.addEventListener('click' , () => {
   curentIndex -= 1
     if(curentIndex < 0){
   curentIndex = Array.from(galleryItems).length - 1
    }
   console.log(curentIndex)
   bigImgUrl.src = `${galleryItems[curentIndex].original}`
   bigImgUrl.alt = `${galleryItems[curentIndex].description}`
   document.querySelector('.modale').style.setProperty('--content' , `"${galleryItems[curentIndex].description}"`)
  })
document.addEventListener('keydown' , e => {
    if(e.key === 'ArrowRight'){nextBtn.click()}
    else if(e.key === 'ArrowLeft'){prevBtn.click()}
})