!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}({8:function(e,t,r){"use strict";var n=document.querySelector(".nav__hamburger"),c=document.querySelector(".nav__hamburger--close"),l=document.querySelector(".header__fullscreen-menu"),o=document.querySelector(".wrapper");n.addEventListener("click",function(e){e.preventDefault(),l.classList.contains("header__fullscreen-menu--active")||o.classList.contains("wrapper--blocked")||(l.classList.add("header__fullscreen-menu--active"),o.classList.add("wrapper--blocked"),c.style.display="block",n.style.display="none")}),c.addEventListener("click",function(e){e.preventDefault(),l.classList.contains("header__fullscreen-menu--active")&&o.classList.contains("wrapper--blocked")&&(l.classList.remove("header__fullscreen-menu--active"),o.classList.remove("wrapper--blocked"),c.style.display="none",n.style.display="block")})}});