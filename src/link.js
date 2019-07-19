const MovingObject = require("./moving_object");

class Link {

	constructor(ctx, img) {
		this.pos = [100, 100];
		this.vel = [0,0];
		this.radius = 15;
		this.color = "green";
		this.ctx = ctx;

		this.imageArray = [];
		this.attackImageArray = [];
		this.loadImages();
		this.dir = 3;
		this.idx = 0;

		this.history = [];

	}


	switchImage() {
		if (this.idx === 0) this.idx = 1;
		else this.idx = 0
	}
	

	drawObject(ctx) {

		ctx.drawImage(this.imageArray[this.dir][this.idx], this.pos[0], this.pos[1], 30, 30);
	}


	move(deltaPos) {
		this.moveOnce(deltaPos)

	}

	moveOnce(deltaPos) {

		this.dir = 0;
		this.pos[0] += deltaPos[0];
		this.pos[1] += deltaPos[1];

		if (deltaPos[0] === 0 && deltaPos[1] < 0) this.dir = 0;
		else if (deltaPos[0] < 0 && deltaPos[1] === 0) this.dir = 1;
		else if (deltaPos[0] === 0 && deltaPos[1] > 0) this.dir = 2;
		else this.dir = 3;

		this.switchImage();

	}

	attack() {
		// this.history = [this.dir, this.idx];
		console.log("space");
	}

	loadImages() {
		this.lbu1 = new Image();
		this.lbu1.onload = () => { return true; }
		this.lbu1.src = '../images/link/lbu1.png';

		this.lbu2 = new Image();
		this.lbu2.onload = () => { return true; }
		this.lbu2.src = '../images/link/lbu2.png';

		// north 'w'
		this.imageArray.push([this.lbu1, this.lbu2])

		this.llu1 = new Image();
		this.llu1.onload = () => { return true; }
		this.llu1.src = '../images/link/llu1.png';

		this.llu2 = new Image();
		this.llu2.onload = () => { return true; }
		this.llu2.src = '../images/link/llu2.png';

		// west 'a'
		this.imageArray.push([this.llu1, this.llu2])


		this.lfu1 = new Image();
		this.lfu1.onload = () => { return true; }
		this.lfu1.src = '../images/link/lfu1.png';

		this.lfu2 = new Image();
		this.lfu2.onload = () => { return true; }
		this.lfu2.src = '../images/link/lfu2.png';

		// south 's'
		this.imageArray.push([this.lfu1,this.lfu2])

		this.lru1 = new Image();
		this.lru1.onload = () => { return true; }
		this.lru1.src = '../images/link/lru1.png';

		this.lru2 = new Image();
		this.lru2.onload = () => { return true; }
		this.lru2.src = '../images/link/lru2.png';

		// right 'd'
		this.imageArray.push([this.lru1, this.lru2])
		

		////////////////////////////////////////
		// load attack animations
		this.lba = new Image();
		this.lba.onload = () => { return true; }
		this.lba.src = '../images/link/lba.png';
		this.attackImageArray.push(this.lba);

		this.lla = new Image();
		this.lla.onload = () => { return true; }
		this.lla.src = '../images/link/lla.png';
		this.attackImageArray.push(this.lla);
		
		this.lfa = new Image();
		this.lfa.onload = () => { return true; }
		this.lfa.src = '../images/link/lfa.png';
		this.attackImageArray.push(this.lfa);

		this.lra = new Image();
		this.lra.onload = () => { return true; }
		this.lra.src = '../images/link/lra.png';
		this.attackImageArray.push(this.lra);
	}
	
}

module.exports = Link;