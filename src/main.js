// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import renderImages from "./js/render-functions"
import fetchImages from "./js/pixabay-api";

export {searchParams, baseURL, loader, gallery, imageList, searchInput};

const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector(".form");
const imageList = document.querySelector(".image-list")
const loader = document.querySelector(".loader");

const baseURL = `https://pixabay.com/api/?`;
let searchParams = {}

let gallery = new SimpleLightbox(`.image-list a`,
    {
        captionsData: `alt`,
        captionDelay: 250,
    }); 
    gallery.on('show.simplelightbox', function () {
        gallery.enableKeyboard;
    });

searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if(searchInput.value.trim() === ""){
        return iziToast.error({
            message: "Input should't be blank!",
            position: `topRight`,
        });
    }
    else{
        loader.classList.remove("hidden");
        searchParams = new URLSearchParams({
            key: `42308406-6cac9d7b9797eefd79d1793c9`,
            q: encodeURIComponent(searchInput.value.trim()),
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        })
    };
    fetchImages()
    .then((images) => {
        if(Object.keys(images.hits).length !== 0){
            imageList.innerHTML = "";
            renderImages(images)
        }
        else {
            loader.classList.add("hidden");
            imageList.innerHTML = "";
            return iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: `topRight`,
            });
        }
        })
    .catch((error) => console.log(error));
})

