import{a as c}from"./vendor-df80d4f8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const d=document.querySelector(".open-mobile-menu-btn"),a=document.querySelector(".close-mobile-menu-btn"),i=document.querySelector(".mobile-menu-wrapper");d.addEventListener("click",function(){i.classList.add("is-open")});a.addEventListener("click",function(){i.classList.remove("is-open")});const l=document.querySelector(".hero"),f=new IntersectionObserver(function(n){const o=n[0];console.log(o),o.isIntersecting?document.body.classList.remove("sticky"):document.body.classList.add("sticky")},{root:null,threshold:0,rootMargin:"-274px"});f.observe(l);const m=new IntersectionObserver(function(n){const o=n[0];console.log(o),o.isIntersecting?document.body.classList.remove("sticky-animation"):document.body.classList.add("sticky-animation")},{root:null,threshold:0,rootMargin:"-72px"});m.observe(l);const p="https://energyflow.b.goit.study/api";c.defaults.baseURL=p;async function b(){return(await c.get("/quote")).data}export{b as g};
//# sourceMappingURL=api-9d7e9e6d.js.map
