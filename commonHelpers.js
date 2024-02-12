import{S as p,i as d}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector("#search-input"),f=document.querySelector(".form"),n=document.querySelector(".image-list"),l=document.querySelector(".loader"),h="https://pixabay.com/api/?";let m={},c=new p(".image-list a",{captionsData:"alt",captionDelay:250});c.on("show.simplelightbox",function(){c.enableKeyboard});f.addEventListener("submit",o=>{if(o.preventDefault(),a.value.trim()==="")return d.error({message:"Input should't be blank!",position:"topRight"});l.classList.remove("hidden"),m=new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(a.value.trim()),image_type:"photo",orientation:"horizontal",safesearch:!0}),a.value="",y().then(s=>{if(Object.keys(s.hits).length!==0)n.innerHTML="",g(s);else return l.classList.add("hidden"),n.innerHTML="",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>console.log(s))});function y(){return fetch(h+m.toString()).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function g(o){const s=o.hits.map(r=>`
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
        `).join("");l.classList.add("hidden"),n.insertAdjacentHTML("beforeend",s),c.refresh()}
//# sourceMappingURL=commonHelpers.js.map
