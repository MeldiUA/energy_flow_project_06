import{g as q}from"./api-9d7e9e6d.js";import{t as H,i as d}from"./vendor-df80d4f8.js";const o={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form")};let l=0,b="Muscles",v="",f="",i="";E();o.musclesBtn.classList.add("active-btn");o.filters.addEventListener("click",M);o.exercises.addEventListener("click",m);async function E(){window.innerWidth<768?l=8:l=12,$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(e){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/filters?filter=${b}&limit=300`,success:function(t){o.navButtons.innerHTML="",e(t.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(e,t){if(e.length===0){o.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}N(e)}})})}async function M(e){if(f="",i="",o.exercises.addEventListener("click",m),o.exercisesTitle.innerHTML="Exercises",o.searchForm.style.display="none",e.target.tagName!=="BUTTON")return;o.exercises.innerHTML="";const t=document.querySelector(".active-btn");t&&(t.classList.remove("active-btn"),t.classList.add("not-active-btn")),e.target.classList.add("active-btn"),b=e.target.innerHTML,E()}async function N(e){o.exercises.innerHTML="";let t=e.map(({name:s,filter:a,imgUrl:n})=>`<li class="exercise">
        <img src="${n}" alt="${s}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${s[0].toUpperCase()+s.slice(1)}</h1>
            <p class="exercise-filter">${a}</p>
        </div>
        </li>`).join("");o.exercises.insertAdjacentHTML("beforeend",t)}async function m(e){o.searchForm.style.display="block";let t=e.target;t.tagName==="IMG"&&(t=t.nextElementSibling),(t.tagName==="LI"||t.tagName==="P"||t.tagName==="H1")&&(t=t.offsetParent),f=t.lastElementChild.innerHTML,i=t.firstElementChild.innerHTML.toLowerCase(),o.exercisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${i[0].toUpperCase()+i.slice(1)}</span>`,o.exercises.removeEventListener("click",m),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(s){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${f.toLowerCase()}=${i}&limit=300`,success:function(a){o.navButtons.innerHTML="",s(a.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(s,a){if(s.length===0){o.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}T(s)}})})}async function T(e){o.exercises.innerHTML="";const t=e.map(({name:s,_id:a,rating:n,burnedCalories:g,bodyPart:u,target:y,time:C})=>(n%1===0&&(n=n+".0"),`<li class="exercise-information" data-id-card="${a}">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${n}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="./images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <button data-action="start_exercise_btn" data-id-start-btn="${a}" class="details-link">
          Start
              <svg stroke="#1B1B1B"  width="14" height="14">
                  <use href="./images/icon.svg#icon-arrow"></use>
              </svg>
          </button>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="./images/icon.svg#icon-man"></use>
          </svg>
        </div>
        <h2 class="exercise-name">${s[0].toUpperCase()+s.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${g} / ${C} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${u[0].toUpperCase()+u.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${y[0].toUpperCase()+y.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");o.exercises.insertAdjacentHTML("beforeend",t)}o.searchForm.addEventListener("submit",async e=>{e.preventDefault(),v=e.target.searchQuery.value.trim(),e.target.reset(),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(t){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${f.toLowerCase()}=${i}&keyword=${v}&limit=300`,success:function(s){o.navButtons.innerHTML="",t(s.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(t,s){if(t.length===0){o.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}T(t)}})})});const D=document.querySelector("form"),c=document.querySelector("input"),h="feedback-form-state";function B(){const e={email:c.value};localStorage.setItem(h,JSON.stringify(e))}function j(){const e=localStorage.getItem(h);if(e){const t=JSON.parse(e);c.value=t.email||""}}j();c.addEventListener("input",H(B,500));D.addEventListener("submit",O);function O(e){if(e.preventDefault(),!I(c.value)){d.error({title:"Error",message:"Please enter a valid email address"});return}const t={email:c.value};fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(s=>{if(s.status===409)throw d.error({title:"Error",message:"The email address already exists or there is a data conflict"}),new Error("Email already exists");if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{console.log("Success:",s),d.success({title:"Success",message:"Welcome to energy.flow world!"}),localStorage.removeItem(h),c.value=""}).catch(s=>{console.error("Error:",s),s.message!=="Email already exists"&&d.error({title:"Error",message:"Something went wrong! Please try again later"})})}function I(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}const x=document.querySelector(".quote-text"),w=document.querySelector(".quote-author"),k="quote-info",r=JSON.parse(localStorage.getItem(k)),p={quote:"",author:"",date:0};r&&r.date!=new Date().getDate()?(x.textContent=r.quote,w.textContent=r.author,L()):(r&&(x.textContent=r.quote,w.textContent=r.author),L());function L(){q().then(e=>U(e)).catch(e=>console.log(e))}function U(e){p.quote=e.quote,p.author=e.author,p.date=new Date().getDate(),localStorage.setItem(k,JSON.stringify(p))}const S=document.getElementById("progress-scroll");S&&S.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".progress-wrap path");if(e){const t=e.getTotalLength();e.style.transition="none",e.style.strokeDasharray=`${t} ${t}`,e.style.strokeDashoffset=`${t}`,e.getBoundingClientRect(),e.style.transition="stroke-dashoffset 10ms linear";const s=()=>{const n=window.scrollY||document.documentElement.scrollTop,g=document.documentElement.scrollHeight-window.innerHeight,u=t-n*t/g;e.style.strokeDashoffset=`${u}`};window.addEventListener("scroll",s);const a=50;window.addEventListener("scroll",()=>{if(window.scrollY>a){const n=document.querySelector(".progress-wrap");n&&n.classList.add("active-progress")}else{const n=document.querySelector(".progress-wrap");n&&n.classList.remove("active-progress")}})}});
//# sourceMappingURL=main-2a214d45.js.map
