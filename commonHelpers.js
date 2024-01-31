import{g as f,a as i,s as S,r as w,L as o,h as q}from"./assets/exercises_card-f42876c5.js";import"./assets/vendor-ce9f25a7.js";const p=document.querySelector(".quote-text"),g=document.querySelector(".quote-author"),_="quote-info",r=JSON.parse(localStorage.getItem(_)),l={quote:"",author:"",date:0};r&&r.date!=new Date().getDate()?(p.textContent=r.quote,g.textContent=r.author,h()):(r&&(p.textContent=r.quote,g.textContent=r.author),h());function h(){f().then(t=>y(t)).catch(t=>console.log(t))}function y(t){l.quote=t.quote,l.author=t.author,l.date=new Date().getDate(),localStorage.setItem(_,JSON.stringify(l))}const d={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},b=t=>{const e=new Set;return t.filter(n=>e.has(n._id)?!1:(e.add(n._id),!0))},C=t=>{const a=b(t).map(({name:n,_id:s,burnedCalories:v,bodyPart:c,target:u})=>`<li data-id-card="${s}" data-component="fav_card" class="list_item">
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
                      Body part: <span class="detail_value">${c}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${u}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);d.cardSet.innerHTML=a.join("")},x=t=>{const e=t.target.closest('[data-action="start_exercise_btn"]'),a=t.target.closest('[data-action="delete_fav_card"]'),n=t.target.closest('[data-component="fav_card"]');if(!(!t.target.tagName==="BUTTON"||!a&&!e)){if(a)if(a.dataset.idDelBtn===n.dataset.idCard){const s=a.dataset.idDelBtn;w(s),m()}else return;else if(e){const s=e.dataset.idStartBtn,c=i(o).find(u=>u._id===s);q(c,!0,!0)}}},m=()=>{const t=i(o)!==null;if(i(o).some(e=>e===null)){const e=i(o).filter(a=>a!==null);S(e)}localStorage.length===0||!t||i(o).length===0?(d.noCards.classList.remove("visually-hidden"),d.cardSet.classList.add("visually-hidden")):(d.noCards.classList.add("visually-hidden"),d.cardSet.classList.remove("visually-hidden"),C(i(o)),d.cardSet.addEventListener("click",x))};m();
//# sourceMappingURL=commonHelpers.js.map
