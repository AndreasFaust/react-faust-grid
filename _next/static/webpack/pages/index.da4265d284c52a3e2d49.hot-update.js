webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/inner.tsx":
/*!*****************************!*\
  !*** ./src/utils/inner.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-raster/src/utils/inner.tsx\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n          \", \"\\n          \", \"\\n          \", \"\\n          \", \"\\n        \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n          display: flex;\\n          align-items: stretch;\\n          justify-content: stretch;\\n          \", \"\\n        \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar InnerTag = function InnerTag(_ref) {\n  var className = _ref.className,\n      innerHTML = _ref.innerHTML,\n      children = _ref.children;\n  return innerHTML ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: className,\n    dangerouslySetInnerHTML: {\n      __html: innerHTML\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: className,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = InnerTag;\nvar StyledInner = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(InnerTag).withConfig({\n  displayName: \"inner__StyledInner\",\n  componentId: \"sc-963l5d-0\"\n})([\"position:relative;width:100%;\", \"\"], function (props) {\n  return props.media.map(function (media, index) {\n    return props.hasChildBoxes ? media(_templateObject(), props.style && props.style[index]) : media(_templateObject2(), (props.alignX[index] || props.alignY[index]) && \"display: flex;\", props.alignX[index] && \"justify-content: \".concat(props.alignX[index], \";\"), props.alignY[index] && \"align-items: \".concat(props.alignY[index], \";\"), props.style && props.style[index]);\n  });\n});\n_c2 = StyledInner;\n\nvar Inner = function Inner(_ref2) {\n  var media = _ref2.media,\n      className = _ref2.className,\n      alignX = _ref2.alignX,\n      alignY = _ref2.alignY,\n      style = _ref2.style,\n      children = _ref2.children,\n      cssMode = _ref2.cssMode,\n      hasChildBoxes = _ref2.hasChildBoxes,\n      innerHTML = _ref2.innerHTML,\n      isGrid = _ref2.isGrid;\n  if (cssMode === \"grid\") return children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledInner, {\n    className: className,\n    media: media,\n    cssMode: cssMode,\n    alignX: alignX,\n    alignY: alignY,\n    style: style,\n    hasChildBoxes: hasChildBoxes,\n    isGrid: isGrid,\n    innerHTML: innerHTML,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = Inner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inner);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"InnerTag\");\n$RefreshReg$(_c2, \"StyledInner\");\n$RefreshReg$(_c3, \"Inner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2lubmVyLnRzeD8xMzBhIl0sIm5hbWVzIjpbIklubmVyVGFnIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJfX2h0bWwiLCJTdHlsZWRJbm5lciIsInN0eWxlZCIsInByb3BzIiwibWVkaWEiLCJtYXAiLCJpbmRleCIsImhhc0NoaWxkQm94ZXMiLCJzdHlsZSIsImFsaWduWCIsImFsaWduWSIsIklubmVyIiwiY3NzTW9kZSIsImlzR3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWNDLFNBQWQsUUFBY0EsU0FBZDtBQUFBLE1BQXlCQyxRQUF6QixRQUF5QkEsUUFBekI7QUFBQSxTQUNmRCxTQUFTLGdCQUNQO0FBQ0UsYUFBUyxFQUFFRCxTQURiO0FBRUUsMkJBQXVCLEVBQUU7QUFBRUcsWUFBTSxFQUFFRjtBQUFWO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FETyxnQkFNUDtBQUFLLGFBQVMsRUFBRUQsU0FBaEI7QUFBQSxjQUE0QkU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVBhO0FBQUEsQ0FBakI7O0tBQU1ILFE7QUFxQk4sSUFBTUssV0FBVyxHQUFHQyxpRUFBTSxDQUFDTixRQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMENBSWIsVUFBQ08sS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNELEtBQUQsRUFBYUUsS0FBYixFQUErQjtBQUM3QyxXQUFPSCxLQUFLLENBQUNJLGFBQU4sR0FDSEgsS0FERyxvQkFLREQsS0FBSyxDQUFDSyxLQUFOLElBQWVMLEtBQUssQ0FBQ0ssS0FBTixDQUFZRixLQUFaLENBTGQsSUFPSEYsS0FQRyxxQkFRRCxDQUFDRCxLQUFLLENBQUNNLE1BQU4sQ0FBYUgsS0FBYixLQUF1QkgsS0FBSyxDQUFDTyxNQUFOLENBQWFKLEtBQWIsQ0FBeEIscUJBUkMsRUFTREgsS0FBSyxDQUFDTSxNQUFOLENBQWFILEtBQWIsZ0NBQTJDSCxLQUFLLENBQUNNLE1BQU4sQ0FBYUgsS0FBYixDQUEzQyxNQVRDLEVBVURILEtBQUssQ0FBQ08sTUFBTixDQUFhSixLQUFiLDRCQUF1Q0gsS0FBSyxDQUFDTyxNQUFOLENBQWFKLEtBQWIsQ0FBdkMsTUFWQyxFQVdESCxLQUFLLENBQUNLLEtBQU4sSUFBZUwsS0FBSyxDQUFDSyxLQUFOLENBQVlGLEtBQVosQ0FYZCxDQUFQO0FBYUQsR0FkRCxDQURBO0FBQUEsQ0FKYSxDQUFqQjtNQUFNTCxXOztBQW1DTixJQUFNVSxLQUFzQixHQUFHLFNBQXpCQSxLQUF5QixRQVd6QjtBQUFBLE1BVkpQLEtBVUksU0FWSkEsS0FVSTtBQUFBLE1BVEpQLFNBU0ksU0FUSkEsU0FTSTtBQUFBLE1BUkpZLE1BUUksU0FSSkEsTUFRSTtBQUFBLE1BUEpDLE1BT0ksU0FQSkEsTUFPSTtBQUFBLE1BTkpGLEtBTUksU0FOSkEsS0FNSTtBQUFBLE1BTEpULFFBS0ksU0FMSkEsUUFLSTtBQUFBLE1BSkphLE9BSUksU0FKSkEsT0FJSTtBQUFBLE1BSEpMLGFBR0ksU0FISkEsYUFHSTtBQUFBLE1BRkpULFNBRUksU0FGSkEsU0FFSTtBQUFBLE1BREplLE1BQ0ksU0FESkEsTUFDSTtBQUNKLE1BQUlELE9BQU8sS0FBSyxNQUFoQixFQUF3QixPQUFPYixRQUFQO0FBQ3hCLHNCQUNFLHFFQUFDLFdBQUQ7QUFDRSxhQUFTLEVBQUVGLFNBRGI7QUFFRSxTQUFLLEVBQUVPLEtBRlQ7QUFHRSxXQUFPLEVBQUVRLE9BSFg7QUFJRSxVQUFNLEVBQUVILE1BSlY7QUFLRSxVQUFNLEVBQUVDLE1BTFY7QUFNRSxTQUFLLEVBQUVGLEtBTlQ7QUFPRSxpQkFBYSxFQUFFRCxhQVBqQjtBQVFFLFVBQU0sRUFBRU0sTUFSVjtBQVNFLGFBQVMsRUFBRWYsU0FUYjtBQUFBLGNBV0dDO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0E1QkQ7O01BQU1ZLEs7QUE4QlNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2lubmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IElubmVyVGFnID0gKHsgY2xhc3NOYW1lLCBpbm5lckhUTUwsIGNoaWxkcmVuIH0pID0+XG4gIGlubmVySFRNTCA/IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaW5uZXJIVE1MIH19XG4gICAgLz5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICk7XG5cbmludGVyZmFjZSBTdHlsZWRQcm9wcyB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBtZWRpYTogYW55W107XG4gIGFsaWduWDogc3RyaW5nW107XG4gIGFsaWduWTogc3RyaW5nW107XG4gIHN0eWxlOiBzdHJpbmdbXTtcbiAgaW5uZXJIVE1MPzogc3RyaW5nO1xuICBoYXNDaGlsZEJveGVzOiBib29sZWFuO1xuICBjc3NNb2RlOiBcImdyaWRcIiB8IFwiZmxleFwiO1xufVxuXG5jb25zdCBTdHlsZWRJbm5lciA9IHN0eWxlZChJbm5lclRhZyk8U3R5bGVkUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLm1lZGlhLm1hcCgobWVkaWE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmhhc0NoaWxkQm94ZXNcbiAgICAgICAgPyBtZWRpYWBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgICAke3Byb3BzLnN0eWxlICYmIHByb3BzLnN0eWxlW2luZGV4XX1cbiAgICAgICAgYFxuICAgICAgICA6IG1lZGlhYFxuICAgICAgICAgICR7KHByb3BzLmFsaWduWFtpbmRleF0gfHwgcHJvcHMuYWxpZ25ZW2luZGV4XSkgJiYgYGRpc3BsYXk6IGZsZXg7YH1cbiAgICAgICAgICAke3Byb3BzLmFsaWduWFtpbmRleF0gJiYgYGp1c3RpZnktY29udGVudDogJHtwcm9wcy5hbGlnblhbaW5kZXhdfTtgfVxuICAgICAgICAgICR7cHJvcHMuYWxpZ25ZW2luZGV4XSAmJiBgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25ZW2luZGV4XX07YH1cbiAgICAgICAgICAke3Byb3BzLnN0eWxlICYmIHByb3BzLnN0eWxlW2luZGV4XX1cbiAgICAgICAgYDtcbiAgICB9KX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNzc01vZGU6IFwiZ3JpZFwiIHwgXCJmbGV4XCI7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBhbGlnblg6IHN0cmluZ1tdO1xuICBhbGlnblk6IHN0cmluZ1tdO1xuICBzdHlsZTogc3RyaW5nW107XG4gIG1lZGlhOiBhbnlbXTtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgaGFzQ2hpbGRCb3hlczogYm9vbGVhbjtcbiAgaW5uZXJIVE1MPzogc3RyaW5nO1xuICBpc0dyaWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBJbm5lcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgbWVkaWEsXG4gIGNsYXNzTmFtZSxcbiAgYWxpZ25YLFxuICBhbGlnblksXG4gIHN0eWxlLFxuICBjaGlsZHJlbixcbiAgY3NzTW9kZSxcbiAgaGFzQ2hpbGRCb3hlcyxcbiAgaW5uZXJIVE1MLFxuICBpc0dyaWQsXG59KSA9PiB7XG4gIGlmIChjc3NNb2RlID09PSBcImdyaWRcIikgcmV0dXJuIGNoaWxkcmVuO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRJbm5lclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBtZWRpYT17bWVkaWF9XG4gICAgICBjc3NNb2RlPXtjc3NNb2RlfVxuICAgICAgYWxpZ25YPXthbGlnblh9XG4gICAgICBhbGlnblk9e2FsaWduWX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGhhc0NoaWxkQm94ZXM9e2hhc0NoaWxkQm94ZXN9XG4gICAgICBpc0dyaWQ9e2lzR3JpZH1cbiAgICAgIGlubmVySFRNTD17aW5uZXJIVE1MfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZElubmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5uZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/inner.tsx\n");

/***/ })

})