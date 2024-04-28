var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"fullscreen": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"iframe-extension-worker":"iframe-extension-worker","library-backdrops":"library-backdrops","library-costumes":"library-costumes","library-sounds":"library-sounds","library-sprites":"library-sprites","sb":"sb","addons":"addons","addon-default-entry":"addon-default-entry","addon-entry-2d-color-picker":"addon-entry-2d-color-picker","addon-entry-better-img-uploads":"addon-entry-better-img-uploads","addon-entry-block-count":"addon-entry-block-count","addon-entry-block-palette-icons":"addon-entry-block-palette-icons","addon-entry-blocks2image":"addon-entry-blocks2image","addon-entry-cat-blocks":"addon-entry-cat-blocks","addon-entry-clones":"addon-entry-clones","addon-entry-columns":"addon-entry-columns","addon-entry-copy-reporter":"addon-entry-copy-reporter","addon-entry-custom-block-shape":"addon-entry-custom-block-shape","addon-entry-custom-block-text":"addon-entry-custom-block-text","addon-entry-custom-menu-bar":"addon-entry-custom-menu-bar","addon-entry-custom-zoom":"addon-entry-custom-zoom","addon-entry-data-category-tweaks-v2":"addon-entry-data-category-tweaks-v2","addon-entry-debugger":"addon-entry-debugger","addon-entry-default-costume-editor-color":"addon-entry-default-costume-editor-color","addon-entry-disable-paste-offset":"addon-entry-disable-paste-offset","addon-entry-disable-stage-drag-select":"addon-entry-disable-stage-drag-select","addon-entry-editor-buttons-reverse-order":"addon-entry-editor-buttons-reverse-order","addon-entry-editor-colored-context-menus":"addon-entry-editor-colored-context-menus","addon-entry-editor-compact":"addon-entry-editor-compact","addon-entry-editor-extra-keys":"addon-entry-editor-extra-keys","addon-entry-editor-number-arrow-keys":"addon-entry-editor-number-arrow-keys","addon-entry-editor-sounds":"addon-entry-editor-sounds","addon-entry-editor-square-inputs":"addon-entry-editor-square-inputs","addon-entry-editor-stage-left":"addon-entry-editor-stage-left","addon-entry-editor-stepping":"addon-entry-editor-stepping","addon-entry-editor-theme3":"addon-entry-editor-theme3","addon-entry-expanded-backpack":"addon-entry-expanded-backpack","addon-entry-fullscreen":"addon-entry-fullscreen","addon-entry-gamepad":"addon-entry-gamepad","addon-entry-hide-delete-button":"addon-entry-hide-delete-button","addon-entry-hide-flyout":"addon-entry-hide-flyout","addon-entry-hide-new-variables":"addon-entry-hide-new-variables","addon-entry-hide-stage":"addon-entry-hide-stage","addon-entry-initialise-sprite-position":"addon-entry-initialise-sprite-position","addon-entry-load-extensions":"addon-entry-load-extensions","addon-entry-mediarecorder":"addon-entry-mediarecorder","addon-entry-mouse-pos":"addon-entry-mouse-pos","addon-entry-move-to-top-layer":"addon-entry-move-to-top-layer","addon-entry-no-script-bumping":"addon-entry-no-script-bumping","addon-entry-number-pad":"addon-entry-number-pad","addon-entry-paint-by-default":"addon-entry-paint-by-default","addon-entry-paint-snap":"addon-entry-paint-snap","addon-entry-remove-curved-stage-border":"addon-entry-remove-curved-stage-border","addon-entry-remove-sprite-confirm":"addon-entry-remove-sprite-confirm","addon-entry-script-snap":"addon-entry-script-snap","addon-entry-search-sprites":"addon-entry-search-sprites","addon-entry-sprite-properties":"addon-entry-sprite-properties","addon-entry-swap-local-global":"addon-entry-swap-local-global","addon-entry-transparent-orphans":"addon-entry-transparent-orphans","addon-entry-tw-disable-cloud-variables":"addon-entry-tw-disable-cloud-variables","addon-entry-tw-disable-compiler":"addon-entry-tw-disable-compiler","addon-entry-tw-remove-backpack":"addon-entry-tw-remove-backpack","addon-entry-tw-remove-feedback":"addon-entry-tw-remove-feedback","addon-entry-tw-straighten-comments":"addon-entry-tw-straighten-comments","addon-entry-variable-manager":"addon-entry-variable-manager","addon-entry-vol-slider":"addon-entry-vol-slider","addon-entry-zebra-striping":"addon-entry-zebra-striping","addon-l10n-de":"addon-l10n-de","addon-l10n-es":"addon-l10n-es","addon-l10n-fi":"addon-l10n-fi","addon-l10n-fr":"addon-l10n-fr","addon-l10n-hu":"addon-l10n-hu","addon-l10n-it":"addon-l10n-it","addon-l10n-ja":"addon-l10n-ja","addon-l10n-ko":"addon-l10n-ko","addon-l10n-nl":"addon-l10n-nl","addon-l10n-pl":"addon-l10n-pl","addon-l10n-pt":"addon-l10n-pt","addon-l10n-ro":"addon-l10n-ro","addon-l10n-ru":"addon-l10n-ru","addon-l10n-sl":"addon-l10n-sl","addon-l10n-tr":"addon-l10n-tr","addon-l10n-zh-tw":"addon-l10n-zh-tw"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/fullscreen.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player","vendors~addon-settings~addons~editor~fullscreen~player","vendors~editor~embed~fullscreen~player","vendors~editor~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/playground/fullscreen.jsx":
/*!***************************************!*\
  !*** ./src/playground/fullscreen.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-first */ "./src/playground/import-first.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render_interface_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-interface.jsx */ "./src/playground/render-interface.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





Object(_app_target__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_render_interface_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
  isPlayerOnly: true,
  isFullScreen: true
}));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** ./node/self.js (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** ./node/extend.js (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=fullscreen.js.map