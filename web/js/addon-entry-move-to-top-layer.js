(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-move-to-top-layer"],{

/***/ "./src/addons/addons/move-to-top-layer/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/move-to-top-layer/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/move-to-top-layer/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/move-to-top-layer/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/move-to-top-layer/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Initial code was written by Norbiros

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const vm = addon.tab.traps.vm;
  document.body.addEventListener("click", e => {
    if (e.shiftKey && !addon.self.disabled) {
      const parentDiv = e.target.closest("div[class^='sprite-selector_sprite-wrapper']");
      if (parentDiv) {
        const spriteName = parentDiv.querySelector("div[class^='sprite-selector-item_sprite-name']").innerText;
        // move the sprite with that name to front
        vm.runtime.getSpriteTargetByName(spriteName).goToFront();
      }
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-move-to-top-layer.js.map