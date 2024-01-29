import{a as g,t as M,i as f}from"./vendor-df80d4f8.js";const _="https://energyflow.b.goit.study/api";g.defaults.baseURL=_;async function l(t="",e="",s="",r="",c,y){return(await g.get("/exercises",{params:{bodypart:t,muscles:e,equipment:s,keyword:r,page:c,limit:y}})).data}async function H(t,e=1,s=200){return l(t,"","","",e,s)}async function N(t,e=1,s=200){return l("",t,"","",e,s)}async function $(t,e=1,s=200){return l("","",t,"",e,s)}async function L(t="Muscles",e=1,s=200){return(await g.get("/filters",{params:{filter:t,page:e,limit:s}})).data}const a={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form")};let n=1,o=0,h="Muscles",p="",d="",i="";E();a.musclesBtn.classList.add("active-btn");a.filters.addEventListener("click",q);a.exercises.addEventListener("click",w);async function E(){window.innerWidth<768?o=8:o=12;const t=await L(h,n,o);if(t.results.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}T(t.results),v(t.totalPages)}async function q(t){if(d="",i="",a.exercises.addEventListener("click",w),a.exercisesTitle.innerHTML="Exercises",a.searchForm.style.display="none",t.target.tagName!=="BUTTON")return;n=1,a.exercises.innerHTML="";const e=document.querySelector(".active-btn");e&&(e.classList.remove("active-btn"),e.classList.add("not-active-btn")),t.target.classList.add("active-btn"),h=t.target.innerHTML,E()}async function T(t){a.exercises.innerHTML="";let e=t.sort((s,r)=>s.name>r.name).map(({name:s,filter:r,imgUrl:c})=>`<li class="exercise">
        <img src="${c}" alt="${s}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${s[0].toUpperCase()+s.slice(1)}</h1>
            <p class="exercise-filter">${r}</p>
        </div>
        </li>`).join("");a.exercises.insertAdjacentHTML("beforeend",e)}async function v(t){if(a.navButtons.innerHTML="",t===1||!t)return;let e='<li><button class="nav-button active-nav-button" type="button">1</button></li>';for(let s=2;s<=t;s+=1)e+=`<li><button class="nav-button" type="button">${s}</button></li>`;a.navButtons.insertAdjacentHTML("beforeend",e)}a.navButtons.addEventListener("click",async t=>{if(t.target.tagName!=="BUTTON")return;const e=document.querySelector(".active-nav-button");if(e&&e.classList.remove("active-nav-button"),t.target.classList.add("active-nav-button"),n=Number(t.target.innerHTML),p!==""){const r=await k();m(r.results);return}if(d!==""&&i!==""){const r=await S(d,i);m(r.results);return}const s=await L(h,n,o);T(s.results)});async function w(t){a.searchForm.style.display="block";let e=t.target;n=1,e.tagName==="IMG"&&(e=e.nextElementSibling),(e.tagName==="LI"||e.tagName==="P"||e.tagName==="H1")&&(e=e.offsetParent),d=e.lastElementChild.innerHTML,i=e.firstElementChild.innerHTML.toLowerCase(),a.exercisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${i[0].toUpperCase()+i.slice(1)}</span>`;let s=await S(d,i);if(s.results===void 0||s.results.length===0){a.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';return}a.exercises.removeEventListener("click",w),m(s.results),v(s.totalPages)}async function S(t,e){switch(t){case"Muscles":return await N(e,n,o);case"Body parts":return await H(e,n,o);case"Equipment":return await $(e,n,o);default:a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>')}}async function m(t){a.exercises.innerHTML="";const e=t.sort((s,r)=>s.name>r.name).map(({name:s,_id:r,rating:c,burnedCalories:y,bodyPart:b,target:B})=>(c%1===0&&(c=c+".0"),`<li data-id-card="${r}" data-component="fav_card" class="list_item">
            <div class="fav_card">
              <div class="actions_wrapper">
                <div class="workout_wrapper">
                  <span class="workout">workout</span>
                    <span>${c}
                      <svg fill="#EEA10C" width="18" height="18" aria-label="star icon">
                        <use href="../images/icon.svg#icon-star"></use>
                      </svg>
                    </span>
                </div>
                <button data-action="start_exercise_btn" data-id-start-btn="${r}" class="btn">
                  <span class="start">Start</span>
                  <svg stroke="#1B1B1B" width="16" height="16" aria-label="arrow icon">
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
                <p class="exercise_name">${s}</p>
              </div>
  
              <div class="details_wrapper">
                <ul class="details_list">
                  <li>
                    <div class="detail_wrapper">
                      <p class="detail_item">
                        Burned calories:
                        <span class="detail_value">${y} / 3 min</span>
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
                        Target: <span class="detail_value">${B}</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>`)).join("");a.exercises.insertAdjacentHTML("beforeend",e)}a.searchForm.addEventListener("submit",async t=>{t.preventDefault(),p=t.target.searchQuery.value.trim(),t.target.reset(),n=1;let e=await k();if(e.results.length===0){a.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',a.navButtons.innerHTML="";return}m(e.results),v(e.totalPages)});async function k(){switch(d){case"Muscles":return await l(void 0,i,void 0,p,n,o);case"Body parts":return await l(i,void 0,void 0,p,n,o);case"Equipment":return await l(void 0,void 0,i,p,n,o);default:a.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}}const O=document.querySelector("form"),u=document.querySelector("input"),x="feedback-form-state";function U(){const t={email:u.value};localStorage.setItem(x,JSON.stringify(t))}function j(){const t=localStorage.getItem(x);if(t){const e=JSON.parse(t);u.value=e.email||""}}j();u.addEventListener("input",M(U,500));O.addEventListener("submit",A);function A(t){if(t.preventDefault(),!C(u.value)){f.error({title:"Error",message:"Please enter a valid email address"});return}const e={email:u.value};fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(s.status===409)throw f.error({title:"Error",message:"The email address already exists or there is a data conflict"}),new Error("Email already exists");if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{console.log("Success:",s),f.success({title:"Success",message:"Welcome to energy.flow world!"}),localStorage.removeItem(x),u.value=""}).catch(s=>{console.error("Error:",s),s.message!=="Email already exists"&&f.error({title:"Error",message:"Something went wrong! Please try again later"})})}function C(t){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(t)}
//# sourceMappingURL=main-885fa30d.js.map
