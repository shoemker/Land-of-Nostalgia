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

/***/ "./src/background1.js":
/*!****************************!*\
  !*** ./src/background1.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Background1 {\n\tconstructor(dim_x, dim_y, img) {\n\t\tthis.img = img;\n\t\tthis.dim_x = dim_x;\n\t\tthis.dim_y = dim_y;\n\t}\n\n\n\tdraw (ctx) {\n\t\tctx.fillStyle = \"#8DC435\";\n\t\t\n\t\tctx.fillRect(0, 30, this.dim_x, this.dim_y);\n\t\t\n\t\tfor(let i = 0; i < 11; i++) {\n\t\t\t//top\n\t\t\tctx.drawImage(this.img, 128, 0, 64, 64, i * 64, 30, 64, 64);\n\t\t\n\t\t\t//trail\n\t\t\tctx.drawImage(this.img, 64, 0, 64, 64, i * 64, 414, 64, 64);\n\n\t\t\t// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)\n\n\n\t\t\t// //bottom\n\t\t\tif (i !== 0 && i != 15) {\n\t\t\t\tctx.drawImage(this.img, 192, 0, 64, 64, i * 64, 670, 64, 64);\n\t\t\t\tctx.drawImage(this.img, 128, 0, 64, 64, i * 64, 734, 64, 64);\n\t\t\t}\n\t\t}\n\n\t//clumps\n\t\tctx.drawImage(this.img, 192, 0, 64, 64, 128, 148, 64, 64);\n\t\tctx.drawImage(this.img, 128, 0, 64, 64, 128, 212, 64, 64);\n\n\t\tctx.drawImage(this.img, 192, 0, 64, 64, 192, 148, 64, 64);\n\t\tctx.drawImage(this.img, 128, 0, 64, 64, 192, 212, 64, 64);\n\n\t\tctx.drawImage(this.img, 256, 0, 64, 64, 440, 468, 64, 64);\n\t\tctx.drawImage(this.img, 256, 0, 64, 64, 440, 532, 64, 64);\n\t\tctx.drawImage(this.img, 256, 0, 64, 64, 504, 468, 64, 64);\n\n\t\tfor (let i = 0; i < 6; i++) {\n\t\t\t// left side\n\n\t\t\tif (i !== 2) ctx.drawImage(this.img, 192, 0, 64, 64, 0, 94 + i * 2 * 64, 64, 64);\n\t\t\tif (i !== 3) ctx.drawImage(this.img, 128, 0, 64, 64, 0, 30 + i * 2 * 64, 64, 64);\n\n\n\t\t\t//right side\n\n\t\t\tctx.drawImage(this.img, 192, 0, 64, 64, 700, 94 + i * 2 * 64, 64, 64);\n\t\t\tctx.drawImage(this.img, 128, 0, 64, 64, 700, 30 + i * 2 * 64, 64, 64);\n\n\n\t\t}\n\t}\n\t\n}\n\nmodule.exports = Background1;\n\n//# sourceURL=webpack:///./src/background1.js?");

/***/ }),

