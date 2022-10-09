// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryPictures = document.querySelector('.gallery');
const newGalery = galleryItems
    .map(({preview, original, description}) => 
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image" 
            src="${preview}" 
            data-source="${original}"
            alt="${description}" 
          />
        </a>
      </div>`)
    .join('');
    
galleryPictures.insertAdjacentHTML("afterbegin", newGalery);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
    
});
console.log(galleryItems);
