const MovingObject = require("./moving_object.js");
const Game = require("./game");
const GameView = require("./game_view");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = 1050;

	canvasEl.height =750;

	const ctx = canvasEl.getContext("2d");

	g = new GameView(ctx,canvasEl.width, canvasEl.height);

	g.start(ctx)

});

