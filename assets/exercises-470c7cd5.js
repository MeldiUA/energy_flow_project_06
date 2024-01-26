import{a as u}from"./vendor-a2e8d7fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const v="https://energyflow.b.goit.study/api";u.defaults.baseURL=v;async function d(s="",n="",e="",r="",t,a){return(await u.get("/exercises",{params:{bodypart:s,muscles:n,equipment:e,keyword:r,page:t,limit:a}})).data}async function x(s,n=1,e=200){return d(s,"","","",n,e)}async function L(s,n=1,e=200){return d("",s,"","",n,e)}async function b(s,n=1,e=200){return d("","",s,"",n,e)}async function m(s="Muscles",n=1,e=200){return(await u.get("/filters",{params:{filter:s,page:n,limit:e}})).data}const i={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),execisesTitle:document.querySelector(".exercises-title")};let o=1,l=0,p="Muscles";g();i.musclesBtn.classList.add("active-btn");i.filters.addEventListener("click",w);i.exercises.addEventListener("click",f);async function g(){window.innerWidth<768?l=8:l=12;const s=await m(p,o,l);if(s.results.length===0){i.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}h(s.results),T(s.totalPages)}async function w(s){if(i.exercises.addEventListener("click",f),i.execisesTitle.innerHTML="Exercises",s.target.tagName!=="BUTTON")return;o=1,i.exercises.innerHTML="";const n=document.querySelector(".active-btn");n&&n.classList.remove("active-btn"),s.target.classList.add("active-btn"),p=s.target.innerHTML,g()}async function h(s){i.exercises.innerHTML="";let n=s.map(({name:e,filter:r,imgUrl:t})=>`<li class="exercise">
        <img src="${t}" alt="${e}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${e[0].toUpperCase()+e.slice(1)}</h1>
            <p class="exercise-filter">${r}</p>
        </div>
        </li>`).join("");i.exercises.insertAdjacentHTML("beforeend",n)}async function T(s){let n='<li><button class="nav-button active-nav-button" type="button">1</button></li>';i.navButtons.innerHTML="";for(let e=2;e<=s;e+=1)n+=`<li><button class="nav-button" type="button">${e}</button></li>`;i.navButtons.insertAdjacentHTML("beforeend",n)}i.navButtons.addEventListener("click",async s=>{if(s.target.tagName!=="BUTTON")return;const n=document.querySelector(".active-nav-button");n&&n.classList.remove("active-nav-button"),s.target.classList.add("active-nav-button"),o=Number(s.target.innerHTML);const e=await m(p,o,l);h(e.results)});async function f(s){let n="",e="",r=s.target;o=1,r.tagName==="IMG"&&(r=r.nextElementSibling),(r.tagName==="LI"||r.tagName==="P"||r.tagName==="H1")&&(r=r.offsetParent),n=r.lastElementChild.innerHTML,e=r.firstElementChild.innerHTML.toLowerCase(),i.execisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${e[0].toUpperCase()+e.slice(1)}</span>`;let t="";switch(n){case"Muscles":t=await L(e,o,l);break;case"Body parts":t=await x(e,o,l);break;case"Equipment":t=await b(e,o,l);break;default:i.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>')}if(t.results===void 0||t.results.length===0){console.log(t),i.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';return}i.exercises.removeEventListener("click",f),M(t.results),i.navButtons.innerHTML=""}async function M(s){i.exercises.innerHTML="";const n=s.map(({bodyPart:e,burnedCalories:r,name:t,rating:a,target:c,time:y})=>(a%1===0&&(a=a+".0"),`<li class="exercise-information">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${a}
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
        <h2 class="exercise-name">${t[0].toUpperCase()+t.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${r} / ${y} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${e[0].toUpperCase()+e.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${c[0].toUpperCase()+c.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");i.exercises.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=exercises-470c7cd5.js.map
