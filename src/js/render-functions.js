import {loader, gallery, imageList, searchInput} from "/main.js"
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
    loader.classList.add("hidden");
    imageList.insertAdjacentHTML("beforeend", markup);
    gallery.refresh()
    searchInput.value = "";
}
export default renderImages;