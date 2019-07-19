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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Enemy extends MovingObject{\n\tconstructor(options) {\n\t\tsuper(options);\n\t}\n}\n\n\nmodule.exports = Enemy;\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Link = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\n\nclass Game {\n\n\tconstructor(dim_x, dim_y){\n\t\tthis.enemies = [];\n\t\tthis.dim_x = dim_x;\n\t\tthis.dim_y = dim_y;\n\t\tthis.link\n\n\t\tthis.add(new Enemy({pos: [30, 30],\n\t \t\t\t\t\t\t\t\t\t\t\tvel: [1, 1],\n\t \t\t\t\t\t\t\t\t\t\t\tradius: 25, \n\t\t\t\t\t\t\t\t\t\t\t\tcolor: \"blue\"}))\n\t}\n\n\tadd(object) {\n\t\tif (object instanceof Enemy){\n\t\t\tthis.enemies.push(object);\n\t\t\treturn this.enemies;\n\t\t}\n\t\tif (object instanceof Link){\n\t\t\tthis.link = object;\n\t\t\treturn this.link;\n\t\t}\n\t}\n\n\tdraw(ctx, img) {\n\n\t\tctx.clearRect(0,0,this.dim_x, this.dim_y);\n\t\n\t\t// this.enemies[0].drawObject(ctx);\n\t\tthis.enemies.forEach(ele => { ele.drawObject(ctx); });\n\t\tthis.link.drawObject(ctx, img);\n\t}\n\n\tmoveObjects() {\n\t\tthis.enemies.forEach(ele => { ele.move(); });\n\t}\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Link = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\n\n\nclass GameView {\n\n\n\tconstructor(ctx){\n\t\tthis.ctx = ctx;\n\t\tthis.game = new Game(1000, 750);\n\t\tthis.moveAndDraw = this.moveAndDraw.bind(this);\n\t\tthis.link = this.game.add(new Link(this.ctx));\n\n\n\t\tthis.bindKeyHandlers = this.bindKeyHandlers.bind(this);\n\t}\n\n\tstart(){\n\n\t\tthis.bindKeyHandlers();\n\t\tsetInterval(this.moveAndDraw, 30);\n\t}\n\n\tmoveAndDraw() {\n\t\tthis.game.moveObjects();\n\t\tthis.game.draw(this.ctx, this.img);\n\n\t}\n\n\tbindKeyHandlers() {\n\t\tconst dist = 15;\n\t\tconst MOVES = {\n\t\t\tw: [0, -dist],\n\t\t\ta: [-dist, 0],\n\t\t\ts: [0, dist],\n\t\t\td: [dist, 0] }\n\n\t\t\tconst that = this;\n\n\t\tObject.keys(MOVES).forEach((ele) => {\n\t\t\tkey(ele, () => { that.link.moveOnce(MOVES[ele]); })\n\t\t});\n\n\t\tkey(\"space\", () => { that.link.attack(); });\n\t}\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\tcanvasEl.width = 1000;\n\n\tcanvasEl.height =750;\n\n\tconst ctx = canvasEl.getContext(\"2d\");\n\n\tg = new GameView(ctx);\n\n\tg.start(ctx)\n\n\t// m = new MovingObject({ pos: [30, 30], \n\t// \t\t\t\t\t\t\t\t\t\t\tvel: [10, 10], \n\t// \t\t\t\t\t\t\t\t\t\t\tradius: 25, \n\t// \t\t\t\t\t\t\t\t\t\t\tcolor: \"green\" })\n\n\t// m.draw(ctx);\n\t// ctx.clearRect(0, 0, 1000, 600);\n\n\t// m.move(ctx);\n\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Link {\n\n\tconstructor(ctx, img) {\n\t\tthis.pos = [100, 100];\n\t\tthis.vel = [0,0];\n\t\tthis.radius = 15;\n\t\tthis.color = \"green\";\n\t\tthis.ctx = ctx;\n\n\t\tthis.imageArray = [];\n\t\tthis.attackImageArray = [];\n\t\tthis.loadImages();\n\t\tthis.dir = 3;\n\t\tthis.idx = 0;\n\n\t\tthis.history = [];\n\n\t}\n\n\n\tswitchImage() {\n\t\tif (this.idx === 0) this.idx = 1;\n\t\telse this.idx = 0\n\t}\n\t\n\n\tdrawObject(ctx) {\n\n\t\tctx.drawImage(this.imageArray[this.dir][this.idx], this.pos[0], this.pos[1], 30, 30);\n\t}\n\n\n\tmove(deltaPos) {\n\t\tthis.moveOnce(deltaPos)\n\n\t}\n\n\tmoveOnce(deltaPos) {\n\n\t\tthis.dir = 0;\n\t\tthis.pos[0] += deltaPos[0];\n\t\tthis.pos[1] += deltaPos[1];\n\n\t\tif (deltaPos[0] === 0 && deltaPos[1] < 0) this.dir = 0;\n\t\telse if (deltaPos[0] < 0 && deltaPos[1] === 0) this.dir = 1;\n\t\telse if (deltaPos[0] === 0 && deltaPos[1] > 0) this.dir = 2;\n\t\telse this.dir = 3;\n\n\t\tthis.switchImage();\n\n\t}\n\n\tattack() {\n\t\t// this.history = [this.dir, this.idx];\n\t\tconsole.log(\"space\");\n\t}\n\n\tloadImages() {\n\t\tthis.lbu1 = new Image();\n\t\tthis.lbu1.onload = () => { return true; }\n\t\tthis.lbu1.src = '../images/link/lbu1.png';\n\n\t\tthis.lbu2 = new Image();\n\t\tthis.lbu2.onload = () => { return true; }\n\t\tthis.lbu2.src = '../images/link/lbu2.png';\n\n\t\t// north 'w'\n\t\tthis.imageArray.push([this.lbu1, this.lbu2])\n\n\t\tthis.llu1 = new Image();\n\t\tthis.llu1.onload = () => { return true; }\n\t\tthis.llu1.src = '../images/link/llu1.png';\n\n\t\tthis.llu2 = new Image();\n\t\tthis.llu2.onload = () => { return true; }\n\t\tthis.llu2.src = '../images/link/llu2.png';\n\n\t\t// west 'a'\n\t\tthis.imageArray.push([this.llu1, this.llu2])\n\n\n\t\tthis.lfu1 = new Image();\n\t\tthis.lfu1.onload = () => { return true; }\n\t\tthis.lfu1.src = '../images/link/lfu1.png';\n\n\t\tthis.lfu2 = new Image();\n\t\tthis.lfu2.onload = () => { return true; }\n\t\tthis.lfu2.src = '../images/link/lfu2.png';\n\n\t\t// south 's'\n\t\tthis.imageArray.push([this.lfu1,this.lfu2])\n\n\t\tthis.lru1 = new Image();\n\t\tthis.lru1.onload = () => { return true; }\n\t\tthis.lru1.src = '../images/link/lru1.png';\n\n\t\tthis.lru2 = new Image();\n\t\tthis.lru2.onload = () => { return true; }\n\t\tthis.lru2.src = '../images/link/lru2.png';\n\n\t\t// right 'd'\n\t\tthis.imageArray.push([this.lru1, this.lru2])\n\t\t\n\n\t\t////////////////////////////////////////\n\t\t// load attack animations\n\t\tthis.lba = new Image();\n\t\tthis.lba.onload = () => { return true; }\n\t\tthis.lba.src = '../images/link/lba.png';\n\t\tthis.attackImageArray.push(this.lba);\n\n\t\tthis.lla = new Image();\n\t\tthis.lla.onload = () => { return true; }\n\t\tthis.lla.src = '../images/link/lla.png';\n\t\tthis.attackImageArray.push(this.lla);\n\t\t\n\t\tthis.lfa = new Image();\n\t\tthis.lfa.onload = () => { return true; }\n\t\tthis.lfa.src = '../images/link/lfa.png';\n\t\tthis.attackImageArray.push(this.lfa);\n\n\t\tthis.lra = new Image();\n\t\tthis.lra.onload = () => { return true; }\n\t\tthis.lra.src = '../images/link/lra.png';\n\t\tthis.attackImageArray.push(this.lra);\n\t}\n\t\n}\n\nmodule.exports = Link;\n\n//# sourceURL=webpack:///./src/link.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass MovingObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.vel = options.vel;\n\t\tthis.radius = options.radius;\n\t\tthis.color = options.color;\n\t\tthis.game = options.game;\n\t}\n\n\tdrawObject(ctx) {\n\t\tctx.beginPath();\n\t\tctx.fillStyle = this.color;\n\t\t//x, y, width, height\n\n\t\tctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );\n\t\tctx.stroke();\n\t\tctx.fill();\n\n\t};\n\n\tmove() {\n\t\tthis.pos[0] += this.vel[0];\n\t\tthis.pos[1] += this.vel[1];\n\t}\n\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\n\tdistance(pt1, pt2) {\n\t\tlet xdist = pt1[0] - pt2[0];\n\t\tlet ydist = pt1[1] - pt2[1];\n\t\treturn Math.sqrt(xdist*xdist + ydist*ydist);\n\t},\n\n\tnorm(pt) {\n\t\treturn distance([0,0], pt);\n\t},\n\n\trandomVec(length) {\n\t\tconst deg = 2 * Math.PI * Math.random();\n\t\treturn Util.scale([Math.sin(deg), Math.cos(deg)], length);\n\t},\n\t// Scale the length of a vector by the given amount.\n\tscale(vec, m) {\n\t\treturn [vec[0] * m, vec[1] * m];\n\t}\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });