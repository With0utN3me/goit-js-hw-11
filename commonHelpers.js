import{i as c,S as m}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector("#search-input"),f=document.querySelector(".form"),n=document.querySelector(".image-list"),d="https://pixabay.com/api/?";let p={};f.addEventListener("submit",o=>{if(o.preventDefault(),a.value.trim()==="")return c.error({message:"Input should't be blank!",position:"topRight"});p=new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(a.value.trim()),image_type:"photo",orientation:"horizontal",safesearch:!0}),a.value="",h().then(s=>{if(Object.keys(s.hits).length!==0)n.innerHTML="",g(s);else return n.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>console.log(s))});function h(){return fetch(d+p.toString()).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function g(o){const s=o.hits.map(r=>`
            <li class="list-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
                    <p class="stats">Likes</p>
                    <p class="stats-info">${r.likes}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Views</p>
                    <p class="stats-info">${r.views}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Comments</p>
                    <p class="stats-info">${r.comments}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Downloads</p>
                    <p class="stats-info">${r.downloads}</p>
                </li>
            </ul>
            </li>
        `).join("");n.insertAdjacentHTML("beforeend",s)}let u=new m(".image-list a",{captionsData:"alt",captionDelay:250});u.on("show.simplelightbox",function(){u.enableKeyboard});
//# sourceMappingURL=commonHelpers.js.map
