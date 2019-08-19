const Util = require("./utils");

class MovingObject {
	constructor(options) {
		this.pos = options.pos;
		this.vel = options.vel;
		this.radius = options.radius;
		this.color = options.color;
	}

	center() {
		this.pos;
	}

	drawObject(ctx, brighten) {

		// if (brighten) ctx.filter = "brightness(150%)";
		// else ctx.filter = "brightness(100%)";

		ctx.beginPath();
		ctx.fillStyle = this.color;


		ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI );
		ctx.stroke();
		ctx.fill();

	};

	move() {
		// debugger
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}

	//checks to see if the center is out of bounds
	checkBounds(x,y) {
		// debugger
		if (y < 70 || y > 700) return false
		else if (x > 710 ) return false;
		else if (x < 70  && !(y>404 && y<468)) return false

		return true;
	}
}

module.exports = MovingObject;