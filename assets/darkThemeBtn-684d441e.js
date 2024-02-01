import{a as h,i as L}from"./vendor-ce9f25a7.js";document.addEventListener("DOMContentLoaded",function(){let e=window.location.href,t=document.getElementById("homeLink"),s=document.getElementById("favoritesLink"),a=document.getElementById("mobileHomeLink"),n=document.getElementById("mobileFavoritesLink");e.includes("index.html")?(t.classList.add("active"),s.classList.remove("active"),a.classList.add("active"),n.classList.remove("active")):e.includes("favourite.html")&&(s.classList.add("active"),t.classList.remove("active"),n.classList.add("active"),a.classList.remove("active"))});const B=document.querySelector(".open-mobile-menu-btn"),q=document.querySelector(".close-mobile-menu-btn"),l=document.querySelector(".mobile-menu-wrapper");B.addEventListener("click",function(){l.classList.add("is-open"),document.body.classList.add("not-scrollable"),setTimeout(()=>{l.classList.add("mobile-menu-wrapper-anim")},2500)});q.addEventListener("click",function(){document.body.classList.remove("not-scrollable"),l.classList.add("mobile-menu-wrapper-anim-hide"),setTimeout(function(){l.classList.remove("is-open"),l.classList.remove("mobile-menu-wrapper-anim")},1400)});l.addEventListener("animationend",e=>{e.animationName==="mobile-menu-wrapper-hide-animation"&&l.classList.remove("mobile-menu-wrapper-anim-hide")});const I="https://energyflow.b.goit.study/api";h.defaults.baseURL=I;async function V(){return(await h.get("/quote")).data}async function W(e){return(await h.post("/subscription",{email:e})).data}async function $(e,{email:t,rate:s,comment:a}){return await h.patch(`/exercises/${e}/rating`,{rate:s,email:t,review:a})}const C=document.getElementById("form-close-btn"),d=document.querySelector(".backdrop"),F=document.querySelector("#user-email"),T=document.getElementById("user-comment"),A=document.querySelector(".form-send-btn");C.addEventListener("click",()=>{d.classList.remove("is-open")});d.addEventListener("click",e=>{e.target===d&&d.classList.remove("is-open")});const j=document.querySelector(".rating-wrapper"),w=document.querySelector(".rating-star-value"),r={rate:0,email:"",comment:""};j.addEventListener("click",e=>{const t=document.querySelectorAll(".rating-star-icons");r.rate=e.target.dataset.id;for(let s=0;s<5;s++)s<r.rate?(t[s].style.fill="#EEA10C",w.textContent=r.rate===void 0?"0.0":`${r.rate}.0`):(t[s].style.fill="rgba(27, 27, 27, 0.20)",w.textContent=r.rate===void 0?"0.0":`${r.rate}.0`)});let x=null;const M=document.querySelector(".backdrop-form");function O(e){x=e,d.classList.add("is-open")}M.addEventListener("submit",R);async function R(e){if(e.preventDefault(),r.email=F.value.trim(),r.comment=T.value.trim(),r.email!==""&&r.rate!==0){A.disabled=!1;try{const t=await $(x,r);L.success({message:"Your rating is accepted",position:"topRight",color:"green"}),d.classList.remove("is-open")}catch(t){L.error({message:`${t.message}`,position:"topRight",color:"red"}),d.classList.remove("is-open")}}}const u="favourite",H=e=>{localStorage.setItem(u,JSON.stringify(e))},g=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t.message)}},E=e=>{const t=g(u).filter(s=>s._id!==e);localStorage.removeItem(u),localStorage.setItem(u,JSON.stringify(t))},o=document.querySelector(".exr-card-backdrop");let c=!1,v=[],S=JSON.parse(localStorage.getItem("favourite"));S&&S.forEach(e=>{v[0]||(v[0]=e),v.push(e)});function p(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function N(e,t=!1,s=!1){c=t,c||v.forEach(a=>{a._id===e._id&&(c=!0)}),D(e),o.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),c===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`)}function D(e,t){const s=`
    <div class="exr-card-cont">
      <button name="close" id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${p(e.name)}</h3>
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
          <p class="exr-info" id="exr-target">${p(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${p(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${p(e.equipment)}</p>
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
        <button name="add-favorurite" class="add-favourite-btn">
          Add to favourites
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>
        </button>
        <button name="rating" class="give-rating-btn">Give a rating</button>
      </div>
    </div>
    </div>`;o.innerHTML=s;const a=document.querySelectorAll(".star-rating-icon");for(let i=0;i<Math.round(e.rating);++i)a[i].style.fill="#eea10c";const n=document.querySelector(".add-favourite-btn");n.addEventListener("click",function(){c?(E(e._id),n.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,c=!1):(v.push(e),H(v),n.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,c=!0),_()}),document.getElementById("close-card").addEventListener("click",()=>{o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),o.addEventListener("click",i=>{i.target===o&&(o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"))}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),O(e._id)})}const m={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},P=e=>{const t=new Set;return e.filter(a=>t.has(a._id)?!1:(t.add(a._id),!0))},U=e=>{const s=P(e).map(({name:a,_id:n,burnedCalories:i,bodyPart:b,target:y})=>`<li data-id-card="${n}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button name="trash" data-id-del-btn="${n}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button name="start" data-id-start-btn="${n}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
                  <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>

            <div class="inner_wrapper">
              <div class="icon_man">
                <svg width="16" height="16">
                  <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-man"></use>
                </svg>
              </div>
              <p class="exercise_name">${a}</p>
            </div>

            <div class="details_wrapper">
              <ul class="details_list">
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Burned calories:
                      <span class="detail_value">${i} / 3 min</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Body part: <span class="detail_value">${b}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${y}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);m.cardSet.innerHTML=s.join("")},J=e=>{const t=e.target.closest('[data-action="start_exercise_btn"]'),s=e.target.closest('[data-action="delete_fav_card"]'),a=e.target.closest('[data-component="fav_card"]');if(!(!e.target.tagName==="BUTTON"||!s&&!t)){if(s)if(s.dataset.idDelBtn===a.dataset.idCard){const n=s.dataset.idDelBtn;E(n),_()}else return;else if(t){const n=t.dataset.idStartBtn,b=g(u).find(y=>y._id===n);N(b,!0,!0)}}},_=()=>{document.querySelector(".favourite_exercises")!==null&&(g(u).length!==0?(m.noCards.classList.add("visually-hidden"),m.cardSet.classList.remove("visually-hidden"),U(g(u)),m.cardSet.addEventListener("click",J)):(m.noCards.classList.remove("visually-hidden"),m.cardSet.classList.add("visually-hidden")))};_();let f=null;const k=document.getElementById("theme-stylesheet");document.addEventListener("DOMContentLoaded",function(){f=window.innerWidth>1440?document.getElementById("checkbox"):document.getElementById("theme-checkbox"),localStorage.getItem("theme")==="dark"?t():s(),f.addEventListener("change",function(){f.checked?(t(),localStorage.setItem("theme","dark")):(s(),localStorage.setItem("theme","light"))});function t(){k.href="./css/dark-theme.css",f.checked=!0}function s(){k.href="./css/index.css"}});export{V as g,N as h,W as p};
//# sourceMappingURL=darkThemeBtn-684d441e.js.map
