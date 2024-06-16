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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItems */ \"./components/Patient/ListItems.tsx\");\n/* harmony import */ var _utils_pagination_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/pagination-controls */ \"./utils/pagination-controls.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar List = function(param) {\n    var patients = param.patients;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(1), 2), currentPage = ref[0], setCurrentPage = ref[1];\n    var patientsPerPage = 10;\n    var totalPages = Math.ceil(patients.length / patientsPerPage);\n    var indexOfLastPatient = currentPage * patientsPerPage;\n    var indexOfFirstPatient = indexOfLastPatient - patientsPerPage;\n    var currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);\n    var handlePageChange = function(pageNumber) {\n        setCurrentPage(pageNumber);\n    };\n    var styles = {\n        table: {\n            width: \"100%\",\n            borderCollapse: \"collapse\",\n            overflowX: \"auto\",\n            tableLayout: \"fixed\"\n        },\n        th: {\n            backgroundColor: \"#f2f2f2\",\n            color: \"#333\",\n            padding: \"12px 15px\",\n            border: \"1px solid #e0e0e0\",\n            fontSize: \"14px\",\n            textAlign: \"left\",\n            whiteSpace: \"nowrap\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: styles.table,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Identifiant\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Nom\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Pr\\xe9nom\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        backgroundColor: \"#f2f2f2\",\n                                        color: \"#333\",\n                                        padding: \"12px 15px\",\n                                        border: \"1px solid #e0e0e0\",\n                                        fontSize: \"14px\",\n                                        textAlign: \"left\",\n                                        whiteSpace: \"nowrap\",\n                                        width: \"150px\"\n                                    },\n                                    children: \"Date de naissance\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"Adresse\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        backgroundColor: \"#f2f2f2\",\n                                        color: \"#333\",\n                                        padding: \"12px 15px\",\n                                        border: \"1px solid #e0e0e0\",\n                                        fontSize: \"14px\",\n                                        textAlign: \"left\",\n                                        whiteSpace: \"nowrap\",\n                                        width: \"70px\"\n                                    },\n                                    children: \"Sexe\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"№ de t\\xe9l\\xe9phone\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \"№ de s sociale\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.th,\n                                    children: \" profile\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: currentPatients.map(function(patient, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                patient: patient,\n                                index: indexOfFirstPatient + index\n                            }, patient.idPatient, false, {\n                                fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_pagination_controls__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentPage: currentPage,\n                totalPages: totalPages,\n                onPageChange: handlePageChange\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\patientcare-main\\\\components\\\\Patient\\\\List.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(List, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7eUNBQUs7OENBQ1osOERBQUNJLElBQUU7b0NBQUNRLEtBQUssRUFBRWQsTUFBTSxDQUFDTSxFQUFFOzhDQUFFLHNCQUFjOzs7Ozt5Q0FBSzs4Q0FFekMsOERBQUNBLElBQUU7b0NBQUNRLEtBQUssRUFBRWQsTUFBTSxDQUFDTSxFQUFFOzhDQUFFLGdCQUFjOzs7Ozt5Q0FBSzs4Q0FDekMsOERBQUNBLElBQUU7b0NBQUNRLEtBQUssRUFBRWQsTUFBTSxDQUFDTSxFQUFFOzhDQUFFLFVBQVE7Ozs7O3lDQUFLOzs7Ozs7aUNBQ2xDOzs7Ozs2QkFDRDtrQ0FDUiw4REFBQ1csT0FBSztrQ0FDRHJCLGVBQWUsQ0FBQ3NCLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUs7aURBQ2hDLDhEQUFDdEMsa0RBQWU7Z0NBQXlCcUMsT0FBTyxFQUFFQSxPQUFPO2dDQUFFQyxLQUFLLEVBQUV6QixtQkFBbUIsR0FBR3lCLEtBQUs7K0JBQXZFRCxPQUFPLENBQUNFLFNBQVM7Ozs7cUNBQTBEO3lCQUNwRyxDQUFDOzs7Ozs2QkFDRTs7Ozs7O3FCQUNKOzBCQUNSLDhEQUFDdEMsa0VBQWtCO2dCQUNmSSxXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCRyxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCZ0MsWUFBWSxFQUFFeEIsZ0JBQWdCOzs7OztxQkFDaEM7O29CQUNILENBQ0w7QUFDTixDQUFDO0dBM0VLZCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE2RVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhdGllbnQvTGlzdC50c3g/ZGQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IFBhdGllbnRMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtcyc7XG5pbXBvcnQgUGFnaW5hdGlvbkNvbnRyb2xzIGZyb20gJy4uLy4uL3V0aWxzL3BhZ2luYXRpb24tY29udHJvbHMnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHBhdGllbnRzOiBQYXRpZW50W11cbn1cblxuY29uc3QgTGlzdCA9ICh7IHBhdGllbnRzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBwYXRpZW50c1BlclBhZ2UgPSAxMDtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHBhdGllbnRzLmxlbmd0aCAvIHBhdGllbnRzUGVyUGFnZSk7XG5cbiAgICBjb25zdCBpbmRleE9mTGFzdFBhdGllbnQgPSBjdXJyZW50UGFnZSAqIHBhdGllbnRzUGVyUGFnZTtcbiAgICBjb25zdCBpbmRleE9mRmlyc3RQYXRpZW50ID0gaW5kZXhPZkxhc3RQYXRpZW50IC0gcGF0aWVudHNQZXJQYWdlO1xuICAgIGNvbnN0IGN1cnJlbnRQYXRpZW50cyA9IHBhdGllbnRzLnNsaWNlKGluZGV4T2ZGaXJzdFBhdGllbnQsIGluZGV4T2ZMYXN0UGF0aWVudCk7XG5cbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIGFzICdjb2xsYXBzZScsXG4gICAgICAgICAgICBvdmVyZmxvd1g6ICdhdXRvJyBhcyAnYXV0bycsXG4gICAgICAgICAgICB0YWJsZUxheW91dDogJ2ZpeGVkJyBhcyAnZml4ZWQnXG4gICAgICAgIH0sXG4gICAgICAgIHRoOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzMycsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTJweCAxNXB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyBhcyAnbGVmdCcsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXtzdHlsZXMudGFibGV9PlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGh9PklkZW50aWZpYW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGh9PlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7ICAgIGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInLFxuICAgICAgICAgICAgY29sb3I6ICcjMzMzJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMnB4IDE1cHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnIGFzICdsZWZ0JyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgd2lkdGg6XCIxNTBweFwifX0+RGF0ZSBkZSBuYWlzc2FuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGh9PkFkcmVzc2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7ICAgIGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInLFxuICAgICAgICAgICAgY29sb3I6ICcjMzMzJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMnB4IDE1cHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnIGFzICdsZWZ0JyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgd2lkdGg6XCI3MHB4XCJ9fT5TZXhlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT7ihJYgZGUgdMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT7ihJYgZGUgcyBzb2NpYWxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT4gcHJvZmlsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UGF0aWVudHMubWFwKChwYXRpZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhdGllbnRMaXN0SXRlbSBrZXk9e3BhdGllbnQuaWRQYXRpZW50fSBwYXRpZW50PXtwYXRpZW50fSBpbmRleD17aW5kZXhPZkZpcnN0UGF0aWVudCArIGluZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29udHJvbHNcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAgICAgdG90YWxQYWdlcz17dG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhdGllbnRMaXN0SXRlbSIsIlBhZ2luYXRpb25Db250cm9scyIsIkxpc3QiLCJwYXRpZW50cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhdGllbnRzUGVyUGFnZSIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImluZGV4T2ZMYXN0UGF0aWVudCIsImluZGV4T2ZGaXJzdFBhdGllbnQiLCJjdXJyZW50UGF0aWVudHMiLCJzbGljZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTnVtYmVyIiwic3R5bGVzIiwidGFibGUiLCJ3aWR0aCIsImJvcmRlckNvbGxhcHNlIiwib3ZlcmZsb3dYIiwidGFibGVMYXlvdXQiLCJ0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInN0eWxlIiwidGhlYWQiLCJ0ciIsInRib2R5IiwibWFwIiwicGF0aWVudCIsImluZGV4IiwiaWRQYXRpZW50Iiwib25QYWdlQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Patient/List.tsx\n"));

/***/ })

});