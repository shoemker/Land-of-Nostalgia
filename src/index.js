const GameView = require("./game_view");


document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = 750;

	canvasEl.height =750;

	const ctx = canvasEl.getContext("2d");

	g = new GameView(ctx,canvasEl.width, canvasEl.height);

	g.start(ctx)

	canvasEl.onclick = function () {g.openingOff(); }

});

window.addEventListener('keydown', function (e) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});
	// document.addEventListener("onkeydown", function (event) {
	// 		event.preventDefault()
	// 	});