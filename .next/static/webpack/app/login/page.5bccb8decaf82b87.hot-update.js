"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/_lib/actions.js":
/*!*****************************!*\
  !*** ./app/_lib/actions.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: function() { return /* binding */ login; },
/* harmony export */   registro: function() { return /* binding */ registro; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"254551935fa4ec63a0d1712f7492fd490048eda3":"registro","aadd143db782bdf04c28c0758b91f7b5f4738f05":"login"} */ var login = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("aadd143db782bdf04c28c0758b91f7b5f4738f05");

var registro = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("254551935fa4ec63a0d1712f7492fd490048eda3");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/login/page.jsx":
/*!****************************!*\
  !*** ./app/login/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _ui_button_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/button-auth */ \"(app-pages-browser)/./app/_ui/button-auth.js\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_lib/actions */ \"(app-pages-browser)/./app/_lib/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst initialForm = {\n    email: \"\",\n    password: \"\"\n};\nfunction LoginPage() {\n    var _state_errors_email, _state_errors, _state_errors_password, _state_errors1;\n    _s();\n    const [state, action] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)(_app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.login, initialForm);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center gap-y-4 border border-solid border-black rounded-xl p-4 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-2xl\",\n                children: \"Inicio de sesi\\xf3n\"\n            }, void 0, false, {\n                fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col items-center gap-y-2\",\n                action: action,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-solid border-black rounded p-2\",\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    (state === null || state === void 0 ? void 0 : (_state_errors = state.errors) === null || _state_errors === void 0 ? void 0 : (_state_errors_email = _state_errors.email) === null || _state_errors_email === void 0 ? void 0 : _state_errors_email[0]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-red-500\",\n                        children: state.errors.email[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 39\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-solid border-black rounded p-2\",\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"Contrase\\xf1a\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    (state === null || state === void 0 ? void 0 : (_state_errors1 = state.errors) === null || _state_errors1 === void 0 ? void 0 : (_state_errors_password = _state_errors1.password) === null || _state_errors_password === void 0 ? void 0 : _state_errors_password[0]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-red-500\",\n                        children: state.errors.password[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 42\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Logeate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    (state === null || state === void 0 ? void 0 : state.succesful) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: state.succesful\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\prueba-nextauth\\\\Delba\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"8OZn8iIokM1duhUXZQ6EOnlT+kw=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXlDO0FBQ0E7QUFDQztBQUUxQyxNQUFNRyxjQUFjO0lBQ2xCQyxPQUFPO0lBQ1BDLFVBQVU7QUFDWjtBQUVlLFNBQVNDO1FBUWZDLHFCQUFBQSxlQU9BQSx3QkFBQUE7O0lBZFAsTUFBTSxDQUFDQSxPQUFPQyxPQUFPLEdBQUdSLHVEQUFZQSxDQUFDRSxtREFBS0EsRUFBRUM7SUFFNUMscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTswQkFBVzs7Ozs7OzBCQUMzQiw4REFBQ0U7Z0JBQUtGLFdBQVU7Z0JBQXFDRixRQUFRQTs7a0NBQzNELDhEQUFDSzt3QkFBTUgsV0FBVTt3QkFBK0NJLE1BQUs7d0JBQVFDLE1BQUs7d0JBQVFDLGFBQVk7Ozs7OztvQkFDckdULENBQUFBLGtCQUFBQSw2QkFBQUEsZ0JBQUFBLE1BQU9VLE1BQU0sY0FBYlYscUNBQUFBLHNCQUFBQSxjQUFlSCxLQUFLLGNBQXBCRywwQ0FBQUEsbUJBQXNCLENBQUMsRUFBRSxtQkFBSSw4REFBQ0k7d0JBQUtELFdBQVU7a0NBQWdCSCxNQUFNVSxNQUFNLENBQUNiLEtBQUssQ0FBQyxFQUFFOzs7Ozs7a0NBQ25GLDhEQUFDUzt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTs7Ozs7O29CQUViVCxDQUFBQSxrQkFBQUEsNkJBQUFBLGlCQUFBQSxNQUFPVSxNQUFNLGNBQWJWLHNDQUFBQSx5QkFBQUEsZUFBZUYsUUFBUSxjQUF2QkUsNkNBQUFBLHNCQUF5QixDQUFDLEVBQUUsbUJBQUksOERBQUNJO3dCQUFLRCxXQUFVO2tDQUFnQkgsTUFBTVUsTUFBTSxDQUFDWixRQUFRLENBQUMsRUFBRTs7Ozs7O2tDQUN6Riw4REFBQ0osdURBQVVBO2tDQUFDOzs7Ozs7b0JBQ1hNLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT1csU0FBUyxtQkFBSSw4REFBQ1A7a0NBQU1KLE1BQU1XLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtHQXJCd0JaOztRQUNFTixtREFBWUE7OztLQURkTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS5qc3g/Nzc2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uQXV0aCBmcm9tICdAdWkvYnV0dG9uLWF1dGgnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICdAYXBwL19saWIvYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxGb3JtID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgY29uc3QgW3N0YXRlLCBhY3Rpb25dID0gdXNlRm9ybVN0YXRlKGxvZ2luLCBpbml0aWFsRm9ybSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC15LTQgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2sgcm91bmRlZC14bCBwLTQgYmctd2hpdGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+SW5pY2lvIGRlIHNlc2nDs248L3NwYW4+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAteS0yXCIgYWN0aW9uPXthY3Rpb259PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2sgcm91bmRlZCBwLTJcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAge3N0YXRlPy5lcnJvcnM/LmVtYWlsPy5bMF0gJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e3N0YXRlLmVycm9ycy5lbWFpbFswXX08L3NwYW4+fVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayByb3VuZGVkIHAtMlwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIlxuICAgICAgICAvPlxuICAgICAgICB7c3RhdGU/LmVycm9ycz8ucGFzc3dvcmQ/LlswXSAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57c3RhdGUuZXJyb3JzLnBhc3N3b3JkWzBdfTwvc3Bhbj59XG4gICAgICAgIDxCdXR0b25BdXRoPkxvZ2VhdGU8L0J1dHRvbkF1dGg+XG4gICAgICAgIHtzdGF0ZT8uc3VjY2VzZnVsICYmIDxzcGFuPntzdGF0ZS5zdWNjZXNmdWx9PC9zcGFuPn1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtU3RhdGUiLCJCdXR0b25BdXRoIiwibG9naW4iLCJpbml0aWFsRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpblBhZ2UiLCJzdGF0ZSIsImFjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZXJyb3JzIiwic3VjY2VzZnVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});