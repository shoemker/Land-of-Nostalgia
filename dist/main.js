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

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Enemy extends MovingObject{\n\tconstructor(options) {\n\t\tsuper(options);\n\t\t// this.direction\n\t}\n\n\n\tmove() {\n\n\t}\n}\n\n\n\nmodule.exports = Enemy;\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Link = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\n\nclass Game {\n\n\tconstructor(dim_x, dim_y){\n\t\tthis.enemies = [];\n\t\tthis.dim_x = dim_x;\n\t\tthis.dim_y = dim_y;\n\t\tthis.link;\n\t\tthis.countToThirty = 0;\n\n\t\tthis.add(new Enemy({pos: [50, 30],\n\t \t\t\t\t\t\t\t\t\t\t\tvel: [1, 1],\n\t \t\t\t\t\t\t\t\t\t\t\tradius: 15, \n\t\t\t\t\t\t\t\t\t\t\t\tcolor: \"blue\"}))\n\n\t}\n\n\tadd(object) {\n\t\tif (object instanceof Enemy){\n\t\t\tthis.enemies.push(object);\n\t\t\treturn this.enemies;\n\t\t}\n\t\tif (object instanceof Link){\n\t\t\tthis.link = object;\n\t\t\treturn this.link;\n\t\t}\n\t}\n\n\tdraw(ctx) {\n\n\t\tctx.clearRect(0,0,this.dim_x, this.dim_y);\n\t\t\n\t\tthis.enemies.forEach(ele => { ele.drawObject(ctx); });\n\t\t\n\t\tif (this.countToThirty > 0 && this.countToThirty%3 === 0) \n\t\t\tthis.link.drawObject(ctx, true );\n\t\telse this.link.drawObject(ctx, false);\n\t}\n\n\tstep() {\n\t\t// debugger\n\t\tif (this.countToThirty === 30) this.countToThirty = 0;\n\t\telse if (this.countToThirty > 0) this.countToThirty++;\n\t\telse {\n\t\t\tthis.checkCollisions();\n\t\t\tthis.checkHit();\n\t\t}\n\n\t\tthis.moveObjects();\n\t}\n\n\tcheckCollisions() {\n\n\t\tconst linkCenter = this.link.center();\n\n\t\tconst rad = this.link.radius;\n\n\t\tthis.enemies.forEach(enemy => { \n\t\t\tconst distance = Util.distance(linkCenter,enemy.pos);\n\n\t\t\tif (distance < (rad + enemy.radius +2)) {\n\t\t\t\tthis.countToThirty++;\n\t\t\t\tconsole.log(\"collision\");\n\t\t\t}\n\t\t})\n\t}\n\n\tcheckHit() {\n\t\tconst tip = this.link.swordTipPos();\n\t\tif (tip !== null ) {\n\t\t\tthis.enemies.forEach(enemy => { \n\t\t\t\tconst distance = Util.distance(tip, enemy.pos);\n\n\t\t\t\tif (distance < enemy.radius) {\n\t\t\t\t\tthis.countToThirty++;\t\t\t\t\t\n\t\t\t\t\tconsole.log(\"hit\");\n\t\t\t\t} \n\t\t\t})\n\t \t}\n\t}\n\n\tmoveObjects() {\n\t\tthis.enemies.forEach(enemy => { enemy.move(); });\n\t}\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Link = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\n\n\nclass GameView {\n\n\n\tconstructor(ctx){\n\t\tthis.ctx = ctx;\n\t\tthis.game = new Game(1000, 750);\n\t\tthis.moveAndDraw = this.moveAndDraw.bind(this);\n\t\tthis.link = this.game.add(new Link(this.ctx));\n\n\n\t\tthis.bindKeyHandlers = this.bindKeyHandlers.bind(this);\n\t}\n\n\tstart(){\n\n\t\tthis.bindKeyHandlers();\n\t\tsetInterval(this.moveAndDraw, 30);\n\t}\n\n\tmoveAndDraw() {\n\t\tthis.game.step();\n\t\tthis.game.draw(this.ctx);\n\n\t}\n\n\tbindKeyHandlers() {\n\t\t\n\t\tconst dist = 15;\n\n\t\tconst MOVES = {\n\t\t\tw: [0, -dist],\n\t\t\ta: [-dist, 0],\n\t\t\ts: [0, dist],\n\t\t\td: [dist, 0] }\n\n\t\t\tconst that = this;\n\n\t\tObject.keys(MOVES).forEach((ele) => {\n\t\t\tkey(ele, () => { that.link.move(MOVES[ele]); })\n\t\t});\n\n\t\tkey(\"space\", () => { that.link.attack(); });\n\t}\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\tcanvasEl.width = 1000;\n\n\tcanvasEl.height =700;\n\n\tconst ctx = canvasEl.getContext(\"2d\");\n\n\tg = new GameView(ctx);\n\n\tg.start(ctx)\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Link {\n\n\tconstructor(ctx) {\n\t\tthis.pos = [0, 0];\n\t\tthis.height = 30;\n\t\tthis.width = 30;\n\t\t\n\t\tthis.radius = this.width/2;\n\t\tthis.ctx = ctx;\n\n\t\tthis.imageArray = [];\n\t\tthis.loadImages();\n\n\t\tthis.direction = 4;\n\t\tthis.idx = 0;\n\n\t\tthis.directionHistory = [];\n\t\tthis.posHistory=[];\n\t\tthis.posHistory[0] = this.pos[0];\n\t\tthis.posHistory[1] = this.pos[1];\n\t\tthis.attackAnimationCount = 0;\n\t\tthis.maxCount = 10;\n\n\t}\n\n\tcenter() {\n\t\tif (this.direction >= 8) {\n\t\t\treturn [this.posHistory[0] + 15, this.posHistory[1] + 15]; \n\t\t} else return [this.pos[0] + 15, this.pos[1] + 15];\n\t}\n\n\n\tswordTipPos(){\n\t\tif (this.direction >= 8) {\n\n\t\t\tlet center = this.center();\n\n\t\t\tif (this.direction === 8) {\n\t\t\t\treturn [center[0]-3, center[1]-this.radius-1.6*this.radius];\n\t\t\t} else if (this.direction === 9) {\n\t\t\t\treturn [center[0] -this.radius - 1.6 * this.radius, center[1]+2];\n\t\t\t} else if (this.direction === 10) {\n\t\t\t\treturn [center[0]+1, center[1] + this.radius + 1.6 * this.radius];\n\t\t\t} else {\n\t\t\t\treturn [center[0] + this.radius + 1.6 * this.radius, center[1] + 2];\n\t\t\t}\n\n\t\t}\n\t\telse return null;\n\t}\n\n\t// switches image for walking animation\n\tswitchImage() {\n\t\tif (this.idx === 0) this.idx = 1;\n\t\telse this.idx = 0\n\t}\n\t\n\n\tdrawObject(ctx, brighten) {\n\t\t// this circle encircles Link\n\t\t// ctx.beginPath();\n\t\t// ctx.arc(this.pos[0]+15, this.pos[1]+15, 15, 0, 2 * Math.PI);\n\t\t// ctx.stroke();\n\t\t// ctx.fill();\n\n\n\t\tif (brighten) ctx.filter = \"brightness(150%)\";\n\t\telse ctx.filter = \"brightness(100%)\";\n\t\t\n\t\t// draws Link\n\t\tctx.drawImage(this.imageArray[this.direction + this.idx], \n\t\t\t\t\t\t\t\t\tthis.pos[0], \n\t\t\t\t\t\t\t\t\tthis.pos[1], \n\t\t\t\t\t\t\t\t\tthis.width, \n\t\t\t\t\t\t\t\t\tthis.height);\n\n\t\t// lets the attack animation stay for several cycles\n\t\t// and resets image at the end\n\t\tif (this.direction >= 8) {\n\t\t\tif (this.attackAnimationCount === this.maxCount) {\n\n\t\t\t\tthis.direction = this.directionHistory;\n\t\t\t\tthis.pos[0] = this.posHistory[0];\n\t\t\t\tthis.pos[1] = this.posHistory[1];\n\n\t\t\t\tthis.attackAnimationCount = 0\n\t\t\t\tthis.height = 30;\n\t\t\t\tthis.width = 30;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tthis.attackAnimationCount++;\n\n\t\t\t}\n\t\t}\n\t}\n\n\n\tmove(deltaPos) {\n\t\tif (this.attackAnimationCount === 0) {\n\t\t\tthis.moveOnce(deltaPos)\n\t\t}\n\t}\n\n\tmoveOnce(deltaPos) {\n\t\t\n\t\tthis.direction = 0;\n\t\tthis.pos[0] += deltaPos[0];\n\t\tthis.pos[1] += deltaPos[1];\n\n\t\t// sets direction for drawing image\n\t\tif (deltaPos[0] === 0 && deltaPos[1] < 0) this.direction = 0;\n\t\telse if (deltaPos[0] < 0 && deltaPos[1] === 0) this.direction = 2;\n\t\telse if (deltaPos[0] === 0 && deltaPos[1] > 0) this.direction = 4;\n\t\telse this.direction = 6;\n\n\t\tthis.switchImage();\n\n\t}\t\n\n\t// temporarily sets image to attack image\n\tattack() {\n\t\tif (this.attackAnimationCount === 0 ) {\n\t\t\tthis.directionHistory = this.direction;\n\t\t\tthis.posHistory[0] = this.pos[0];\n\t\t\tthis.posHistory[1] = this.pos[1];\n\n\t\t\t// changes position and size to account for bigger attack image\n\t\t\tif (this.direction === 0){\n\t\t\t\tthis.height = 1.8 * this.height;\n\t\t\t\tthis.pos[1] -= 24;\n\t\t\t} else if (this.direction === 2) {\n\t\t\t\tthis.width = 1.8 * this.width;\n\t\t\t\tthis.pos[0] -= 24;\n\t\t\t} else if (this.direction === 4) {\n\t\t\t\tthis.height = 1.8 * this.height;\n\t\t\t} else if (this.direction === 6) {\n\t\t\t\tthis.width = 1.8 * this.width;\n\t\t\t}\n\n\t\t\tthis.direction = this.direction/2 + 8;\n\t\t\tthis.idx = 0; \n\t\t\tthis.swordTipPos();\n\t\t}\n\n\t}\n\n\t// loads all of the link images\n\tloadImages() {\n\t\t// north 'w'\n\t\tthis.lbu1 = new Image();\n\t\tthis.lbu1.onload = () => { return true; }\n\t\tthis.lbu1.src = '../images/link/lbu1.png';\n\t\tthis.imageArray.push(this.lbu1);\n\n\t\tthis.lbu2 = new Image();\n\t\tthis.lbu2.onload = () => { return true; }\n\t\tthis.lbu2.src = '../images/link/lbu2.png';\n\t\tthis.imageArray.push(this.lbu2);\n\t\n\n\t\t// west 'a'\n\t\tthis.llu2 = new Image();\n\t\tthis.llu2.onload = () => { return true; }\n\t\tthis.llu2.src = '../images/link/llu2.png';\n\t\tthis.imageArray.push(this.llu2);\t\t\n\n\t\tthis.llu1 = new Image();\n\t\tthis.llu1.onload = () => { return true; }\n\t\tthis.llu1.src = '../images/link/llu1.png';\n\t\tthis.imageArray.push(this.llu1);\n\t\t\n\n\t\t// south 's'\n\t\tthis.lfu1 = new Image();\n\t\tthis.lfu1.onload = () => { return true; }\n\t\tthis.lfu1.src = '../images/link/lfu1.png';\n\t\tthis.imageArray.push(this.lfu1);\n\n\t\tthis.lfu2 = new Image();\n\t\tthis.lfu2.onload = () => { return true; }\n\t\tthis.lfu2.src = '../images/link/lfu2.png';\n\t\tthis.imageArray.push(this.lfu2);\n\n\n\t\t// east 'd'\n\t\tthis.lru1 = new Image();\n\t\tthis.lru1.onload = () => { return true; }\n\t\tthis.lru1.src = '../images/link/lru1.png';\n\t\tthis.imageArray.push(this.lru1);\n\n\t\tthis.lru2 = new Image();\n\t\tthis.lru2.onload = () => { return true; }\n\t\tthis.lru2.src = '../images/link/lru2.png';\n\t\tthis.imageArray.push(this.lru2);\n\t\t\n\n\t\t////////////////////////////////////////\n\t\t// load attack animations\n\t\tthis.lba = new Image();\n\t\tthis.lba.onload = () => { return true; }\n\t\tthis.lba.src = '../images/link/lba.png';\n\t\tthis.imageArray.push(this.lba);\n\n\t\tthis.lla = new Image();\n\t\tthis.lla.onload = () => { return true; }\n\t\tthis.lla.src = '../images/link/lla.png';\n\t\tthis.imageArray.push(this.lla);\n\t\t\n\t\tthis.lfa = new Image();\n\t\tthis.lfa.onload = () => { return true; }\n\t\tthis.lfa.src = '../images/link/lfa.png';\n\t\tthis.imageArray.push(this.lfa);\n\n\t\tthis.lra = new Image();\n\t\tthis.lra.onload = () => { return true; }\n\t\tthis.lra.src = '../images/link/lra.png';\n\t\tthis.imageArray.push(this.lra);\n\t}\n\t\n}\n\nmodule.exports = Link;\n\n//# sourceURL=webpack:///./src/link.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass MovingObject {\n\tconstructor(options) {\n\t\tthis.pos = options.pos;\n\t\tthis.vel = options.vel;\n\t\tthis.radius = options.radius;\n\t\tthis.color = options.color;\n\t\tthis.game = options.game;\n\t}\n\n\tdrawObject(ctx, brighten) {\n\n\t\t// if (brighten) ctx.filter = \"brightness(150%)\";\n\t\t// else ctx.filter = \"brightness(100%)\";\n\n\t\tctx.beginPath();\n\t\tctx.fillStyle = this.color;\n\t\t//x, y, width, height\n\n\t\tctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );\n\t\tctx.stroke();\n\t\tctx.fill();\n\n\t};\n\n\tmove() {\n\t\tthis.pos[0] += this.vel[0];\n\t\tthis.pos[1] += this.vel[1];\n\t}\n\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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