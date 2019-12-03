webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DownloadOrWebButton.js":
/*!*******************************************!*\
  !*** ./components/DownloadOrWebButton.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      & > .download-btn,\n      & > .view-online-btn {\n        position: absolute;\n        top: 40px;\n        right: 50px;\n        font-size: 30px;\n\n        & > i {\n          color: black;\n          cursor: pointer;\n        }\n      }\n\n      & > .view-online-btn {\n        display: none;\n      }\n\n      @media print {\n        & > .download-btn {\n          display: none;\n        }\n\n        & > .view-online-btn {\n          display: block;\n          right: 0;\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */




var DownloadOrWebButton = function DownloadOrWebButton(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject())
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "download-btn"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/pdf"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
    className: "ion-android-download"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "view-online-btn"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
    className: "ion-android-open"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadOrWebButton);

/***/ })

})
//# sourceMappingURL=index.js.4710f9754e4c68fde5c5.hot-update.js.map