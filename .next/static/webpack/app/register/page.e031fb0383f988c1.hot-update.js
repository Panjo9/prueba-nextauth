"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./app/register/page.js":
/*!******************************!*\
  !*** ./app/register/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_register_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/register/actions */ \"(app-pages-browser)/./app/register/actions.js\");\n/* harmony import */ var _ui_button_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/button-auth */ \"(app-pages-browser)/./app/_ui/button-auth.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import { useActionState } from \"react\";\n\n\n\nfunction RegisterPage() {\n    var _state_errors_name, _state_errors, _state_errors_password, _state_errors1;\n    _s();\n    // const [state, action] = useActionState(registro, null);\n    const [state, action] = (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.useFormState)(_app_register_actions__WEBPACK_IMPORTED_MODULE_1__.registro, null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center gap-y-4 border border-solid border-black rounded p-4 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Registrate\"\n            }, void 0, false, {\n                fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col items-center gap-y-2\",\n                action: action,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-solid border-black rounded p-2\",\n                        name: \"name\",\n                        placeholder: \"Nombre\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    (state === null || state === void 0 ? void 0 : (_state_errors = state.errors) === null || _state_errors === void 0 ? void 0 : (_state_errors_name = _state_errors.name) === null || _state_errors_name === void 0 ? void 0 : _state_errors_name[0]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: state.errors.name[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 17,\n                        columnNumber: 38\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-solid border-black rounded p-2\",\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"Contrase\\xf1a\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    (state === null || state === void 0 ? void 0 : (_state_errors1 = state.errors) === null || _state_errors1 === void 0 ? void 0 : (_state_errors_password = _state_errors1.password) === null || _state_errors_password === void 0 ? void 0 : _state_errors_password[1]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: state.errors.password[1]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 25,\n                        columnNumber: 42\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Registrarse\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    (state === null || state === void 0 ? void 0 : state.succesful) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: state.succesful\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 27,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\lista_tareas\\\\app\\\\register\\\\page.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(RegisterPage, \"8OZn8iIokM1duhUXZQ6EOnlT+kw=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_3__.useFormState\n    ];\n});\n_c = RegisterPage;\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3Rlci9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSwwQ0FBMEM7QUFDTztBQUNSO0FBQ0E7QUFFMUIsU0FBU0c7UUFTZkMsb0JBQUFBLGVBUUFBLHdCQUFBQTs7SUFoQlAsMERBQTBEO0lBQzFELE1BQU0sQ0FBQ0EsT0FBT0MsT0FBTyxHQUFHSCx1REFBWUEsQ0FBQ0YsMkRBQVFBLEVBQUU7SUFFL0MscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBSzs7Ozs7OzBCQUNOLDhEQUFDQztnQkFBS0YsV0FBVTtnQkFBcUNGLFFBQVFBOztrQ0FDM0QsOERBQUNLO3dCQUFNSCxXQUFVO3dCQUErQ0ksTUFBSzt3QkFBT0MsYUFBWTt3QkFBU0MsUUFBUTs7Ozs7O29CQUN4R1QsQ0FBQUEsa0JBQUFBLDZCQUFBQSxnQkFBQUEsTUFBT1UsTUFBTSxjQUFiVixxQ0FBQUEscUJBQUFBLGNBQWVPLElBQUksY0FBbkJQLHlDQUFBQSxrQkFBcUIsQ0FBQyxFQUFFLG1CQUFJLDhEQUFDSTtrQ0FBTUosTUFBTVUsTUFBTSxDQUFDSCxJQUFJLENBQUMsRUFBRTs7Ozs7O2tDQUN4RCw4REFBQ0Q7d0JBQ0NILFdBQVU7d0JBQ1ZRLE1BQUs7d0JBQ0xKLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFFBQVE7Ozs7OztvQkFFVFQsQ0FBQUEsa0JBQUFBLDZCQUFBQSxpQkFBQUEsTUFBT1UsTUFBTSxjQUFiVixzQ0FBQUEseUJBQUFBLGVBQWVZLFFBQVEsY0FBdkJaLDZDQUFBQSxzQkFBeUIsQ0FBQyxFQUFFLG1CQUFJLDhEQUFDSTtrQ0FBTUosTUFBTVUsTUFBTSxDQUFDRSxRQUFRLENBQUMsRUFBRTs7Ozs7O2tDQUNoRSw4REFBQ2YsdURBQVVBO2tDQUFDOzs7Ozs7b0JBQ1hHLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT2EsU0FBUyxtQkFBSSw4REFBQ1Q7a0NBQU1KLE1BQU1hLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtHQXZCd0JkOztRQUVFRCxtREFBWUE7OztLQUZkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVnaXN0ZXIvcGFnZS5qcz8wYmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbi8vIGltcG9ydCB7IHVzZUFjdGlvblN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlZ2lzdHJvIH0gZnJvbSAnQGFwcC9yZWdpc3Rlci9hY3Rpb25zJztcclxuaW1wb3J0IEJ1dHRvbkF1dGggZnJvbSAnQHVpL2J1dHRvbi1hdXRoJztcclxuaW1wb3J0IHsgdXNlRm9ybVN0YXRlIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyUGFnZSgpIHtcclxuICAvLyBjb25zdCBbc3RhdGUsIGFjdGlvbl0gPSB1c2VBY3Rpb25TdGF0ZShyZWdpc3RybywgbnVsbCk7XHJcbiAgY29uc3QgW3N0YXRlLCBhY3Rpb25dID0gdXNlRm9ybVN0YXRlKHJlZ2lzdHJvLCBudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXktNCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayByb3VuZGVkIHAtNCBiZy13aGl0ZVwiPlxyXG4gICAgICA8c3Bhbj5SZWdpc3RyYXRlPC9zcGFuPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAteS0yXCIgYWN0aW9uPXthY3Rpb259PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayByb3VuZGVkIHAtMlwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21icmVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIHtzdGF0ZT8uZXJyb3JzPy5uYW1lPy5bMF0gJiYgPHNwYW4+e3N0YXRlLmVycm9ycy5uYW1lWzBdfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayByb3VuZGVkIHAtMlwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzdGF0ZT8uZXJyb3JzPy5wYXNzd29yZD8uWzFdICYmIDxzcGFuPntzdGF0ZS5lcnJvcnMucGFzc3dvcmRbMV19PC9zcGFuPn1cclxuICAgICAgICA8QnV0dG9uQXV0aD5SZWdpc3RyYXJzZTwvQnV0dG9uQXV0aD5cclxuICAgICAgICB7c3RhdGU/LnN1Y2Nlc2Z1bCAmJiA8c3Bhbj57c3RhdGUuc3VjY2VzZnVsfTwvc3Bhbj59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJlZ2lzdHJvIiwiQnV0dG9uQXV0aCIsInVzZUZvcm1TdGF0ZSIsIlJlZ2lzdGVyUGFnZSIsInN0YXRlIiwiYWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImZvcm0iLCJpbnB1dCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZXJyb3JzIiwidHlwZSIsInBhc3N3b3JkIiwic3VjY2VzZnVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/register/page.js\n"));

/***/ })

});