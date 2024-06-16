"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/patients",{

/***/ "./components/Patient/List.tsx":
/*!*************************************!*\
  !*** ./components/Patient/List.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItems */ \"./components/Patient/ListItems.tsx\");\n/* harmony import */ var _utils_pagination_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/pagination-controls */ \"./utils/pagination-controls.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar List = function(param) {\n    var patients = param.patients;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(1), 2), currentPage = ref[0], setCurrentPage = ref[1];\n    var patientsPerPage = 10;\n    var totalPages = Math.ceil(patients.length / patientsPerPage);\n    var indexOfLastPatient = currentPage * patientsPerPage;\n    var indexOfFirstPatient = indexOfLastPatient - patientsPerPage;\n    var currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);\n    var handlePageChange = function(pageNumber) {\n        setCurrentPage(pageNumber);\n    };\n    var styles = {\n        table: {\n            width: \"100%\",\n            borderCollapse: \"collapse\",\n            overflowX: \"auto\",\n            tableLayout: \"fixed\"\n        },\n        th: {\n            backgroundColor: \"#f2f2f2\",\n            color: \"#333\",\n            padding: \"12px 15px\",\n            border: \"1px solid #e0e0e0\",\n            fontSize: \"14px\",\n            textAlign: \"left\",\n            whiteSpace: \"nowrap\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: styles.table,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Identifiant\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Nom\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Pr\\xe9nom\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Date de naissance\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Adresse\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Sexe\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"№ de t\\xe9l\\xe9phone\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"№ de s sociale\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: currentPatients.map(function(patient, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                patient: patient,\n                                index: indexOfFirstPatient + index\n                            }, patient.idPatient, false, {\n                                fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_pagination_controls__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentPage: currentPage,\n                totalPages: totalPages,\n                onPageChange: handlePageChange\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(List, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRUEsT0FBTztnQ0FBRUMsS0FBSyxFQUFFekIsbUJBQW1CLEdBQUd5QixLQUFLOytCQUF2RUQsT0FBTyxDQUFDRSxTQUFTOzs7O3FDQUEwRDt5QkFDcEcsQ0FBQzs7Ozs7NkJBQ0U7Ozs7OztxQkFDSjswQkFDUiw4REFBQ3RDLGtFQUFrQjtnQkFDZkksV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkcsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QmdDLFlBQVksRUFBRXhCLGdCQUFnQjs7Ozs7cUJBQ2hDOztvQkFDSCxDQUNMO0FBQ04sQ0FBQztHQTdES2QsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBK0RWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXRpZW50L0xpc3QudHN4P2RkNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBQYXRpZW50TGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbXMnO1xuaW1wb3J0IFBhZ2luYXRpb25Db250cm9scyBmcm9tICcuLi8uLi91dGlscy9wYWdpbmF0aW9uLWNvbnRyb2xzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBwYXRpZW50czogUGF0aWVudFtdXG59XG5cbmNvbnN0IExpc3QgPSAoeyBwYXRpZW50cyB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XG4gICAgY29uc3QgcGF0aWVudHNQZXJQYWdlID0gMTA7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChwYXRpZW50cy5sZW5ndGggLyBwYXRpZW50c1BlclBhZ2UpO1xuXG4gICAgY29uc3QgaW5kZXhPZkxhc3RQYXRpZW50ID0gY3VycmVudFBhZ2UgKiBwYXRpZW50c1BlclBhZ2U7XG4gICAgY29uc3QgaW5kZXhPZkZpcnN0UGF0aWVudCA9IGluZGV4T2ZMYXN0UGF0aWVudCAtIHBhdGllbnRzUGVyUGFnZTtcbiAgICBjb25zdCBjdXJyZW50UGF0aWVudHMgPSBwYXRpZW50cy5zbGljZShpbmRleE9mRmlyc3RQYXRpZW50LCBpbmRleE9mTGFzdFBhdGllbnQpO1xuXG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcik7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyBhcyAnY29sbGFwc2UnLFxuICAgICAgICAgICAgb3ZlcmZsb3dYOiAnYXV0bycgYXMgJ2F1dG8nLFxuICAgICAgICAgICAgdGFibGVMYXlvdXQ6ICdmaXhlZCcgYXMgJ2ZpeGVkJ1xuICAgICAgICB9LFxuICAgICAgICB0aDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzMnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEycHggMTVweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2UwZTBlMCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcgYXMgJ2xlZnQnLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT5JZGVudGlmaWFudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT5EYXRlIGRlIG5haXNzYW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+QWRyZXNzZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+U2V4ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+4oSWIGRlIHTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+4oSWIGRlIHMgc29jaWFsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQYXRpZW50cy5tYXAoKHBhdGllbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF0aWVudExpc3RJdGVtIGtleT17cGF0aWVudC5pZFBhdGllbnR9IHBhdGllbnQ9e3BhdGllbnR9IGluZGV4PXtpbmRleE9mRmlyc3RQYXRpZW50ICsgaW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25Db250cm9sc1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbFBhZ2VzfVxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGF0aWVudExpc3RJdGVtIiwiUGFnaW5hdGlvbkNvbnRyb2xzIiwiTGlzdCIsInBhdGllbnRzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGF0aWVudHNQZXJQYWdlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaW5kZXhPZkxhc3RQYXRpZW50IiwiaW5kZXhPZkZpcnN0UGF0aWVudCIsImN1cnJlbnRQYXRpZW50cyIsInNsaWNlIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2VOdW1iZXIiLCJzdHlsZXMiLCJ0YWJsZSIsIndpZHRoIiwiYm9yZGVyQ29sbGFwc2UiLCJvdmVyZmxvd1giLCJ0YWJsZUxheW91dCIsInRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwic3R5bGUiLCJ0aGVhZCIsInRyIiwidGJvZHkiLCJtYXAiLCJwYXRpZW50IiwiaW5kZXgiLCJpZFBhdGllbnQiLCJvblBhZ2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Patient/List.tsx\n"));

/***/ })

});