/***/ "./src/background2.js":
/*!****************************!*\
  !*** ./src/background2.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Background2 {\n\tconstructor(dim_x, dim_y, img, imgPlants, chestImg) {\n\t\tthis.img = img;\n\t\tthis.imgPlants = imgPlants;\n\t\tthis.chestImg = chestImg;\n\t\tthis.dim_x = dim_x;\n\t\tthis.dim_y = dim_y;\n\n\t\tthis.chestImgX = 25;\n\t\n\t}\n\n\n\tdraw(ctx) {\n\t\tctx.fillStyle = \"#B88751\";\n\n\t\tctx.fillRect(0, 30, this.dim_x, this.dim_y);\n\n\t\t// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)\n\n\t\t\n\t\t//top\n\t\tctx.drawImage(this.img, 800, 50, 50, 110, 0, 30, 900, 64);\n\n\t\tctx.drawImage(this.img, 800, 50, 50, 110, 0, 690, 900, 64);\n\n\t\t//puddle\n\t\tctx.drawImage(this.img, 300, 355, 80, 80, 300, 410, 64, 64);\n\t\tctx.drawImage(this.img, 300, 355, 80, 80, 600, 160, 64, 64);\n\n\t\t//cactus\n\t\tctx.drawImage(this.imgPlants, 350, 190, 80, 100, 50, 310, 64, 64);\t\t\n\t\tctx.drawImage(this.imgPlants, 350, 190, 80, 100, 500, 610, 64, 64);\t\n\t\tctx.drawImage(this.imgPlants, 350, 190, 80, 100, 100, 510, 64, 64);\t\n\n\t\t// chest\n\t\tctx.drawImage(this.chestImg, this.chestImgX, 25, 350, 250, 10, 90, 50, 43);\n\t}\n}\n\nmodule.exports = Background2\n\n//# sourceURL=webpack:///./src/background2.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Enemy extends MovingObject{\n\tconstructor(options) {\n\t\tsuper(options);\n\t\t\n\t\tthis.directionDuration = 10;\n\t\tthis.directionCount = 0;\n\t\tthis.deltaX = 0;\n\t\tthis.deltaY = 0;\n\t\tthis.hitPoints = 2;\n\n\t}\n\n\n\tmove(timeDelta) {\n\t\tif (this.directionCount === this.directionDuration ||\n\t\t\t\tthis.deltaX === 0 && this.deltaY === 0) {\n\t  \tthis.deltaX =  2*(Math.floor(Math.random() * 3) - 1);\n\t\t\tthis.deltaY =  2*(Math.floor(Math.random() * 3) - 1);\n\t\t\tthis.directionCount = 0;\n\t\t} else this.directionCount++;\n\t\n\t\tconst newX = this.pos[0] + this.deltaX\n\t\tconst newY = this.pos[1] + this.deltaY\n\t\tif (this.checkBounds(newX, newY)) {\n\t\t\tthis.pos[0] = newX;\n\t\t\tthis.pos[1] = newY;\n\t\t} else this.directionCount = 10;\n\t}\n\n\tcenter() {\n\t\treturn [this.pos[0] + 15, this.pos[1] + 15];\n\t}\n}\n\n\n\nmodule.exports = Enemy;\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/fireball.js":
/*!*************************!*\
  !*** ./src/fireball.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Fireball extends MovingObject {\n\n\tconstructor(options) {\n\t\tsuper(options);\n\t\tthis.img = options.img;\n\n\n\t}\n\n\tcenter() {\n\t\treturn [this.pos[0] + 7, this.pos[1] + 7];\n\t}\n\n\tdrawObject(ctx) {\n\t\tctx.drawImage(this.img, 150, 0, 600, 600, this.pos[0], this.pos[1], this.radius, this.radius);\n\n\t}\n\n\tmove(timeDelta) {\n\t\t// debugger\n\t\tthis.pos[0] += this.vel[0]*timeDelta;\n\t\tthis.pos[1] += this.vel[1]*timeDelta;\n\t}\n\n\n}\n\nmodule.exports = Fireball;\n\n//# sourceURL=webpack:///./src/fireball.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst Skeleton = __webpack_require__(/*! ./skeleton */ \"./src/skeleton.js\");\nconst Rupee = __webpack_require__(/*! ./rupee */ \"./src/rupee.js\");\nconst Link = __webpack_require__(/*! ./link */ \"./src/link.js\");\nconst Fireball = __webpack_require__(/*! ./fireball */ \"./src/fireball.js\");\nconst Background1 = __webpack_require__(/*! ./background1 */ \"./src/background1.js\")\nconst Background2 = __webpack_require__(/*! ./background2 */ \"./src/background2.js\")\n\nclass Game {\n\n\tconstructor(dim_x, dim_y, map){\n\t\n\t\tthis.enemies = [];\n\t\tthis.rupees = [];\n\t\tthis.dim_x = dim_x;\n\t\tthis.dim_y = dim_y;\n\t\tthis.link;\n\t\tthis.map = map;\n\t\tthis.countToThirty = 0;\n\t\tthis.messageCount = 0;\n\t\tthis.message = \"Good Luck!\";\n\t\t\n\t\tthis.opening = true;\n\t\tthis.win = false;\n\n\t\tthis.rupeeImg = this.loadRupee();\n\n\t\t// load images\n\t\tthis.loadEnemiesImg();\n\t\tthis.loadBackground1();\n\t\tthis.loadBackground2();\n\t\tthis.loadPlants();\n\t\tthis.loadFireball();\n\t\tthis.loadChest();\n\n\n\t\tthis.addEnemies();\n\t\tthis.fireball = null;\n\n\t\tthis.b1 = new Background1(this.dim_x, this.dim_y, this.background1);\n\t\tthis.b2 = new Background2(this.dim_x, this.dim_y, this.background2, this.plants, this.chestImg);\n\n\t}\n\n\taddEnemies() {\n\t\t\n\t\tif (this.map === 2) {\n\t\t\tthis.add(new Snake({\n\t\t\t\tpos: [100, 100],\n\t\t\t\tvel: [1, 1],\n\t\t\t\tradius: 15,\n\t\t\t\tmap: this.map,\n\t\t\t\timg: this.enemiesImg\n\t\t\t}))\n\n\t\t\tthis.add(new Snake({\n\t\t\t\tpos: [100, 400],\n\t\t\t\tvel: [1, 1],\n\t\t\t\tradius: 15,\n\t\t\t\tmap: this.map,\n\t\t\t\timg:  this.enemiesImg\n\t\t\t}))\n\n\t\t\tthis.add(new Snake({\n\t\t\t\tpos: [650, 600],\n\t\t\t\tvel: [1, 1],\n\t\t\t\tradius: 15,\n\t\t\t\tmap: this.map,\n\t\t\t\timg: this.enemiesImg\n\t\t\t}))\n\t\t} else if (this.map === 1) {\n\t\t\n\t\t\tthis.add(new Skeleton({\n\t\t\t\tpos: [100, 100],\n\t\t\t\tvel: [1, 1],\n\t\t\t\tradius: 15,\n\t\t\t\tmap: this.map,\n\t\t\t\timg: this.enemiesImg\n\t\t\t}))\n\n\t\t\tthis.add(new Skeleton({\n\t\t\t\tpos: [100, 400],\n\t\t\t\tvel: [1, 1],\n\t\t\t\tradius: 15,\n\t\t\t\tmap: this.map,\n\t\t\t\timg: this.enemiesImg\n\t\t\t}))\n\n\t\t\tthis.add(new Skeleton({\n\t\t\t\tpos: [650, 600],\n\t\t\t\tvel: [1, 1],\n\t\t\t\tradius: 15,\n\t\t\t\tmap: this.map,\n\t\t\t\timg: this.enemiesImg\n\t\t\t}))\n\t\t}\n\t}\n\n\tadd(object) {\n\t\tif (object instanceof Enemy){\n\t\t\tthis.enemies.push(object);\n\t\t\treturn this.enemies;\n\t\t}\n\t\telse if (object instanceof Link){\n\t\t\tthis.link = object;\n\t\t\treturn this.link;\n\t\t}\n\t\telse if (object instanceof Rupee){\n\t\t\tthis.rupees.push(object);\n\t\t\treturn this.rupees;\n\t\t}\n\n\t}\n\n\n\tdraw(ctx) {\n\t\t\n\t\tctx.clearRect(0,0,this.dim_x, this.dim_y);\n\t\t\n\t\tthis.drawMessage(ctx);\n\n\t\tthis.drawBackgroundMap(ctx, this.map);\n\n\t\tthis.drawRupeesCount(ctx);\n\t\t\n\t\tthis.drawHitpointsBar(ctx);\n\n\n\t\tif (this.link.hitpoints <= 0) {\n\t\t\t// this.link.gameOver = true;\n\t\t\tthis.drawLose(ctx);\n\t\t\tthis.enemies = [];\n\t\t} else if (this.win) {\n\t\t\tthis.drawWin(ctx);\n\t\t}\n\n\t\t\n\t\n\t\tthis.enemies.forEach(ele => { ele.drawObject(ctx); });\n\t\tthis.rupees.forEach(ele => { ele.drawObject(ctx); });\n\t\tif (this.fireball) this.fireball.drawObject(ctx);\n\t\n\n\t\tif (this.countToThirty > 0 && this.countToThirty%2 === 0 && this.collision) \n\t\t\tthis.link.drawObject(ctx, true );\n\t\telse this.link.drawObject(ctx, false);\n\n\t\tif (this.opening) this.drawOpening(ctx);\n\t}\n\n\n\tdrawOpening(ctx) {\n\n\t\tctx.fillStyle = \"white\";\n\t\tctx.textAlign = \"center\";\n\t\tctx.font = \"35px HalfBoldPixel\";\n\n\t\tctx.fillText(\"Welcome to Land of Nostalgia!\", this.dim_x / 2, 200);\n\t\tctx.fillText(\"Click to Start\", this.dim_x / 2, 250);\n\t}\n\n\tdrawLose(ctx) {\n\n\t\tctx.fillStyle = \"white\";\n\t\tctx.textAlign = \"center\";\n\t\tctx.font = \"35px HalfBoldPixel\";\n\n\t\tctx.fillText(\"Sorry, Link has no more hitpoints.\", this.dim_x / 2, 200);\n\t\tctx.fillText(\"Game Over!\", this.dim_x / 2, 250);\n\n\t}\n\n\tdrawWin(ctx) {\n\t\tctx.fillStyle = \"white\";\n\t\tctx.textAlign = \"center\";\n\t\tctx.font = \"35px HalfBoldPixel\";\n\n\t\tctx.fillText(\"Congrats! You Win!\", this.dim_x / 2, 200);\n\n\t}\n\n\tdrawMessage(ctx){\n\t\tif (this.messageCount === 30) this.messageCount = 0;\n\t\telse if (this.messageCount > 0 || \n\t\t\t\t\t\t\tthis.message.startsWith(\"Good Luck!\")) {\n\n\t\t\tctx.font = \"30px HalfBoldPixel\";\n\t\t\t\n\t\t\tctx.fillStyle = \"white\";\n\t\t\tctx.fillText(this.message, this.dim_x / 2, 23);\n\t\t\tthis.messageCount++;\n\t\t}\n\t}\n\n\tdrawBackgroundMap(ctx, map) {\n\t\tif (map === 1) {\n\t\t\tthis.b1.draw(ctx);\n\t\t} else if (map === 2) {\n\t\t\tthis.b2.draw(ctx);\n\t\t}\n\t}\n\n\tdrawRupeesCount(ctx) {\n\t\tctx.fillStyle = \"white\";\n\t\tctx.textAlign = \"center\";\n\t\tctx.font = \"20px HalfBoldPixel\";\n\t\tctx.fillText(\"Rupees\", 50,50);\n\t\tctx.fillText(this.link.rupees, 50, 70);\n\t}\n\n\tdrawHitpointsBar(ctx) {\n\t\tctx.fillStyle = \"white\";\n\t\tctx.fillRect(720, 40, 20, 90);\n\t\tlet hp = this.link.hitpoints;\n\n\t\tif (hp > 2) ctx.fillStyle = \"green\";\n\t\telse ctx.fillStyle = \"red\";\n\t\tlet offset = 80 - hp*10;\n\t\tctx.fillRect(725, 45 + offset, 10, 80 - offset);\n\t\tctx.fillStyle = \"white\";\n\t\tctx.textAlign = \"center\";\n\t\tctx.font = \"15px HalfBoldPixel\";\n\t\tctx.fillText(\"HP\", 731, 145);\n\t}\n\n\n\n\tstep(timeDelta) {\n\t\t// debugger\n\t\tif (this.countToThirty === 15) {\n\t\t\tthis.countToThirty = 0;\n\t\t\tthis.collision = false;\n\t\t}\n\t\telse if (this.countToThirty > 0) this.countToThirty++;\n\t\telse {\n\t\t\tthis.checkCollisions();\n\t\t\tthis.checkHit();\n\t\t}\n\n\t\tthis.checkForWin();\n\n\n\t\tthis.moveObjects(timeDelta);\n\t}\n\n\tcheckForWin(){\n\t\tif (this.map === 2 && this.enemies.length === 0) {\n\t\t\tthis.message = \"Strike chest for the the win!\"\n\t\t\tconst tip = this.link.swordTipPos();\n\t\t\tif(tip != null) console.log(tip);\n\t\t\tif (tip != null && \n\t\t\t\ttip[0] >= 10 && tip[0] <= 60 &&\n\t\t\t\ttip[1] >= 90 && tip[1] <= 133) {\n\n\t\t\t\tthis.b2.chestImgX = 428;\n\t\t\t\tthis.link.gameOver = true;\n\t\t\t\tthis.win = true;\n\t\t\t\t\n\t\t\t}\n\t\t}\n\t}\n\n\tcheckCollisions() {\n\n\t\tthis.collision = false;\n\t\t// debugger\n\t\tthis.enemies.forEach(enemy => { \n\t\t\tlet distance = Util.distance(this.link.center(),enemy.center());\n\n\t\t\tif (distance < (this.link.radius + enemy.radius +2)) {\n\t\t\t\tthis.countToThirty++;\n\t\t\t\tthis.collision = true;\n\t\t\t\tthis.message = \"Ouch!\";\n\t\t\t\t\n\t\t\t\tthis.link.reduceHitPoints();\n\t\t\n\t\t\t\tthis.messageCount=1;\n\t\t\t}\n\t\t})\n\n\t\tthis.rupees.forEach((rupee,i) => { \n\t\t\tlet distance = Util.distance(this.link.center(),rupee.center());\n\t\t\tif (distance < 30 ) {\n\t\t\t\n\t\t\t\tthis.rupees.splice(i, 1)\n\t\t\t\tthis.link.rupees++;\n\t\t\t\tif (this.link.rupees === 3) {\n\t\t\t\t\tthis.message = \"Fireballs when you attack!\"\n\t\t\t\t\tthis.link.unlock = true;\n\t\t\t\t}\n\t\t\t\telse this.message = \"You found a rupee!\"\n\n\t\t\t\tthis.messageCount = 1;\n\t\t\t}\n\t\t});\n\t}\n\n\tcheckHit() {\n\t\tconst tip = this.link.swordTipPos();\n\t\tthis.enemies.forEach((enemy,i) => { \n\t\t\tif (tip !== null) {\n\t\t\t\tconst distance = Util.distance(tip, enemy.center());\n\n\t\t\t\tif (distance < enemy.radius) {\n\t\t\t\t\tthis.countToThirty++;\t\t\n\t\t\t\t\tthis.message = \"Hit!\"\t\n\t\t\t\t\tenemy.hitPoints--;\n\t\t\t\t\tthis.messageCount=1;\n\t\t\t\t\tif (enemy.hitPoints <= 0)\t\t{\n\t\t\t\t\t\tthis.enemies.splice(i,1)\n\t\t\t\t\t\tthis.message = \"Enemy Killed\";\n\t\t\t\t\t\tthis.add(new Rupee(enemy.pos, this.rupeeImg));\n\n\t\t\t\t\t}\n\t\t\t\t} \n\t\t\t}\n\n\t\t\tif (this.fireball && Util.distance(this.fireball.center(), enemy.center()) < 21) {\n\t\t\t\tthis.countToThirty++;\n\t\t\t\tthis.message = \"Hit!\"\n\t\t\t\tenemy.hitPoints--;\n\t\t\t\tthis.messageCount = 1;\n\t\t\t\tif (enemy.hitPoints <= 0) {\n\t\t\t\t\tthis.enemies.splice(i, 1)\n\t\t\t\t\tthis.message = \"Enemy Killed\";\n\t\t\t\t\tthis.add(new Rupee(enemy.pos, this.rupeeImg));\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t\n\t\t})\n\t\t\n\t}\n\n\tlaunchFireball() {\n\t\tlet position = this.link.swordTipPos();\n\t\tlet direction = this.link.direction;\n\t\tlet velocity;\n\t\t\n\t\tswitch (direction) {\n\t\t\tcase 8:\n\t\t\t\tvelocity = [0, -1];\n\t\t\t\tbreak;\n\t\t\tcase 9:\n\t\t\t\tvelocity = [-1, 0];\n\t\t\t\tbreak;\n\t\t\tcase 10:\n\t\t\t\tvelocity = [0, 1];\n\t\t\t\tbreak;\n\t\t\tcase 11:\n\t\t\t\tvelocity = [1, 0];\n\t\t\t\tbreak;\t\t\t\t\n\t\t\tdefault:\n\t\t\t\tvelocity = [0, 0];\n\t\t}\n\n\t\tthis.fireball = new Fireball({\n\t\t\tpos: [position[0] - 7, position[1] - 7],\n\t\t\tvel: velocity,\n\t\t\tradius: 15,\n\t\t\timg: this.fireballImg\n\t\t})\n\t}\n\n\tmoveObjects(timeDelta) {\n\t\tthis.enemies.forEach(enemy => { enemy.move(timeDelta); });\n\t\tif (this.fireball) this.fireball.move(4);\n\t}\n\n\n\tloadBackground1() {\n\t\tthis.background1 = new Image();\n\t\tthis.background1.onload = () => { return true; }\n\t\tthis.background1.src = './images/tiles.png';\n\t}\n\n\tloadBackground2() {\n\t\tthis.background2 = new Image();\n\t\tthis.background2.onload = () => { return true; }\n\t\tthis.background2.src = './images/terrain_atlas.png';\n\t}\n\n\tloadPlants() {\n\t\tthis.plants = new Image();\n\t\tthis.plants.onload = () => { return true; }\n\t\tthis.plants.src = './images/plant_repack.png';\n\t}\n\n\tloadFireball() {\n\t\tthis.fireballImg = new Image();\n\t\tthis.fireballImg.onload = () => { return true; }\n\t\tthis.fireballImg.src = './images/fireball.png';\n\t}\n\n\tloadEnemiesImg() {\n\t\t// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)\n\t\tthis.enemiesImg = new Image();\n\t\tthis.enemiesImg.onload = () => { return true; }\n\t\tthis.enemiesImg.src = './images/enemies.png';\n\t}\n\n\tloadRupee() {\n\t\tlet rup = new Image();\n\t\trup.onload = () => { return true; }\n\t\trup.src = './images/BotW_Green_Rupee_Icon.png';\n\t\treturn rup;\n\t}\n\n\tloadChest() {\n\t\tthis.chestImg = new Image();\n\t\tthis.chestImg.onload = () => { return true; }\n\t\tthis.chestImg.src = './images/chest.png';\n\t}\n\t\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Link = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\n\n\nclass GameView {\n\n\n\tconstructor(ctx, width, height){\n\t\tthis.width = width;\n\t\tthis.ctx = ctx;\n\t\tlet map = 1;\n\t\tthis.game = new Game(width, height, map);\n\n\t\tthis.link = this.game.add(new Link(this.ctx,map));\n\n\t}\n\n\t// start(){\n\n\t// \tthis.bindKeyHandlers();\n\t// \tsetInterval(this.moveAndDraw, 30);\n\t// }\n\n\topeningOff(){\n\t\tthis.game.opening = false\n\t}\n\n\tstart() {\n\t\tthis.bindKeyHandlers();\n\t\tthis.lastTime = 0;\n\t\t// start the animation\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n\n\tanimate(time) {\n\t\tconst timeDelta = time - this.lastTime;\n\n\t\tif (!this.game.opening) this.game.step(timeDelta);\n\n\t\tif (this.game.map ===1 && this.link.pos[0] < 50) {\n\t\t\tthis.game.map = 2;\n\t\t\tthis.link.map = 2;\n\t\t\tthis.game.enemies = [];\n\t\t\tthis.game.addEnemies();\n\t\t\tthis.link.pos = [700, 450];\n\t\t}\n\t\tthis.game.draw(this.ctx);\n\t\tthis.lastTime = time;\n\n\t\t// every call to animate requests causes another call to animate\n\t\trequestAnimationFrame(this.animate.bind(this));\n\t};\n\n\n\n\tbindKeyHandlers() {\n\t\t\n\t\tconst dist = 15;\n\n\t\tconst MOVES = {\n\t\t\tw: [0, -dist],\n\t\t\ta: [-dist, 0],\n\t\t\ts: [0, dist],\n\t\t\td: [dist, 0] }\n\n\t\tconst that = this;\n\t\t\n\t\tObject.keys(MOVES).forEach((ele) => {\n\t\t\tkey(ele, () => { that.link.move(MOVES[ele], this.game.opening); })\n\t\t});\n\n\t\tkey(\"space\", () => { \n\t\t\tthat.link.attack(); \n\t\t\tif (that.link.unlock) {\n\t\t\t\tthat.game.launchFireball();\n\t\t\t}\n\t\t});\n\n\n\t}\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\n\tcanvasEl.width = 750;\n\n\tcanvasEl.height =750;\n\n\tconst ctxMain = canvasEl.getContext(\"2d\");\n\n\tg = new GameView(ctxMain,canvasEl.width, canvasEl.height);\n\n\tg.start(ctxMain)\n\n\tcanvasEl.onclick = function () {g.openingOff(); }\n\n});\n\nwindow.addEventListener('keydown', function (e) {\n\tif (e.keyCode == 32 && e.target == document.body) {\n\t\te.preventDefault();\n\t}\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Link extends MovingObject {\n\n\tconstructor(ctx, map) {\n\t\tsuper({pos:[600,90], radius:15, map:map})\n\t\tthis.height = 30;\n\t\tthis.width = 30;\n\t\tthis.radius = 15\n\t\tthis.ctx = ctx;\n\t\tthis.unlockFireball = false;\n\n\t\tthis.imageArray = [];\n\t\tthis.loadImages();\n\n\t\tthis.direction = 4;\n\t\tthis.idx = 0;\n\n\t\tthis.directionHistory = [];\n\t\tthis.posHistory=[];\n\t\tthis.posHistory[0] = this.pos[0];\n\t\tthis.posHistory[1] = this.pos[1];\n\t\tthis.attackAnimationCount = 0;\n\t\tthis.maxCount = 4;\n\t\tthis.hitpoints = 8;\n\t\tthis.rupees = 0;\n\t\tthis.gameOver = false;\n \n\t}\n\n\treduceHitPoints() {\n\t\t\n\t\treturn this.hitpoints--;\n\t}\n\n\tcenter() {\n\t\tif (this.direction >= 8) {\n\t\t\treturn [this.posHistory[0] + 15, this.posHistory[1] + 15]; \n\t\t} else return [this.pos[0] + 15, this.pos[1] + 15];\n\t}\n\n\n\tswordTipPos(){\n\t\tif (this.direction >= 8) {\n\n\t\t\tlet center = this.center();\n\n\t\t\tif (this.direction === 8) {\n\t\t\t\treturn [center[0]-3, center[1]-this.radius-1.6*this.radius];\n\t\t\t} else if (this.direction === 9) {\n\t\t\t\treturn [center[0] -this.radius - 1.6 * this.radius, center[1]+2];\n\t\t\t} else if (this.direction === 10) {\n\t\t\t\treturn [center[0]+1, center[1] + this.radius + 1.6 * this.radius];\n\t\t\t} else {\n\t\t\t\treturn [center[0] + this.radius + 1.6 * this.radius, center[1] + 2];\n\t\t\t}\n\n\t\t}\n\t\telse return null;\n\t}\n\n\t// switches image for walking animation\n\tswitchImage() {\n\t\tif (this.idx === 0) this.idx = 1;\n\t\telse this.idx = 0\n\t}\n\t\n\n\tdrawObject(ctx, brighten) {\n\n\t\tif (brighten) ctx.filter = \"brightness(170%)\";\n\t\telse ctx.filter = \"brightness(100%)\";\n\n\t\t// draws Link\n\t\tif (this.gameOver) {\n\t\t\tctx.drawImage(this.linkOver,\n\t\t\t\t\t\t\t\t\t\tthis.pos[0]-20,\n\t\t\t\t\t\t\t\t\t\tthis.pos[1]-30,\n\t\t\t\t\t\t\t\t\t\tthis.width+45,\n\t\t\t\t\t\t\t\t\t\tthis.height+30);\n\t\t} else {\n\n\t\t\tctx.drawImage(this.imageArray[this.direction + this.idx], \n\t\t\t\t\t\t\t\t\tthis.pos[0], \n\t\t\t\t\t\t\t\t\tthis.pos[1], \n\t\t\t\t\t\t\t\t\tthis.width, \n\t\t\t\t\t\t\t\t\tthis.height);\n\t\t}\n\n\t\t// lets the attack animation stay for several cycles\n\t\t// and resets image at the end\n\t\tif (this.direction >= 8) {\n\t\t\tif (this.attackAnimationCount === this.maxCount) {\n\n\t\t\t\tthis.direction = this.directionHistory;\n\t\t\t\tthis.pos[0] = this.posHistory[0];\n\t\t\t\tthis.pos[1] = this.posHistory[1];\n\n\t\t\t\tthis.attackAnimationCount = 0\n\t\t\t\tthis.height = 30;\n\t\t\t\tthis.width = 30;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tthis.attackAnimationCount++;\n\n\t\t\t}\n\t\t}\n\t}\n\n\n\tmove(deltaPos, opening) {\n\t\tif (this.attackAnimationCount === 0 && !opening && this.hitpoints > 0 && !this.gameOver) {\n\t\t\tthis.moveOnce(deltaPos)\n\t\t}\n\t}\n\n\tmoveOnce(deltaPos) {\n\t\n\t\tif (this.checkBounds(this.center()[0] + deltaPos[0], this.center()[1] + deltaPos[1])) {\n\n\t\t\tthis.direction = 0;\n\t\t\tthis.pos[0] += deltaPos[0];\n\t\t\tthis.pos[1] += deltaPos[1];\n\n\t\t\t// sets direction for drawing image\n\t\t\tif (deltaPos[0] === 0 && deltaPos[1] < 0) this.direction = 0;\n\t\t\telse if (deltaPos[0] < 0 && deltaPos[1] === 0) this.direction = 2;\n\t\t\telse if (deltaPos[0] === 0 && deltaPos[1] > 0) this.direction = 4;\n\t\t\telse this.direction = 6;\n\n\t\t\tthis.switchImage();\t\n\t\t}\n\t}\t\t\n\n\t// temporarily sets image to attack image\n\tattack() {\n\t\tif (this.attackAnimationCount === 0 && this.hitpoints > 0) {\n\t\t\tthis.directionHistory = this.direction;\n\t\t\tthis.posHistory[0] = this.pos[0];\n\t\t\tthis.posHistory[1] = this.pos[1];\n\n\t\t\t// changes position and size to account for bigger attack image\n\t\t\tif (this.direction === 0){\n\t\t\t\tthis.height = 1.8 * this.height;\n\t\t\t\tthis.pos[1] -= 24;\n\t\t\t} else if (this.direction === 2) {\n\t\t\t\tthis.width = 1.8 * this.width;\n\t\t\t\tthis.pos[0] -= 24;\n\t\t\t} else if (this.direction === 4) {\n\t\t\t\tthis.height = 1.8 * this.height;\n\t\t\t} else if (this.direction === 6) {\n\t\t\t\tthis.width = 1.8 * this.width;\n\t\t\t}\n\n\t\t\tthis.direction = this.direction/2 + 8;\n\t\t\tthis.idx = 0; \n\t\t\tthis.swordTipPos();\n\t\t}\n\n\t}\n\n\t// loads all of the link images\n\tloadImages() {\n\t\t// north 'w'\n\t\tthis.lbu1 = new Image();\n\t\tthis.lbu1.onload = () => { return true; }\n\t\tthis.lbu1.src = './images/link/lbu1.png';\n\t\tthis.imageArray.push(this.lbu1);\n\n\t\tthis.lbu2 = new Image();\n\t\tthis.lbu2.onload = () => { return true; }\n\t\tthis.lbu2.src = './images/link/lbu2.png';\n\t\tthis.imageArray.push(this.lbu2);\n\t\n\n\t\t// west 'a'\n\t\tthis.llu2 = new Image();\n\t\tthis.llu2.onload = () => { return true; }\n\t\tthis.llu2.src = './images/link/llu2.png';\n\t\tthis.imageArray.push(this.llu2);\t\t\n\n\t\tthis.llu1 = new Image();\n\t\tthis.llu1.onload = () => { return true; }\n\t\tthis.llu1.src = './images/link/llu1.png';\n\t\tthis.imageArray.push(this.llu1);\n\t\t\n\n\t\t// south 's'\n\t\tthis.lfu1 = new Image();\n\t\tthis.lfu1.onload = () => { return true; }\n\t\tthis.lfu1.src = './images/link/lfu1.png';\n\t\tthis.imageArray.push(this.lfu1);\n\n\t\tthis.lfu2 = new Image();\n\t\tthis.lfu2.onload = () => { return true; }\n\t\tthis.lfu2.src = './images/link/lfu2.png';\n\t\tthis.imageArray.push(this.lfu2);\n\n\n\t\t// east 'd'\n\t\tthis.lru1 = new Image();\n\t\tthis.lru1.onload = () => { return true; }\n\t\tthis.lru1.src = './images/link/lru1.png';\n\t\tthis.imageArray.push(this.lru1);\n\n\t\tthis.lru2 = new Image();\n\t\tthis.lru2.onload = () => { return true; }\n\t\tthis.lru2.src = './images/link/lru2.png';\n\t\tthis.imageArray.push(this.lru2);\n\t\t\n\n\t\t////////////////////////////////////////\n\t\t// load attack animations\n\t\tthis.lba = new Image();\n\t\tthis.lba.onload = () => { return true; }\n\t\tthis.lba.src = './images/link/lba.png';\n\t\tthis.imageArray.push(this.lba);\n\n\t\tthis.lla = new Image();\n\t\tthis.lla.onload = () => { return true; }\n\t\tthis.lla.src = './images/link/lla.png';\n\t\tthis.imageArray.push(this.lla);\n\t\t\n\t\tthis.lfa = new Image();\n\t\tthis.lfa.onload = () => { return true; }\n\t\tthis.lfa.src = './images/link/lfa.png';\n\t\tthis.imageArray.push(this.lfa);\n\n\t\tthis.lra = new Image();\n\t\tthis.lra.onload = () => { return true; }\n\t\tthis.lra.src = './images/link/lra.png';\n\t\tthis.imageArray.push(this.lra);\n\n\t\tthis.linkOver = new Image();\n\t\tthis.linkOver.onload = () => { return true; }\n\t\tthis.linkOver.src = './images/link/link_aloft.png';\n\t}\n\t\n}\n\nmodule.exports = Link;\n\n//# sourceURL=webpack:///./src/link.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nclass MovingObject {\n\tconstructor(options) {\n\t\t\n\t\tthis.pos = options.pos;\n\t\tthis.vel = options.vel;\n\t\tthis.radius = options.radius;\n\t\tthis.color = options.color;\n\t\tthis.map = options.map;\n\t}\n\n\tcenter() {\n\t\tthis.pos;\n\t}\n\n\tdrawObject(ctx, brighten) {\n\n\t\t// if (brighten) ctx.filter = \"brightness(150%)\";\n\t\t// else ctx.filter = \"brightness(100%)\";\n\n\t\tctx.beginPath();\n\t\tctx.fillStyle = this.color;\n\n\n\t\tctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );\n\t\tctx.stroke();\n\t\tctx.fill();\n\n\t};\n\n\tmove() {\n\t\n\t\tthis.pos[0] += this.vel[0];\n\t\tthis.pos[1] += this.vel[1];\n\t}\n\n\t//checks to see if the center is out of bounds\n\tcheckBounds(x,y) {\n\t\tif (this.map === 1) {\n\t\t\tif (y < 70 || y > 700) return false\n\t\t\telse if (x > 710 ) return false;\n\t\t\telse if (x < 70  && !(y>404 && y<468)) return false\n\t\t} \n\t\telse if (this.map === 2) {\n\t\t\tif (y < 90 || y > 700) return false\n\t\t\telse if (x > 710 || x < 30) return false;\n\t\t\telse if (x < 70 && y < 130) return false;\n\n\t\t}\n\n\t\treturn true;\n\t}\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/rupee.js":
