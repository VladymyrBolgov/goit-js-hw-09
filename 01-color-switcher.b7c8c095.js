const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;t.addEventListener("click",(function(){o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(o),t.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.b7c8c095.js.map
