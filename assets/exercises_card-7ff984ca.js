import{a as f,i as p}from"./vendor-ce9f25a7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const L=document.querySelector(".open-mobile-menu-btn"),S=document.querySelector(".close-mobile-menu-btn"),y=document.querySelector(".mobile-menu-wrapper");L.addEventListener("click",function(){y.classList.add("is-open")});S.addEventListener("click",function(){y.classList.remove("is-open")});const x="https://energyflow.b.goit.study/api";f.defaults.baseURL=x;async function P(){return(await f.get("/quote")).data}async function E(e,{email:s,rate:r,comment:n}){return await f.patch(`/exercises/${e}/rating`,{rate:r,email:s,review:n})}const q=document.getElementById("form-close-btn"),m=document.querySelector(".backdrop"),$=document.querySelector("#user-email"),k=document.getElementById("user-comment"),B=document.querySelector(".form-send-btn");q.addEventListener("click",()=>{m.classList.remove("is-open")});const A=document.querySelector(".rating-wrapper"),v=document.querySelector(".rating-star-value"),i={rate:0,email:"",comment:""};A.addEventListener("click",e=>{const s=document.querySelectorAll(".rating-star-icons");i.rate=e.target.dataset.id;for(let r=0;r<5;r++)r<i.rate?(s[r].style.fill="#EEA10C",v.textContent=i.rate===void 0?"0.0":`${i.rate}.0`):(s[r].style.fill="rgba(27, 27, 27, 0.20)",v.textContent=i.rate===void 0?"0.0":`${i.rate}.0`)});let h=null;const I=document.querySelector(".backdrop-form");function F(e){h=e,m.classList.add("is-open")}I.addEventListener("submit",O);async function O(e){if(e.preventDefault(),i.email=$.value.trim(),i.comment=k.value.trim(),i.email!==""&&i.rate!==0){B.disabled=!1;try{const s=await E(h,i);p.success({message:"Your rating is accepted",position:"topRight",color:"green"}),m.classList.remove("is-open")}catch(s){p.error({message:`${s.message}`,position:"topRight",color:"red"}),m.classList.remove("is-open")}}}const d="favourite",M=e=>{localStorage.setItem(d,JSON.stringify(e))},R=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(s){console.log(s.message)}},w=e=>{const s=R(d).filter(r=>r._id!==e);localStorage.removeItem(d),localStorage.setItem(d,JSON.stringify(s))},u=document.querySelector(".exr-card-backdrop");let c=!1,a=[],b=JSON.parse(localStorage.getItem("favourite"));b&&b.forEach(e=>{a[0]||(a[0]=e),a.push(e)});function l(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function _(e,s=!1){c=s,c||a.forEach(r=>{r._id===e._id&&(c=!0)}),C(e),u.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),c===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>`)}function C(e){const s=`
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
              <use href="../images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="../images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="../images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="../images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="../images/icon.svg#icon-star"></use>
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
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="give-rating-btn">Give a rating</button>
      </div>
    </div>
</div>`;u.innerHTML=s;const r=document.querySelectorAll(".star-rating-icon");for(let t=0;t<Math.round(e.rating);++t)r[t].style.fill="#eea10c";const n=document.querySelector(".add-favourite-btn");n.addEventListener("click",function(){c?(w(e._id),n.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>`,c=!1):(a.push(e),M(a),n.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>`,c=!0)}),document.getElementById("close-card").addEventListener("click",()=>{u.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{u.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),F(e._id)})}export{d as L,R as a,P as g,_ as h,w as r,M as s};
//# sourceMappingURL=exercises_card-7ff984ca.js.map
