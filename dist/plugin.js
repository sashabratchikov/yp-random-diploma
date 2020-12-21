/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/plugin.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/plugin/constants/caches.ts":
/*!****************************************!*\
  !*** ./src/plugin/constants/caches.ts ***!
  \****************************************/
/*! exports provided: componentsCache, blocksCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentsCache", function() { return componentsCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocksCache", function() { return blocksCache; });
const componentsCache = new Map();
const blocksCache = new Map();


/***/ }),

/***/ "./src/plugin/constants/nodes.ts":
/*!***************************************!*\
  !*** ./src/plugin/constants/nodes.ts ***!
  \***************************************/
/*! exports provided: FRAME_TYPE, GROUP_TYPE, COMPONENT_TYPE, INSTANCE_TYPE, COMPONENTS, BLOCKS, TARGET, LAYOUT, THEMES, IGNORE, SEPARATOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAME_TYPE", function() { return FRAME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_TYPE", function() { return GROUP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_TYPE", function() { return COMPONENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTANCE_TYPE", function() { return INSTANCE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS", function() { return BLOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGET", function() { return TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT", function() { return LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMES", function() { return THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE", function() { return IGNORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEPARATOR", function() { return SEPARATOR; });
// types
const FRAME_TYPE = 'FRAME';
const GROUP_TYPE = 'GROUP';
const COMPONENT_TYPE = 'COMPONENT';
const INSTANCE_TYPE = 'INSTANCE';
// names
const COMPONENTS = 'COMPONENTS';
const BLOCKS = 'BLOCKS';
const TARGET = 'RESULT';
const LAYOUT = 'LAYOUT';
const THEMES = 'THEMES';
// ignore names
const IGNORE = 'IGNORE';
// others
const SEPARATOR = '__';


/***/ }),

/***/ "./src/plugin/constants/result-items.ts":
/*!**********************************************!*\
  !*** ./src/plugin/constants/result-items.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _caches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caches */ "./src/plugin/constants/caches.ts");

const items = [
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_LANDING',
        layoutFrameName: 'LAYOUT_LANDING',
        resultFrameName: 'RESULT_LANDING',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS',
        layoutFrameName: 'LAYOUT_MAIN',
        resultFrameName: 'RESULT_MAIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS',
        layoutFrameName: 'LAYOUT_SAVED',
        resultFrameName: 'RESULT_SAVED',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS',
        layoutFrameName: 'LAYOUT_PROFILE',
        resultFrameName: 'RESULT_PROFILE',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS',
        layoutFrameName: 'LAYOUT_REGISTER',
        resultFrameName: 'RESULT_REGISTER',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS',
        layoutFrameName: 'LAYOUT_LOGIN',
        resultFrameName: 'RESULT_LOGIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS',
        layoutFrameName: 'LAYOUT_404',
        resultFrameName: 'RESULT_404',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 1280,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768_LANDING',
        layoutFrameName: 'LAYOUT_768_LANDING',
        resultFrameName: 'RESULT_768_LANDING',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_MAIN',
        resultFrameName: 'RESULT_768_MAIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_SAVED',
        resultFrameName: 'RESULT_768_SAVED',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_PROFILE',
        resultFrameName: 'RESULT_768_PROFILE',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_REGISTER',
        resultFrameName: 'RESULT_768_REGISTER',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_LOGIN',
        resultFrameName: 'RESULT_768_LOGIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_404',
        resultFrameName: 'RESULT_768_404',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_768',
        layoutFrameName: 'LAYOUT_768_MENU',
        resultFrameName: 'RESULT_768_MENU',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 768,
        preserveHeight: true
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320_LANDING',
        layoutFrameName: 'LAYOUT_320_LANDING',
        resultFrameName: 'RESULT_320_LANDING',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_MAIN',
        resultFrameName: 'RESULT_320_MAIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_SAVED',
        resultFrameName: 'RESULT_320_SAVED',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_PROFILE',
        resultFrameName: 'RESULT_320_PROFILE',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_REGISTER',
        resultFrameName: 'RESULT_320_REGISTER',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_LOGIN',
        resultFrameName: 'RESULT_320_LOGIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_LOGIN',
        resultFrameName: 'RESULT_320_LOGIN',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_404',
        resultFrameName: 'RESULT_320_404',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: false
    },
    {
        componentsFrameName: 'COMPONENTS',
        blocksFrameName: 'BLOCKS_320',
        layoutFrameName: 'LAYOUT_320_MENU',
        resultFrameName: 'RESULT_320_MENU',
        componentsCache: _caches__WEBPACK_IMPORTED_MODULE_0__["componentsCache"],
        blocksCache: _caches__WEBPACK_IMPORTED_MODULE_0__["blocksCache"],
        width: 320,
        preserveHeight: true
    },
];
/* harmony default export */ __webpack_exports__["default"] = (items);


/***/ }),

/***/ "./src/plugin/modules/apply-random-theme.ts":
/*!**************************************************!*\
  !*** ./src/plugin/modules/apply-random-theme.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_generate_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/generate-themes */ "./src/plugin/utils/generate-themes.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/plugin/utils/utils.ts");
