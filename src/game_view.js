const Game = require("./game");
const Link = require("./link");



class GameView {


	constructor(ctx, width, height){
		this.width = width;
		this.ctx = ctx;
		this.game = new Game(width, height, 1);

		this.link = this.game.add(new Link(this.ctx));

	}

	// start(){

	// 	this.bindKeyHandlers();
	// 	setInterval(this.moveAndDraw, 30);
	// }

	openingOff(){
		this.game.opening = false
	}

	start() {
		this.bindKeyHandlers();
		this.lastTime = 0;
		// start the animation
		requestAnimationFrame(this.animate.bind(this));
	};

	animate(time) {
		const timeDelta = time - this.lastTime;

		if (!this.game.opening) this.game.step(timeDelta);

		// if (this.link.pos[0])
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
			key(ele, () => { that.link.move(MOVES[ele], this.game.opening); })
		});

		key("space", () => { that.link.attack(); });


	}

}

module.exports = GameView;