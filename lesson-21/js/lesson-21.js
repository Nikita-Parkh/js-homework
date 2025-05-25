import { galleryItems } from "./gallery-items.js"
const gallery = document.querySelector('.gallery')
for (let i = 0 ; i < galleryItems.length ; i++){
    const li = document.createElement('li')
    li.classList.add('gallery__item')
    const img = document.createElement('img')
    img.classList.add('gallery__image')
    img.src = galleryItems[i].preview
    img.alt = galleryItems[i].description
    img.dataset.index = i
    gallery.appendChild(li)
    li.appendChild(img)
}