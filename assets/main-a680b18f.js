import{a as p,t as b,i as u}from"./vendor-df80d4f8.js";const L="https://energyflow.b.goit.study/api";p.defaults.baseURL=L;async function f(e="",s="",t="",r="",n,c){return(await p.get("/exercises",{params:{bodypart:e,muscles:s,equipment:t,keyword:r,page:n,limit:c}})).data}async function E(e,s=1,t=200){return f(e,"","","",s,t)}async function T(e,s=1,t=200){return f("",e,"","",s,t)}async function S(e,s=1,t=200){return f("","",e,"",s,t)}async function y(e="Muscles",s=1,t=200){return(await p.get("/filters",{params:{filter:e,page:s,limit:t}})).data}const a={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),execisesTitle:document.querySelector(".exercises-title")};let i=1,o=0,m="Muscles";v();a.musclesBtn.classList.add("active-btn");a.filters.addEventListener("click",k);a.exercises.addEventListener("click",g);async function v(){window.innerWidth<768?o=8:o=12;const e=await y(m,i,o);if(e.results.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}x(e.results),M(e.totalPages)}async function k(e){if(a.exercises.addEventListener("click",g),a.execisesTitle.innerHTML="Exercises",e.target.tagName!=="BUTTON")return;i=1,a.exercises.innerHTML="";const s=document.querySelector(".active-btn");s&&s.classList.remove("active-btn"),e.target.classList.add("active-btn"),m=e.target.innerHTML,v()}async function x(e){a.exercises.innerHTML="";let s=e.map(({name:t,filter:r,imgUrl:n})=>`<li class="exercise">
        <img src="${n}" alt="${t}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${t[0].toUpperCase()+t.slice(1)}</h1>
            <p class="exercise-filter">${r}</p>
        </div>
        </li>`).join("");a.exercises.insertAdjacentHTML("beforeend",s)}async function M(e){let s='<li><button class="nav-button active-nav-button" type="button">1</button></li>';a.navButtons.innerHTML="";for(let t=2;t<=e;t+=1)s+=`<li><button class="nav-button" type="button">${t}</button></li>`;a.navButtons.insertAdjacentHTML("beforeend",s)}a.navButtons.addEventListener("click",async e=>{if(e.target.tagName!=="BUTTON")return;const s=document.querySelector(".active-nav-button");s&&s.classList.remove("active-nav-button"),e.target.classList.add("active-nav-button"),i=Number(e.target.innerHTML);const t=await y(m,i,o);x(t.results)});async function g(e){let s="",t="",r=e.target;i=1,r.tagName==="IMG"&&(r=r.nextElementSibling),(r.tagName==="LI"||r.tagName==="P"||r.tagName==="H1")&&(r=r.offsetParent),s=r.lastElementChild.innerHTML,t=r.firstElementChild.innerHTML.toLowerCase(),a.execisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${t[0].toUpperCase()+t.slice(1)}</span>`;let n="";switch(s){case"Muscles":n=await T(t,i,o);break;case"Body parts":n=await E(t,i,o);break;case"Equipment":n=await S(t,i,o);break;default:a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>')}if(n.results===void 0||n.results.length===0){console.log(n),a.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';return}a.exercises.removeEventListener("click",g),B(n.results),a.navButtons.innerHTML=""}async function B(e){a.exercises.innerHTML="";const s=e.map(({bodyPart:t,burnedCalories:r,name:n,rating:c,target:d,time:w})=>(c%1===0&&(c=c+".0"),`<li class="exercise-information">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${c}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="../images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <a href="" target="_blank" rel="noopener noreferrer" class="details-link">
              Start
              <svg  width="14" height="14">
                  <use href="../images/icon.svg#icon-arrow"></use>
              </svg>
          </a>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="../images/icon.svg#icon-man"></use>
          </svg>
        </div>
        <h2 class="exercise-name">${n[0].toUpperCase()+n.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${r} / ${w} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${t[0].toUpperCase()+t.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${d[0].toUpperCase()+d.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");a.exercises.insertAdjacentHTML("beforeend",s)}const H=document.querySelector("form"),l=document.querySelector("input"),h="feedback-form-state";function N(){const e={email:l.value};localStorage.setItem(h,JSON.stringify(e))}function $(){const e=localStorage.getItem(h);if(e){const s=JSON.parse(e);l.value=s.email||""}}$();l.addEventListener("input",b(N,500));H.addEventListener("submit",C);function C(e){if(e.preventDefault(),!U(l.value)){u.error({title:"Error",message:"Please enter a valid email address"});return}const s={email:l.value};fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(t=>{if(t.status===409)throw u.error({title:"Error",message:"The email address already exists or there is a data conflict"}),new Error("Email already exists");if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{console.log("Success:",t),u.success({title:"Success",message:"Welcome to energy.flow world!"}),localStorage.removeItem(h),l.value=""}).catch(t=>{console.error("Error:",t),t.message!=="Email already exists"&&u.error({title:"Error",message:"Something went wrong! Please try again later"})})}function U(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}
//# sourceMappingURL=main-a680b18f.js.map
