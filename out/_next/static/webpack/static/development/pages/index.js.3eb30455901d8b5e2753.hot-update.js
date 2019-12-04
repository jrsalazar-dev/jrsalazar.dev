webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/timeline/index.js":
/*!**************************************!*\
  !*** ./components/timeline/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typography */ "./components/typography/index.js");
/* harmony import */ var _TimelineHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TimelineHeader */ "./components/timeline/TimelineHeader.js");
/* harmony import */ var _TimelineCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimelineCenter */ "./components/timeline/TimelineCenter.js");
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimelineItem */ "./components/timeline/TimelineItem.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        white-space: nowrap;\n        position: relative;\n        width: 100%;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            padding-top: 75px !important;\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-left: 35px;\n  width: 50%;\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n\n  @media screen and (max-width: 690px) {\n    width: 100%;\n  }\n\n  &:first-of-type {\n    padding: 0;\n    padding-right: 35px;\n\n    @media screen and (max-width: 690px) {\n      padding-top: 40px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  white-space: nowrap;\n  padding: 15px 0 30px 0;\n\n  @media screen and (max-width: 690px) {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */






var TimelineRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var TimelineColumn = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

var TimelineContent = function TimelineContent(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineCenter__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineRow, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineColumn, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    texture: true,
    professional: true,
    dates: "12-2019 \u2014 Present",
    title: "jrsalazar.dev",
    subtitle: "Freelance Developer"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], null, "Business owner gone digital mercenary. Back on the saddle and looking to go head first into the greater technical challenges of tomorrow.")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineRow, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineColumn, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    texture: true,
    professional: true,
    dates: "04-2016 \u2014 12-2019",
    title: "Cirkel",
    subtitle: "Lead Developer"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], null, "Took the plunge into business culture and started running projects as a 2 man agency. Main achievement was building a Laravel system + React Native app to digitise 10000km", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", null, "2"), " of inventory and forward the database to their Magento webshop and beyond.")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineRow, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineColumn, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    texture: true,
    professional: true,
    dates: "01-2015 \u2014 04-2016",
    title: "NoProtocol",
    subtitle: "Fullstack Webdeveloper"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], null, "NoProtocol kickstarted my career and gave me the oppurtunity to develop my skills. Functioned mainly as fullstack developer and occasional frontend wizard. Worked on projects for Honor europe, AirMiles, Coca-cola & more.")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineRow, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineColumn, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    texture: true,
    professional: true,
    dates: "06-2014 \u2014 12-2014",
    title: "Bored of Advisors",
    subtitle: "Developer Internship"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], null, "Prototyped a titanium app, programmed a robot arm and built a few simple frontends in Angular.js, sorry Thijmen."))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineColumn, {
    css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3())
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    texture: true,
    arrowLeft: true,
    academic: true,
    dates: "2013 \u2014 2014",
    title: "Amsterdam University of Applied Sciences",
    subtitle: "Software engineering"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], null, "Learned how to work Agile\u2122, got my webdev-feet wet building a RoR app and got out before I was stuck building enterprise Java servlets for eternity.")))));
};

function Timeline(_ref) {
  var children = _ref.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "timeline",
    css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4())
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TimelineHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TimelineContent, null));
}

/***/ })

})
//# sourceMappingURL=index.js.3eb30455901d8b5e2753.hot-update.js.map