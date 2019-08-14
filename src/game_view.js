const Game = require("./game");
const Enemy = require("./enemy");
const Link = require("./link");



class GameView {


	constructor(ctx, width, height){
		this.ctx = ctx;
		this.game = new Game(width, height, 1);

		this.link = this.game.add(new Link(this.ctx));

		// this.bindKeyH  andlers = this.bindKeyHandlers.bind(this);
	}

	// start(){

	// 	this.bindKeyHandlers();
	// 	setInterval(this.moveAndDraw, 30);
	// }

	start() {
		this.bindKeyHandlers();
		this.lastTime = 0;
		// start the animation
		requestAnimationFrame(this.animate.bind(this));
	};

	animate(time) {
		const timeDelta = time - this.lastTime;

		this.game.step(timeDelta);
		this.game.draw(this.ctx);
		this.lastTime = time;

		// every call to animate requests causes another call to animate
		requestAnimationFrame(this.animate.bind(this));
	};



	bindKeyHandlers() {
		
		const dist = 15;

		const MOVES = {
			w: [0, -dist],
			a: [-dist, 0],
			s: [0, dist],
			d: [dist, 0] }

			const that = this;

		Object.keys(MOVES).forEach((ele) => {
			key(ele, () => { that.link.move(MOVES[ele]); })
		});

		key("space", () => { that.link.attack(); });


	}

}

module.exports = GameView;