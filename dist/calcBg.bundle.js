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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/calc-bg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/calc-bg.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/calc-bg.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar blur = function () {\n    var blurLayer = document.querySelector('.about__form-background'),\n        blurContainer = document.querySelector('.about__form');\n    //commentsBg = document.querySelector('.about__img-bg');\n\n\n    return {\n        set: function set() {\n            var imgWidth = document.querySelector('.about__img-bg').offsetWidth,\n                positionLeft = -blurContainer.offsetLeft,\n                positionTop = -blurContainer.offsetTop,\n                blurCSS = blurLayer.style;\n\n            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';\n            blurCSS.backgroundPosition = positionLeft + 'px ' + positionTop + 'px';\n        }\n    };\n}();\n\nblur.set();\nwindow.onresize = function () {\n    blur.set();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY2FsYy1iZy5qcz83NzY5Il0sIm5hbWVzIjpbImJsdXIiLCJibHVyTGF5ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJibHVyQ29udGFpbmVyIiwic2V0IiwiaW1nV2lkdGgiLCJvZmZzZXRXaWR0aCIsInBvc2l0aW9uTGVmdCIsIm9mZnNldExlZnQiLCJwb3NpdGlvblRvcCIsIm9mZnNldFRvcCIsImJsdXJDU1MiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwid2luZG93Iiwib25yZXNpemUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBUSxZQUFVO0FBQ3BCLFFBQU1DLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQWxCO0FBQUEsUUFDTUMsZ0JBQWdCRixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBRHRCO0FBRU07OztBQUdOLFdBQU87QUFDSEUsYUFBSyxlQUFVO0FBQ1gsZ0JBQU1DLFdBQVdKLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDSSxXQUExRDtBQUFBLGdCQUNBQyxlQUFlLENBQUNKLGNBQWNLLFVBRDlCO0FBQUEsZ0JBRUFDLGNBQWMsQ0FBQ04sY0FBY08sU0FGN0I7QUFBQSxnQkFHQUMsVUFBVVgsVUFBVVksS0FIcEI7O0FBTUFELG9CQUFRRSxjQUFSLEdBQXlCUixXQUFXLElBQVgsR0FBa0IsR0FBbEIsR0FBd0IsTUFBakQ7QUFDQU0sb0JBQVFHLGtCQUFSLEdBQTZCUCxlQUFlLEtBQWYsR0FBdUJFLFdBQXZCLEdBQXFDLElBQWxFO0FBR0g7QUFaRSxLQUFQO0FBZUgsQ0FyQmEsRUFBZDs7QUF1QkFWLEtBQUtLLEdBQUw7QUFDQVcsT0FBT0MsUUFBUCxHQUFrQixZQUFVO0FBQ3hCakIsU0FBS0ssR0FBTDtBQUNILENBRkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY2FsYy1iZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJsdXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGJsdXJMYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fZm9ybS1iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgICBibHVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19mb3JtJyk7XHJcbiAgICAgICAgICAvL2NvbW1lbnRzQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2ltZy1iZycpO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZ1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19pbWctYmcnKS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgcG9zaXRpb25MZWZ0ID0gLWJsdXJDb250YWluZXIub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSAtYmx1ckNvbnRhaW5lci5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIGJsdXJDU1MgPSBibHVyTGF5ZXIuc3R5bGU7XHJcblxyXG5cclxuICAgICAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kU2l6ZSA9IGltZ1dpZHRoICsgJ3B4JyArICcgJyArICdhdXRvJztcclxuICAgICAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NpdGlvbkxlZnQgKyAncHggJyArIHBvc2l0aW9uVG9wICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0oKSk7XHJcblxyXG5ibHVyLnNldCgpO1xyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpe1xyXG4gICAgYmx1ci5zZXQoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/calc-bg.js\n");

/***/ })

/******/ });