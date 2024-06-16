/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDA43rZ1iAzVRsLpLocGkOWMQaVH4EK9qQ\",\n    authDomain: \"patients-qr.firebaseapp.com\",\n    projectId: \"patients-qr\",\n    storageBucket: \"patients-qr.appspot.com\",\n    messagingSenderId: \"223754090823\",\n    appId: \"1:223754090823:web:c081932097e127dfe97462\",\n    measurementId: \"G-36DVVJYNWF\"\n};\n// Initialize Firebase\nlet app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];\n//export const googleProvider = new GoogleAuthProvider();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNEO0FBQ007QUFDVjtBQUNKO0FBRTlDLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNSyxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSw2QkFBNkI7SUFDekNDLFNBQVMsRUFBRSxhQUFhO0lBQ3hCQyxhQUFhLEVBQUUseUJBQXlCO0lBQ3hDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUNoQztBQUVELHNCQUFzQjtBQUN0QixJQUFJQyxHQUFHLEdBQUdiLHFEQUFPLEVBQUUsQ0FBQ2MsTUFBTSxLQUFLLENBQUMsR0FBR2IsMkRBQWEsQ0FBQ0ksY0FBYyxDQUFDLEdBQUdMLHFEQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0UseURBQXlEO0FBQ2xELE1BQU1lLElBQUksR0FBR2Isc0RBQU8sQ0FBQ1csR0FBRyxDQUFDLENBQUM7QUFDMUIsTUFBTUcsRUFBRSxHQUFHYixnRUFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQztBQUM3QixNQUFNSSxPQUFPLEdBQUdiLDREQUFVLENBQUNTLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcXVpY2stc3RhcnQtdHlwZXNjcmlwdC8uL2NvbmZpZy9maXJlYmFzZS50cz9jOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURBNDNyWjFpQXpWUnNMcExvY0drT1dNUWFWSDRFSzlxUVwiLFxuICAgIGF1dGhEb21haW46IFwicGF0aWVudHMtcXIuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcInBhdGllbnRzLXFyXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwYXRpZW50cy1xci5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIyMzc1NDA5MDgyM1wiLFxuICAgIGFwcElkOiBcIjE6MjIzNzU0MDkwODIzOndlYjpjMDgxOTMyMDk3ZTEyN2RmZTk3NDYyXCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTM2RFZWSllOV0ZcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxubGV0IGFwcCA9IGdldEFwcHMoKS5sZW5ndGggPT09IDAgPyBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGdldEFwcHMoKVswXTtcbi8vZXhwb3J0IGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOyJdLCJuYW1lcyI6WyJnZXRBcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwibGVuZ3RoIiwiYXV0aCIsImRiIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./context/UserContext.tsx":
/*!*********************************!*\
  !*** ./context/UserContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\nconst UserProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, async (authUser)=>{\n            if (authUser) {\n                const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", authUser.uid));\n                if (userDoc.exists()) {\n                    const userData = {\n                        ...authUser,\n                        ...userDoc.data()\n                    };\n                    setUser(userData);\n                    sessionStorage.setItem(\"user\", JSON.stringify(userData));\n                }\n            } else {\n                setUser(null);\n                sessionStorage.removeItem(\"user\");\n            }\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const login = async (email, password)=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password);\n            const authUser = userCredential.user;\n            const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", authUser.uid));\n            if (userDoc.exists()) {\n                const userData = {\n                    ...authUser,\n                    ...userDoc.data()\n                };\n                sessionStorage.setItem(\"user\", JSON.stringify(userData));\n                setUser(userData);\n                console.log(userData);\n                return userData;\n            } else {\n                throw new Error(\"User data not found\");\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            throw error; // Re-throw the error to handle it in the component\n        }\n    };\n    const logout = async ()=>{\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n            sessionStorage.removeItem(\"user\");\n            setUser(null);\n            router.push(\"/signin\"); // Redirect to the sign-in page\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n        }\n    };\n    const value = {\n        user,\n        login,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\patientcare-main\\\\context\\\\UserContext.tsx\",\n        lineNumber: 67,\n        columnNumber: 12\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1sQyxzREFBTyxDQUFDSSxrREFBSSxDQUFDLENBQUM7WUFDcEJpQixjQUFjLENBQUNJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2RDLE1BQU0sQ0FBQ3NCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFFLCtCQUErQjtRQUM1RCxFQUFFLE9BQU9GLEtBQUssRUFBRTtZQUNaSCxPQUFPLENBQUNHLEtBQUssQ0FBQyxvQkFBb0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNRyxLQUFLLEdBQUc7UUFBRXpCLElBQUk7UUFBRWUsS0FBSztRQUFFUSxNQUFNO0tBQUU7SUFFckMscUJBQU8sOERBQUMzQixXQUFXLENBQUM4QixRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFBRzFCLFFBQVE7Ozs7O2lCQUF3QixDQUFDO0FBQ2pGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXF1aWNrLXN0YXJ0LXR5cGVzY3JpcHQvLi9jb250ZXh0L1VzZXJDb250ZXh0LnRzeD9mNWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9jb25maWcvZmlyZWJhc2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCkgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBhc3luYyAoYXV0aFVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChhdXRoVXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCAndXNlcnMnLCBhdXRoVXNlci51aWQpKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlckRvYy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgLi4uYXV0aFVzZXIsIC4uLnVzZXJEb2MuZGF0YSgpIH07XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhVc2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCAndXNlcnMnLCBhdXRoVXNlci51aWQpKTtcbiAgICAgICAgICAgIGlmICh1c2VyRG9jLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7IC4uLmF1dGhVc2VyLCAuLi51c2VyRG9jLmRhdGEoKSB9O1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgZGF0YSBub3QgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9nZ2luZyBpbjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7ICAvLyBSZS10aHJvdyB0aGUgZXJyb3IgdG8gaGFuZGxlIGl0IGluIHRoZSBjb21wb25lbnRcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJyk7ICAvLyBSZWRpcmVjdCB0byB0aGUgc2lnbi1pbiBwYWdlXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9nZ2luZyBvdXQ6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2YWx1ZSA9IHsgdXNlciwgbG9naW4sIGxvZ291dCB9O1xuXG4gICAgcmV0dXJuIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPjtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRvYyIsImdldERvYyIsImF1dGgiLCJkYiIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwidXNlVXNlciIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJ1bnN1YnNjcmliZSIsImF1dGhVc2VyIiwidXNlckRvYyIsInVpZCIsImV4aXN0cyIsInVzZXJEYXRhIiwiZGF0YSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJlcnJvciIsImxvZ291dCIsInB1c2giLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/UserContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles/global.css */ \"./public/styles/global.css\");\n/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/_app.tsx\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\React\\\\patientcare-main\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\patientcare-main\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjtBQUNqQjtBQUEwQjtBQUVXO0FBQ2U7QUFFcEQsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDL0MscUJBQ0ksOERBQUNILDhEQUFZO2tCQUNULDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2pCLENBQ2pCO0FBQ04sQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1xdWljay1zdGFydC10eXBlc2NyaXB0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLnRzeFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQge1VzZXJQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVXNlclByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./public/styles/global.css":
/*!**********************************!*\
  !*** ./public/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();