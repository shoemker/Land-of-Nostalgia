const Util = require("./utils");

class MovingObject {
	constructor(options) {
		this.pos = options.pos;
		this.vel = options.vel;
		this.radius = options.radius;
		this.color = options.color;
		this.game = options.game;
	}

	drawObject(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		//x, y, width, height

		ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );
		ctx.stroke();
		ctx.fill();

	};

	move() {
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}

}

module.exports = MovingObject;