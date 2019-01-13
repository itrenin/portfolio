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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = preloader;\nfunction preloader() {\n    var loader = document.querySelector('.preloader');\n    var images = document.querySelectorAll('img');\n    var wrapper = document.querySelector('.wrapper');\n    var preloaderProgress = document.querySelector('.preloader__text');\n\n    wrapper.style.height = '100vh';\n\n    var percent = 0;\n    var step = 100 / images.length;\n\n    function percentTick(end, imageLoaded) {\n        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n        if (start <= end) {\n            setTimeout(function () {\n                percent = percent < 100 ? ++percent : 100;\n                preloaderProgress.textContent = '' + percent;\n                percentTick(end, imageLoaded, start + 1);\n            }, 10);\n        }\n        if (imageLoaded === images.length && percent === 100) {\n            wrapper.style.height = '';\n            loader.classList.add('hide');\n        }\n    }\n    return {\n        loaded: function loaded() {\n            var imageLoaded = 0;\n            if (images.length === 0) {\n                wrapper.style.height = '';\n                loader.classList.add('hide');\n                return;\n            }\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var item = _step.value;\n\n                    var shadowImg = new Image();\n                    shadowImg.onload = function () {\n                        imageLoaded++;\n                        percentTick(step, imageLoaded);\n                    };\n                    shadowImg.src = item.getAttribute('src');\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n    };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid3JhcHBlciIsInByZWxvYWRlclByb2dyZXNzIiwic3R5bGUiLCJoZWlnaHQiLCJwZXJjZW50Iiwic3RlcCIsImxlbmd0aCIsInBlcmNlbnRUaWNrIiwiZW5kIiwiaW1hZ2VMb2FkZWQiLCJzdGFydCIsInNldFRpbWVvdXQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvYWRlZCIsIml0ZW0iLCJzaGFkb3dJbWciLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxTO0FBQVQsU0FBU0EsU0FBVCxHQUFvQjtBQUMvQixRQUFNQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxRQUFNQyxTQUFTRixTQUFTRyxnQkFBVCxDQUEwQixLQUExQixDQUFmO0FBQ0EsUUFBTUMsVUFBVUosU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLFFBQU1JLG9CQUFvQkwsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBMUI7O0FBRUFHLFlBQVFFLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixPQUF2Qjs7QUFFQSxRQUFJQyxVQUFVLENBQWQ7QUFDQSxRQUFNQyxPQUFPLE1BQU1QLE9BQU9RLE1BQTFCOztBQUVBLGFBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxXQUExQixFQUFpRDtBQUFBLFlBQVZDLEtBQVUsdUVBQUYsQ0FBRTs7QUFDN0MsWUFBSUEsU0FBU0YsR0FBYixFQUFpQjtBQUNiRyx1QkFBVyxZQUFNO0FBQ2JQLDBCQUFVQSxVQUFVLEdBQVYsR0FBZ0IsRUFBRUEsT0FBbEIsR0FBNEIsR0FBdEM7QUFDQUgsa0NBQWtCVyxXQUFsQixRQUFtQ1IsT0FBbkM7QUFDQUcsNEJBQVlDLEdBQVosRUFBaUJDLFdBQWpCLEVBQThCQyxRQUFRLENBQXRDO0FBQ0gsYUFKRCxFQUlHLEVBSkg7QUFLSDtBQUNELFlBQUlELGdCQUFnQlgsT0FBT1EsTUFBdkIsSUFBaUNGLFlBQVksR0FBakQsRUFBcUQ7QUFDakRKLG9CQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsRUFBdkI7QUFDQVIsbUJBQU9rQixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixNQUFyQjtBQUNIO0FBQ0o7QUFDRCxXQUFNO0FBQ0ZDLGNBREUsb0JBQ007QUFDSixnQkFBSU4sY0FBYyxDQUFsQjtBQUNBLGdCQUFJWCxPQUFPUSxNQUFQLEtBQWtCLENBQXRCLEVBQXdCO0FBQ3BCTix3QkFBUUUsS0FBUixDQUFjQyxNQUFkLEdBQXVCLEVBQXZCO0FBQ0FSLHVCQUFPa0IsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDQTtBQUNIO0FBTkc7QUFBQTtBQUFBOztBQUFBO0FBT0oscUNBQWlCaEIsTUFBakIsOEhBQXdCO0FBQUEsd0JBQWZrQixJQUFlOztBQUNwQix3QkFBTUMsWUFBWSxJQUFJQyxLQUFKLEVBQWxCO0FBQ0FELDhCQUFVRSxNQUFWLEdBQW1CLFlBQUs7QUFDcEJWO0FBQ0FGLG9DQUFZRixJQUFaLEVBQWtCSSxXQUFsQjtBQUNILHFCQUhEO0FBSUFRLDhCQUFVRyxHQUFWLEdBQWdCSixLQUFLSyxZQUFMLENBQWtCLEtBQWxCLENBQWhCO0FBQ0g7QUFkRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZVA7QUFoQkMsS0FBTjtBQWtCSCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3ByZWxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWxvYWRlcigpe1xyXG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuICAgIGNvbnN0IHByZWxvYWRlclByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fdGV4dCcpO1xyXG5cclxuICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcclxuXHJcbiAgICBsZXQgcGVyY2VudCA9IDA7XHJcbiAgICBjb25zdCBzdGVwID0gMTAwIC8gaW1hZ2VzLmxlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBwZXJjZW50VGljayhlbmQsIGltYWdlTG9hZGVkLCBzdGFydCA9IDApe1xyXG4gICAgICAgIGlmIChzdGFydCA8PSBlbmQpe1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQgPSBwZXJjZW50IDwgMTAwID8gKytwZXJjZW50IDogMTAwO1xyXG4gICAgICAgICAgICAgICAgcHJlbG9hZGVyUHJvZ3Jlc3MudGV4dENvbnRlbnQgPSBgJHtwZXJjZW50fWA7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50VGljayhlbmQsIGltYWdlTG9hZGVkLCBzdGFydCArIDEpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbWFnZUxvYWRlZCA9PT0gaW1hZ2VzLmxlbmd0aCAmJiBwZXJjZW50ID09PSAxMDApe1xyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBsb2FkZWQoKXtcclxuICAgICAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gMDtcclxuICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dJbWcub25sb2FkID0gKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VMb2FkZWQrK1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRUaWNrKHN0ZXAsIGltYWdlTG9hZGVkKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dJbWcuc3JjID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ }),

/***/ "./src/assets/scripts/test.js":
/*!************************************!*\
  !*** ./src/assets/scripts/test.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    (0, _preloader2.default)().loaded();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvdGVzdC5qcz9jZDIzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFJO0FBQzlDLCtCQUFZQyxNQUFaO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy90ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByZWxvYWRlciBmcm9tICcuL21vZHVsZXMvcHJlbG9hZGVyJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xyXG4gICAgcHJlbG9hZGVyKCkubG9hZGVkKCk7XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/test.js\n");

/***/ })

/******/ });