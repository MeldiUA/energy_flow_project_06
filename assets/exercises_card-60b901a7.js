import{a as v,i as g}from"./vendor-ce9f25a7.js";document.addEventListener("DOMContentLoaded",function(){var e=window.location.href,s=document.getElementById("homeLink"),t=document.getElementById("favoritesLink");e.includes("index.html")?(s.classList.add("active"),t.classList.remove("active")):e.includes("favourite.html")&&(t.classList.add("active"),s.classList.remove("active"))});const h=document.querySelector(".open-mobile-menu-btn"),L=document.querySelector(".close-mobile-menu-btn"),b=document.querySelector(".mobile-menu-wrapper");h.addEventListener("click",function(){b.classList.add("is-open"),document.body.classList.add("not-scrollable")});L.addEventListener("click",function(){b.classList.remove("is-open"),document.body.classList.remove("not-scrollable")});const S="https://energyflow.b.goit.study/api";v.defaults.baseURL=S;async function O(){return(await v.get("/quote")).data}async function x(e,{email:s,rate:t,comment:n}){return await v.patch(`/exercises/${e}/rating`,{rate:t,email:s,review:n})}const k=document.getElementById("form-close-btn"),u=document.querySelector(".backdrop"),E=document.querySelector("#user-email"),q=document.getElementById("user-comment"),B=document.querySelector(".form-send-btn");k.addEventListener("click",()=>{u.classList.remove("is-open")});const $=document.querySelector(".rating-wrapper"),f=document.querySelector(".rating-star-value"),o={rate:0,email:"",comment:""};$.addEventListener("click",e=>{const s=document.querySelectorAll(".rating-star-icons");o.rate=e.target.dataset.id;for(let t=0;t<5;t++)t<o.rate?(s[t].style.fill="#EEA10C",f.textContent=o.rate===void 0?"0.0":`${o.rate}.0`):(s[t].style.fill="rgba(27, 27, 27, 0.20)",f.textContent=o.rate===void 0?"0.0":`${o.rate}.0`)});let y=null;const I=document.querySelector(".backdrop-form");function w(e){y=e,u.classList.add("is-open")}I.addEventListener("submit",A);async function A(e){if(e.preventDefault(),o.email=E.value.trim(),o.comment=q.value.trim(),o.email!==""&&o.rate!==0){B.disabled=!1;try{const s=await x(y,o);g.success({message:"Your rating is accepted",position:"topRight",color:"green"}),u.classList.remove("is-open")}catch(s){g.error({message:`${s.message}`,position:"topRight",color:"red"}),u.classList.remove("is-open")}}}const l="favourite",F=e=>{localStorage.setItem(l,JSON.stringify(e))},M=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(s){console.log(s.message)}},C=e=>{const s=M(l).filter(t=>t._id!==e);localStorage.removeItem(l),localStorage.setItem(l,JSON.stringify(s))},d=document.querySelector(".exr-card-backdrop");let r=!1,i=[],p=JSON.parse(localStorage.getItem("favourite"));p&&p.forEach(e=>{i[0]||(i[0]=e),i.push(e)});function c(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function T(e,s=!1,t=!1){r=s,r||i.forEach(n=>{n._id===e._id&&(r=!0)}),R(e,t),d.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),r===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="../images/icon.svg#icon-heart"></use>
          </svg>`)}function R(e,s){const t=`
    <div class="exr-card-cont">
      <button id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="../images/icon.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${c(e.name)}</h3>
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
          <p class="exr-info" id="exr-target">${c(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${c(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${c(e.equipment)}</p>
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
    </div>`;d.innerHTML=t;const n=document.querySelectorAll(".star-rating-icon");for(let m=0;m<Math.round(e.rating);++m)n[m].style.fill="#eea10c";const a=document.querySelector(".add-favourite-btn");a.addEventListener("click",function(){r?(C(e._id),a.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`,r=!1):(i.push(e),F(i),a.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`,r=!0)}),document.getElementById("close-card").addEventListener("click",()=>{d.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),s&&window.open("./favourite.html")}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{d.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),w(e._id)})}export{l as L,M as a,O as g,T as h,C as r};
//# sourceMappingURL=exercises_card-60b901a7.js.map
