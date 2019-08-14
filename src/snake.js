
const Enemy = require("./enemy");

class Snake extends Enemy {
	constructor(options) {
		super(options);

		this.directionDuration = 10;
		this.directionCount = 0;

		this.hitPoints = 1;
		this.height = 30;
		this.width = 30;
		this.loadImages();
	}


	drawObject(ctx, brighten) {

		// if (brighten) ctx.filter = "brightness(170%)";
		// else ctx.filter = "brightness(100%)";

		let x;
		let y;
		if (this.deltaX >= 0) {
			x = 30;
			y = 330;
		} else {
			x = 0;
			y = 300;
		}

		ctx.drawImage(this.snake1,x,y,15,15,
			this.pos[0],
			this.pos[1],
			this.width,
			this.height);
	}



	loadImages() {
		// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)
		this.snake1 = new Image();
		this.snake1.onload = () => { return true; }
		this.snake1.src = './images/enemies.png';


		// this.imageArray.push(this.snake1);
	}



	// move() {}
}



module.exports = Snake;