const MovingObject = require("./moving_object");

class Link {

	constructor() {
			this.pos = [20, 20];
			this.vel = [0,0];
			this.radius = 15;
			this.color = "green";
	}


	

	drawObject(ctx) {
		// ctx.beginPath();
		// ctx.fillStyle = this.color;
		// //x, y, width, height

		// ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
		// ctx.stroke();
		// ctx.fill();

		let img = new Image();
		img.onload = () => {
			ctx.drawImage(img, this.pos[0], this.pos[1], 20, 20 )
		}
		img.src = '../images/lfu.png';
	}


	move(deltaPos) {
		this.moveOnce(deltaPos)
	}

	moveOnce(deltaPos) {
		this.pos[0] += deltaPos[0];
		this.pos[1] += deltaPos[1];
	}
}

module.exports = Link;