(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s=`<form class="max-w-sm mx-auto">\r
    <div class="mb-5">\r
        <label for="email" class="block mb-5 text-lg md:text-base lg:text-2xl font-medium text-gray-900 dark:text-white">\r
            Ingresa tu peso en kg <span class="text-yellow-300">ejemplo (70)</span>\r
        </label>\r
        <input type="number" id="weight" name="weight"\r
            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-base lg:text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"\r
            placeholder="0" required />\r
    </div>\r
\r
    <button type="submit"\r
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg md:text-base lg:text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">\r
        Calcular\r
    </button>\r
</form>\r
\r
\r
\r
`;let i=!1;function c(o){o.innerHTML=s;const r=o.querySelector("form");document.addEventListener("click",()=>{i=!0}),r.addEventListener("submit",a=>{a.preventDefault();const n=new FormData(r),e=Number(n.get("weight"));if(e<0){alert("El peso no puede ser negativo");return}if(e>=100){u();return}alert("El peso es: "+e)})}const u=()=>{d(),m()},d=()=>{const o=document.getElementById("rotatingImage");document.querySelector(".image-container").classList.toggle("animate"),o.classList.toggle("animate")},m=()=>{if(!i)return;document.getElementById("audio").play().catch(r=>{console.error("Error al intentar reproducir el audio:",r),alert("El navegador no pudo reproducir el audio.")})};document.querySelector("#app").innerHTML=`
  <h1 class="text-4xl">Calculadora de Salud</h1>

  <div class="app-component">

  </div>
`;const g=document.querySelector(".app-component");c(g);
