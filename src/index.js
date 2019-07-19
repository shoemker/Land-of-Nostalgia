const MovingObject = require("./moving_object.js");
const Game = require("./game");
const GameView = require("./game_view");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = 1000;

	canvasEl.height =750;

	const ctx = canvasEl.getContext("2d");

	g = new GameView(ctx);

	g.start(ctx)

	// m = new MovingObject({ pos: [30, 30], 
	// 											vel: [10, 10], 
	// 											radius: 25, 
	// 											color: "green" })

	// m.draw(ctx);
	// ctx.clearRect(0, 0, 1000, 600);

	// m.move(ctx);


});

