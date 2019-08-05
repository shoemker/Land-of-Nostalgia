
const enemy = require("./enemy");

class Snake extends Enemy {
	constructor(options) {
		super(options);

		this.directionDuration = 10;
		this.directionCount = 0;
		this.deltaX = 0;
		this.deltaY = 0;
		this.hitPoints = 2;

}



module.exports = Snake;