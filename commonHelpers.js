import"./assets/header-c7c0a11b.js";const s="favourite",u=a=>{localStorage.setItem(s,JSON.stringify(a))},i=a=>{try{return JSON.parse(localStorage.getItem(a))}catch(e){console.log(e.message)}},m=a=>{const e=i(s).filter(t=>t._id!==a);localStorage.removeItem(s),localStorage.setItem(s,JSON.stringify(e))},l={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},p={name:"Air bike",excDetails:{burnedCalories:13,bodyPart:"Waist",target:"Biceps"},_id:1,favourite:!0},g={name:"Stationary bike walk",excDetails:{burnedCalories:116,bodyPart:"Cardio",target:"Cardiovascular system"},_id:2,favourite:!1},_={name:"Stationary bike walk",excDetails:{burnedCalories:116,bodyPart:"Cardio",target:"Cardiovascular system"},_id:2,favourite:!1},f={name:"mcChicken burger",excDetails:{burnedCalories:-150,bodyPart:"Tummy",target:"Hunger"},_id:3},b=[p,g,_,f];u(b);const h=a=>{const e=new Set;return a.filter(n=>e.has(n._id)?!1:(e.add(n._id),!0))},y=a=>{const t=h(a).map(({name:n,_id:r,excDetails:{burnedCalories:c,bodyPart:d,target:o}})=>`<li data-id-card="${r}" data-component="fav_card" class="list_item">
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
                      <span class="detail_value">${c} / 3 min</span>
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
                      Target: <span class="detail_value">${o}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);l.cardSet.innerHTML=t.join("")},S=a=>{const e=a.target.closest('[data-action="start_exercise_btn"]'),t=a.target.closest('[data-action="delete_fav_card"]'),n=a.target.closest('[data-component="fav_card"]');if(!(!a.target.tagName==="BUTTON"||!t&&!e)){if(t)if(t.dataset.idDelBtn===n.dataset.idCard){const r=Number(t.dataset.idDelBtn);m(r),v()}else return;else if(e){const r=Number(e.dataset.idStartBtn),d=i(s).find(o=>o._id===r);handlerStartBtn(d,!0)}}},v=()=>{const a=i(s)!==null;if(i(s).some(e=>e===null)){const e=i(s).filter(t=>t!==null);u(e)}localStorage.length===0||!a||i(s).length===0?(l.noCards.classList.remove("visually-hidden"),l.cardSet.classList.add("visually-hidden"),console.log("No Favs")):(console.log("Favs there"),l.noCards.classList.add("visually-hidden"),l.cardSet.classList.remove("visually-hidden"),y(i(s)),l.cardSet.addEventListener("click",S))};v();
//# sourceMappingURL=commonHelpers.js.map
