import"./assets/index-a606e3af.js";import{h as D,p as j,g as I}from"./assets/favourite_exercises-ac9bc5fa.js";import{t as O,i as f}from"./assets/vendor-ce9f25a7.js";const s={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form")};let l=0,S="Muscles",v="",p="",i="",T=null;k();s.musclesBtn.classList.add("active-btn");s.filters.addEventListener("click",_);s.exercises.addEventListener("click",g);async function k(){window.innerWidth<768?l=8:l=12,$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(e){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/filters?filter=${S}&limit=300`,success:function(t){s.navButtons.innerHTML="",e(t.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(e,t){if(e.length===0){s.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}F(e)}})})}async function _(e){if(p="",i="",s.exercises.addEventListener("click",g),s.exercisesTitle.innerHTML="Exercises",s.searchForm.style.display="none",e.target.tagName!=="BUTTON")return;s.exercises.innerHTML="";const t=document.querySelector(".active-btn");t&&(t.classList.remove("active-btn"),t.classList.add("not-active-btn")),e.target.classList.add("active-btn"),S=e.target.innerHTML,k()}async function F(e){s.exercises.innerHTML="";let t=e.map(({name:n,filter:a,imgUrl:o})=>`<li class="exercise">
        <img src="${o}" alt="${n}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${n[0].toUpperCase()+n.slice(1)}</h1>
            <p class="exercise-filter">${a}</p>
        </div>
        </li>`).join("");s.exercises.insertAdjacentHTML("beforeend",t)}async function g(e){s.searchForm.style.display="block";let t=e.target;t.tagName==="IMG"&&(t=t.nextElementSibling),(t.tagName==="LI"||t.tagName==="P"||t.tagName==="H1")&&(t=t.offsetParent),p=t.lastElementChild.innerHTML,i=t.firstElementChild.innerHTML.toLowerCase(),s.exercisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${i[0].toUpperCase()+i.slice(1)}</span>`,s.exercises.removeEventListener("click",g),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(n){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${p.toLowerCase()}=${i}&limit=300`,success:function(a){s.navButtons.innerHTML="",n(a.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(n,a){if(n.length===0){s.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}E(n)}})})}async function E(e){s.exercises.innerHTML="",T=e;const t=e.map(({name:n,_id:a,rating:o,burnedCalories:m,bodyPart:u,target:y,time:N})=>(o%1===0&&(o=o+".0"),`<li class="exercise-information" data-id-card="${a}">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${o}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
              </svg>
          </span>
          <button data-action="start_exercise_btn" data-id-start-btn="${a}" class="details-link">
          Start
              <svg stroke="#1B1B1B"  width="14" height="14">
                  <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-arrow"></use>
              </svg>
          </button>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-man"></use>
          </svg>
        </div>
        <h2 class="exercise-name">${n[0].toUpperCase()+n.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${m} / ${N} min</p>
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
  </li>`)).join("");s.exercises.insertAdjacentHTML("beforeend",t)}s.exercises.addEventListener("click",e=>{const t=e.target.closest('[data-action="start_exercise_btn"]');if(!(!e.target.tagName==="BUTTON"||!t)&&t){const n=t.dataset.idStartBtn,a=T.find(o=>o._id===n);D(a)}});s.searchForm.addEventListener("submit",async e=>{e.preventDefault(),v=e.target.searchQuery.value.trim(),e.target.reset(),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(t){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${p.toLowerCase()}=${i}&keyword=${v}&limit=300`,success:function(n){s.navButtons.innerHTML="",t(n.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(t,n){if(t.length===0){s.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}E(t)}})})});const c=document.querySelector("input[name=email]"),h=document.querySelector(".footer-send-button"),q="feedback-form-state";function U(){const e={email:c.value};localStorage.setItem(q,JSON.stringify(e))}function A(){const e=localStorage.getItem(q);if(e){const t=JSON.parse(e);c.value=t.email||"",C(c.value)&&(h.disabled=!1)}}A();c.addEventListener("input",O(U,500));c.addEventListener("change",e=>{C(e.currentTarget.value)?h.disabled=!1:f.info({message:"Please enter a valid email address"})});h.addEventListener("click",async e=>{e.preventDefault();try{await j(c.value),f.success({title:"Success",message:"Welcome to energy.flow world!"})}catch(t){t.response.status===409?f.warning({message:"Email already exists"}):f.error({title:"Error",message:"Something went wrong! Please try again later"})}});function C(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}const B=document.querySelector(".hero"),z=new IntersectionObserver(function(e){e[0].isIntersecting?document.body.classList.remove("sticky"):document.body.classList.add("sticky")},{root:null,threshold:0,rootMargin:"-274px"});z.observe(B);const W=new IntersectionObserver(function(e){e[0].isIntersecting?document.body.classList.remove("sticky-animation"):document.body.classList.add("sticky-animation")},{root:null,threshold:0,rootMargin:"-72px"});W.observe(B);const x=document.querySelector(".quote-text"),w=document.querySelector(".quote-author"),H="quote-info",r=JSON.parse(localStorage.getItem(H)),d={quote:"",author:"",date:0};r&&r.date!=new Date().getDate()?(x.textContent=r.quote,w.textContent=r.author,b()):(r&&(x.textContent=r.quote,w.textContent=r.author),b());function b(){I().then(e=>P(e)).catch(e=>console.log(e))}function P(e){d.quote=e.quote,d.author=e.author,d.date=new Date().getDate(),localStorage.setItem(H,JSON.stringify(d))}const M=document.querySelector("#wellcom-modal"),Q=()=>{setTimeout(()=>{M.classList.add("active")},0)},Y=()=>{setTimeout(()=>{M.classList.remove("active")},1e4)},G=()=>{setInterval(()=>{Q(),Y()},35e3)};G();const L=document.getElementById("progress-scroll");L&&L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".progress-wrap path");if(e){const t=e.getTotalLength();e.style.transition="none",e.style.strokeDasharray=`${t} ${t}`,e.style.strokeDashoffset=`${t}`,e.getBoundingClientRect(),e.style.transition="stroke-dashoffset 10ms linear";const n=()=>{const o=window.scrollY||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-window.innerHeight,u=t-o*t/m;e.style.strokeDashoffset=`${u}`};window.addEventListener("scroll",n);const a=50;window.addEventListener("scroll",()=>{if(window.scrollY>a){const o=document.querySelector(".progress-wrap");o&&o.classList.add("active-progress")}else{const o=document.querySelector(".progress-wrap");o&&o.classList.remove("active-progress")}})}});
//# sourceMappingURL=commonHelpers2.js.map
