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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log(\"Я блог\");\n\nvar blogList = document.querySelector(\".side-menu__list\");\nvar articles = document.querySelectorAll(\".main-content__item\");\nvar links = document.querySelectorAll(\".side-menu__link\");\n\nlinks[0].parentElement.classList.add(\"side-menu__item--active\");\n\nfunction windowScroller(reqmove, duration) {\n  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n  window.requestAnimationFrame = requestAnimationFrame;\n\n  var scrollHeight = window.scrollY;\n  var diffY = scrollHeight < reqmove ? reqmove - scrollHeight : -1 * (scrollHeight - reqmove);\n\n  var animate = function animate(draw, duration) {\n    var start = performance.now();\n    requestAnimationFrame(function move(time) {\n      var timePassed = time - start;\n      if (timePassed > duration) timePassed = duration;\n      draw(timePassed);\n      if (timePassed < duration) requestAnimationFrame(move);\n    });\n  };\n\n  animate(function (timePassed) {\n    window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1));\n  }, duration);\n}\n\nfunction fixed() {\n  if (blogList.parentElement.getBoundingClientRect().top <= 0) {\n    blogList.classList.remove(\"side-menu__list--absolute\");\n    blogList.classList.add(\"side-menu__list--fixed\");\n  } else {\n    blogList.classList.remove(\"side-menu__list--fixed\");\n    blogList.classList.add(\"side-menu__list--absolute\");\n  }\n}\n\nfunction checkCurrentArticle() {\n  for (var i = 0; i < articles.length; i++) {\n    console.log(articles[i].getBoundingClientRect().y);\n    if (articles[i].getBoundingClientRect().y < 520 && articles[i].getBoundingClientRect().y > -articles[i].getBoundingClientRect().height) {\n      var prevArticle = links[i].parentElement.previousElementSibling;\n      var nextArticle = links[i].parentElement.nextElementSibling;\n\n      if (prevArticle) {\n        prevArticle.classList.remove(\"side-menu__item--active\");\n      }\n      if (nextArticle) {\n        nextArticle.classList.remove(\"side-menu__item--active\");\n      }\n\n      links[i].parentElement.classList.add(\"side-menu__item--active\");\n    }\n  }\n}\n\nfunction toArticle(name) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var item = _step.value;\n\n      if (name === item.dataset.name) {\n        var scrollPos = item.getBoundingClientRect().top + window.scrollY;\n        windowScroller(scrollPos, 300);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nblogList.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  if (e.target.classList.contains(\"side-menu__link\") && !e.target.parentElement.classList.contains(\"blog__item--active\")) {\n    toArticle(e.target.getAttribute(\"data-name\"));\n  }\n});\n\nfixed();\n\nwindow.addEventListener(\"scroll\", function () {\n  fixed();\n  checkCurrentArticle();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJibG9nTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmtzIiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvd1Njcm9sbGVyIiwicmVxbW92ZSIsImR1cmF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxZIiwiZGlmZlkiLCJhbmltYXRlIiwiZHJhdyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJtb3ZlIiwidGltZSIsInRpbWVQYXNzZWQiLCJzY3JvbGwiLCJNYXRoIiwibWluIiwiZml4ZWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJyZW1vdmUiLCJjaGVja0N1cnJlbnRBcnRpY2xlIiwiaSIsImxlbmd0aCIsInkiLCJoZWlnaHQiLCJwcmV2QXJ0aWNsZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0QXJ0aWNsZSIsIm5leHRFbGVtZW50U2libGluZyIsInRvQXJ0aWNsZSIsIm5hbWUiLCJpdGVtIiwiZGF0YXNldCIsInNjcm9sbFBvcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLFFBQVo7O0FBRUEsSUFBTUMsV0FBV0MsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBakI7QUFDQSxJQUFNQyxXQUFXRixTQUFTRyxnQkFBVCxD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OztBQUVGLFNBQVNvQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN2Qix5QkFBaUIxQyxRQUFqQiw4SEFBMkI7QUFBQSxVQUFsQjJDLElBQWtCOztBQUN6QixVQUFJRCxTQUFTQyxLQUFLQyxPQUFMLENBQWFGLElBQTFCLEVBQWdDO0FBQzlCLFlBQUlHLFlBQVlGLEtBQUtkLHFCQUFMLEdBQTZCQyxHQUE3QixHQUFtQ3BCLE9BQU9LLE9BQTFEO0FBQ0FULHVCQUFldUMsU0FBZixFQUEwQixHQUExQjtBQUNEO0FBQ0Y7QUFOc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU94Qjs7QUFFRGhELFNBQVNpRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxhQUFLO0FBQ3RDQyxJQUFFQyxjQUFGO0FBQ0EsTUFBSUQsRUFBRUUsTUFBRixDQUFTN0MsU0FBVCxDQUFtQjhDLFFBQW5CLENBQTRCLGlCQUE1QixLQUFrRCxDQUFDSCxFQUFFRSxNQUFGLENBQVM5QyxhQUFULENBQXVCQyxTQUF2QixDQUFpQzhDLFFBQWpDLENBQTBDLG9CQUExQyxDQUF2RCxFQUF3SDtBQUN0SFQsY0FBVU0sRUFBRUUsTUFBRixDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDRDtBQUNGLENBTEQ7O0FBT0F2Qjs7QUFFQWxCLE9BQU9vQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDbEI7QUFDQUk7QUFDRCxDQUhEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcItCvINCx0LvQvtCzXCIpXHJcblxyXG5jb25zdCBibG9nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1tZW51X19saXN0XCIpO1xyXG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1jb250ZW50X19pdGVtXCIpO1xyXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZS1tZW51X19saW5rXCIpO1xyXG5cclxubGlua3NbMF0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2lkZS1tZW51X19pdGVtLS1hY3RpdmVcIik7XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dTY3JvbGxlcihyZXFtb3ZlLCBkdXJhdGlvbikge1xyXG4gIGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcblxyXG4gIGNvbnN0IHNjcm9sbEhlaWdodCA9IHdpbmRvdy5zY3JvbGxZXHJcbiAgY29uc3QgZGlmZlkgPVxyXG4gICAgc2Nyb2xsSGVpZ2h0IDwgcmVxbW92ZVxyXG4gICAgICA/IHJlcW1vdmUgLSBzY3JvbGxIZWlnaHRcclxuICAgICAgOiAtMSAqIChzY3JvbGxIZWlnaHQgLSByZXFtb3ZlKVxyXG5cclxuICBjb25zdCBhbmltYXRlID0gKGRyYXcsIGR1cmF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gbW92ZSh0aW1lKSB7XHJcbiAgICAgIGxldCB0aW1lUGFzc2VkID0gdGltZSAtIHN0YXJ0XHJcbiAgICAgIGlmICh0aW1lUGFzc2VkID4gZHVyYXRpb24pIHRpbWVQYXNzZWQgPSBkdXJhdGlvblxyXG4gICAgICBkcmF3KHRpbWVQYXNzZWQpXHJcbiAgICAgIGlmICh0aW1lUGFzc2VkIDwgZHVyYXRpb24pIHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFuaW1hdGUodGltZVBhc3NlZCA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIHNjcm9sbEhlaWdodCArIGRpZmZZICogTWF0aC5taW4odGltZVBhc3NlZCAvIGR1cmF0aW9uLCAxKSlcclxuICB9LCBkdXJhdGlvbilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpeGVkKCkge1xyXG4gIGlmIChibG9nTGlzdC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKSB7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZS1tZW51X19saXN0LS1hYnNvbHV0ZVwiKTtcclxuICAgIGJsb2dMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlLW1lbnVfX2xpc3QtLWZpeGVkXCIpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgYmxvZ0xpc3QuY2xhc3NMaXN0LnJlbW92ZShcInNpZGUtbWVudV9fbGlzdC0tZml4ZWRcIik7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZS1tZW51X19saXN0LS1hYnNvbHV0ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBjaGVja0N1cnJlbnRBcnRpY2xlKCkge1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgY29uc29sZS5sb2coYXJ0aWNsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSk7XHJcbiAgICAgaWYgKFxyXG4gICAgICAgICAgYXJ0aWNsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA8IDUyMCAmJlxyXG4gICAgICAgICAgYXJ0aWNsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA+XHJcbiAgICAgICAgICAgIC1hcnRpY2xlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZBcnRpY2xlID0gbGlua3NbaV0ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgY29uc3QgbmV4dEFydGljbGUgPSBsaW5rc1tpXS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgICBpZiAocHJldkFydGljbGUpIHtcclxuICAgICAgICAgICAgcHJldkFydGljbGUuY2xhc3NMaXN0LnJlbW92ZShcInNpZGUtbWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG5leHRBcnRpY2xlKSB7XHJcbiAgICAgICAgICAgIG5leHRBcnRpY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaW5rc1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgIH1cclxuIH1cclxuXHJcbmZ1bmN0aW9uIHRvQXJ0aWNsZShuYW1lKSB7XHJcbiAgZm9yIChsZXQgaXRlbSBvZiBhcnRpY2xlcykge1xyXG4gICAgaWYgKG5hbWUgPT09IGl0ZW0uZGF0YXNldC5uYW1lKSB7XHJcbiAgICAgIGxldCBzY3JvbGxQb3MgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcbiAgICAgIHdpbmRvd1Njcm9sbGVyKHNjcm9sbFBvcywgMzAwKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYmxvZ0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZS1tZW51X19saW5rXCIpICYmICFlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2dfX2l0ZW0tLWFjdGl2ZVwiKSkge1xyXG4gICAgdG9BcnRpY2xlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZpeGVkKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgZml4ZWQoKTtcclxuICBjaGVja0N1cnJlbnRBcnRpY2xlKCk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ })

/******/ });