/* harmony import */ var _constants_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/nodes */ "./src/plugin/constants/nodes.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const applyRandomTheme = (sourcePage, resultPage) => __awaiter(void 0, void 0, void 0, function* () {
    const theme = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomElement"])(yield Object(_utils_generate_themes__WEBPACK_IMPORTED_MODULE_0__["default"])(sourcePage));
    const textNodes = [];
    const vectorNodes = [];
    if (theme.FONTS) {
        yield Promise.all(Object.keys(theme.FONTS).map((key) => {
            return figma.loadFontAsync(Object.assign({}, theme.FONTS[key]));
        }));
    }
    resultPage
        .findAll((node) => node.type === 'TEXT')
        .filter(({ name }) => name.includes(_constants_nodes__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR"]))
        .forEach((node) => textNodes.push(node));
    resultPage
        .findAll((node) => node.type === 'RECTANGLE' || node.type === 'VECTOR')
        .filter(node => node.name.includes(_constants_nodes__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR"]))
        .forEach((node) => vectorNodes.push(node));
    // set fonts and font colors
    textNodes.forEach((node) => {
        const types = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toObject"])(node.name.split(_constants_nodes__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR"])[1]);
        if (types.COLOR && theme.COLORS[types.COLOR]) {
            if (node.fills && node.fills[0]) {
                node.fills = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getNextFills"])(node, theme.COLORS[types.COLOR]);
            }
            if (node.strokes && node.strokes.length) {
                node.strokes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getNextStrokes"])(node, theme.COLORS[types.COLOR]);
            }
        }
        if (types.FONT)
            node.fontName = Object.assign({}, theme.FONTS[types.FONT]);
    });
    // set shape colors
    vectorNodes.forEach((node) => {
        const types = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toObject"])(node.name.split(_constants_nodes__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR"])[1]);
        if (types.COLOR && theme.COLORS[types.COLOR]) {
            if (node.fills && node.fills[0] && node.fills[0].type !== 'IMAGE') {
                node.fills = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getNextFills"])(node, theme.COLORS[types.COLOR]);
            }
            if (node.strokes && node.strokes.length) {
                node.strokes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getNextStrokes"])(node, theme.COLORS[types.COLOR]);
            }
        }
    });
    // set bg color
    resultPage.children.forEach((frame) => {
        if (frame.fills && frame.fills[0]) {
            frame.fills = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getNextFills"])(frame, theme.BG_COLORS.PRIMARY);
        }
    });
});
/* harmony default export */ __webpack_exports__["default"] = (applyRandomTheme);


/***/ }),

/***/ "./src/plugin/modules/generate-layout.ts":
/*!***********************************************!*\
  !*** ./src/plugin/modules/generate-layout.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/nodes */ "./src/plugin/constants/nodes.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/plugin/utils/utils.ts");


const findFrame = (node, frameName) => node.type === _constants_nodes__WEBPACK_IMPORTED_MODULE_0__["FRAME_TYPE"] && node.name === frameName;
const findComponent = (node, name) => node.type === _constants_nodes__WEBPACK_IMPORTED_MODULE_0__["COMPONENT_TYPE"] && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(node.name) === Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(name);
const findInstanceOrGroup = (node, name) => (node.type === _constants_nodes__WEBPACK_IMPORTED_MODULE_0__["INSTANCE_TYPE"] || node.type === _constants_nodes__WEBPACK_IMPORTED_MODULE_0__["GROUP_TYPE"]) && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(node.name) === Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(name);
const fillBlockWithComponents = ({ block, components: componentsLibrary, componentsCache, }) => {
    const components = block.children.slice().sort((a, b) => b.y - a.y);
    // TODO: find out a bug
    // const components = block.findAll(node => node.type === INSTANCE_TYPE)
    components.forEach((component) => {
        const { x, y, name } = component;
        const cachedCompoennt = componentsCache.get(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(component.name));
        const randomComponent = cachedCompoennt || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomElement"])(componentsLibrary.findChildren(node => findComponent(node, name)));
        if (!randomComponent)
            return;
        const instance = randomComponent.createInstance();
        instance.x = x;
        instance.y = y;
        componentsCache.set(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(component.name), randomComponent);
        component.remove();
        block.appendChild(instance);
    });
    return block;
};
const fillLayoutWithBlocks = ({ layout, result, blocks, components, blocksCache, componentsCache, }) => {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["clearNode"])(result);
    const names = layout.children
        .slice()
        .sort((a, b) => b.y - a.y)
        .reduceRight((res, component) => {
        res.push(component.name);
        return res;
    }, []);
    let height = 0;
    names.forEach((name) => {
        const cachedBlock = blocksCache.get(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(name));
        let block = (cachedBlock
            || (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isLinked"])(name) && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getComponentByIdAndName"])(blocks, name, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getLinkedCachedId"])(name, blocksCache)))
            || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomElement"])(blocks.findChildren(node => findComponent(node, name))));
        if (block && !cachedBlock && components) {
            block = fillBlockWithComponents({ block, components, componentsCache });
            blocksCache.set(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getName"])(name), block);
        }
        if (!block) {
            block = layout.findChild(node => findInstanceOrGroup(node, name));
            block = fillBlockWithComponents({ block, components, componentsCache });
        }
        block = block.clone();
        block.y = 0;
        block.y = height;
        result.appendChild(block);
        height += block.height;
    });
    return height;
};
const generateLayout = ({ componentsFrameName, blocksFrameName, layoutFrameName, resultFrameName, componentsCache, blocksCache, width, preserveHeight, sourcePage, resultPage, previousLayout }) => {
    const components = sourcePage.findOne((node) => findFrame(node, componentsFrameName));
    const blocks = sourcePage.findOne((node) => findFrame(node, blocksFrameName));
    const layout = sourcePage.findOne((node) => findFrame(node, layoutFrameName));
    let result = resultPage.findOne((node) => findFrame(node, resultFrameName));
    if (!components || !blocks || !layout) {
        figma.notify('Кажется, вы сделали что-то со страницей SOURCE. Попробуйте импортировать файл заново.');
        return;
    }
    if (!result) {
        result = figma.createFrame();
        result.name = resultFrameName;
        if (previousLayout) {
            const prevResult = resultPage.findOne(node => findFrame(node, previousLayout.resultFrameName));
            result.x = prevResult.x + prevResult.width + 100;
            result.y = prevResult.y;
        }
    }
    const height = fillLayoutWithBlocks({
        layout,
        result,
        blocks,
        components,
        componentsCache,
        blocksCache,
    });
    result.resizeWithoutConstraints(width, preserveHeight ? layout.height : height);
};
const generateLayouts = (items, sourcePage, resultPage) => {
    if (figma.currentPage !== resultPage) {
        figma.notify('Чтобы сгенерировать диплом, переключитесь на страницу RESULT');
        return false;
    }
    items.forEach((item, idx) => generateLayout(Object.assign(Object.assign({}, item), { sourcePage, resultPage, previousLayout: idx !== 0 ? items[idx - 1] : null })));
    return true;
};
/* harmony default export */ __webpack_exports__["default"] = (generateLayouts);


/***/ }),

/***/ "./src/plugin/plugin.ts":
/*!******************************!*\
  !*** ./src/plugin/plugin.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_generate_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generate-layout */ "./src/plugin/modules/generate-layout.ts");
