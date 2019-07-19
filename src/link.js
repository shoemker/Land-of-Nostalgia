const MovingObject = require("./moving_object");

class Link {

	constructor(ctx, img) {
		this.pos = [100, 100];
		this.vel = [0,0];
		this.radius = 15;
		this.color = "green";
		this.ctx = ctx;

		this.lfu1 = new Image();
		this.lfu1.onload = () => {
			return true;
		}
		this.lfu1.src = '../images/link/lfu1.png';

		this.lfu2 = new Image();
		this.lfu2.onload = () => {
			return true;
		}
		this.lfu2.src = '../images/link/lfu2.png';

		 this.image = this.lfu1;
	}

	switchImage() {
		if (this.image === this.lfu1) this.image = this.lfu2;
		else this.image = this.lfu1;
	}
	

	drawObject(ctx) {
		// ctx.beginPath();
		// ctx.fillStyle = this.color;
		// //x, y, width, height

		// ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
		// ctx.stroke();
		// ctx.fill();

		ctx.drawImage(this.image, this.pos[0], this.pos[1], 30, 30);
	
	}


	move(deltaPos) {
		this.moveOnce(deltaPos)

	}

	moveOnce(deltaPos) {
		this.pos[0] += deltaPos[0];
		this.pos[1] += deltaPos[1];
		this.switchImage();
	}
}

module.exports = Link;