(this["webpackJsonplogin-firebase"] = this["webpackJsonplogin-firebase"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropdown/index.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Dropdown/index.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,900);"]);
// Module
exports.push([module.i, "/* ==========================================================================\n   Dropdown menu\n   ========================================================================== */\n\n/* RESETS\n   ============================================ */\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  color: #202020;\n  background-color: #fbfbfb;\n  /* font-smooth: always; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.container {\n  max-width: 1140px;\n  width: 40%;\n  margin-bottom: 2rem;\n}\n\n/* @mixin styling() {\n  \n} */\n\n/* DROPDOWN\n   ============================================ */\n\n.dd-wrapper {\n  display: flex;\n  min-height: 38px;\n  flex-wrap: wrap;\n  background-color: white;\n  border-color: #ccc;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.dd-header:focus {\n  background-color: var(--theme);\n  color: white;\n  outline: none;\n}\n\n.dd-header {\n  /* @include styling(); */\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  width: 100%;\n  padding: 0 20px;\n}\n\n.dd-header__title--bold {\n  font-weight: bold;\n}\n\n.dd-list {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  margin-top: 20px;\n}\n\nli {\n  list-style-type: none;\n}\n\n/* :first-of-type {\n        > button {\n          border-top: 1px solid #ccc;\n          border-top-left-radius: 4px;\n          border-top-right-radius: 4px;\n        }\n      }\n\n      &:last-of-type > button {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n      } */\n\n  .dd-list-btn {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  font-size: 16px;\n  padding: 15px 20px 15px 20px;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  width: 100%;\n  text-align: left;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n}\n\n.dd-list-btn:hover,\n.dd-list-btn:focus {\n  cursor: pointer;\n  font-weight: bold;\n  background-color: #ccc;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/index.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Header/index.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header {\n    flex-direction: row;\n    justify-content: center;\n}\n\n.title {\n  position: relative;\n  top: 0.4rem;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n/* Small screens */\n@media only screen and (max-width: 600px) {\n  .title {\n    margin-left: 1rem;\n  }\n}\n\n/* Large screens */\n@media only screen and (min-width: 600px) {\n  .title {\n    margin-left: 7rem;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navigation/index.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Navigation/index.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n} */\n\n:root {\n  font-size: 16px;\n  font-family: \"Open Sans\";\n  --theme: #24a113;\n  --text-primary: #b6b6b6;\n  --text-secondary: #ececec;\n  --bg-primary: #23232e;\n  --bg-secondary: #141418;\n  --transition-speed: 600ms;\n}\n\nbody {\n  color: black;\n  background-color: white;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #1e1e24;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: var(--text-primary);\n}\n\nmain {\n  margin-left: 6.5rem;\n  padding: 1rem;\n}\n\n.navbar {\n  position: fixed;\n  background-color: var(--bg-primary);\n  transition: width 600ms ease;\n}\n\n.navbar-nav {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.nav-item {\n  width: 100%;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  height: 5rem;\n  color: var(--text-primary);\n  text-decoration: none;\n  filter: grayscale(100%) opacity(0.7);\n  transition: var(--transition-speed);\n}\n\n.nav-link:hover {\n  filter: grayscale(0%) opacity(1);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n}\n\n.link-text {\n  margin-left: 1rem;\n  text-decoration: none;\n  font-size: 1.2rem;\n}\n\n.nav-link svg {\n  width: 2rem;\n  min-width: 2rem;\n  margin: 0 1.5rem;\n}\n\n.fa-primary {\n  color: var(--theme);\n}\n\n.fa-secondary {\n  color: #00b7a0;\n}\n\n.fa-primary,\n.fa-secondary {\n  transition: var(--transition-speed);\n}\n\n.logo {\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  font-size: 1.5rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n\n.icons {\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--text-secondary);\n  /* background: var(--bg-secondary); */\n  font-size: 1.5rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n\n.logo svg {\n  transform: rotate(0deg);\n  transition: var(--transition-speed);\n}\n\n.logo-text {\n  display: inline;\n  position: absolute;\n  left: -999px;\n  transition: var(--transition-speed);\n}\n\n.navbar:hover .logo svg {\n  transform: rotate(-180deg);\n}\n\n.navbar:hover .icons {\n  color: var(--theme);\n}\n\n.signout-btn {\n  display: none;\n}\n\n/* Small screens */\n@media only screen and (max-width: 600px) {\n  .navbar {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    overflow: hidden;\n  }\n\n  .logo {\n    display: none;\n  }\n\n  .nav-item {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .navbar-nav {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .nav-link {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    padding: 0 !important;\n    height: 4rem;\n    margin-bottom: 0;\n  }\n\n  .logout {\n    display: none;\n  }\n\n  .base-container {\n    margin-bottom: 5rem;\n    overflow-x: hidden;\n    /* padding-bottom: 5rem; */\n  }\n\n  .link-text {\n    display: inline;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    font-size: 1rem;\n    height: 4rem;\n  }\n\n  .navbar:hover .link-text {\n    display: inline;\n    color: var(--theme);\n  }\n\n  .icons {\n    position: relative;\n    top: 0rem;\n    margin: 0;\n    padding: 0;\n  }\n\n  .page-text {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    bottom: 2rem;\n  }\n}\n\n/* Large screens */\n@media only screen and (min-width: 600px) {\n  .navbar {\n    top: 0;\n    width: 6.5rem;\n    height: 100vh;\n  }\n\n  .navbar:hover {\n    width: 16rem;\n  }\n\n  .page-text {\n    display: none;\n  }\n\n  .navbar:hover .page-text {\n    display: inline;\n    color: var(--theme);\n  }\n\n  .navbar:hover .logo svg {\n    margin-left: 11rem;\n  }\n\n  .navbar:hover .logo-text {\n    left: 0px;\n    color: var(--theme);\n  }\n\n  .navbar:hover .signout-btn {\n    display: inline;\n    margin-left: 6rem;\n  }\n\n  .nav-item:last-child {\n    margin-top: auto;\n  }  \n\n  .icons {\n    visibility: visible;\n    margin: 0;\n    padding: 0 !important;\n    position: absolute;\n    top: 2rem;\n    left: 0.75rem;\n  }\n\n  .page-text {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    bottom: -0.25rem;\n    left: 4.5rem;\n  }\n\n  body {\n    margin-right: 5rem;\n    padding: 1rem;\n  }\n\n  .base-container {\n    margin-right: 6.5rem;\n    padding-right: 2rem;\n    padding-left: 8.5rem;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Setting/index.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Setting/index.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Small screens */\n@media only screen and (max-width: 600px) {\n    .signout-btn {\n        display: inline;\n    }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SignIn/Google-btn.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/SignIn/Google-btn.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:500);"]);
// Module
exports.push([module.i, ".google-btn {\n    width: 184px;\n    height: 42px;\n    background-color: #4285f4;\n    border-radius: 2px;\n    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  }\n  .google-icon-wrapper {\n    position: absolute;\n    margin-top: 2px;\n    margin-left: 2px;\n    width: 38px;\n    height: 38px;\n    border-radius: 2px;\n    background-color: #fff;\n  }\n  \n  .google-icon {\n    position: absolute;\n    margin-top: 9px;\n    margin-left: -8px;\n    width: 18px;\n    height: 18px;\n  }\n  \n  .btn-text {\n    float: right;\n    margin: 13px 11px 0 0;\n    color: white;\n    font-size: 14px;\n    letter-spacing: 0.2px;\n    font-family: \"Roboto\";\n  }\n  \n  .google-btn:hover {\n    box-shadow: 0 0 6px #4285f4;\n  }\n  \n  .google-btn:active {\n    background: #1669f2;\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* @import \"tailwindcss/base\";\n\n@import \"tailwindcss/components\";\n\n@import \"tailwindcss/utilities\"; */\n/* \n@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities */\n/* <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\"> */\n\n.main{\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0px 0px;\n  padding: 0 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.base-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  text-align: center;\n}\n\nh1 {\n  font-size: 24px;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  font-size: 20px;\n  margin-top: 40px;\n  margin-bottom: 5px;\n}\n\n.image {\n  width: 21em;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n}\n\n.form {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\ninput {\n  margin-top: 6px;\n  min-width: 18em;\n  height: 37px;\n  padding: 0px 10px;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #f3f3f3;\n  border: 0;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  transition: all 250ms ease-in-out;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: 0px 0px 12px 0.8px var(--theme);\n}\n\n.button {\n  font-size: 21px;\n  padding: 5px 20px;\n  border: 0;\n  background-color: var(--theme);\n  color: #fff;\n  border-radius: 3px;\n  transition: all 250ms ease-in-out;\n  margin-top: 15px;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #009d8a;\n}\n\n.button:focus {\n  outline: none;\n}\n\n/* Trying to add new fonts to the app */\n\nbody {\n  font-family: 'Open Sans', sans-serif\n}\n.heading {\n  font-weight: 700;\n}\n.subheading {\n  font-weight: 400;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Account/index.js":
/*!*****************************************!*\
  !*** ./src/components/Account/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/eslint-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/koberico/sustainability/src/components/Account/index.js'");

/***/ }),

/***/ "./src/components/ActionCard/index.js":
/*!********************************************!*\
  !*** ./src/components/ActionCard/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _ActionData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ActionData */ "./src/components/ActionData/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/ActionCard/index.js";




















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(theme => ({
  root: {
    minWidth: 280,
    backgroundColor: "var(--text-secondary)"
  },
  searchContainer: {
    display: "flex",
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["fade"])(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px"
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "0.5rem"
  },
  searchInput: {
    width: "15rem",
    margin: "0.5rem",
    marginTop: "0"
  },
  actionContainer: {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9

  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "var(--theme)"
  },
  cardContent: {
    textAlign: "left",
    paddingBottom: "0"
  },
  cardActions: {
    paddingTop: "0"
  }
}));

const ActionCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [actionData, setActionData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_ActionData__WEBPACK_IMPORTED_MODULE_19__["default"]);
  const [filter, setFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleSearchChange = e => {
    setFilter(e.target.value);
  };

  const getActionCard = actionId => {
    console.log(actionData[`${actionId}`]);
    const {
      title,
      points
    } = actionData[`${actionId}`];

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
      item: true,
      xs: 12,
      md: 6,
      lg: 4,
      key: actionId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.cardContent // avatar={
      //   <Avatar aria-label="recipe" className={classes.avatar}>
      //     R
      //   </Avatar>
      // }
      ,
      action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        "aria-label": "settings",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_13___default.a, {
        fontSize: "large",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      })),
      title: `${title}`,
      subheader: `${points}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disableSpacing: true,
      className: classes.cardActions,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "aria-label": "add to favorites",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.expand, {
        [classes.expandOpen]: expanded
      }),
      onClick: handleExpandClick,
      "aria-expanded": expanded,
      "aria-label": "show more",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
      in: expanded,
      timeout: "auto",
      unmountOnExit: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.media,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQglBrvos1eYpEK-0d41uUgv_tmIgENlB_-GQ&usqp=CAU",
      title: "Recycle water bottle image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      paragraph: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    }, "Impact:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      paragraph: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, "Plastic water bottles are becoming a growing segment of the municipal solid waste stream in the United States. The American Chemistry Council estimates that the average consumer uses 166 plastic water bottles each year and that 2.5 million plastic bottles are thrown away every hour. While plastic water bottles offer convenience, they also create unnecessary waste in landfills. By recycling your plastic water bottles, you can positively impact the environment in several ways.")))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 1,
    alignItems: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17___default.a, {
    className: classes.searchIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onChange: handleSearchChange,
    className: classes.searchInput,
    label: "Search Actions",
    variant: "standard",
    color: "primary",
    InputProps: {
      disableUnderline: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 3,
    className: classes.actionContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, Object.keys(actionData).map(actionId => actionData[actionId].title.includes(filter) && getActionCard(actionId))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionCard);

/***/ }),

/***/ "./src/components/ActionData/index.js":
/*!********************************************!*\
  !*** ./src/components/ActionData/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "1": {
    title: "Recycle Water Bottle",
    id: 1,
    points: "Earn 10 Points!"
  },
  "2": {
    title: "Walk to the Village",
    id: 2,
    points: "Earn 30 Points!"
  },
  "3": {
    title: "Bring your own reusable straw",
    id: 3,
    points: "Earn 15 Points!"
  },
  "4": {
    title: "Bring reusable bag for groceries",
    id: 4,
    points: "Earn 10 Points!"
  },
  "5": {
    title: "Shop at the farmers market",
    id: 5,
    points: "Earn 35 Points!"
  },
  "6": {
    title: "Re-brew your tea leaves",
    id: 6,
    points: "Earn 10 Points!"
  },
  "7": {
    title: "No food waste from meal",
    id: 7,
    points: "Earn 20 Points!"
  },
  "8": {
    title: "Participate in Meatless-Mondays",
    id: 8,
    points: "Earn 20 Points!"
  },
  "9": {
    title: "Eco-friendly cleaning products",
    id: 9,
    points: "Earn 10 Points!"
  }
});

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation */ "./src/components/Navigation/index.js");
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Landing */ "./src/components/Landing/index.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignUp */ "./src/components/SignUp/index.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SignIn */ "./src/components/SignIn/index.js");
/* harmony import */ var _PasswordForget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PasswordForget */ "./src/components/PasswordForget/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Home */ "./src/components/Home/index.js");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Account */ "./src/components/Account/index.js");
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Setting */ "./src/components/Setting/index.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Info */ "./src/components/Info/index.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Profile */ "./src/components/Profile/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Session */ "./src/components/Session/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/App/index.js";
















const App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["LANDING"],
  component: _Landing__WEBPACK_IMPORTED_MODULE_3__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["SIGN_UP"],
  component: _SignUp__WEBPACK_IMPORTED_MODULE_4__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["SIGN_IN"],
  component: _SignIn__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["PASSWORD_FORGET"],
  component: _PasswordForget__WEBPACK_IMPORTED_MODULE_6__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["HOME"],
  component: _Home__WEBPACK_IMPORTED_MODULE_7__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["ACCOUNT"],
  component: _Account__WEBPACK_IMPORTED_MODULE_8__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["SETTING"],
  component: _Setting__WEBPACK_IMPORTED_MODULE_9__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["INFO"],
  component: _Info__WEBPACK_IMPORTED_MODULE_10__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_13__["PROFILE"],
  component: _Profile__WEBPACK_IMPORTED_MODULE_11__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Object(_Session__WEBPACK_IMPORTED_MODULE_14__["withAuthentication"])(App));

/***/ }),

/***/ "./src/components/Dropdown/index.css":
/*!*******************************************!*\
  !*** ./src/components/Dropdown/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropdown/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropdown/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropdown/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Dropdown/index.js":
/*!******************************************!*\
  !*** ./src/components/Dropdown/index.js ***!
  \******************************************/
/*! exports provided: default, Dropdown2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown2", function() { return Dropdown2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/Dropdown/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Dropdown/index.js";


 // Choose your dorm!

const dorms = [{
  value: 1,
  label: "Atwood",
  isDisabled: true
}, {
  value: 2,
  label: "Case"
}, {
  value: 3,
  label: "Drinkward"
}, {
  value: 4,
  label: "East"
}, {
  value: 5,
  label: "Linde",
  isDisabled: true
}, {
  value: 6,
  label: "North"
}, {
  value: 7,
  label: "Sontag"
}, {
  value: 8,
  label: "South"
}, {
  value: 9,
  label: "West"
}];

function Dropdown2() {
  const [selectedValue, setSelectedValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const handleChange = obj => {
    setSelectedValue(obj.label.replace(/"([^"]+)":/g, "$1:")); // the .replace was supposed to get rid of quotes but it didn't work
  };

  const customStyles = {
    option: (styles, state) => ({ ...styles,
      color: state.isSelected ? "#FFF" : styles.color,
      backgroundColor: state.isSelected ? "#24a113" : "white",
      borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
      "&:hover": {
        color: state.isDisabled ? "lightgrey" : "black",
        fontWeight: state.isFocused ? "bold" : "normal",
        backgroundColor: state.isDisabled ? "white" : "#24a113"
      }
    }),
    control: (styles, state) => ({ ...styles,
      boxShadow: state.isFocused ? "0 0 0 0.2rem #24a113)" : 0,
      borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",
      cursor: state.isDisabled ? "not-allowed" : "default",
      "&:hover": {
        borderColor: state.isFocused ? "#24a113" : "#24a113"
      }
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Earn Points for Your Dorm! "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styles: customStyles,
    value: dorms.find(x => x.label === selectedValue),
    options: dorms,
    onChange: handleChange,
    isOptionDisabled: option => option.isDisabled,
    placeholder: "Select your dorm...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Your dorm: ", JSON.stringify(selectedValue, null, 2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Dropdown2);


/***/ }),

/***/ "./src/components/Firebase/context.js":
/*!********************************************!*\
  !*** ./src/components/Firebase/context.js ***!
  \********************************************/
/*! exports provided: withFirebase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return withFirebase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/koberico/sustainability/src/components/Firebase/context.js";

const FirebaseContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
const withFirebase = Component => props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FirebaseContext.Consumer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, firebase => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
  firebase: firebase,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 20
  }
})));
/* harmony default export */ __webpack_exports__["default"] = (FirebaseContext);

/***/ }),

/***/ "./src/components/Firebase/firebase.js":
/*!*********************************************!*\
  !*** ./src/components/Firebase/firebase.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");



 // import Axios from 'axios'
// import firebase from 'firebase/app';
// import firebase/auth from 'firebase/auth';
// };

const config = {
  apiKey: "AIzaSyBzlwDriPb6sKitZ3b9gnX9n6NOMbkCi9s",
  authDomain: "sustainabilitycompetition.firebaseapp.com",
  databaseURL: "https://sustainabilitycompetition.firebaseio.com",
  projectId: "sustainabilitycompetition",
  storageBucket: "sustainabilitycompetition.appspot.com",
  messagingSenderId: "72202621299",
  appId: "1:72202621299:web:d8d210e7b9cb4765dcb506",
  measurementId: "G-682PQBF33P"
};

class Firebase {
  constructor() {
    this.doCreateUserWithEmailAndPassword = (email, password, dorm) => this.auth.createUserWithEmailAndPassword(email, password, dorm);

    this.doSignInWithEmailAndPassword = (email, password, dorm) => this.auth.signInWithEmailAndPassword(email, password, dorm);

    this.doSignOut = () => this.auth.signOut();

    this.doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    this.doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    this.user = uid => this.db.ref(`users/${uid}`);

    this.users = () => this.db.ref('users');

    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
    this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
    this.db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();
  } // *** Auth API ***


} // firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();


/* harmony default export */ __webpack_exports__["default"] = (Firebase); // export { Axios, db }

/***/ }),

/***/ "./src/components/Firebase/index.js":
/*!******************************************!*\
  !*** ./src/components/Firebase/index.js ***!
  \******************************************/
/*! exports provided: default, FirebaseContext, withFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/components/Firebase/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["withFirebase"]; });

/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "./src/components/Firebase/firebase.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (_firebase__WEBPACK_IMPORTED_MODULE_1__["default"]); // const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//     firebase.auth().signInWithPopup(provider).then(function(result)    
// }
// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithRedirect = () => {
//     firebase.auth().signInWithRedirect(provider);
// }
// export const signOutFirebase = () => {
//     firebase.auth().signOut().then(function() {
//         // Sign-out successful.
//     }).catch(function(error) {
//         // An error happened.
//     });
// }
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();



/***/ }),

/***/ "./src/components/FontAwesomeIcons/index.js":
/*!**************************************************!*\
  !*** ./src/components/FontAwesomeIcons/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
// import the library
 // import your icons


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLeaf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrophy"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLock"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEyeSlash"]);

/***/ }),

/***/ "./src/components/Header/index.css":
/*!*****************************************!*\
  !*** ./src/components/Header/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _FontAwesomeIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FontAwesomeIcons */ "./src/components/FontAwesomeIcons/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignOut */ "./src/components/SignOut/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/components/Header/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Eco */ "./node_modules/@material-ui/icons/Eco.js");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Header/index.js";
 //import SignOutButton from "../SignOut";

 // import your fontawesome library

 // import when you need to use icons



 // import material ui





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  header: {
    background: "primary"
  },
  title: {
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
    margin: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "7.5rem"
    }
  }
}));

const Header = ({
  firebase
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    position: "static",
    className: classes.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    className: classes.toolbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h6",
    className: classes.title,
    noWrap: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Sustainability Competition App", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "medium",
    className: classes.leaf,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_Firebase__WEBPACK_IMPORTED_MODULE_9__["withFirebase"])(Header));

/***/ }),

/***/ "./src/components/Home/counter.js":
/*!****************************************!*\
  !*** ./src/components/Home/counter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Home/counter.js";

 // TODO: Outstanding issue: The user has to start by pressing "undo" to initialize the score to 0 instead of NaN.
// No idea how to initialize the counter the first time without it being overwritten every time the user opens the
// file. Maybe I can jank something together with "if val== NaN, then val = 0" or something?? Will try later.

class Counter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.increment = () => {
      localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction)) + parseInt(10));
      this.setState({
        count: parseInt(localStorage.getItem(this.props.susAction))
      });
    };

    this.incrementFive = () => {
      localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction)) + 5);
      this.setState({
        count: parseInt(localStorage.getItem(this.props.susAction))
      });
    };

    this.decrement = () => {
      if (this.state.count > 0) {
        localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction)) - parseInt(10));
        this.setState({
          count: parseInt(localStorage.getItem(this.props.susAction))
        });
      } else {
        this.setState({
          count: 0
        });
        localStorage.setItem(this.props.susAction, 0);
      }
    };

    this.state = {
      count: parseInt(localStorage.getItem(this.props.susAction))
    };
  }

  writeUserData(email, count) {
    _Firebase__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('users/' + email).set({
      email: email,
      count: count
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, "You have earned a total of ", this.state.count, " points from this sustainable action!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "buzzButton",
      onClick: this.increment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, "BUZZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "undoButton",
      onClick: this.decrement,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      role: "img",
      "aria-label": "undo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 69
      }
    }, "\u21A9\uFE0F")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ "./src/components/Home/counter.js");
/* harmony import */ var _ActionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActionCard */ "./src/components/ActionCard/index.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Session */ "./src/components/Session/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Home/index.js";



 // Text to display on the homepage

const HomePage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, "var user ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, "Home Sweet Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, "Track your sustainable actions here!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  role: "img",
  "aria-label": "recycle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, "\u267B\uFE0F"), "You have earned a total of ", parseInt(localStorage.getItem('waterBottle')) + parseInt(localStorage.getItem('cmontWalk')), " points for your sustainable actions. Thank you!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, "Recycle Water Bottle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
  susAction: 'waterBottle',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, "Walk to Claremont Village")), "(Just not during the first two weeks on campus!)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
  susAction: 'cmontWalk',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
})));

const condition = authUser => !!authUser;

/* harmony default export */ __webpack_exports__["default"] = (Object(_Session__WEBPACK_IMPORTED_MODULE_3__["withAuthorization"])(condition)(HomePage));

/***/ }),

/***/ "./src/components/Info/index.js":
/*!**************************************!*\
  !*** ./src/components/Info/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/koberico/sustainability/src/components/Info/index.js";
 // Used to also import "{ Component }", removed because it gave a warning
// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';
// import { progressDeck } from "react-progress-deck";
// import { withAuthorization } from '../Session';
// import firebase from "../Firebase"
// import ProgressDeck from "../ProgressDeck";

const InfoPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, "Info Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, "Goal/Purpose"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, "The 2020 Summer Startup Team works with sustainability organizations at Mudd like ASHMC sustainability and Engineers of a Sustainable World to help promote more eco-friendly practices on our campus by providing real-life incentives."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}, "How to Participate & Earn Points"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}, "Sign up with your HMC gmail! Look on our actions page for sustainable practices that you can earn points for and hit the \"BUZZ\" button everytime you complete the action!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}, "Current Challenges"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, "Coming soon... :)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}, "Current Rewards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }
}, "Coming soon... :)"))); //const condition = authUser => !!authUser;


/* harmony default export */ __webpack_exports__["default"] = (InfoPage);

/***/ }),

/***/ "./src/components/Landing/index.js":
/*!*****************************************!*\
  !*** ./src/components/Landing/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_welcome_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/welcome.svg */ "./src/img/welcome.svg");
/* harmony import */ var _img_welcome_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_welcome_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/koberico/sustainability/src/components/Landing/index.js";



const LandingPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "Hello future friend!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  alt: "",
  src: _img_welcome_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, "Hey you should sign up to use our awesome app! :)"));

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/components/Navigation/index.css":
/*!*********************************************!*\
  !*** ./src/components/Navigation/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navigation/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navigation/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navigation/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Session */ "./src/components/Session/index.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignOut */ "./src/components/SignOut/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/components/Navigation/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FontAwesomeIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FontAwesomeIcons */ "./src/components/FontAwesomeIcons/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Navigation/index.js";





 // import your fontawesome library

 // import when you need to use icons

 // users can only see certain pages when nonauthorized/authorized

const Navigation = ({
  authUser
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Session__WEBPACK_IMPORTED_MODULE_3__["AuthUserContext"].Consumer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, authUser => authUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationAuth, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 34
  }
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationNonAuth, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 55
  }
}))); // start making fancy navbar!
// user is authorized


const NavigationAuth = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  class: "navbar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  class: "navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  class: "link-text logo-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 15
  }
}, "Go Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fad",
  "data-icon": "angle-double-right",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  class: "svg-inline--fa fa-angle-double-right fa-w-14 fa-5x",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  class: "fa-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "currentColor",
  d: "M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",
  class: "fa-secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 19
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "currentColor",
  d: "M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",
  class: "fa-primary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 19
  }
}))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_2__["HOME"],
  class: "link-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "home",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 17
  }
}), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  class: "page-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}, "Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_2__["COMPETE"],
  class: "link-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "trophy",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 17
  }
}), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  class: "page-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 17
  }
}, "Compete")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_2__["INFO"],
  class: "link-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "info",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 17
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  class: "page-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 17
  }
}, "Info")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT"],
  class: "link-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "user",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 17
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  class: "page-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 17
  }
}, "Account")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item logout",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "sign-out-alt",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 15
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 15
  }
}))))))); // user is non-authorized


const NavigationNonAuth = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  class: "navbar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  class: "navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  class: "link-text logo-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 15
  }
}, "Go Green!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fad",
  "data-icon": "angle-double-right",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  class: "svg-inline--fa fa-angle-double-right fa-w-14 fa-5x",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  class: "fa-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "currentColor",
  d: "M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",
  class: "fa-secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 19
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "currentColor",
  d: "M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",
  class: "fa-primary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 19
  }
}))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_2__["LANDING"],
  class: "link-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "leaf",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 17
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  class: "page-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 17
  }
}, "Landing")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  class: "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  class: "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_2__["SIGN_IN"],
  class: "link-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 15
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
  icon: "user",
  className: "icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 17
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  class: "page-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 17
  }
}, "Sign In"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/PasswordChange/index.js":
/*!************************************************!*\
  !*** ./src/components/PasswordChange/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/PasswordChange/index.js";


const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class PasswordChangeForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onSubmit = event => {
      const {
        passwordOne
      } = this.state;
      this.props.firebase.doPasswordUpdate(passwordOne).then(() => {
        this.setState({ ...INITIAL_STATE
        });
      }).catch(error => {
        this.setState({
          error
        });
      });
      event.preventDefault();
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.state = { ...INITIAL_STATE
    };
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error
    } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      className: "form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "passwordOne",
      value: passwordOne,
      onChange: this.onChange,
      type: "password",
      placeholder: "New Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "passwordTwo",
      value: passwordTwo,
      onChange: this.onChange,
      type: "password",
      placeholder: "Confirm New Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      disabled: isInvalid,
      type: "submit",
      className: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, "Change My Password"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, error.message));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_Firebase__WEBPACK_IMPORTED_MODULE_1__["withFirebase"])(PasswordChangeForm));

/***/ }),

/***/ "./src/components/PasswordForget/index.js":
/*!************************************************!*\
  !*** ./src/components/PasswordForget/index.js ***!
  \************************************************/
/*! exports provided: default, PasswordForgetForm, PasswordForgetLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetForm", function() { return PasswordForgetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetLink", function() { return PasswordForgetLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _img_forgetpw_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/forgetpw.svg */ "./src/img/forgetpw.svg");
/* harmony import */ var _img_forgetpw_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_forgetpw_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/koberico/sustainability/src/components/PasswordForget/index.js";






const PasswordForgetPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, "You forgot your password :("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  alt: "",
  src: _img_forgetpw_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PasswordForgetForm, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}));

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetFormBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onSubmit = event => {
      const {
        email
      } = this.state;
      this.props.firebase.doPasswordReset(email).then(() => {
        this.setState({ ...INITIAL_STATE
        });
      }).catch(error => {
        this.setState({
          error
        });
      });
      event.preventDefault();
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.state = { ...INITIAL_STATE
    };
  }

  render() {
    const {
      email,
      error
    } = this.state;
    const isInvalid = email === '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      className: "form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "email",
      value: this.state.email,
      onChange: this.onChange,
      type: "text",
      placeholder: "Email Address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      disabled: isInvalid,
      type: "submit",
      className: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, "Reset My Password"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, error.message));
  }

}

const PasswordForgetLink = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["PASSWORD_FORGET"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
}, "Forgot Password? (rip)"));

/* harmony default export */ __webpack_exports__["default"] = (PasswordForgetPage);
const PasswordForgetForm = Object(_Firebase__WEBPACK_IMPORTED_MODULE_2__["withFirebase"])(PasswordForgetFormBase);


/***/ }),

/***/ "./src/components/Profile/index.js":
/*!*****************************************!*\
  !*** ./src/components/Profile/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Session */ "./src/components/Session/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Profile/index.js";

 //import { PasswordForgetForm } from '../PasswordForget';
//import PasswordChangeForm from '../PasswordChange';
//import accountImg from "../../img/account.svg";

const ProfilePage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Session__WEBPACK_IMPORTED_MODULE_1__["AuthUserContext"].Consumer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, authUser => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, "Your Account: ", authUser.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, " POINTS ACQUIRED ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  role: "img",
  "aria-label": "smiley",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 26
  }
}, "\uD83D\uDE0A"), ": ")));

const condition = authUser => !!authUser;

/* harmony default export */ __webpack_exports__["default"] = (Object(_Session__WEBPACK_IMPORTED_MODULE_1__["withAuthorization"])(condition)(ProfilePage));

/***/ }),

/***/ "./src/components/Session/context.js":
/*!*******************************************!*\
  !*** ./src/components/Session/context.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthUserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (AuthUserContext);

/***/ }),

/***/ "./src/components/Session/index.js":
/*!*****************************************!*\
  !*** ./src/components/Session/index.js ***!
  \*****************************************/
/*! exports provided: AuthUserContext, withAuthentication, withAuthorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/components/Session/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthUserContext", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _withAuthentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withAuthentication */ "./src/components/Session/withAuthentication.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAuthentication", function() { return _withAuthentication__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _withAuthorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withAuthorization */ "./src/components/Session/withAuthorization.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAuthorization", function() { return _withAuthorization__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/Session/withAuthentication.js":
/*!******************************************************!*\
  !*** ./src/components/Session/withAuthentication.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/components/Session/context.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Session/withAuthentication.js";




const withAuthentication = Component => {
  class WithAuthentication extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState({
          authUser
        }) : this.setState({
          authUser: null
        });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
        value: this.state.authUser,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      })));
    }

  }

  return Object(_Firebase__WEBPACK_IMPORTED_MODULE_2__["withFirebase"])(WithAuthentication);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthentication);

/***/ }),

/***/ "./src/components/Session/withAuthorization.js":
/*!*****************************************************!*\
  !*** ./src/components/Session/withAuthorization.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/components/Session/context.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/Session/withAuthorization.js";







const withAuthorization = condition => Component => {
  class WithAuthorization extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(_constants_routes__WEBPACK_IMPORTED_MODULE_5__["SIGN_IN"]);
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, authUser => condition(authUser) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 35
        }
      })) : null);
    }

  }

  return Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"], _Firebase__WEBPACK_IMPORTED_MODULE_4__["withFirebase"])(WithAuthorization);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthorization);

/***/ }),

/***/ "./src/components/Setting/index.css":
/*!******************************************!*\
  !*** ./src/components/Setting/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Setting/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Setting/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Setting/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Setting/index.js":
/*!*****************************************!*\
  !*** ./src/components/Setting/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/Setting/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignOut */ "./src/components/SignOut/index.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Session */ "./src/components/Session/index.js");
/* harmony import */ var _PasswordChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PasswordChange */ "./src/components/PasswordChange/index.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _img_account_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/account.svg */ "./src/img/account.svg");
/* harmony import */ var _img_account_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_account_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/koberico/sustainability/src/components/Setting/index.js";



 // import { PasswordForgetForm } from "../PasswordForget";





const SettingsPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Session__WEBPACK_IMPORTED_MODULE_3__["AuthUserContext"].Consumer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, authUser => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }
}, "Your Account: ", authUser.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignOut__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "signout-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 11
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 11
  }
}, "Change your dorm here!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  alt: "your account",
  src: _img_account_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}, "-------------------------------------------"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 11
  }
}, "Change Password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordChange__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }
}, "Questions or concerns?"))));

const condition = authUser => !!authUser;

/* harmony default export */ __webpack_exports__["default"] = (Object(_Session__WEBPACK_IMPORTED_MODULE_3__["withAuthorization"])(condition)(SettingsPage));

/***/ }),

/***/ "./src/components/SignIn/Google-btn.css":
/*!**********************************************!*\
  !*** ./src/components/SignIn/Google-btn.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Google-btn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SignIn/Google-btn.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Google-btn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SignIn/Google-btn.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Google-btn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SignIn/Google-btn.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/SignIn/index.js":
/*!****************************************!*\
  !*** ./src/components/SignIn/index.js ***!
  \****************************************/
/*! exports provided: signInWithRedirect, signOutFirebase, SignInForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithRedirect", function() { return signInWithRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutFirebase", function() { return signOutFirebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInForm", function() { return SignInForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SignUp */ "./src/components/SignUp/index.js");
/* harmony import */ var _PasswordForget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PasswordForget */ "./src/components/PasswordForget/index.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _img_login3_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/login3.svg */ "./src/img/login3.svg");
/* harmony import */ var _img_login3_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_login3_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Google_btn_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Google-btn.css */ "./src/components/SignIn/Google-btn.css");
/* harmony import */ var _Google_btn_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Google_btn_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/koberico/sustainability/src/components/SignIn/index.js";












const SignInPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, "Hello! Please Sign in :)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  alt: "",
  src: _img_login3_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignInForm, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordForget__WEBPACK_IMPORTED_MODULE_6__["PasswordForgetLink"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignUp__WEBPACK_IMPORTED_MODULE_5__["SignUpLink"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}));

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onSubmit = event => {
      const {
        email,
        password
      } = this.state;
      this.props.firebase.doSignInWithEmailAndPassword(email, password).then(() => {
        this.setState({ ...INITIAL_STATE
        });
        this.props.history.push(_constants_routes__WEBPACK_IMPORTED_MODULE_8__["HOME"]);
      }).catch(error => {
        this.setState({
          error
        });
      });
      event.preventDefault();
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.state = { ...INITIAL_STATE
    };
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;
    const isInvalid = password === "" || email === "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      className: "form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "email",
      value: email,
      onChange: this.onChange,
      type: "text",
      placeholder: "Email Address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "password",
      value: password,
      onChange: this.onChange,
      type: "password",
      placeholder: "Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button",
      disabled: isInvalid,
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, "or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "google-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => signInWithRedirect(),
      class: "google-icon-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      class: "google-icon",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      onClick: () => signInWithRedirect(),
      class: "btn-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, "Sign in with Google"))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 19
      }
    }, error.message));
  }

}

const provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
const signInWithRedirect = () => {
  firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithRedirect(provider);
};
const signOutFirebase = () => {
  firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function () {// Sign-out successful.
  }).catch(function (error) {// An error happened.
  });
};
const SignInForm = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"], _Firebase__WEBPACK_IMPORTED_MODULE_7__["withFirebase"])(SignInFormBase);

/* harmony default export */ __webpack_exports__["default"] = (SignInPage);

/***/ }),

/***/ "./src/components/SignOut/index.js":
/*!*****************************************!*\
  !*** ./src/components/SignOut/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/SignOut/index.js";
 //  import * as firebase from 'firebase';



const SignOutButton = ({
  firebase
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  type: "button",
  onClick: firebase.doSignOut,
  className: "signout-btn button",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, "Sign Out");

/* harmony default export */ __webpack_exports__["default"] = (Object(_Firebase__WEBPACK_IMPORTED_MODULE_1__["withFirebase"])(SignOutButton));

/***/ }),

/***/ "./src/components/SignUp/index.js":
/*!****************************************!*\
  !*** ./src/components/SignUp/index.js ***!
  \****************************************/
/*! exports provided: default, SignUpForm, SignUpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return SignUpForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpLink", function() { return SignUpLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _img_login2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/login2.svg */ "./src/img/login2.svg");
/* harmony import */ var _img_login2_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_login2_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SignIn */ "./src/components/SignIn/index.js");
/* harmony import */ var _FontAwesomeIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FontAwesomeIcons */ "./src/components/FontAwesomeIcons/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/koberico/sustainability/src/components/SignUp/index.js";





 // import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import { Dropdown2 } from "../Dropdown";
// import your fontawesome library

 // import when you need to use icons



const SignUpPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "base-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  alt: "",
  src: _img_login2_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUpForm, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}));

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  dorm: "",
  error: null
};

class SignUpFormBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onSubmit = event => {
      const {
        username,
        email,
        passwordOne,
        dorm
      } = this.state;
      this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne, dorm).then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          dorm
        });
      }).then(() => {
        this.setState({ ...INITIAL_STATE
        });
        this.props.history.push(_constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"]);
      }).catch(error => {
        this.setState({
          error
        });
      });
      event.preventDefault();
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.state = { ...INITIAL_STATE
    };
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      dorm,
      error
    } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "" || email === "" || username === "" || dorm !== "South" || "Sontag" || "Drinkward" || "Case" || "North" || "East" || "West";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      className: "form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-field",
      name: "username",
      value: username,
      onChange: this.onChange,
      type: "text",
      placeholder: "Full Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "email",
      value: email,
      onChange: this.onChange,
      type: "text",
      placeholder: "Email Address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "passwordOne",
      value: passwordOne,
      onChange: this.onChange,
      type: "password",
      placeholder: "Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "passwordTwo",
      value: passwordTwo,
      onChange: this.onChange,
      type: "password",
      placeholder: "Confirm Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "dorm",
      value: dorm,
      onChange: this.onChange,
      type: "dorm",
      placeholder: "Dorm Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      disabled: isInvalid,
      type: "submit",
      className: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, "or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "google-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => Object(_SignIn__WEBPACK_IMPORTED_MODULE_5__["signInWithRedirect"])(),
      class: "google-icon-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      class: "google-icon",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      onClick: () => Object(_SignIn__WEBPACK_IMPORTED_MODULE_5__["signInWithRedirect"])(),
      class: "btn-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }, "Sign up with Google"))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, error.message));
  }

}

const SignUpLink = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 3
  }
}, "Don't have an account? Get with the program, and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 5
  }
}, "Sign Up"), " here now!");

const SignUpForm = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(_Firebase__WEBPACK_IMPORTED_MODULE_2__["withFirebase"])(SignUpFormBase));
/* harmony default export */ __webpack_exports__["default"] = (SignUpPage);


/***/ }),

/***/ "./src/constants/routes.js":
/*!*********************************!*\
  !*** ./src/constants/routes.js ***!
  \*********************************/
/*! exports provided: LANDING, SIGN_UP, SIGN_IN, HOME, ACCOUNT, SETTING, COMPETE, INFO, PASSWORD_FORGET, PROFILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDING", function() { return LANDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT", function() { return ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING", function() { return SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPETE", function() { return COMPETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO", function() { return INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_FORGET", function() { return PASSWORD_FORGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE", function() { return PROFILE; });
// gives each page a url directory
const LANDING = '/';
const SIGN_UP = '/signup';
const SIGN_IN = '/signin';
const HOME = '/home';
const ACCOUNT = '/account';
const SETTING = '/settings';
const COMPETE = '/compete';
const INFO = '/info';
const PASSWORD_FORGET = '/pw-forget';
const PROFILE = '/profile';

/***/ }),

/***/ "./src/img/account.svg":
/*!*****************************!*\
  !*** ./src/img/account.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/account.7911385b.svg";

/***/ }),

/***/ "./src/img/forgetpw.svg":
/*!******************************!*\
  !*** ./src/img/forgetpw.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/forgetpw.9abe10c2.svg";

/***/ }),

/***/ "./src/img/login2.svg":
/*!****************************!*\
  !*** ./src/img/login2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login2.30f87ec6.svg";

/***/ }),

/***/ "./src/img/login3.svg":
/*!****************************!*\
  !*** ./src/img/login3.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login3.1203317a.svg";

/***/ }),

/***/ "./src/img/welcome.svg":
/*!*****************************!*\
  !*** ./src/img/welcome.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/welcome.977e7dbd.svg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Firebase */ "./src/components/Firebase/index.js");
var _jsxFileName = "/Users/koberico/sustainability/src/index.js";
// "The BIG index"







const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#24a113"
    } // secondary: {
    //   main: "#0044ff",
    // },

  }
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Firebase__WEBPACK_IMPORTED_MODULE_6__["FirebaseContext"].Provider, {
  value: new _components_Firebase__WEBPACK_IMPORTED_MODULE_6__["default"](),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
  theme: theme,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}))), document.getElementById("root"));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/koberico/sustainability/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/koberico/sustainability/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/koberico/sustainability/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map