/* harmony import */ var _modules_apply_random_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apply-random-theme */ "./src/plugin/modules/apply-random-theme.ts");
/* harmony import */ var _constants_caches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/caches */ "./src/plugin/constants/caches.ts");
/* harmony import */ var _constants_result_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/result-items */ "./src/plugin/constants/result-items.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const showUI = () => __awaiter(void 0, void 0, void 0, function* () {
    const isGenerated = yield figma.clientStorage.getAsync('isGenerated');
    if (isGenerated) {
        figma.closePlugin('Диплом уже был сгенерирован');
        return;
    }
    figma.showUI(__html__, { width: 380, height: 324 });
    const sourcePage = figma.root.findChild(node => node.name === 'SOURCE');
    const resultPage = figma.root.findChild(node => node.name === 'RESULT');
    figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
        if (msg.type === 'randomize') {
            const isGenerated = Object(_modules_generate_layout__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_result_items__WEBPACK_IMPORTED_MODULE_3__["default"], sourcePage, resultPage);
            yield Object(_modules_apply_random_theme__WEBPACK_IMPORTED_MODULE_1__["default"])(sourcePage, resultPage);
            // figma.viewport.scrollAndZoomIntoView(resultPage.children)
            _constants_caches__WEBPACK_IMPORTED_MODULE_2__["componentsCache"].clear();
            _constants_caches__WEBPACK_IMPORTED_MODULE_2__["blocksCache"].clear();
            if (isGenerated)
                figma.notify('Диплом сгенерирован');
        }
        if (msg.type === 'ready') {
            yield figma.clientStorage.setAsync('isGenerated', true);
            figma.closePlugin('Диплом сгенерирован');
        }
    });
});
showUI();


/***/ }),

/***/ "./src/plugin/utils/generate-themes.ts":
/*!*********************************************!*\
  !*** ./src/plugin/utils/generate-themes.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/nodes */ "./src/plugin/constants/nodes.ts");

const colorGetter = node => node.fills[0].color;
const fontGetter = node => node.fontName;
const propertyGetters = {
    BG_COLORS: colorGetter,
    COLORS: colorGetter,
    FONTS: fontGetter,
};
const generateTheme = (node) => {
    const theme = {};
    Object.keys(propertyGetters).forEach(property => {
        if (!node.findOne(node => node.name === property))
            return;
        theme[property] = {};
        node
            .findOne(node => node.name === property)
            .children
            .forEach(node => {
            theme[property][node.name] = propertyGetters[property](node);
        });
    });
    return theme;
};
const generateThemes = (sourcePage) => {
    const themes = sourcePage
        .findOne((node) => node.type === _constants_nodes__WEBPACK_IMPORTED_MODULE_0__["FRAME_TYPE"] && node.name === _constants_nodes__WEBPACK_IMPORTED_MODULE_0__["THEMES"])
        .children;
    return themes.map(generateTheme);
};
/* harmony default export */ __webpack_exports__["default"] = (generateThemes);


/***/ }),

/***/ "./src/plugin/utils/utils.ts":
/*!***********************************!*\
  !*** ./src/plugin/utils/utils.ts ***!
  \***********************************/
