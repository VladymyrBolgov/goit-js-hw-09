!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("(disabled",!0)})),e.addEventListener("click",(function(){clearInterval(o),console.log("Interval with id ".concat(o," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.e48fa8e5.js.map
