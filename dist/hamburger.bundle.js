/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/hamburger.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/hamburger.js":
/*!*****************************************!*\
  !*** ./src/assets/scripts/hamburger.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//console.log('Это гамбургер')\nvar hamBtn = document.querySelector('.nav__hamburger');\nvar clsBtn = document.querySelector('.nav__hamburger--close');\n//const hamBtnStyle = getComputedStyle(hamBtn);\n//const clsBtnStyle = getComputedStyle(clsBtn);\nvar fulscreenMenu = document.querySelector('.header__fullscreen-menu');\n//const wrapper = document.querySelector('.wrapper');\n\nhamBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    //console.log('Это гамбургер');\n\n    // if( !fulscreenMenu.classList.contains('header__fullscreen-menu--active')\n    //     && !wrapper.classList.contains('wrapper--blocked')){\n    //     fulscreenMenu.classList.add('header__fullscreen-menu--active');\n    //     wrapper.classList.add('wrapper--blocked');\n\n    //     clsBtn.style.display = 'block'; \n    //     hamBtn.style.display = 'none';  \n    // }\n    if (!fulscreenMenu.classList.contains('header__fullscreen-menu--active')) {\n        fulscreenMenu.classList.add('header__fullscreen-menu--active');\n\n        clsBtn.style.display = 'block';\n        hamBtn.style.display = 'none';\n    }\n});\nclsBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    //  if( fulscreenMenu.classList.contains('header__fullscreen-menu--active')\n    //     && wrapper.classList.contains('wrapper--blocked')){\n    //     fulscreenMenu.classList.remove('header__fullscreen-menu--active');\n    //     wrapper.classList.remove('wrapper--blocked');\n\n    //     clsBtn.style.display = 'none'; \n    //     hamBtn.style.display = 'block'; \n    //     } \n    if (fulscreenMenu.classList.contains('header__fullscreen-menu--active')) {\n        fulscreenMenu.classList.remove('header__fullscreen-menu--active');\n\n        clsBtn.style.display = 'none';\n        hamBtn.style.display = 'block';\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyLmpzPzNjOGIiXSwibmFtZXMiOlsiaGFtQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xzQnRuIiwiZnVsc2NyZWVuTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWY7QUFDQSxJQUFNQyxTQUFTRixTQUFTQyxhQUFULENBQXVCLHdCQUF2QixDQUFmO0FBQ0E7QUFDQTtBQUNBLElBQU1FLGdCQUFnQkgsU0FBU0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBdEI7QUFDQTs7QUFFQUYsT0FBT0ssZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ25DQSxNQUFFQyxjQUFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFDSCxjQUFjSSxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxpQ0FBakMsQ0FBTCxFQUF5RTtBQUNyRUwsc0JBQWNJLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLGlDQUE1Qjs7QUFFQVAsZUFBT1EsS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE9BQXZCO0FBQ0FaLGVBQU9XLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixNQUF2QjtBQUNIO0FBR0osQ0FwQkQ7QUFxQkFULE9BQU9FLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNDLENBQUQsRUFBSztBQUNqQ0EsTUFBRUMsY0FBRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDSSxRQUFJSCxjQUFjSSxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxpQ0FBakMsQ0FBSixFQUF3RTtBQUN4RUwsc0JBQWNJLFNBQWQsQ0FBd0JLLE1BQXhCLENBQStCLGlDQUEvQjs7QUFFQVYsZUFBT1EsS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE1BQXZCO0FBQ0FaLGVBQU9XLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNDO0FBQ1IsQ0FqQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zb2xlLmxvZygn0K3RgtC+INCz0LDQvNCx0YPRgNCz0LXRgCcpXHJcbmNvbnN0IGhhbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2hhbWJ1cmdlcicpO1xyXG5jb25zdCBjbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19oYW1idXJnZXItLWNsb3NlJyk7XHJcbi8vY29uc3QgaGFtQnRuU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGhhbUJ0bik7XHJcbi8vY29uc3QgY2xzQnRuU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNsc0J0bik7XHJcbmNvbnN0IGZ1bHNjcmVlbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19mdWxsc2NyZWVuLW1lbnUnKTtcclxuLy9jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHJcbmhhbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vY29uc29sZS5sb2coJ9Ct0YLQviDQs9Cw0LzQsdGD0YDQs9C10YAnKTtcclxuXHJcbiAgICAvLyBpZiggIWZ1bHNjcmVlbk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX2Z1bGxzY3JlZW4tbWVudS0tYWN0aXZlJylcclxuICAgIC8vICAgICAmJiAhd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ3dyYXBwZXItLWJsb2NrZWQnKSl7XHJcbiAgICAvLyAgICAgZnVsc2NyZWVuTWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2Z1bGxzY3JlZW4tbWVudS0tYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1ibG9ja2VkJyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgY2xzQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcclxuICAgIC8vICAgICBoYW1CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgIFxyXG4gICAgLy8gfVxyXG4gICAgaWYoICFmdWxzY3JlZW5NZW51LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19mdWxsc2NyZWVuLW1lbnUtLWFjdGl2ZScpKXtcclxuICAgICAgICBmdWxzY3JlZW5NZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fZnVsbHNjcmVlbi1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY2xzQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcclxuICAgICAgICBoYW1CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgIFxyXG4gICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG59KTtcclxuY2xzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vICBpZiggZnVsc2NyZWVuTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fZnVsbHNjcmVlbi1tZW51LS1hY3RpdmUnKVxyXG4gICAgLy8gICAgICYmIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd3cmFwcGVyLS1ibG9ja2VkJykpe1xyXG4gICAgLy8gICAgIGZ1bHNjcmVlbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19mdWxsc2NyZWVuLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3JhcHBlci0tYmxvY2tlZCcpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGNsc0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICAgIC8vICAgICBoYW1CdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxyXG4gICAgLy8gICAgIH0gXHJcbiAgICAgICAgaWYoIGZ1bHNjcmVlbk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX2Z1bGxzY3JlZW4tbWVudS0tYWN0aXZlJykpe1xyXG4gICAgICAgIGZ1bHNjcmVlbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19mdWxsc2NyZWVuLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY2xzQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxyXG4gICAgICAgIGhhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgXHJcbiAgICAgICAgfSBcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/hamburger.js\n");

/***/ })

/******/ });