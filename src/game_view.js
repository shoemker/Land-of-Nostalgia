const Game = require("./game");
const Enemy = require("./enemy");
const Link = require("./link");



class GameView {


	constructor(ctx){
		this.ctx = ctx;
		this.game = new Game(1000, 750);
		this.moveAndDraw = this.moveAndDraw.bind(this);
		this.link = this.game.add(new Link(this.ctx));


		this.bindKeyHandlers = this.bindKeyHandlers.bind(this);
	}

	start(){

		this.bindKeyHandlers();
		setInterval(this.moveAndDraw, 30);
	}

	moveAndDraw() {
		this.game.step();
		this.game.draw(this.ctx, this.img);

	}

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