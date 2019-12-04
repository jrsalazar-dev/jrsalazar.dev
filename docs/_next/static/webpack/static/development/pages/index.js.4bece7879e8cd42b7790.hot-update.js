webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SkillsItem.js":
/*!**********************************!*\
  !*** ./components/SkillsItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/typography */ "./components/typography/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            width: 30px;\n\n            @media print {\n              width: 20px;\n            }\n          "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  font-size: 2.5rem;\n  padding: 0 7px;\n\n  @media print {\n    font-size: 1.7rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  vertical-align: top;\n  line-height: 4rem;\n\n  @media print {\n    line-height: 2.5rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  vertical-align: top;\n  line-height: 4rem;\n  padding-right: 15px;\n  width: 50px;\n  font-size: 3rem;\n\n  @media print {\n    font-size: 2rem;\n    width: 30px;\n    padding-right: 10px;\n    line-height: 2.5rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 1 50%;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  width: 50%;\n\n  @media screen and (max-width: 690px) {\n    flex: 0 1 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */



var SkillsItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var SkillsStarsIconContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var SkillStars = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var SkillStarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());

var SkillStar = function SkillStar(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SkillStarContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
    className: props.on ? 'ion-ios-flame' : 'ion-ios-flame-outline'
  }));
};

var SkillsStarsIcon = function SkillsStarsIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SkillsStarsIconContainer, null, props.icon ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
    className: props.icon
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5()),
    src: props.image
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SkillStars, null, Array(5).fill(null).map(function (_, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SkillStar, {
      key: i,
      on: i < +props.level
    });
  })));
};

var SkillsItemTags = function SkillsItemTags(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
    sub: true
  }, props.tags);
};

var SkillsItem = function SkillsItem(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SkillsItemContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_typography__WEBPACK_IMPORTED_MODULE_4__["Heading05"], null, props.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SkillsStarsIcon, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
    sub: true
  }, props.tags), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SkillsItem);

/***/ })

})
//# sourceMappingURL=index.js.4bece7879e8cd42b7790.hot-update.js.map