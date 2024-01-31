import"./assets/index-ea03cad6.js";import{g as f,a as l,r as w,L as u,h as S}from"./assets/exercises_card-ae475bc3.js";import"./assets/vendor-ce9f25a7.js";const p=document.querySelector(".quote-text"),g=document.querySelector(".quote-author"),m="quote-info",r=JSON.parse(localStorage.getItem(m)),o={quote:"",author:"",date:0};r&&r.date!=new Date().getDate()?(p.textContent=r.quote,g.textContent=r.author,_()):(r&&(p.textContent=r.quote,g.textContent=r.author),_());function _(){f().then(t=>q(t)).catch(t=>console.log(t))}function q(t){o.quote=t.quote,o.author=t.author,o.date=new Date().getDate(),localStorage.setItem(m,JSON.stringify(o))}const i={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},y=t=>{const a=new Set;return t.filter(n=>a.has(n._id)?!1:(a.add(n._id),!0))},b=t=>{const e=y(t).map(({name:n,_id:s,burnedCalories:v,bodyPart:d,target:c})=>`<li data-id-card="${s}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button data-id-del-btn="${s}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="./images/icon.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button data-id-start-btn="${s}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
                  <use href="./images/icon.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>

            <div class="inner_wrapper">
              <div class="icon_man">
                <svg width="16" height="16">
                  <use href="./images/icon.svg#icon-man"></use>
                </svg>
              </div>
              <p class="exercise_name">${n}</p>
            </div>

            <div class="details_wrapper">
              <ul class="details_list">
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Burned calories:
                      <span class="detail_value">${v} / 3 min</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Body part: <span class="detail_value">${d}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${c}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);i.cardSet.innerHTML=e.join("")},x=t=>{const a=t.target.closest('[data-action="start_exercise_btn"]'),e=t.target.closest('[data-action="delete_fav_card"]'),n=t.target.closest('[data-component="fav_card"]');if(!(!t.target.tagName==="BUTTON"||!e&&!a)){if(e)if(e.dataset.idDelBtn===n.dataset.idCard){const s=e.dataset.idDelBtn;w(s),h()}else return;else if(a){const s=a.dataset.idStartBtn,d=l(u).find(c=>c._id===s);S(d,!0,!0)}}},h=()=>{l(u)!==null?(i.noCards.classList.add("visually-hidden"),i.cardSet.classList.remove("visually-hidden"),b(l(u)),i.cardSet.addEventListener("click",x)):(i.noCards.classList.remove("visually-hidden"),i.cardSet.classList.add("visually-hidden"))};h();
//# sourceMappingURL=commonHelpers.js.map
