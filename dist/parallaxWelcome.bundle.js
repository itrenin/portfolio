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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/parallax-welcome.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/parallax-welcome.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/parallax-welcome.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxContainer = document.querySelector('.welcome__parallax');\nvar layers = Array.from(parallaxContainer.children);\n\nvar moveLayers = function moveLayers(e) {\n\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n    //console.log(initialX + \" \" + initialY);\n    layers.forEach(function (layer, i) {\n        var divider = i / 100;\n        // console.log(divider);\n        var positionX = initialX * divider;\n        var positionY = initialY * divider;\n        layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n    });\n};\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvcGFyYWxsYXgtd2VsY29tZS5qcz8yZjBjIl0sIm5hbWVzIjpbInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJzdHlsZSIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLG9CQUF2QixDQUExQjtBQUNBLElBQU1DLFNBQVNDLE1BQU1DLElBQU4sQ0FBV0wsa0JBQWtCTSxRQUE3QixDQUFmOztBQUVBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxJQUFHOztBQUdsQixRQUFNQyxXQUFZQyxPQUFPQyxVQUFQLEdBQW9CLENBQXJCLEdBQTBCQyxFQUFFQyxLQUE3QztBQUNBLFFBQU1DLFdBQVlKLE9BQU9LLFdBQVAsR0FBcUIsQ0FBdEIsR0FBMkJILEVBQUVJLEtBQTlDO0FBQ0E7QUFDQVosV0FBT2EsT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQ3pCLFlBQU1DLFVBQVVELElBQUksR0FBcEI7QUFDQTtBQUNBLFlBQU1FLFlBQVlaLFdBQVdXLE9BQTdCO0FBQ0EsWUFBTUUsWUFBWVIsV0FBV00sT0FBN0I7QUFDQUYsY0FBTUssS0FBTixDQUFZQyxTQUFaLGtCQUFvQ0gsU0FBcEMsWUFBb0RDLFNBQXBEO0FBQ0gsS0FORDtBQU9ILENBYkQ7QUFjQVosT0FBT2UsZ0JBQVAsQ0FBeUIsV0FBekIsRUFBc0NqQixVQUF0QyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9wYXJhbGxheC13ZWxjb21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fcGFyYWxsYXgnKTtcclxuY29uc3QgbGF5ZXJzID0gQXJyYXkuZnJvbShwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbik7XHJcblxyXG5jb25zdCBtb3ZlTGF5ZXJzID0gZT0+e1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVg7XHJcbiAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGluaXRpYWxYICsgXCIgXCIgKyBpbml0aWFsWSk7XHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBkaXZpZGVyID0gaSAvIDEwMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXZpZGVyKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXI7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xyXG4gICAgICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9YHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcclxuICAgIH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKCdtb3VzZW1vdmUnLCBtb3ZlTGF5ZXJzKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/parallax-welcome.js\n");

/***/ })

/******/ });