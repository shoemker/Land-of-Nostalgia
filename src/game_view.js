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
		setInterval(this.moveAndDraw, 20);
	}

	moveAndDraw() {
		this.game.moveObjects();
		this.game.draw(this.ctx, this.img);

	}

	bindKeyHandlers() {
		const MOVES = {
			w: [0, -30],
			a: [-30, 0],
			s: [0, 30],
			d: [30, 0] }

			const that = this;
		Object.keys(MOVES).forEach((ele) => {

			// key(ele, () => { console.log(MOVES[ele]); })
			key(ele, () => { that.link.moveOnce(MOVES[ele]); })
			// key(ele, function () { this.link.moveOnce(MOVES[ele]); });
		});
	}

}

module.exports = GameView;