// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector(".form");
const imageList = document.querySelector(".image-list")

const baseURL = `https://pixabay.com/api/?`;
let searchParams = {}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if(searchInput.value.trim() === ""){
        return iziToast.error({
            message: "Input should't be blank!",
            position: `topRight`,
        });
    }
    else{
        searchParams = new URLSearchParams({
            key: `42308406-6cac9d7b9797eefd79d1793c9`,
            q: encodeURIComponent(searchInput.value.trim()),
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        })
    };
    searchInput.value = "";
    fetchImages()
    .then((images) => {
        if(Object.keys(images.hits).length !== 0){
            imageList.innerHTML = "";
            renderImages(images)
        }
        else {
            imageList.innerHTML = "";
            return iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: `topRight`,
            });
        }
        })
    .catch((error) => console.log(error));
})
function fetchImages() {
    return fetch(baseURL + searchParams.toString())
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
function renderImages(images) {
    const markup = images.hits
    .map((image) => {
        return `
            <li class="list-item">
            <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
                    <p class="stats">Likes</p>
                    <p class="stats-info">${image.likes}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Views</p>
                    <p class="stats-info">${image.views}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Comments</p>
                    <p class="stats-info">${image.comments}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Downloads</p>
                    <p class="stats-info">${image.downloads}</p>
                </li>
            </ul>
            </li>
        `
    })
    .join("");
    imageList.insertAdjacentHTML("beforeend", markup);
}
let gallery = new SimpleLightbox(`.image-list a`,
    {
        captionsData: `alt`,
        captionDelay: 250,
    }); 
    gallery.on('show.simplelightbox', function () {
        gallery.enableKeyboard;
    });