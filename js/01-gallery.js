import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
// const imageItemsArray = [];
// const galleryImages = galleryItems.map((images) => images);
console.log("it's me");
// console.log(galleryImages);
// console.log(galleryItems);

// const galleryItemEl = document.createElement('div');
// galleryItemEl.classList.add('gallery_item');

// const imageLinkEl = document.createElement('a');
// imageLinkEl.classList.add('gallery__link');
// imageLinkEl.href = `${galleryItems[0].original}`;

// const imageEl = document.createElement('img');
// imageEl.classList.add('gallery__image');
// imageEl.setAttribute('data-source', `${galleryItems[0].original}`);

// imageEl.src = galleryItems[0].preview;
// imageEl.alt = galleryItems[0].description;
// // galleryItemEl.append(imageLinkEl, imageEl);
// imageLinkEl.append(imageEl);
// galleryItemEl.append(imageLinkEl);
// gallery.append(galleryItemEl);

// // imageItemsArray.push(galleryItem);

// console.log(galleryItemEl);
// console.log(imageLinkEl);
// console.log(imageEl);

////////////////////////////////////////////////////////////////////////////

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItemEl = document.createElement('div');
  galleryItemEl.classList.add('gallery_item');

  const imageLinkEl = document.createElement('a');
  imageLinkEl.classList.add('gallery__link');
  imageLinkEl.href = `${original}`;

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery__image');
  imageEl.setAttribute('data-source', `${original}`);

  imageEl.src = preview;
  imageEl.alt = description;
  // // galleryItemEl.append(imageLinkEl, imageEl);
  imageLinkEl.append(imageEl);
  galleryItemEl.append(imageLinkEl);
  return galleryItemEl;
};

const galleryImages = galleryItems.map(createGalleryItem);

console.log(galleryImages);
gallery.append(...galleryImages);

///////////////////////////////////////////////////////////////
function modalImageZoom(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }

  const instance = basicLightbox.create(`
<img
class="gallery__image"
src="${event.target.getAttribute(`data-source`)}"
alt="${event.target.alt}"
/>
`);
  instance.show();
  if (instance.visible()) {
    gallery.addEventListener(`keyup`, (event) => {
      if (event.key === 'Escape') {
        instance.close();
      }
    });
  }
}

// createGallery(galleryImages, gallery);
gallery.addEventListener(`click`, modalImageZoom);
