!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=null;function o(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(){e.disabled=!0,a=setInterval(o,1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.8e84f86e.js.map
