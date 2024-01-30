import{g as b}from"./assets/api-ac2e6aa5.js";import"./assets/vendor-df80d4f8.js";const g=document.querySelector(".quote-text"),m=document.querySelector(".quote-author"),f="quote-info",o=JSON.parse(localStorage.getItem(f)),c={quote:"",author:"",date:0};o&&o.date!=new Date().getDate()?(g.textContent=o.quote,m.textContent=o.author,p()):(o&&(g.textContent=o.quote,m.textContent=o.author),p());function p(){b().then(t=>S(t)).catch(t=>console.log(t))}function S(t){c.quote=t.quote,c.author=t.author,c.date=new Date().getDate(),localStorage.setItem(f,JSON.stringify(c))}const s="favourite",_=t=>{localStorage.setItem(s,JSON.stringify(t))},i=t=>{try{return JSON.parse(localStorage.getItem(t))}catch(e){console.log(e.message)}},y=t=>{const e=i(s).filter(a=>a._id!==t);localStorage.removeItem(s),localStorage.setItem(s,JSON.stringify(e))},l={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},w={name:"Air bike",excDetails:{burnedCalories:13,bodyPart:"Waist",target:"Biceps"},_id:1,favourite:!0},C={name:"Stationary bike walk",excDetails:{burnedCalories:116,bodyPart:"Cardio",target:"Cardiovascular system"},_id:2,favourite:!1},q={name:"Stationary bike walk",excDetails:{burnedCalories:116,bodyPart:"Cardio",target:"Cardiovascular system"},_id:2,favourite:!1},x={name:"mcChicken burger",excDetails:{burnedCalories:-150,bodyPart:"Tummy",target:"Hunger"},_id:3},k=[w,C,q,x];_(k);const O=t=>{const e=new Set;return t.filter(n=>e.has(n._id)?!1:(e.add(n._id),!0))},D=t=>{const a=O(t).map(({name:n,_id:r,excDetails:{burnedCalories:v,bodyPart:d,target:u}})=>`<li data-id-card="${r}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button data-id-del-btn="${r}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="../images/icon.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button data-id-start-btn="${r}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
                  <use href="../images/icon.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>

            <div class="inner_wrapper">
              <div class="icon_man">
                <svg width="16" height="16">
                  <use href="../images/icon.svg#icon-man"></use>
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
                      Target: <span class="detail_value">${u}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);l.cardSet.innerHTML=a.join("")},I=t=>{const e=t.target.closest('[data-action="start_exercise_btn"]'),a=t.target.closest('[data-action="delete_fav_card"]'),n=t.target.closest('[data-component="fav_card"]');if(!(!t.target.tagName==="BUTTON"||!a&&!e)){if(a)if(a.dataset.idDelBtn===n.dataset.idCard){const r=Number(a.dataset.idDelBtn);y(r),h()}else return;else if(e){const r=Number(e.dataset.idStartBtn),d=i(s).find(u=>u._id===r);handlerStartBtn(d,!0)}}},h=()=>{const t=i(s)!==null;if(i(s).some(e=>e===null)){const e=i(s).filter(a=>a!==null);_(e)}localStorage.length===0||!t||i(s).length===0?(l.noCards.classList.remove("visually-hidden"),l.cardSet.classList.add("visually-hidden"),console.log("No Favs")):(console.log("Favs there"),l.noCards.classList.add("visually-hidden"),l.cardSet.classList.remove("visually-hidden"),D(i(s)),l.cardSet.addEventListener("click",I))};h();
//# sourceMappingURL=commonHelpers.js.map