/*!**********************!*\
  !*** ./src/rupee.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Rupee {\n\n\tconstructor(pos, img) {\n\n\t\tthis.rupeeImg = img;\n\t\tthis.pos = pos;\n\n\t\tthis.hitPoints = 1;\n\t\tthis.height = 30;\n\t\tthis.width = 30;\n\n\t}\n\n\n\tdrawObject(ctx) {\n\n\t\tctx.drawImage(this.rupeeImg, 0, 0, 100, 150,\n\t\t\tthis.pos[0],\n\t\t\tthis.pos[1],\n\t\t\tthis.width,\n\t\t\tthis.height);\n\n\t}\n\n\tcenter() {\n\t\treturn [this.pos[0] + 15, this.pos[1] + 15];\n\t}\n}\n\nmodule.exports = Rupee;\n\n//# sourceURL=webpack:///./src/rupee.js?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\nclass Skeleton extends Enemy {\n\tconstructor(options) {\n\t\tsuper(options);\n\n\t\tthis.skelImg = options.img;\n\t\tthis.directionDuration = 10;\n\t\tthis.directionCount = 0;\n\n\t\tthis.hitPoints = 1;\n\t\tthis.height = 30;\n\t\tthis.width = 30;\n\n\t}\n\n\n\tdrawObject(ctx) {\n\n\t\t// if (brighten) ctx.filter = \"brightness(170%)\";\n\t\t// else ctx.filter = \"brightness(100%)\";\n\n\t\tlet x;\n\t\tlet y;\n\t\tif (this.deltaX >= 0) {\n\t\t\tx = 420;\n\t\t\ty = 150;\n\t\t} else {\n\t\t\tx = 420;\n\t\t\ty = 120;\n\t\t}\n\n\t\tctx.drawImage(this.skelImg, x, y, 15, 15,\n\t\t\tthis.pos[0],\n\t\t\tthis.pos[1],\n\t\t\tthis.width,\n\t\t\tthis.height);\n\n\n\n\t}\n}\n\n\n\nmodule.exports = Skeleton;\n\n//# sourceURL=webpack:///./src/skeleton.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\nclass Snake extends Enemy {\n\tconstructor(options) {\n\t\tsuper(options);\n\t\t\n\t\tthis.snakeImg = options.img;\n\t\tthis.directionDuration = 10;\n\t\tthis.directionCount = 0;\n\n\t\tthis.hitPoints = 1;\n\t\tthis.height = 30;\n\t\tthis.width = 30;\n\n\t}\n\n\n\tdrawObject(ctx) {\n\n\t\t// if (brighten) ctx.filter = \"brightness(170%)\";\n\t\t// else ctx.filter = \"brightness(100%)\";\n\n\t\tlet x;\n\t\tlet y;\n\t\tif (this.deltaX >= 0) {\n\t\t\tx = 30;\n\t\t\ty = 330;\n\t\t} else {\n\t\t\tx = 0;\n\t\t\ty = 300;\n\t\t}\n\n\t\tctx.drawImage(this.snakeImg,x,y,15,15,\n\t\t\tthis.pos[0],\n\t\t\tthis.pos[1],\n\t\t\tthis.width,\n\t\t\tthis.height);\n\t\n\n\n\t}\n}\n\n\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

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