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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/parallax-header.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/parallax-header.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/parallax-header.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hedaerImg = document.querySelector('.header__bg-img');\n\nfunction setTranslate(xPos, yPos, el) {\n    el.style.transform = \"translate3d(\" + xPos + \", \" + yPos + \"px, 0)\";\n}\n\nwindow.addEventListener(\"DOMContentLoaded\", scrollLoop, false);\n\nvar yScrollPosition;\n\nfunction scrollLoop() {\n\n    yScrollPosition = window.scrollY;\n\n    setTranslate(0, yScrollPosition * -0.3, hedaerImg);\n\n    requestAnimationFrame(scrollLoop);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvcGFyYWxsYXgtaGVhZGVyLmpzP2NkMWIiXSwibmFtZXMiOlsiaGVkYWVySW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VHJhbnNsYXRlIiwieFBvcyIsInlQb3MiLCJlbCIsInN0eWxlIiwidHJhbnNmb3JtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbExvb3AiLCJ5U2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWxCOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQ0MsRUFBbEMsRUFBc0M7QUFDbENBLE9BQUdDLEtBQUgsQ0FBU0MsU0FBVCxHQUFxQixpQkFBaUJKLElBQWpCLEdBQXdCLElBQXhCLEdBQStCQyxJQUEvQixHQUFzQyxRQUEzRDtBQUNIOztBQUVESSxPQUFPQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNENDLFVBQTVDLEVBQXdELEtBQXhEOztBQUdBLElBQUlDLGVBQUo7O0FBRUEsU0FBU0QsVUFBVCxHQUFzQjs7QUFFbEJDLHNCQUFrQkgsT0FBT0ksT0FBekI7O0FBRUFWLGlCQUFhLENBQWIsRUFBZ0JTLGtCQUFrQixDQUFDLEdBQW5DLEVBQXdDWixTQUF4Qzs7QUFHQWMsMEJBQXNCSCxVQUF0QjtBQUNIIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL3BhcmFsbGF4LWhlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlZGFlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JnLWltZycpO1xyXG5cclxuZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHhQb3MsIHlQb3MsIGVsKSB7XHJcbiAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgeFBvcyArIFwiLCBcIiArIHlQb3MgKyBcInB4LCAwKVwiO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2Nyb2xsTG9vcCwgZmFsc2UpO1xyXG5cclxuXHJcbnZhciB5U2Nyb2xsUG9zaXRpb247XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxMb29wKCkge1xyXG5cclxuICAgIHlTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgIHNldFRyYW5zbGF0ZSgwLCB5U2Nyb2xsUG9zaXRpb24gKiAtMC4zLCBoZWRhZXJJbWcpO1xyXG4gICAgXHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbExvb3ApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/parallax-header.js\n");

/***/ })

/******/ });