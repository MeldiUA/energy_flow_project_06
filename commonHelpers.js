import"./assets/index-a606e3af.js";import{g as m,a as l,r as w,L as u,h as y}from"./assets/exercises_card-c7426574.js";import"./assets/vendor-ce9f25a7.js";const p=document.querySelector(".quote-text"),_=document.querySelector(".quote-author"),f="quote-info",r=JSON.parse(localStorage.getItem(f)),i={quote:"",author:"",date:0};r&&r.date!=new Date().getDate()?(p.textContent=r.quote,_.textContent=r.author,g()):(r&&(p.textContent=r.quote,_.textContent=r.author),g());function g(){m().then(t=>S(t)).catch(t=>console.log(t))}function S(t){i.quote=t.quote,i.author=t.author,i.date=new Date().getDate(),localStorage.setItem(f,JSON.stringify(i))}const o={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},q=t=>{const e=new Set;return t.filter(n=>e.has(n._id)?!1:(e.add(n._id),!0))},b=t=>{const a=q(t).map(({name:n,_id:s,burnedCalories:v,bodyPart:c,target:d})=>`<li data-id-card="${s}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button data-id-del-btn="${s}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button data-id-start-btn="${s}" data-action="start_exercise_btn" class="btn">
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
                      Body part: <span class="detail_value">${c}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${d}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);o.cardSet.innerHTML=a.join("")},x=t=>{const e=t.target.closest('[data-action="start_exercise_btn"]'),a=t.target.closest('[data-action="delete_fav_card"]'),n=t.target.closest('[data-component="fav_card"]');if(!(!t.target.tagName==="BUTTON"||!a&&!e)){if(a)if(a.dataset.idDelBtn===n.dataset.idCard){const s=a.dataset.idDelBtn;w(s),h()}else return;else if(e){const s=e.dataset.idStartBtn,c=l(u).find(d=>d._id===s);y(c,!0,!0)}}},h=()=>{l(u).length!==0?(o.noCards.classList.add("visually-hidden"),o.cardSet.classList.remove("visually-hidden"),b(l(u)),o.cardSet.addEventListener("click",x)):(o.noCards.classList.remove("visually-hidden"),o.cardSet.classList.add("visually-hidden"))};h();
//# sourceMappingURL=commonHelpers.js.map
