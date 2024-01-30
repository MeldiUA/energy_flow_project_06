import{g as C}from"./api-ac2e6aa5.js";import{t as q,i as u}from"./vendor-df80d4f8.js";const a={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form")};let l=0,b="Muscles",y="",f="",r="";S();a.musclesBtn.classList.add("active-btn");a.filters.addEventListener("click",M);a.exercises.addEventListener("click",m);async function S(){window.innerWidth<768?l=8:l=12,$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(e){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/filters?filter=${b}&limit=300`,success:function(t){a.navButtons.innerHTML="",e(t.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(e,t){if(e.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}N(e)}})})}async function M(e){if(f="",r="",a.exercises.addEventListener("click",m),a.exercisesTitle.innerHTML="Exercises",a.searchForm.style.display="none",e.target.tagName!=="BUTTON")return;a.exercises.innerHTML="";const t=document.querySelector(".active-btn");t&&(t.classList.remove("active-btn"),t.classList.add("not-active-btn")),e.target.classList.add("active-btn"),b=e.target.innerHTML,S()}async function N(e){a.exercises.innerHTML="";let t=e.map(({name:s,filter:n,imgUrl:o})=>`<li class="exercise">
        <img src="${o}" alt="${s}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${s[0].toUpperCase()+s.slice(1)}</h1>
            <p class="exercise-filter">${n}</p>
        </div>
        </li>`).join("");a.exercises.insertAdjacentHTML("beforeend",t)}async function m(e){a.searchForm.style.display="block";let t=e.target;t.tagName==="IMG"&&(t=t.nextElementSibling),(t.tagName==="LI"||t.tagName==="P"||t.tagName==="H1")&&(t=t.offsetParent),f=t.lastElementChild.innerHTML,r=t.firstElementChild.innerHTML.toLowerCase(),a.exercisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${r[0].toUpperCase()+r.slice(1)}</span>`,a.exercises.removeEventListener("click",m),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(s){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${f.toLowerCase()}=${r}&limit=300`,success:function(n){a.navButtons.innerHTML="",s(n.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(s,n){if(s.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}L(s)}})})}async function L(e){a.exercises.innerHTML="";const t=e.map(({name:s,_id:n,rating:o,burnedCalories:E,bodyPart:g,target:h,time:k})=>(o%1===0&&(o=o+".0"),`<li class="exercise-information" data-id-card="${n}">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${o}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="./images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <button data-action="start_exercise_btn" data-id-start-btn="${n}" class="details-link">
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
              <p class="detail-value">${E} / ${k} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${g[0].toUpperCase()+g.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${h[0].toUpperCase()+h.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");a.exercises.insertAdjacentHTML("beforeend",t)}a.searchForm.addEventListener("submit",async e=>{e.preventDefault(),y=e.target.searchQuery.value.trim(),e.target.reset(),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:l,dataSource:function(t){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${f.toLowerCase()}=${r}&keyword=${y}&limit=300`,success:function(s){a.navButtons.innerHTML="",t(s.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(t,s){if(t.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}L(t)}})})});const H=document.querySelector("form"),c=document.querySelector("input"),p="feedback-form-state";function B(){const e={email:c.value};localStorage.setItem(p,JSON.stringify(e))}function D(){const e=localStorage.getItem(p);if(e){const t=JSON.parse(e);c.value=t.email||""}}D();c.addEventListener("input",q(B,500));H.addEventListener("submit",j);function j(e){if(e.preventDefault(),!O(c.value)){u.error({title:"Error",message:"Please enter a valid email address"});return}const t={email:c.value};fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(s=>{if(s.status===409)throw u.error({title:"Error",message:"The email address already exists or there is a data conflict"}),new Error("Email already exists");if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{console.log("Success:",s),u.success({title:"Success",message:"Welcome to energy.flow world!"}),localStorage.removeItem(p),c.value=""}).catch(s=>{console.error("Error:",s),s.message!=="Email already exists"&&u.error({title:"Error",message:"Something went wrong! Please try again later"})})}function O(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}const v=document.querySelector(".quote-text"),x=document.querySelector(".quote-author"),T="quote-info",i=JSON.parse(localStorage.getItem(T)),d={quote:"",author:"",date:0};i&&i.date!=new Date().getDate()?(v.textContent=i.quote,x.textContent=i.author,w()):(i&&(v.textContent=i.quote,x.textContent=i.author),w());function w(){C().then(e=>U(e)).catch(e=>console.log(e))}function U(e){d.quote=e.quote,d.author=e.author,d.date=new Date().getDate(),localStorage.setItem(T,JSON.stringify(d))}
//# sourceMappingURL=main-8d45b29e.js.map