/*! exports provided: cloneDeep, getNextFills, getNextStrokes, clearNode, getRandomElement, parse, getName, getProperties, isLinked, getComponentByIdAndName, getLinkedCachedId, toObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextFills", function() { return getNextFills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextStrokes", function() { return getNextStrokes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNode", function() { return clearNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElement", function() { return getRandomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinked", function() { return isLinked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentByIdAndName", function() { return getComponentByIdAndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkedCachedId", function() { return getLinkedCachedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
const cloneDeep = (val) => {
    const type = typeof val;
    const primitiveTypes = ['undefined', 'number', 'string', 'boolean'];
    if (val === null) {
        return null;
    }
    if (primitiveTypes.includes(type)) {
        return val;
    }
    if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => cloneDeep(x));
        }
        if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        let o = {};
        for (const key in val) {
            o[key] = cloneDeep(val[key]);
        }
        return o;
    }
    throw 'unknown';
};
const getNextFills = (node, color) => {
    const fills = cloneDeep(node.fills);
    fills[0].color = color;
    return fills;
};
const getNextStrokes = (node, color) => {
    const strokes = cloneDeep(node.strokes);
    strokes[0].color = color;
    return strokes;
};
const clearNode = (node) => {
    node.children.forEach(item => {
        item.remove();
    });
};
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const parse = (str, sep = ',', propSep = ':') => str ? str.split(sep).reduce((res, prop) => {
    const [key, value] = prop.split(propSep);
    res[key] = value;
    return res;
}, {}) : {};
const getName = (node, sep = '__') => typeof node === 'string' ? node.split(sep)[0] : node.name.split(sep)[0];
const getProperties = (node, sep = '__') => node && (typeof node === 'string' ? parse(node.split(sep)[1]) : parse(node.name.split(sep)[1]));
const isLinked = (node) => !!(getProperties(node).LINK && getProperties(node).ID);
const getComponentByIdAndName = (source, name, id) => source.findChild(node => getName(node.name) === getName(name) && getProperties(node).ID === id);
const getLinkedCachedId = (node, cache) => {
    const props = getProperties(cache.get(getProperties(node).LINK));
    return props ? props.ID : undefined;
};
const toObject = (str) => {
    return str.split(',').reduce((res, prop) => {
        const [key, value] = prop.split(':');
        res[key] = value;
        return res;
    }, {});
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb25zdGFudHMvY2FjaGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29uc3RhbnRzL25vZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29uc3RhbnRzL3Jlc3VsdC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL21vZHVsZXMvYXBwbHktcmFuZG9tLXRoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vbW9kdWxlcy9nZW5lcmF0ZS1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi91dGlscy9nZW5lcmF0ZS10aGVtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFPO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ087Ozs7Ozs7Ozs7Ozs7QUNkUDtBQUFBO0FBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FBQ3ZCLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QixRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FBQ3ZCLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QixRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FBQ3ZCLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QixRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FBQ3ZCLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QixRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FBQ3ZCLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QixRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FBQ3ZCLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QixRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWU7QUFDdkIsUUFBUSxnRUFBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlO0FB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Ozs7OztBQzdCOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUIiwiZmlsZSI6InBsdWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9wbHVnaW4udHNcIik7XG4iLCJleHBvcnQgY29uc3QgY29tcG9uZW50c0NhY2hlID0gbmV3IE1hcCgpO1xuZXhwb3J0IGNvbnN0IGJsb2Nrc0NhY2hlID0gbmV3IE1hcCgpO1xuIiwiLy8gdHlwZXNcbmV4cG9ydCBjb25zdCBGUkFNRV9UWVBFID0gJ0ZSQU1FJztcbmV4cG9ydCBjb25zdCBHUk9VUF9UWVBFID0gJ0dST1VQJztcbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9ICdDT01QT05FTlQnO1xuZXhwb3J0IGNvbnN0IElOU1RBTkNFX1RZUEUgPSAnSU5TVEFOQ0UnO1xuLy8gbmFtZXNcbmV4cG9ydCBjb25zdCBDT01QT05FTlRTID0gJ0NPTVBPTkVOVFMnO1xuZXhwb3J0IGNvbnN0IEJMT0NLUyA9ICdCTE9DS1MnO1xuZXhwb3J0IGNvbnN0IFRBUkdFVCA9ICdSRVNVTFQnO1xuZXhwb3J0IGNvbnN0IExBWU9VVCA9ICdMQVlPVVQnO1xuZXhwb3J0IGNvbnN0IFRIRU1FUyA9ICdUSEVNRVMnO1xuLy8gaWdub3JlIG5hbWVzXG5leHBvcnQgY29uc3QgSUdOT1JFID0gJ0lHTk9SRSc7XG4vLyBvdGhlcnNcbmV4cG9ydCBjb25zdCBTRVBBUkFUT1IgPSAnX18nO1xuIiwiaW1wb3J0IHsgY29tcG9uZW50c0NhY2hlLCBibG9ja3NDYWNoZSB9IGZyb20gJy4vY2FjaGVzJztcbmNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1NfTEFORElORycsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF9MQU5ESU5HJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUX0xBTkRJTkcnLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTJyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUX01BSU4nLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfTUFJTicsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAxMjgwLFxuICAgICAgICBwcmVzZXJ2ZUhlaWdodDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1MnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfU0FWRUQnLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfU0FWRUQnLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTJyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUX1BST0ZJTEUnLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfUFJPRklMRScsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAxMjgwLFxuICAgICAgICBwcmVzZXJ2ZUhlaWdodDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1MnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfUkVHSVNURVInLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfUkVHSVNURVInLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTJyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUX0xPR0lOJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUX0xPR0lOJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDEyODAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLUycsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF80MDQnLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfNDA0JyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDEyODAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLU183NjhfTEFORElORycsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF83NjhfTEFORElORycsXG4gICAgICAgIHJlc3VsdEZyYW1lTmFtZTogJ1JFU1VMVF83NjhfTEFORElORycsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiA3NjgsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLU183NjgnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfNzY4X01BSU4nLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfNzY4X01BSU4nLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogNzY4LFxuICAgICAgICBwcmVzZXJ2ZUhlaWdodDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1NfNzY4JyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUXzc2OF9TQVZFRCcsXG4gICAgICAgIHJlc3VsdEZyYW1lTmFtZTogJ1JFU1VMVF83NjhfU0FWRUQnLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogNzY4LFxuICAgICAgICBwcmVzZXJ2ZUhlaWdodDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1NfNzY4JyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUXzc2OF9QUk9GSUxFJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzc2OF9QUk9GSUxFJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDc2OCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTXzc2OCcsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF83NjhfUkVHSVNURVInLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfNzY4X1JFR0lTVEVSJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDc2OCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTXzc2OCcsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF83NjhfTE9HSU4nLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfNzY4X0xPR0lOJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDc2OCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTXzc2OCcsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF83NjhfNDA0JyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzc2OF80MDQnLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogNzY4LFxuICAgICAgICBwcmVzZXJ2ZUhlaWdodDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1NfNzY4JyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUXzc2OF9NRU5VJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzc2OF9NRU5VJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDc2OCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1NfMzIwX0xBTkRJTkcnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfMzIwX0xBTkRJTkcnLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfMzIwX0xBTkRJTkcnLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgICAgICB3aWR0aDogMzIwLFxuICAgICAgICBwcmVzZXJ2ZUhlaWdodDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50c0ZyYW1lTmFtZTogJ0NPTVBPTkVOVFMnLFxuICAgICAgICBibG9ja3NGcmFtZU5hbWU6ICdCTE9DS1NfMzIwJyxcbiAgICAgICAgbGF5b3V0RnJhbWVOYW1lOiAnTEFZT1VUXzMyMF9NQUlOJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzMyMF9NQUlOJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTXzMyMCcsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF8zMjBfU0FWRUQnLFxuICAgICAgICByZXN1bHRGcmFtZU5hbWU6ICdSRVNVTFRfMzIwX1NBVkVEJyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTXzMyMCcsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF8zMjBfUFJPRklMRScsXG4gICAgICAgIHJlc3VsdEZyYW1lTmFtZTogJ1JFU1VMVF8zMjBfUFJPRklMRScsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLU18zMjAnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfMzIwX1JFR0lTVEVSJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzMyMF9SRUdJU1RFUicsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLU18zMjAnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfMzIwX0xPR0lOJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzMyMF9MT0dJTicsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLU18zMjAnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfMzIwX0xPR0lOJyxcbiAgICAgICAgcmVzdWx0RnJhbWVOYW1lOiAnUkVTVUxUXzMyMF9MT0dJTicsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnRzRnJhbWVOYW1lOiAnQ09NUE9ORU5UUycsXG4gICAgICAgIGJsb2Nrc0ZyYW1lTmFtZTogJ0JMT0NLU18zMjAnLFxuICAgICAgICBsYXlvdXRGcmFtZU5hbWU6ICdMQVlPVVRfMzIwXzQwNCcsXG4gICAgICAgIHJlc3VsdEZyYW1lTmFtZTogJ1JFU1VMVF8zMjBfNDA0JyxcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLFxuICAgICAgICBibG9ja3NDYWNoZSxcbiAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgcHJlc2VydmVIZWlnaHQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNGcmFtZU5hbWU6ICdDT01QT05FTlRTJyxcbiAgICAgICAgYmxvY2tzRnJhbWVOYW1lOiAnQkxPQ0tTXzMyMCcsXG4gICAgICAgIGxheW91dEZyYW1lTmFtZTogJ0xBWU9VVF8zMjBfTUVOVScsXG4gICAgICAgIHJlc3VsdEZyYW1lTmFtZTogJ1JFU1VMVF8zMjBfTUVOVScsXG4gICAgICAgIGNvbXBvbmVudHNDYWNoZSxcbiAgICAgICAgYmxvY2tzQ2FjaGUsXG4gICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgIHByZXNlcnZlSGVpZ2h0OiB0cnVlXG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBpdGVtcztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGdlbmVyYXRlVGhlbWVzIGZyb20gJy4uL3V0aWxzL2dlbmVyYXRlLXRoZW1lcyc7XG5pbXBvcnQgeyBnZXROZXh0RmlsbHMsIGdldE5leHRTdHJva2VzLCBnZXRSYW5kb21FbGVtZW50LCB0b09iamVjdCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IFNFUEFSQVRPUiB9IGZyb20gJy4uL2NvbnN0YW50cy9ub2Rlcyc7XG5jb25zdCBhcHBseVJhbmRvbVRoZW1lID0gKHNvdXJjZVBhZ2UsIHJlc3VsdFBhZ2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRoZW1lID0gZ2V0UmFuZG9tRWxlbWVudCh5aWVsZCBnZW5lcmF0ZVRoZW1lcyhzb3VyY2VQYWdlKSk7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW107XG4gICAgY29uc3QgdmVjdG9yTm9kZXMgPSBbXTtcbiAgICBpZiAodGhlbWUuRk9OVFMpIHtcbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoT2JqZWN0LmtleXModGhlbWUuRk9OVFMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlnbWEubG9hZEZvbnRBc3luYyhPYmplY3QuYXNzaWduKHt9LCB0aGVtZS5GT05UU1trZXldKSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmVzdWx0UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS50eXBlID09PSAnVEVYVCcpXG4gICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiBuYW1lLmluY2x1ZGVzKFNFUEFSQVRPUikpXG4gICAgICAgIC5mb3JFYWNoKChub2RlKSA9PiB0ZXh0Tm9kZXMucHVzaChub2RlKSk7XG4gICAgcmVzdWx0UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS50eXBlID09PSAnUkVDVEFOR0xFJyB8fCBub2RlLnR5cGUgPT09ICdWRUNUT1InKVxuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5uYW1lLmluY2x1ZGVzKFNFUEFSQVRPUikpXG4gICAgICAgIC5mb3JFYWNoKChub2RlKSA9PiB2ZWN0b3JOb2Rlcy5wdXNoKG5vZGUpKTtcbiAgICAvLyBzZXQgZm9udHMgYW5kIGZvbnQgY29sb3JzXG4gICAgdGV4dE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSB0b09iamVjdChub2RlLm5hbWUuc3BsaXQoU0VQQVJBVE9SKVsxXSk7XG4gICAgICAgIGlmICh0eXBlcy5DT0xPUiAmJiB0aGVtZS5DT0xPUlNbdHlwZXMuQ09MT1JdKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5maWxscyAmJiBub2RlLmZpbGxzWzBdKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IGdldE5leHRGaWxscyhub2RlLCB0aGVtZS5DT0xPUlNbdHlwZXMuQ09MT1JdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZXMgJiYgbm9kZS5zdHJva2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IGdldE5leHRTdHJva2VzKG5vZGUsIHRoZW1lLkNPTE9SU1t0eXBlcy5DT0xPUl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlcy5GT05UKVxuICAgICAgICAgICAgbm9kZS5mb250TmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoZW1lLkZPTlRTW3R5cGVzLkZPTlRdKTtcbiAgICB9KTtcbiAgICAvLyBzZXQgc2hhcGUgY29sb3JzXG4gICAgdmVjdG9yTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlcyA9IHRvT2JqZWN0KG5vZGUubmFtZS5zcGxpdChTRVBBUkFUT1IpWzFdKTtcbiAgICAgICAgaWYgKHR5cGVzLkNPTE9SICYmIHRoZW1lLkNPTE9SU1t0eXBlcy5DT0xPUl0pIHtcbiAgICAgICAgICAgIGlmIChub2RlLmZpbGxzICYmIG5vZGUuZmlsbHNbMF0gJiYgbm9kZS5maWxsc1swXS50eXBlICE9PSAnSU1BR0UnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IGdldE5leHRGaWxscyhub2RlLCB0aGVtZS5DT0xPUlNbdHlwZXMuQ09MT1JdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZXMgJiYgbm9kZS5zdHJva2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IGdldE5leHRTdHJva2VzKG5vZGUsIHRoZW1lLkNPTE9SU1t0eXBlcy5DT0xPUl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gc2V0IGJnIGNvbG9yXG4gICAgcmVzdWx0UGFnZS5jaGlsZHJlbi5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZnJhbWUuZmlsbHMgJiYgZnJhbWUuZmlsbHNbMF0pIHtcbiAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gZ2V0TmV4dEZpbGxzKGZyYW1lLCB0aGVtZS5CR19DT0xPUlMuUFJJTUFSWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgYXBwbHlSYW5kb21UaGVtZTtcbiIsImltcG9ydCB7IEZSQU1FX1RZUEUsIENPTVBPTkVOVF9UWVBFLCBJTlNUQU5DRV9UWVBFLCBHUk9VUF9UWVBFIH0gZnJvbSAnLi4vY29uc3RhbnRzL25vZGVzJztcbmltcG9ydCB7IGdldFJhbmRvbUVsZW1lbnQsIGNsZWFyTm9kZSwgZ2V0TmFtZSwgZ2V0TGlua2VkQ2FjaGVkSWQsIGdldENvbXBvbmVudEJ5SWRBbmROYW1lLCBpc0xpbmtlZCwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5jb25zdCBmaW5kRnJhbWUgPSAobm9kZSwgZnJhbWVOYW1lKSA9PiBub2RlLnR5cGUgPT09IEZSQU1FX1RZUEUgJiYgbm9kZS5uYW1lID09PSBmcmFtZU5hbWU7XG5jb25zdCBmaW5kQ29tcG9uZW50ID0gKG5vZGUsIG5hbWUpID0+IG5vZGUudHlwZSA9PT0gQ09NUE9ORU5UX1RZUEUgJiYgZ2V0TmFtZShub2RlLm5hbWUpID09PSBnZXROYW1lKG5hbWUpO1xuY29uc3QgZmluZEluc3RhbmNlT3JHcm91cCA9IChub2RlLCBuYW1lKSA9PiAobm9kZS50eXBlID09PSBJTlNUQU5DRV9UWVBFIHx8IG5vZGUudHlwZSA9PT0gR1JPVVBfVFlQRSkgJiYgZ2V0TmFtZShub2RlLm5hbWUpID09PSBnZXROYW1lKG5hbWUpO1xuY29uc3QgZmlsbEJsb2NrV2l0aENvbXBvbmVudHMgPSAoeyBibG9jaywgY29tcG9uZW50czogY29tcG9uZW50c0xpYnJhcnksIGNvbXBvbmVudHNDYWNoZSwgfSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBibG9jay5jaGlsZHJlbi5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGIueSAtIGEueSk7XG4gICAgLy8gVE9ETzogZmluZCBvdXQgYSBidWdcbiAgICAvLyBjb25zdCBjb21wb25lbnRzID0gYmxvY2suZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gSU5TVEFOQ0VfVFlQRSlcbiAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHgsIHksIG5hbWUgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgY2FjaGVkQ29tcG9lbm50ID0gY29tcG9uZW50c0NhY2hlLmdldChnZXROYW1lKGNvbXBvbmVudC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbXBvbmVudCA9IGNhY2hlZENvbXBvZW5udCB8fCBnZXRSYW5kb21FbGVtZW50KGNvbXBvbmVudHNMaWJyYXJ5LmZpbmRDaGlsZHJlbihub2RlID0+IGZpbmRDb21wb25lbnQobm9kZSwgbmFtZSkpKTtcbiAgICAgICAgaWYgKCFyYW5kb21Db21wb25lbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gcmFuZG9tQ29tcG9uZW50LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgIGluc3RhbmNlLnggPSB4O1xuICAgICAgICBpbnN0YW5jZS55ID0geTtcbiAgICAgICAgY29tcG9uZW50c0NhY2hlLnNldChnZXROYW1lKGNvbXBvbmVudC5uYW1lKSwgcmFuZG9tQ29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50LnJlbW92ZSgpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbnN0YW5jZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJsb2NrO1xufTtcbmNvbnN0IGZpbGxMYXlvdXRXaXRoQmxvY2tzID0gKHsgbGF5b3V0LCByZXN1bHQsIGJsb2NrcywgY29tcG9uZW50cywgYmxvY2tzQ2FjaGUsIGNvbXBvbmVudHNDYWNoZSwgfSkgPT4ge1xuICAgIGNsZWFyTm9kZShyZXN1bHQpO1xuICAgIGNvbnN0IG5hbWVzID0gbGF5b3V0LmNoaWxkcmVuXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnkgLSBhLnkpXG4gICAgICAgIC5yZWR1Y2VSaWdodCgocmVzLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgcmVzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIFtdKTtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlZEJsb2NrID0gYmxvY2tzQ2FjaGUuZ2V0KGdldE5hbWUobmFtZSkpO1xuICAgICAgICBsZXQgYmxvY2sgPSAoY2FjaGVkQmxvY2tcbiAgICAgICAgICAgIHx8IChpc0xpbmtlZChuYW1lKSAmJiBnZXRDb21wb25lbnRCeUlkQW5kTmFtZShibG9ja3MsIG5hbWUsIGdldExpbmtlZENhY2hlZElkKG5hbWUsIGJsb2Nrc0NhY2hlKSkpXG4gICAgICAgICAgICB8fCBnZXRSYW5kb21FbGVtZW50KGJsb2Nrcy5maW5kQ2hpbGRyZW4obm9kZSA9PiBmaW5kQ29tcG9uZW50KG5vZGUsIG5hbWUpKSkpO1xuICAgICAgICBpZiAoYmxvY2sgJiYgIWNhY2hlZEJsb2NrICYmIGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGJsb2NrID0gZmlsbEJsb2NrV2l0aENvbXBvbmVudHMoeyBibG9jaywgY29tcG9uZW50cywgY29tcG9uZW50c0NhY2hlIH0pO1xuICAgICAgICAgICAgYmxvY2tzQ2FjaGUuc2V0KGdldE5hbWUobmFtZSksIGJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGxheW91dC5maW5kQ2hpbGQobm9kZSA9PiBmaW5kSW5zdGFuY2VPckdyb3VwKG5vZGUsIG5hbWUpKTtcbiAgICAgICAgICAgIGJsb2NrID0gZmlsbEJsb2NrV2l0aENvbXBvbmVudHMoeyBibG9jaywgY29tcG9uZW50cywgY29tcG9uZW50c0NhY2hlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrID0gYmxvY2suY2xvbmUoKTtcbiAgICAgICAgYmxvY2sueSA9IDA7XG4gICAgICAgIGJsb2NrLnkgPSBoZWlnaHQ7XG4gICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICAgIGhlaWdodCArPSBibG9jay5oZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhlaWdodDtcbn07XG5jb25zdCBnZW5lcmF0ZUxheW91dCA9ICh7IGNvbXBvbmVudHNGcmFtZU5hbWUsIGJsb2Nrc0ZyYW1lTmFtZSwgbGF5b3V0RnJhbWVOYW1lLCByZXN1bHRGcmFtZU5hbWUsIGNvbXBvbmVudHNDYWNoZSwgYmxvY2tzQ2FjaGUsIHdpZHRoLCBwcmVzZXJ2ZUhlaWdodCwgc291cmNlUGFnZSwgcmVzdWx0UGFnZSwgcHJldmlvdXNMYXlvdXQgfSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBzb3VyY2VQYWdlLmZpbmRPbmUoKG5vZGUpID0+IGZpbmRGcmFtZShub2RlLCBjb21wb25lbnRzRnJhbWVOYW1lKSk7XG4gICAgY29uc3QgYmxvY2tzID0gc291cmNlUGFnZS5maW5kT25lKChub2RlKSA9PiBmaW5kRnJhbWUobm9kZSwgYmxvY2tzRnJhbWVOYW1lKSk7XG4gICAgY29uc3QgbGF5b3V0ID0gc291cmNlUGFnZS5maW5kT25lKChub2RlKSA9PiBmaW5kRnJhbWUobm9kZSwgbGF5b3V0RnJhbWVOYW1lKSk7XG4gICAgbGV0IHJlc3VsdCA9IHJlc3VsdFBhZ2UuZmluZE9uZSgobm9kZSkgPT4gZmluZEZyYW1lKG5vZGUsIHJlc3VsdEZyYW1lTmFtZSkpO1xuICAgIGlmICghY29tcG9uZW50cyB8fCAhYmxvY2tzIHx8ICFsYXlvdXQpIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KCfQmtCw0LbQtdGC0YHRjywg0LLRiyDRgdC00LXQu9Cw0LvQuCDRh9GC0L4t0YLQviDRgdC+INGB0YLRgNCw0L3QuNGG0LXQuSBTT1VSQ0UuINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC40LzQv9C+0YDRgtC40YDQvtCy0LDRgtGMINGE0LDQudC7INC30LDQvdC+0LLQvi4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICByZXN1bHQubmFtZSA9IHJlc3VsdEZyYW1lTmFtZTtcbiAgICAgICAgaWYgKHByZXZpb3VzTGF5b3V0KSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2UmVzdWx0ID0gcmVzdWx0UGFnZS5maW5kT25lKG5vZGUgPT4gZmluZEZyYW1lKG5vZGUsIHByZXZpb3VzTGF5b3V0LnJlc3VsdEZyYW1lTmFtZSkpO1xuICAgICAgICAgICAgcmVzdWx0LnggPSBwcmV2UmVzdWx0LnggKyBwcmV2UmVzdWx0LndpZHRoICsgMTAwO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBwcmV2UmVzdWx0Lnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGVpZ2h0ID0gZmlsbExheW91dFdpdGhCbG9ja3Moe1xuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYmxvY2tzLFxuICAgICAgICBjb21wb25lbnRzLFxuICAgICAgICBjb21wb25lbnRzQ2FjaGUsXG4gICAgICAgIGJsb2Nrc0NhY2hlLFxuICAgIH0pO1xuICAgIHJlc3VsdC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMod2lkdGgsIHByZXNlcnZlSGVpZ2h0ID8gbGF5b3V0LmhlaWdodCA6IGhlaWdodCk7XG59O1xuY29uc3QgZ2VuZXJhdGVMYXlvdXRzID0gKGl0ZW1zLCBzb3VyY2VQYWdlLCByZXN1bHRQYWdlKSA9PiB7XG4gICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlICE9PSByZXN1bHRQYWdlKSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeSgn0KfRgtC+0LHRiyDRgdCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQtNC40L/Qu9C+0LwsINC/0LXRgNC10LrQu9GO0YfQuNGC0LXRgdGMINC90LAg0YHRgtGA0LDQvdC40YbRgyBSRVNVTFQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IGdlbmVyYXRlTGF5b3V0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSksIHsgc291cmNlUGFnZSwgcmVzdWx0UGFnZSwgcHJldmlvdXNMYXlvdXQ6IGlkeCAhPT0gMCA/IGl0ZW1zW2lkeCAtIDFdIDogbnVsbCB9KSkpO1xuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTGF5b3V0cztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGdlbmVyYXRlTGF5b3V0cyBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGUtbGF5b3V0JztcbmltcG9ydCBhcHBseVJhbmRvbVRoZW1lIGZyb20gJy4vbW9kdWxlcy9hcHBseS1yYW5kb20tdGhlbWUnO1xuaW1wb3J0IHsgY29tcG9uZW50c0NhY2hlLCBibG9ja3NDYWNoZSB9IGZyb20gJy4vY29uc3RhbnRzL2NhY2hlcyc7XG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9jb25zdGFudHMvcmVzdWx0LWl0ZW1zJztcbmNvbnN0IHNob3dVSSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGlzR2VuZXJhdGVkID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYygnaXNHZW5lcmF0ZWQnKTtcbiAgICBpZiAoaXNHZW5lcmF0ZWQpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oJ9CU0LjQv9C70L7QvCDRg9C20LUg0LHRi9C7INGB0LPQtdC90LXRgNC40YDQvtCy0LDQvScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzgwLCBoZWlnaHQ6IDMyNCB9KTtcbiAgICBjb25zdCBzb3VyY2VQYWdlID0gZmlnbWEucm9vdC5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT09ICdTT1VSQ0UnKTtcbiAgICBjb25zdCByZXN1bHRQYWdlID0gZmlnbWEucm9vdC5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT09ICdSRVNVTFQnKTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAncmFuZG9taXplJykge1xuICAgICAgICAgICAgY29uc3QgaXNHZW5lcmF0ZWQgPSBnZW5lcmF0ZUxheW91dHMoaXRlbXMsIHNvdXJjZVBhZ2UsIHJlc3VsdFBhZ2UpO1xuICAgICAgICAgICAgeWllbGQgYXBwbHlSYW5kb21UaGVtZShzb3VyY2VQYWdlLCByZXN1bHRQYWdlKTtcbiAgICAgICAgICAgIC8vIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhyZXN1bHRQYWdlLmNoaWxkcmVuKVxuICAgICAgICAgICAgY29tcG9uZW50c0NhY2hlLmNsZWFyKCk7XG4gICAgICAgICAgICBibG9ja3NDYWNoZS5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKGlzR2VuZXJhdGVkKVxuICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeSgn0JTQuNC/0LvQvtC8INGB0LPQtdC90LXRgNC40YDQvtCy0LDQvScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgICAgeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYygnaXNHZW5lcmF0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCfQlNC40L/Qu9C+0Lwg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC9Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuc2hvd1VJKCk7XG4iLCJpbXBvcnQgeyBGUkFNRV9UWVBFLCBUSEVNRVMgfSBmcm9tICcuLi9jb25zdGFudHMvbm9kZXMnO1xuY29uc3QgY29sb3JHZXR0ZXIgPSBub2RlID0+IG5vZGUuZmlsbHNbMF0uY29sb3I7XG5jb25zdCBmb250R2V0dGVyID0gbm9kZSA9PiBub2RlLmZvbnROYW1lO1xuY29uc3QgcHJvcGVydHlHZXR0ZXJzID0ge1xuICAgIEJHX0NPTE9SUzogY29sb3JHZXR0ZXIsXG4gICAgQ09MT1JTOiBjb2xvckdldHRlcixcbiAgICBGT05UUzogZm9udEdldHRlcixcbn07XG5jb25zdCBnZW5lcmF0ZVRoZW1lID0gKG5vZGUpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHByb3BlcnR5R2V0dGVycykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICAgIGlmICghbm9kZS5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09PSBwcm9wZXJ0eSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoZW1lW3Byb3BlcnR5XSA9IHt9O1xuICAgICAgICBub2RlXG4gICAgICAgICAgICAuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PT0gcHJvcGVydHkpXG4gICAgICAgICAgICAuY2hpbGRyZW5cbiAgICAgICAgICAgIC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgdGhlbWVbcHJvcGVydHldW25vZGUubmFtZV0gPSBwcm9wZXJ0eUdldHRlcnNbcHJvcGVydHldKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhlbWU7XG59O1xuY29uc3QgZ2VuZXJhdGVUaGVtZXMgPSAoc291cmNlUGFnZSkgPT4ge1xuICAgIGNvbnN0IHRoZW1lcyA9IHNvdXJjZVBhZ2VcbiAgICAgICAgLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gRlJBTUVfVFlQRSAmJiBub2RlLm5hbWUgPT09IFRIRU1FUylcbiAgICAgICAgLmNoaWxkcmVuO1xuICAgIHJldHVybiB0aGVtZXMubWFwKGdlbmVyYXRlVGhlbWUpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVGhlbWVzO1xuIiwiZXhwb3J0IGNvbnN0IGNsb25lRGVlcCA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBjb25zdCBwcmltaXRpdmVUeXBlcyA9IFsndW5kZWZpbmVkJywgJ251bWJlcicsICdzdHJpbmcnLCAnYm9vbGVhbiddO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChwcmltaXRpdmVUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lRGVlcCh4KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICAgICAgb1trZXldID0gY2xvbmVEZWVwKHZhbFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgdGhyb3cgJ3Vua25vd24nO1xufTtcbmV4cG9ydCBjb25zdCBnZXROZXh0RmlsbHMgPSAobm9kZSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBmaWxscyA9IGNsb25lRGVlcChub2RlLmZpbGxzKTtcbiAgICBmaWxsc1swXS5jb2xvciA9IGNvbG9yO1xuICAgIHJldHVybiBmaWxscztcbn07XG5leHBvcnQgY29uc3QgZ2V0TmV4dFN0cm9rZXMgPSAobm9kZSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBzdHJva2VzID0gY2xvbmVEZWVwKG5vZGUuc3Ryb2tlcyk7XG4gICAgc3Ryb2tlc1swXS5jb2xvciA9IGNvbG9yO1xuICAgIHJldHVybiBzdHJva2VzO1xufTtcbmV4cG9ydCBjb25zdCBjbGVhck5vZGUgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tRWxlbWVudCA9IChhcnIpID0+IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG5leHBvcnQgY29uc3QgcGFyc2UgPSAoc3RyLCBzZXAgPSAnLCcsIHByb3BTZXAgPSAnOicpID0+IHN0ciA/IHN0ci5zcGxpdChzZXApLnJlZHVjZSgocmVzLCBwcm9wKSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gcHJvcC5zcGxpdChwcm9wU2VwKTtcbiAgICByZXNba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiByZXM7XG59LCB7fSkgOiB7fTtcbmV4cG9ydCBjb25zdCBnZXROYW1lID0gKG5vZGUsIHNlcCA9ICdfXycpID0+IHR5cGVvZiBub2RlID09PSAnc3RyaW5nJyA/IG5vZGUuc3BsaXQoc2VwKVswXSA6IG5vZGUubmFtZS5zcGxpdChzZXApWzBdO1xuZXhwb3J0IGNvbnN0IGdldFByb3BlcnRpZXMgPSAobm9kZSwgc2VwID0gJ19fJykgPT4gbm9kZSAmJiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnID8gcGFyc2Uobm9kZS5zcGxpdChzZXApWzFdKSA6IHBhcnNlKG5vZGUubmFtZS5zcGxpdChzZXApWzFdKSk7XG5leHBvcnQgY29uc3QgaXNMaW5rZWQgPSAobm9kZSkgPT4gISEoZ2V0UHJvcGVydGllcyhub2RlKS5MSU5LICYmIGdldFByb3BlcnRpZXMobm9kZSkuSUQpO1xuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudEJ5SWRBbmROYW1lID0gKHNvdXJjZSwgbmFtZSwgaWQpID0+IHNvdXJjZS5maW5kQ2hpbGQobm9kZSA9PiBnZXROYW1lKG5vZGUubmFtZSkgPT09IGdldE5hbWUobmFtZSkgJiYgZ2V0UHJvcGVydGllcyhub2RlKS5JRCA9PT0gaWQpO1xuZXhwb3J0IGNvbnN0IGdldExpbmtlZENhY2hlZElkID0gKG5vZGUsIGNhY2hlKSA9PiB7XG4gICAgY29uc3QgcHJvcHMgPSBnZXRQcm9wZXJ0aWVzKGNhY2hlLmdldChnZXRQcm9wZXJ0aWVzKG5vZGUpLkxJTkspKTtcbiAgICByZXR1cm4gcHJvcHMgPyBwcm9wcy5JRCA6IHVuZGVmaW5lZDtcbn07XG5leHBvcnQgY29uc3QgdG9PYmplY3QgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnLCcpLnJlZHVjZSgocmVzLCBwcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHByb3Auc3BsaXQoJzonKTtcbiAgICAgICAgcmVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==