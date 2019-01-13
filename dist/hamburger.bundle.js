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
eval("\n\n//console.log('Это гамбургер')\nvar hamBtn = document.querySelector('.nav__hamburger');\nvar clsBtn = document.querySelector('.nav__hamburger--close');\n//const hamBtnStyle = getComputedStyle(hamBtn);\n//const clsBtnStyle = getComputedStyle(clsBtn);\nvar fulscreenMenu = document.querySelector('.header__fullscreen-menu');\nvar wrapper = document.querySelector('.wrapper');\n\nhamBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    //console.log('Это гамбургер');\n\n    if (!fulscreenMenu.classList.contains('header__fullscreen-menu--active') && !wrapper.classList.contains('wrapper--blocked')) {\n        fulscreenMenu.classList.add('header__fullscreen-menu--active');\n        wrapper.classList.add('wrapper--blocked');\n\n        clsBtn.style.display = 'block';\n        hamBtn.style.display = 'none';\n    }\n});\nclsBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (fulscreenMenu.classList.contains('header__fullscreen-menu--active') && wrapper.classList.contains('wrapper--blocked')) {\n        fulscreenMenu.classList.remove('header__fullscreen-menu--active');\n        wrapper.classList.remove('wrapper--blocked');\n\n        clsBtn.style.display = 'none';\n        hamBtn.style.display = 'block';\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyLmpzPzNjOGIiXSwibmFtZXMiOlsiaGFtQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xzQnRuIiwiZnVsc2NyZWVuTWVudSIsIndyYXBwZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxTQUFTQyxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFmO0FBQ0EsSUFBTUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBZjtBQUNBO0FBQ0E7QUFDQSxJQUFNRSxnQkFBZ0JILFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXRCO0FBQ0EsSUFBTUcsVUFBVUosU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjs7QUFFQUYsT0FBT00sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ25DQSxNQUFFQyxjQUFGO0FBQ0E7O0FBRUEsUUFBSSxDQUFDSixjQUFjSyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxpQ0FBakMsQ0FBRCxJQUNHLENBQUNMLFFBQVFJLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLGtCQUEzQixDQURSLEVBQ3VEO0FBQ25ETixzQkFBY0ssU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEIsaUNBQTVCO0FBQ0FOLGdCQUFRSSxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixrQkFBdEI7O0FBRUFSLGVBQU9TLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNBYixlQUFPWSxLQUFQLENBQWFDLE9BQWIsR0FBdUIsTUFBdkI7QUFDSDtBQUdKLENBZEQ7QUFlQVYsT0FBT0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFLO0FBQ2pDQSxNQUFFQyxjQUFGOztBQUVBLFFBQUlKLGNBQWNLLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLGlDQUFqQyxLQUNFTCxRQUFRSSxTQUFSLENBQWtCQyxRQUFsQixDQUEyQixrQkFBM0IsQ0FETixFQUNxRDtBQUNsRE4sc0JBQWNLLFNBQWQsQ0FBd0JLLE1BQXhCLENBQStCLGlDQUEvQjtBQUNBVCxnQkFBUUksU0FBUixDQUFrQkssTUFBbEIsQ0FBeUIsa0JBQXpCOztBQUVBWCxlQUFPUyxLQUFQLENBQWFDLE9BQWIsR0FBdUIsTUFBdkI7QUFDQWIsZUFBT1ksS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE9BQXZCO0FBQ0M7QUFDUixDQVhEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2hhbWJ1cmdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc29sZS5sb2coJ9Ct0YLQviDQs9Cw0LzQsdGD0YDQs9C10YAnKVxyXG5jb25zdCBoYW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19oYW1idXJnZXInKTtcclxuY29uc3QgY2xzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faGFtYnVyZ2VyLS1jbG9zZScpO1xyXG4vL2NvbnN0IGhhbUJ0blN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShoYW1CdG4pO1xyXG4vL2NvbnN0IGNsc0J0blN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjbHNCdG4pO1xyXG5jb25zdCBmdWxzY3JlZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZnVsbHNjcmVlbi1tZW51Jyk7XHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuaGFtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZygn0K3RgtC+INCz0LDQvNCx0YPRgNCz0LXRgCcpO1xyXG5cclxuICAgIGlmKCAhZnVsc2NyZWVuTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fZnVsbHNjcmVlbi1tZW51LS1hY3RpdmUnKVxyXG4gICAgICAgICYmICF3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnd3JhcHBlci0tYmxvY2tlZCcpKXtcclxuICAgICAgICBmdWxzY3JlZW5NZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fZnVsbHNjcmVlbi1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItLWJsb2NrZWQnKTtcclxuICAgICAgICBcclxuICAgICAgICBjbHNCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxyXG4gICAgICAgIGhhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgXHJcbiAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbn0pO1xyXG5jbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgIGlmKCBmdWxzY3JlZW5NZW51LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19mdWxsc2NyZWVuLW1lbnUtLWFjdGl2ZScpXHJcbiAgICAgICAgJiYgd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ3dyYXBwZXItLWJsb2NrZWQnKSl7XHJcbiAgICAgICAgZnVsc2NyZWVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2Z1bGxzY3JlZW4tbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd3cmFwcGVyLS1ibG9ja2VkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xzQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxyXG4gICAgICAgIGhhbUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgXHJcbiAgICAgICAgfSBcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/hamburger.js\n");

/***/ })

/******/ });