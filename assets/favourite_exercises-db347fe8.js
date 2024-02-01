import{a as g,i as h}from"./vendor-ce9f25a7.js";document.addEventListener("DOMContentLoaded",function(){var e=window.location.href,s=document.getElementById("homeLink"),t=document.getElementById("favoritesLink");e.includes("index.html")?(s.classList.add("active"),t.classList.remove("active")):e.includes("favourite.html")&&(t.classList.add("active"),s.classList.remove("active"))});const k=document.querySelector(".open-mobile-menu-btn"),E=document.querySelector(".close-mobile-menu-btn"),l=document.querySelector(".mobile-menu-wrapper");k.addEventListener("click",function(){l.classList.add("is-open"),document.body.classList.add("not-scrollable"),setTimeout(()=>{l.classList.add("mobile-menu-wrapper-anim")},2500)});E.addEventListener("click",function(){document.body.classList.remove("not-scrollable"),l.classList.add("mobile-menu-wrapper-anim-hide"),setTimeout(function(){l.classList.remove("is-open"),l.classList.remove("mobile-menu-wrapper-anim")},1400)});l.addEventListener("animationend",e=>{e.animationName==="mobile-menu-wrapper-hide-animation"&&l.classList.remove("mobile-menu-wrapper-anim-hide")});const q="https://energyflow.b.goit.study/api";g.defaults.baseURL=q;async function J(){return(await g.get("/quote")).data}async function z(e){return(await g.post("/subscription",{email:e})).data}async function B(e,{email:s,rate:t,comment:a}){return await g.patch(`/exercises/${e}/rating`,{rate:t,email:s,review:a})}const $=document.getElementById("form-close-btn"),d=document.querySelector(".backdrop"),I=document.querySelector("#user-email"),C=document.getElementById("user-comment"),A=document.querySelector(".form-send-btn");$.addEventListener("click",()=>{d.classList.remove("is-open")});d.addEventListener("click",e=>{e.target===d&&d.classList.remove("is-open")});const F=document.querySelector(".rating-wrapper"),L=document.querySelector(".rating-star-value"),i={rate:0,email:"",comment:""};F.addEventListener("click",e=>{const s=document.querySelectorAll(".rating-star-icons");i.rate=e.target.dataset.id;for(let t=0;t<5;t++)t<i.rate?(s[t].style.fill="#EEA10C",L.textContent=i.rate===void 0?"0.0":`${i.rate}.0`):(s[t].style.fill="rgba(27, 27, 27, 0.20)",L.textContent=i.rate===void 0?"0.0":`${i.rate}.0`)});let S=null;const j=document.querySelector(".backdrop-form");function T(e){S=e,d.classList.add("is-open")}j.addEventListener("submit",M);async function M(e){if(e.preventDefault(),i.email=I.value.trim(),i.comment=C.value.trim(),i.email!==""&&i.rate!==0){A.disabled=!1;try{const s=await B(S,i);h.success({message:"Your rating is accepted",position:"topRight",color:"green"}),d.classList.remove("is-open")}catch(s){h.error({message:`${s.message}`,position:"topRight",color:"red"}),d.classList.remove("is-open")}}}const u="favourite",O=e=>{localStorage.setItem(u,JSON.stringify(e))},f=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(s){console.log(s.message)}},x=e=>{const s=f(u).filter(t=>t._id!==e);localStorage.removeItem(u),localStorage.setItem(u,JSON.stringify(s))},o=document.querySelector(".exr-card-backdrop");let c=!1,p=[],w=JSON.parse(localStorage.getItem("favourite"));w&&w.forEach(e=>{p[0]||(p[0]=e),p.push(e)});function m(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function R(e,s=!1,t=!1){c=s,c||p.forEach(a=>{a._id===e._id&&(c=!0)}),N(e),o.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),c===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`)}function N(e,s){const t=`
    <div class="exr-card-cont">
      <button name="close" id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${m(e.name)}</h3>
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
          <p class="exr-info" id="exr-target">${m(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${m(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${m(e.equipment)}</p>
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
    </div>`;o.innerHTML=t;const a=document.querySelectorAll(".star-rating-icon");for(let n=0;n<Math.round(e.rating);++n)a[n].style.fill="#eea10c";const r=document.querySelector(".add-favourite-btn");r.addEventListener("click",function(){c?(x(e._id),r.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,c=!1):(p.push(e),O(p),r.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,c=!0),y()}),document.getElementById("close-card").addEventListener("click",()=>{o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),o.addEventListener("click",n=>{n.target===o&&(o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"))}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{o.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),T(e._id)})}const v={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},P=e=>{const s=new Set;return e.filter(a=>s.has(a._id)?!1:(s.add(a._id),!0))},H=e=>{const t=P(e).map(({name:a,_id:r,burnedCalories:n,bodyPart:_,target:b})=>`<li data-id-card="${r}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button name="trash" data-id-del-btn="${r}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button name="start" data-id-start-btn="${r}" data-action="start_exercise_btn" class="btn">
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
                      <span class="detail_value">${n} / 3 min</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Body part: <span class="detail_value">${_}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${b}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);v.cardSet.innerHTML=t.join("")},U=e=>{const s=e.target.closest('[data-action="start_exercise_btn"]'),t=e.target.closest('[data-action="delete_fav_card"]'),a=e.target.closest('[data-component="fav_card"]');if(!(!e.target.tagName==="BUTTON"||!t&&!s)){if(t)if(t.dataset.idDelBtn===a.dataset.idCard){const r=t.dataset.idDelBtn;x(r),y()}else return;else if(s){const r=s.dataset.idStartBtn,_=f(u).find(b=>b._id===r);R(_,!0,!0)}}},y=()=>{document.querySelector(".favourite_exercises")!==null&&(f(u).length!==0?(v.noCards.classList.add("visually-hidden"),v.cardSet.classList.remove("visually-hidden"),H(f(u)),v.cardSet.addEventListener("click",U)):(v.noCards.classList.remove("visually-hidden"),v.cardSet.classList.add("visually-hidden")))};y();export{J as g,R as h,z as p};
//# sourceMappingURL=favourite_exercises-db347fe8.js.map
