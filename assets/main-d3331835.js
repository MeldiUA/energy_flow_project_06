import{t as w,i as l}from"./vendor-1af35e04.js";import"./header-d62726fd.js";const a={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form")};let c=0,g="Muscles",u="",r="";h();a.musclesBtn.classList.add("active-btn");a.filters.addEventListener("click",b);a.exercises.addEventListener("click",d);async function h(){window.innerWidth<768?c=8:c=12,$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:c,dataSource:function(t){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/filters?filter=${g}&limit=300`,success:function(e){a.navButtons.innerHTML="",t(e.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(t,e){if(t.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}L(t)}})})}async function b(t){if(u="",r="",a.exercises.addEventListener("click",d),a.exercisesTitle.innerHTML="Exercises",a.searchForm.style.display="none",t.target.tagName!=="BUTTON")return;a.exercises.innerHTML="";const e=document.querySelector(".active-btn");e&&(e.classList.remove("active-btn"),e.classList.add("not-active-btn")),t.target.classList.add("active-btn"),g=t.target.innerHTML,h()}async function L(t){a.exercises.innerHTML="";let e=t.map(({name:s,filter:i,imgUrl:n})=>`<li class="exercise">
        <img src="${n}" alt="${s}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${s[0].toUpperCase()+s.slice(1)}</h1>
            <p class="exercise-filter">${i}</p>
        </div>
        </li>`).join("");a.exercises.insertAdjacentHTML("beforeend",e)}async function d(t){a.searchForm.style.display="block";let e=t.target;e.tagName==="IMG"&&(e=e.nextElementSibling),(e.tagName==="LI"||e.tagName==="P"||e.tagName==="H1")&&(e=e.offsetParent),u=e.lastElementChild.innerHTML,r=e.firstElementChild.innerHTML.toLowerCase(),a.exercisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${r[0].toUpperCase()+r.slice(1)}</span>`,a.exercises.removeEventListener("click",d),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:c,dataSource:function(s){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${u.toLowerCase()}=${r}&limit=300`,success:function(i){a.navButtons.innerHTML="",s(i.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(s,i){if(s.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}y(s)}})})}async function y(t){a.exercises.innerHTML="";const e=t.map(({name:s,_id:i,rating:n,burnedCalories:v,bodyPart:f,target:m,time:x})=>(n%1===0&&(n=n+".0"),`<li class="exercise-information" data-id-card="${i}">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${n}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="../images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <button data-action="start_exercise_btn" data-id-start-btn="${i}" class="details-link">
          Start
              <svg stroke="#1B1B1B"  width="14" height="14">
                  <use href="../images/icon.svg#icon-arrow"></use>
              </svg>
          </button>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="../images/icon.svg#icon-man"></use>
          </svg>
        </div>
        <h2 class="exercise-name">${s[0].toUpperCase()+s.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${v} / ${x} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${f[0].toUpperCase()+f.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${m[0].toUpperCase()+m.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");a.exercises.insertAdjacentHTML("beforeend",e)}a.searchForm.addEventListener("submit",async t=>{t.preventDefault(),t.target.searchQuery.value.trim(),t.target.reset(),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",pageSize:c,dataSource:function(e){$.ajax({type:"GET",url:`https://energyflow.b.goit.study/api/exercises?${u.toLowerCase()}=${r}&keyword=wall&limit=300`,success:function(s){a.navButtons.innerHTML="",e(s.results)},error:function(){console.log("Помилка запиту даних")}})},callback:function(e,s){if(e.length===0){a.exercises.insertAdjacentHTML("beforeend",'<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>');return}y(e)}})})});const S=document.querySelector("form"),o=document.querySelector("input"),p="feedback-form-state";function T(){const t={email:o.value};localStorage.setItem(p,JSON.stringify(t))}function E(){const t=localStorage.getItem(p);if(t){const e=JSON.parse(t);o.value=e.email||""}}E();o.addEventListener("input",w(T,500));S.addEventListener("submit",k);function k(t){if(t.preventDefault(),!C(o.value)){l.error({title:"Error",message:"Please enter a valid email address"});return}const e={email:o.value};fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(s.status===409)throw l.error({title:"Error",message:"The email address already exists or there is a data conflict"}),new Error("Email already exists");if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{console.log("Success:",s),l.success({title:"Success",message:"Welcome to energy.flow world!"}),localStorage.removeItem(p),o.value=""}).catch(s=>{console.error("Error:",s),s.message!=="Email already exists"&&l.error({title:"Error",message:"Something went wrong! Please try again later"})})}function C(t){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(t)}
//# sourceMappingURL=main-d3331835.js.map
