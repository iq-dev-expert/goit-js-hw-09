const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;function n(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,a=setInterval(n,1e3)})),d.addEventListener("click",(function(){e.disabled=!1,d.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.9c4f5bd8.js.map
