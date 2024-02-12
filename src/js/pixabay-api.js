import {searchParams, baseURL} from "/main.js"
function fetchImages() {
    return fetch(baseURL + searchParams.toString())
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
export default fetchImages;