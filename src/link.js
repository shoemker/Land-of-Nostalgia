const MovingObject = require("./moving_object");

class Link {

	constructor(ctx, img) {
		this.pos = [100, 100];
		this.height = 30;
		this.width = 30;
		this.vel = [0,0];
		this.radius = 15;
		this.color = "green";
		this.ctx = ctx;

		this.imageArray = [];
		this.attackImageArray = [];
		this.loadImages();
		
		this.direction = 4;
		this.idx = 0;

		this.directionHistory = [];
		this.posHistory = [0,0];
		this.attackAnimationCount = 0;
		this.maxCount = 10;

	}

	// switches image for walking animation
	switchImage() {
		if (this.idx === 0) this.idx = 1;
		else this.idx = 0
	}
	

	drawObject(ctx) {

		ctx.drawImage(this.imageArray[this.direction + this.idx], 
									this.pos[0], 
									this.pos[1], 
									this.width, 
									this.height);

		// lets the attack animation stay for several cycles
		// and resets image at the end
		if (this.direction >= 8) {
			if (this.attackAnimationCount === this.maxCount) {
				this.direction = this.directionHistory;

				this.pos[0] = this.posHistory[0];
				this.pos[1] = this.posHistory[1];
				this.attackAnimationCount = 0
				this.height = 30;
				this.width = 30;
			}
			else this.attackAnimationCount++;
		}
	}


	move(deltaPos) {
		if (this.attackAnimationCount === 0) {
			this.moveOnce(deltaPos)
		}

	}

	moveOnce(deltaPos) {
		
		this.direction = 0;
		this.pos[0] += deltaPos[0];
		this.pos[1] += deltaPos[1];

		// sets direction for drawing image
		if (deltaPos[0] === 0 && deltaPos[1] < 0) this.direction = 0;
		else if (deltaPos[0] < 0 && deltaPos[1] === 0) this.direction = 2;
		else if (deltaPos[0] === 0 && deltaPos[1] > 0) this.direction = 4;
		else this.direction = 6;

		this.switchImage();

	}	

	// temporarily sets image to attack image
	attack() {
		if (this.attackAnimationCount === 0 ) {
			this.directionHistory = this.direction;
			this.posHistory[0] = this.pos[0];
			this.posHistory[1] = this.pos[1];

			if (this.direction === 0){
				this.height = 2 *this.height;
				this.pos[1] -= 30;
			} else if (this.direction === 2) {
				this.width = 2 * this.width;
				this.pos[0] -= 30;
			} else if (this.direction === 4) {
				this.height = 2 * this.height;
			} else if (this.direction === 6) {
				this.width = 2*this.width;
			}

			this.direction = this.direction/2 + 8;
			this.idx = 0; 
		}
	}

	// loads all of the link images
	loadImages() {
		// north 'w'
		this.lbu1 = new Image();
		this.lbu1.onload = () => { return true; }
		this.lbu1.src = '../images/link/lbu1.png';
		this.imageArray.push(this.lbu1);

		this.lbu2 = new Image();
		this.lbu2.onload = () => { return true; }
		this.lbu2.src = '../images/link/lbu2.png';
		this.imageArray.push(this.lbu2);
	

		// west 'a'
		this.llu1 = new Image();
		this.llu1.onload = () => { return true; }
		this.llu1.src = '../images/link/llu1.png';
		this.imageArray.push(this.llu1);

		this.llu2 = new Image();
		this.llu2.onload = () => { return true; }
		this.llu2.src = '../images/link/llu2.png';
		this.imageArray.push(this.llu2);		


		// south 's'
		this.lfu1 = new Image();
		this.lfu1.onload = () => { return true; }
		this.lfu1.src = '../images/link/lfu1.png';
		this.imageArray.push(this.lfu1);

		this.lfu2 = new Image();
		this.lfu2.onload = () => { return true; }
		this.lfu2.src = '../images/link/lfu2.png';
		this.imageArray.push(this.lfu2);


		// right 'd'
		this.lru1 = new Image();
		this.lru1.onload = () => { return true; }
		this.lru1.src = '../images/link/lru1.png';
		this.imageArray.push(this.lru1);

		this.lru2 = new Image();
		this.lru2.onload = () => { return true; }
		this.lru2.src = '../images/link/lru2.png';
		this.imageArray.push(this.lru2);
		

		////////////////////////////////////////
		// load attack animations
		this.lba = new Image();
		this.lba.onload = () => { return true; }
		this.lba.src = '../images/link/lba.png';
		this.imageArray.push(this.lba);

		this.lla = new Image();
		this.lla.onload = () => { return true; }
		this.lla.src = '../images/link/lla.png';
		this.imageArray.push(this.lla);
		
		this.lfa = new Image();
		this.lfa.onload = () => { return true; }
		this.lfa.src = '../images/link/lfa.png';
		this.imageArray.push(this.lfa);

		this.lra = new Image();
		this.lra.onload = () => { return true; }
		this.lra.src = '../images/link/lra.png';
		this.imageArray.push(this.lra);
	}
	
}

module.exports = Link;