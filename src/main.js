    import {showPagination} from "./pagination";
    import Dom from "./dom";

     export const state = {
        photos: [],
    }

    export function getPhotos(skip, limit) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?_start=${skip}&_limit=${limit}`, {
            headers: {
                "Content-type": "application/json: charset=YTF-8"
            }
        })
            .then((res) => res.json())
            .then((photos) => {
                state.photos = photos;

                Dom.loader.style.display = 'none';
                fillPostList(photos);
                console.log(photos)
            })
    }

     export function closeShowedImage() {
         const mainWrapper = document.querySelector('.mainWrapper')
         const blackCover = document.querySelector('.blackCover')
         const showedImageWrapper = document.querySelector('.showedImageWrapper')

         mainWrapper.removeChild(blackCover)
         mainWrapper.removeChild(showedImageWrapper)
    }

    export function show (index) {
        const clickedPhoto = state.photos[index];

        const blackCover = document.createElement('div');
        blackCover.className = 'blackCover'
        blackCover.onclick = closeShowedImage;

        const showedImageWrapper = document.createElement('div');
        showedImageWrapper.className = 'showedImageWrapper'

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'imageWrapper'

        const closeIcon = document.createElement('span')
        closeIcon.innerHTML = "&#10006";
        closeIcon.className = 'closeIcon';
        closeIcon.onclick = closeShowedImage;

        const showedImage = document.createElement('img')
        showedImage.className = 'showedImage';
        showedImage.src = clickedPhoto.url;

        imageWrapper.appendChild(closeIcon);
        imageWrapper.appendChild(showedImage);
        showedImageWrapper.appendChild(imageWrapper);
        Dom.wrapper.appendChild(showedImageWrapper);
        Dom.wrapper.appendChild(blackCover);
    }

    window.show = show;


     export const createPhotos = (photoItem, index) => `
                    <div onclick="show(${index})" class = "photoWrapper">
                        <div class="post">
                            <img class="clickable" src="${photoItem.url}"> 
                        </div>
                    </div>
                `

     export const fillPostList = (photos) => {
        Dom.photosList.innerHTML = "";

        if (photos.length) {
            photos.forEach((photo, index) => Dom.photosList.innerHTML += createPhotos(photo, index))
        }
    }

     document.addEventListener('DOMContentLoaded', () => showPagination(5000, 15), false);
