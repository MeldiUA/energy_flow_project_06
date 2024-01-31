import{g as f,a as o,s as S,r as w,L as i,h as q}from"./assets/exercises_card-6345b9e6.js";import"./assets/vendor-ce9f25a7.js";const p=document.querySelector(".quote-text"),g=document.querySelector(".quote-author"),m="quote-info",r=JSON.parse(localStorage.getItem(m)),d={quote:"",author:"",date:0};r&&r.date!=new Date().getDate()?(p.textContent=r.quote,g.textContent=r.author,h()):(r&&(p.textContent=r.quote,g.textContent=r.author),h());function h(){f().then(t=>y(t)).catch(t=>console.log(t))}function y(t){d.quote=t.quote,d.author=t.author,d.date=new Date().getDate(),localStorage.setItem(m,JSON.stringify(d))}const l={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},b=t=>{const e=new Set;return t.filter(n=>e.has(n._id)?!1:(e.add(n._id),!0))},C=t=>{const a=b(t).map(({name:n,_id:s,burnedCalories:v,bodyPart:c,target:u})=>`<li data-id-card="${s}" data-component="fav_card" class="list_item">
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
        </li>`);l.cardSet.innerHTML=a.join("")},x=t=>{const e=t.target.closest('[data-action="start_exercise_btn"]'),a=t.target.closest('[data-action="delete_fav_card"]'),n=t.target.closest('[data-component="fav_card"]');if(!(!t.target.tagName==="BUTTON"||!a&&!e)){if(a)if(a.dataset.idDelBtn===n.dataset.idCard){const s=Number(a.dataset.idDelBtn);w(s),_()}else return;else if(e){const s=e.dataset.idStartBtn,c=o(i).find(u=>u._id===s);console.log(c);debugger;q(c,!0)}}},_=()=>{const t=o(i)!==null;if(o(i).some(e=>e===null)){const e=o(i).filter(a=>a!==null);S(e)}localStorage.length===0||!t||o(i).length===0?(l.noCards.classList.remove("visually-hidden"),l.cardSet.classList.add("visually-hidden"),console.log("No Favs")):(console.log("Favs there"),l.noCards.classList.add("visually-hidden"),l.cardSet.classList.remove("visually-hidden"),C(o(i)),l.cardSet.addEventListener("click",x))};_();
//# sourceMappingURL=commonHelpers.js.map
