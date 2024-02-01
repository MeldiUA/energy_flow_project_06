import{a as m,i as b}from"./vendor-ce9f25a7.js";document.addEventListener("DOMContentLoaded",function(){var e=window.location.href,s=document.getElementById("homeLink"),t=document.getElementById("favoritesLink");e.includes("index.html")?(s.classList.add("active"),t.classList.remove("active")):e.includes("favourite.html")&&(t.classList.add("active"),s.classList.remove("active"))});const k=document.querySelector(".open-mobile-menu-btn"),E=document.querySelector(".close-mobile-menu-btn"),S=document.querySelector(".mobile-menu-wrapper");k.addEventListener("click",function(){S.classList.add("is-open"),document.body.classList.add("not-scrollable")});E.addEventListener("click",function(){S.classList.remove("is-open"),document.body.classList.remove("not-scrollable")});const q="https://energyflow.b.goit.study/api";m.defaults.baseURL=q;async function J(){return(await m.get("/quote")).data}async function z(e){return(await m.post("/subscription",{email:e})).data}async function B(e,{email:s,rate:t,comment:a}){return await m.patch(`/exercises/${e}/rating`,{rate:t,email:s,review:a})}const $=document.getElementById("form-close-btn"),l=document.querySelector(".backdrop"),I=document.querySelector("#user-email"),C=document.getElementById("user-comment"),A=document.querySelector(".form-send-btn");$.addEventListener("click",()=>{l.classList.remove("is-open")});l.addEventListener("click",e=>{e.target===l&&l.classList.remove("is-open")});const F=document.querySelector(".rating-wrapper"),h=document.querySelector(".rating-star-value"),n={rate:0,email:"",comment:""};F.addEventListener("click",e=>{const s=document.querySelectorAll(".rating-star-icons");n.rate=e.target.dataset.id;for(let t=0;t<5;t++)t<n.rate?(s[t].style.fill="#EEA10C",h.textContent=n.rate===void 0?"0.0":`${n.rate}.0`):(s[t].style.fill="rgba(27, 27, 27, 0.20)",h.textContent=n.rate===void 0?"0.0":`${n.rate}.0`)});let w=null;const j=document.querySelector(".backdrop-form");function M(e){w=e,l.classList.add("is-open")}j.addEventListener("submit",T);async function T(e){if(e.preventDefault(),n.email=I.value.trim(),n.comment=C.value.trim(),n.email!==""&&n.rate!==0){A.disabled=!1;try{const s=await B(w,n);b.success({message:"Your rating is accepted",position:"topRight",color:"green"}),l.classList.remove("is-open")}catch(s){b.error({message:`${s.message}`,position:"topRight",color:"red"}),l.classList.remove("is-open")}}}const d="favourite",O=e=>{localStorage.setItem(d,JSON.stringify(e))},f=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(s){console.log(s.message)}},x=e=>{const s=f(d).filter(t=>t._id!==e);localStorage.removeItem(d),localStorage.setItem(d,JSON.stringify(s))},o=document.querySelector(".exr-card-backdrop");let c=!1,v=[],L=JSON.parse(localStorage.getItem("favourite"));L&&L.forEach(e=>{v[0]||(v[0]=e),v.push(e)});function p(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function R(e,s=!1,t=!1){c=s,c||v.forEach(a=>{a._id===e._id&&(c=!0)}),N(e),o.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),c===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`)}function N(e,s){const t=`
    <div class="exr-card-cont">
      <button id="close-card" type="button" class="close-card-button">
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
        <button class="add-favourite-btn">
          Add to favourites
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="give-rating-btn">Give a rating</button>
      </div>
    </div>
    </div>`;o.innerHTML=t;const a=document.querySelectorAll(".star-rating-icon");for(let i=0;i<Math.round(e.rating);++i)a[i].style.fill="#eea10c";const r=document.querySelector(".add-favourite-btn");r.addEventListener("click",function(){c?(x(e._id),r.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,c=!1):(v.push(e),O(v),r.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,c=!0),y()}),document.getElementById("close-card").addEventListener("click",()=>{o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),o.addEventListener("click",i=>{i.target===o&&(o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"))}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),M(e._id)})}const u={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},P=e=>{const s=new Set;return e.filter(a=>s.has(a._id)?!1:(s.add(a._id),!0))},H=e=>{const t=P(e).map(({name:a,_id:r,burnedCalories:i,bodyPart:g,target:_})=>`<li data-id-card="${r}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button data-id-del-btn="${r}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button data-id-start-btn="${r}" data-action="start_exercise_btn" class="btn">
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
                      Body part: <span class="detail_value">${g}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${_}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);u.cardSet.innerHTML=t.join("")},U=e=>{const s=e.target.closest('[data-action="start_exercise_btn"]'),t=e.target.closest('[data-action="delete_fav_card"]'),a=e.target.closest('[data-component="fav_card"]');if(!(!e.target.tagName==="BUTTON"||!t&&!s)){if(t)if(t.dataset.idDelBtn===a.dataset.idCard){const r=t.dataset.idDelBtn;x(r),y()}else return;else if(s){const r=s.dataset.idStartBtn,g=f(d).find(_=>_._id===r);R(g,!0,!0)}}},y=()=>{document.querySelector(".favourite_exercises")!==null&&(f(d).length!==0?(u.noCards.classList.add("visually-hidden"),u.cardSet.classList.remove("visually-hidden"),H(f(d)),u.cardSet.addEventListener("click",U)):(u.noCards.classList.remove("visually-hidden"),u.cardSet.classList.add("visually-hidden")))};y();export{J as g,R as h,z as p};
//# sourceMappingURL=favourite_exercises-ac9bc5fa.js.map
