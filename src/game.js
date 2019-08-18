const Util = require("./utils");
const Enemy = require("./enemy");
const Snake = require("./snake");
const Rupee = require("./rupee");
const Link = require("./link");
const Background1 = require("./background1")

class Game {

	constructor(dim_x, dim_y, map){
	
		this.enemies = [];
		this.rupees = [];
		this.dim_x = dim_x;
		this.dim_y = dim_y;
		this.link;
		this.map = map;
		this.countToThirty = 0;
		this.messageCount = 0;
		this.message = "Good Luck!";

		this.opening = true;

		let snakeImg = this.loadSnake();

		this.rupeeImg = this.loadRupee();

		this.add(new Snake({
			pos: [100, 100],
			vel: [1, 1],
			radius: 15, 
			img: snakeImg
		}))

		this.add(new Snake({
			pos: [100, 400],

			vel: [1, 1],
			radius: 15,
			img: snakeImg
		}))
		
		this.add(new Snake({
			pos: [650, 600],
			vel: [1, 1],
			radius: 15,
			img: snakeImg
		}))


		this.loadBackground1();

		
	}

	add(object) {
		if (object instanceof Enemy){
			this.enemies.push(object);
			return this.enemies;
		}
		else if (object instanceof Link){
			this.link = object;
			return this.link;
		}
		else if (object instanceof Rupee){
			this.rupees.push(object);
			return this.rupees;
		}

	}
	
	drawOpening(ctx) {
			
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "35px HalfBoldPixel";
		
		ctx.fillText("Welcome to Land of Nostalgia!", this.dim_x / 2, 200);
		ctx.fillText("Click to Start", this.dim_x / 2, 250);
	}

	drawClosing(ctx) {

		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "35px HalfBoldPixel";

		ctx.fillText("Sorry, Link has no more hitpoints.", this.dim_x / 2, 200);
		ctx.fillText("Game Over!", this.dim_x / 2, 250);

	}

	draw(ctx) {
		
		ctx.clearRect(0,0,this.dim_x, this.dim_y);
		
		this.drawMessage(ctx);

		this.drawBackgroundMap(ctx);

		this.drawRupeesCount(ctx);
		
		this.drawHitpointsBar(ctx);

		if (this.link.hitpoints <= 0) {
			this.drawClosing(ctx);
			this.enemies = [];
		} 
	
		this.enemies.forEach(ele => { ele.drawObject(ctx); });
		this.rupees.forEach(ele => { ele.drawObject(ctx); });
	

		if (this.countToThirty > 0 && this.countToThirty%2 === 0 && this.collision) 
			this.link.drawObject(ctx, true );
		else this.link.drawObject(ctx, false);

		if (this.opening) this.drawOpening(ctx);
	}


	drawMessage(ctx){
		if (this.messageCount === 30) this.messageCount = 0;
		else if (this.messageCount > 0 || 
							this.message.startsWith("Good Luck!")) {

			ctx.font = "20px HalfBoldPixel";
			
			ctx.fillStyle = "white";
			ctx.fillText(this.message, this.dim_x / 2, 18);
			this.messageCount++;
		}
	}

	drawBackgroundMap(ctx, map = 1) {
		if (map === 1) {
	
			let b = new Background1(ctx, this.background1, this.dim_x, this.dim_y);
		}
	}

	drawRupeesCount(ctx) {
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "20px HalfBoldPixel";
		ctx.fillText("Rupees", 50,50);
		ctx.fillText(this.link.rupees, 50, 70);
	}

	drawHitpointsBar(ctx) {
		ctx.fillStyle = "white";
		ctx.fillRect(720, 40, 20, 70);
		ctx.fillStyle = "green";
		let hp = this.link.hitpoints;

		if (hp > 2) ctx.fillStyle = "green";
		else ctx.fillStyle = "red";
		let offset = 60 - hp*10;
		ctx.fillRect(725,45,10,60);
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "15px HalfBoldPixel";
		ctx.fillText("HP", 730, 125);
	}



	step(timeDelta) {
		// debugger
		if (this.countToThirty === 15) {
			this.countToThirty = 0;
			this.collision = false;
		}
		else if (this.countToThirty > 0) this.countToThirty++;
		else {
			this.checkCollisions();
			this.checkHit();
		}

		this.moveObjects(timeDelta);
	}

	checkCollisions() {

		this.collision = false;
		// debugger
		this.enemies.forEach(enemy => { 
			let distance = Util.distance(this.link.center(),enemy.center());

			if (distance < (this.link.radius + enemy.radius +2)) {
				this.countToThirty++;
				this.collision = true;
				this.message = "Ouch!";
				
				this.link.reduceHitPoints();
		
				this.messageCount=1;
			}
		})

		this.rupees.forEach((rupee,i) => { 
			let distance = Util.distance(this.link.center(),rupee.center());
			if (distance < 30 ) {
				this.message = "You found a rupee!"
				this.rupees.splice(i, 1)
				this.link.rupees++;
				this.messageCount = 1;
			}
		});
	}

	checkHit() {
		const tip = this.link.swordTipPos();
		if (tip !== null ) {
			this.enemies.forEach((enemy,i) => { 
				const distance = Util.distance(tip, enemy.center());

				if (distance < enemy.radius) {
					this.countToThirty++;		
					this.message = "Hit!"	
					enemy.hitPoints--;
					this.messageCount=1;
					if (enemy.hitPoints <= 0)		{
						this.enemies.splice(i,1)
						this.message = "Enemy Killed";
						this.add(new Rupee(enemy.pos, this.rupeeImg));

					}
				} 
			})
	 	}
	}

	moveObjects(timeDelta) {
		this.enemies.forEach(enemy => { enemy.move(timeDelta); });
	}


	loadBackground1() {
		this.background1 = new Image();
		this.background1.onload = () => { return true; }
		this.background1.src = './images/tiles.png';
	}

	loadSnake() {
		// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)
		let snake1 = new Image();
		snake1.onload = () => { return true; }
		snake1.src = './images/enemies.png';
		return snake1;
	}

	loadRupee() {
		let rup = new Image();
		rup.onload = () => { return true; }
		rup.src = './images/BotW_Green_Rupee_Icon.png';
		return rup;
	}
	
}


module.exports = Game;