import{a as g,i as v}from"./vendor-ce9f25a7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();document.addEventListener("DOMContentLoaded",function(){var e=window.location.href,t=document.getElementById("homeLink"),r=document.getElementById("favoritesLink");e.includes("index.html")?(t.classList.add("active"),r.classList.remove("active")):e.includes("favourite.html")&&(r.classList.add("active"),t.classList.remove("active"))});const L=document.querySelector(".open-mobile-menu-btn"),S=document.querySelector(".close-mobile-menu-btn"),y=document.querySelector(".mobile-menu-wrapper");L.addEventListener("click",function(){y.classList.add("is-open"),document.body.classList.add("not-scrollable")});S.addEventListener("click",function(){y.classList.remove("is-open"),document.body.classList.remove("not-scrollable")});const x="https://energyflow.b.goit.study/api";g.defaults.baseURL=x;async function N(){return(await g.get("/quote")).data}async function E(e,{email:t,rate:r,comment:n}){return await g.patch(`/exercises/${e}/rating`,{rate:r,email:t,review:n})}const q=document.getElementById("form-close-btn"),m=document.querySelector(".backdrop"),k=document.querySelector("#user-email"),B=document.getElementById("user-comment"),$=document.querySelector(".form-send-btn");q.addEventListener("click",()=>{m.classList.remove("is-open")});const I=document.querySelector(".rating-wrapper"),p=document.querySelector(".rating-star-value"),i={rate:0,email:"",comment:""};I.addEventListener("click",e=>{const t=document.querySelectorAll(".rating-star-icons");i.rate=e.target.dataset.id;for(let r=0;r<5;r++)r<i.rate?(t[r].style.fill="#EEA10C",p.textContent=i.rate===void 0?"0.0":`${i.rate}.0`):(t[r].style.fill="rgba(27, 27, 27, 0.20)",p.textContent=i.rate===void 0?"0.0":`${i.rate}.0`)});let h=null;const A=document.querySelector(".backdrop-form");function O(e){h=e,m.classList.add("is-open")}A.addEventListener("submit",F);async function F(e){if(e.preventDefault(),i.email=k.value.trim(),i.comment=B.value.trim(),i.email!==""&&i.rate!==0){$.disabled=!1;try{const t=await E(h,i);v.success({message:"Your rating is accepted",position:"topRight",color:"green"}),m.classList.remove("is-open")}catch(t){v.error({message:`${t.message}`,position:"topRight",color:"red"}),m.classList.remove("is-open")}}}const d="favourite",M=e=>{localStorage.setItem(d,JSON.stringify(e))},w=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t.message)}},C=e=>{const t=w(d).filter(r=>r._id!==e);localStorage.removeItem(d),localStorage.setItem(d,JSON.stringify(t))},u=document.querySelector(".exr-card-backdrop");let c=!1,a=[],b=JSON.parse(localStorage.getItem("favourite"));b&&b.forEach(e=>{a[0]||(a[0]=e),a.push(e)});function l(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function _(e,t=!1){c=t,c||a.forEach(r=>{r._id===e._id&&(c=!0)}),R(e),u.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),c===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>`)}function R(e){const t=`
    <div class="exr-card-cont">
      <button id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="../images/icon.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${l(e.name)}</h3>
      <div class="rating-container">
        <ul class="star-rating-list">
          <li>
            <p class="rating-score">${e.rating}</p>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="../images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="exr-information-container">
        <div class="exr-info-block">
          <p class="info-label">Target</p>
          <p class="exr-info" id="exr-target">${l(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${l(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${l(e.equipment)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Popular</p>
          <p class="exr-info" id="exr-popularity">${e.popularity}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Burned Calories</p>
          <p class="exr-info" id="burned-cal">${e.burnedCalories}/${e.time} min</p>
        </div>
      </div>
      <p class="exr-description">${e.description}</p>
      <div class="buttons-cont">
        <button class="add-favourite-btn">
          Add to favourites
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="give-rating-btn">Give a rating</button>
      </div>
    </div>
</div>`;u.innerHTML=t;const r=document.querySelectorAll(".star-rating-icon");for(let s=0;s<Math.round(e.rating);++s)r[s].style.fill="#eea10c";const n=document.querySelector(".add-favourite-btn");n.addEventListener("click",function(){c?(C(e._id),n.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`,c=!1):(a.push(e),M(a),n.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`,c=!0)}),document.getElementById("close-card").addEventListener("click",()=>{u.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{u.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),O(e._id)})}export{d as L,w as a,N as g,_ as h,C as r,M as s};
//# sourceMappingURL=exercises_card-398ce7be.js.map
