import{a as u}from"./vendor-a2e8d7fa.js";const y="https://energyflow.b.goit.study/api";u.defaults.baseURL=y;async function d(e="",t="",s="",a="",i,o){return(await u.get("/exercises",{params:{bodypart:e,muscles:t,equipment:s,keyword:a,page:i,limit:o}})).data}async function x(e,t=1,s=200){return d(e,"","","",t,s)}async function b(e,t=1,s=200){return d("",e,"","",t,s)}async function L(e,t=1,s=200){return d("","",e,"",t,s)}async function g(e="Muscles",t=1,s=200){return(await u.get("/filters",{params:{filter:e,page:t,limit:s}})).data}const n={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),execisesTitle:document.querySelector(".exercises-title")};let r=1,c=0,p="Muscles";h();n.musclesBtn.classList.add("active-btn");n.filters.addEventListener("click",w);n.exercises.addEventListener("click",f);async function h(){window.innerWidth<768?c=8:c=12;const e=await g(p,r,c);if(e.results.length===0){n.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}m(e.results),T(e.totalPages)}async function w(e){if(n.exercises.addEventListener("click",f),n.execisesTitle.innerHTML="Exercises",e.target.tagName!=="BUTTON")return;r=1,n.exercises.innerHTML="";const t=document.querySelector(".active-btn");t&&t.classList.remove("active-btn"),e.target.classList.add("active-btn"),p=e.target.innerHTML,h()}async function m(e){n.exercises.innerHTML="";let t=e.map(({name:s,filter:a,imgUrl:i})=>`<li class="exercise">
        <img src="${i}" alt="${s}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${s[0].toUpperCase()+s.slice(1)}</h1>
            <p class="exercise-filter">${a}</p>
        </div>
        </li>`).join("");n.exercises.insertAdjacentHTML("beforeend",t)}async function T(e){let t='<li><button class="nav-button active-nav-button" type="button">1</button></li>';n.navButtons.innerHTML="";for(let s=2;s<=e;s+=1)t+=`<li><button class="nav-button" type="button">${s}</button></li>`;n.navButtons.insertAdjacentHTML("beforeend",t)}n.navButtons.addEventListener("click",async e=>{if(e.target.tagName!=="BUTTON")return;const t=document.querySelector(".active-nav-button");t&&t.classList.remove("active-nav-button"),e.target.classList.add("active-nav-button"),r=Number(e.target.innerHTML);const s=await g(p,r,c);m(s.results)});async function f(e){let t="",s="",a=e.target;r=1,a.tagName==="IMG"&&(a=a.nextElementSibling),(a.tagName==="LI"||a.tagName==="P"||a.tagName==="H1")&&(a=a.offsetParent),t=a.lastElementChild.innerHTML,s=a.firstElementChild.innerHTML.toLowerCase(),n.execisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${s[0].toUpperCase()+s.slice(1)}</span>`;let i="";switch(t){case"Muscles":i=await b(s,r,c);break;case"Body parts":i=await x(s,r,c);break;case"Equipment":i=await L(s,r,c);break;default:n.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>')}if(i.results===void 0||i.results.length===0){console.log(i),n.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';return}n.exercises.removeEventListener("click",f),M(i.results),n.navButtons.innerHTML=""}async function M(e){n.exercises.innerHTML="";const t=e.map(({bodyPart:s,burnedCalories:a,name:i,rating:o,target:l,time:v})=>(o%1===0&&(o=o+".0"),`<li class="exercise-information">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${o}
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
        <h2 class="exercise-name">${i[0].toUpperCase()+i.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${a} / ${v} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${s[0].toUpperCase()+s.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${l[0].toUpperCase()+l.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");n.exercises.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=exercises-885fc5d9.js.map
