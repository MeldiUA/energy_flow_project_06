import{a as m,i as v}from"./vendor-ce9f25a7.js";document.addEventListener("DOMContentLoaded",function(){var e=window.location.href,s=document.getElementById("homeLink"),t=document.getElementById("favoritesLink");e.includes("index.html")?(s.classList.add("active"),t.classList.remove("active")):e.includes("favourite.html")&&(t.classList.add("active"),s.classList.remove("active"))});const L=document.querySelector(".open-mobile-menu-btn"),h=document.querySelector(".close-mobile-menu-btn"),b=document.querySelector(".mobile-menu-wrapper");L.addEventListener("click",function(){b.classList.add("is-open"),document.body.classList.add("not-scrollable")});h.addEventListener("click",function(){b.classList.remove("is-open"),document.body.classList.remove("not-scrollable")});const _="https://energyflow.b.goit.study/api";m.defaults.baseURL=_;async function R(){return(await m.get("/quote")).data}async function O(e){return(await m.post("/subscription",{email:e})).data}async function S(e,{email:s,rate:t,comment:a}){return await m.patch(`/exercises/${e}/rating`,{rate:t,email:s,review:a})}const x=document.getElementById("form-close-btn"),c=document.querySelector(".backdrop"),k=document.querySelector("#user-email"),E=document.getElementById("user-comment"),w=document.querySelector(".form-send-btn");x.addEventListener("click",()=>{c.classList.remove("is-open")});c.addEventListener("click",()=>{c.classList.remove("is-open")});const q=document.querySelector(".rating-wrapper"),p=document.querySelector(".rating-star-value"),o={rate:0,email:"",comment:""};q.addEventListener("click",e=>{const s=document.querySelectorAll(".rating-star-icons");o.rate=e.target.dataset.id;for(let t=0;t<5;t++)t<o.rate?(s[t].style.fill="#EEA10C",p.textContent=o.rate===void 0?"0.0":`${o.rate}.0`):(s[t].style.fill="rgba(27, 27, 27, 0.20)",p.textContent=o.rate===void 0?"0.0":`${o.rate}.0`)});let y=null;const B=document.querySelector(".backdrop-form");function $(e){y=e,c.classList.add("is-open")}B.addEventListener("submit",I);async function I(e){if(e.preventDefault(),o.email=k.value.trim(),o.comment=E.value.trim(),o.email!==""&&o.rate!==0){w.disabled=!1;try{const s=await S(y,o);v.success({message:"Your rating is accepted",position:"topRight",color:"green"}),c.classList.remove("is-open")}catch(s){v.error({message:`${s.message}`,position:"topRight",color:"red"}),c.classList.remove("is-open")}}}const f="favourite",A=e=>{localStorage.setItem(f,JSON.stringify(e))},j=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(s){console.log(s.message)}},F=e=>{const s=j(f).filter(t=>t._id!==e);localStorage.removeItem(f),localStorage.setItem(f,JSON.stringify(s))},l=document.querySelector(".exr-card-backdrop");let r=!1,n=[],g=JSON.parse(localStorage.getItem("favourite"));g&&g.forEach(e=>{n[0]||(n[0]=e),n.push(e)});function u(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function T(e,s=!1,t=!1){r=s,r||n.forEach(a=>{a._id===e._id&&(r=!0)}),M(e,t),l.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),r===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`)}function M(e,s){const t=`
    <div class="exr-card-cont">
      <button id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${u(e.name)}</h3>
      <div class="rating-container">
        <ul class="star-rating-list">
          <li>
            <p class="rating-score">${e.rating}</p>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="exr-information-container">
        <div class="exr-info-block">
          <p class="info-label">Target</p>
          <p class="exr-info" id="exr-target">${u(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${u(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${u(e.equipment)}</p>
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
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="give-rating-btn">Give a rating</button>
      </div>
    </div>
    </div>`;l.innerHTML=t;const a=document.querySelectorAll(".star-rating-icon");for(let i=0;i<Math.round(e.rating);++i)a[i].style.fill="#eea10c";const d=document.querySelector(".add-favourite-btn");d.addEventListener("click",function(){if(console.log(r),!r)n.push(e),A(n),d.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,r=!0;else{var i=window.location.href;F(e._id),d.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,r=!1,i.includes("favourite.html")&&location.reload()}}),document.getElementById("close-card").addEventListener("click",()=>{l.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),s&&window.open("./favourite.html")}),document.querySelector(".exr-card-backdrop").addEventListener("click",()=>{l.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{l.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),$(e._id)})}export{f as L,j as a,R as g,T as h,O as p,F as r};
//# sourceMappingURL=exercises_card-c7426574.js.map
