const Util = require("./utils");
const Enemy = require("./enemy");
const Snake = require("./snake");
const Skeleton = require("./skeleton");
const Rupee = require("./rupee");
const Link = require("./link");
const Fireball = require("./fireball");
const Background1 = require("./background1")
const Background2 = require("./background2")

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


		this.rupeeImg = this.loadRupee();

		// load images
		this.loadEnemiesImg();
		this.loadBackground1();
		this.loadBackground2();
		this.loadPlants();
		this.loadFireball();
	


		this.addEnemies();
		this.fireball = null;
		
	}

	addEnemies() {
		
		if (this.map === 2) {
			this.add(new Snake({
				pos: [100, 100],
				vel: [1, 1],
				radius: 15,
				img: this.enemiesImg
			}))

			this.add(new Snake({
				pos: [100, 400],

				vel: [1, 1],
				radius: 15,
				img: this.enemiesImg
			}))

			this.add(new Snake({
				pos: [650, 600],
				vel: [1, 1],
				radius: 15,
				img: this.enemiesImg
			}))
		} else if (this.map === 1) {
		
			this.add(new Skeleton({
				pos: [100, 100],
				vel: [1, 1],
				radius: 15,
				img: this.enemiesImg
			}))

			this.add(new Skeleton({
				pos: [100, 400],

				vel: [1, 1],
				radius: 15,
				img: this.enemiesImg
			}))

			this.add(new Skeleton({
				pos: [650, 600],
				vel: [1, 1],
				radius: 15,
				img: this.enemiesImg
			}))
		}
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


	draw(ctx) {
		
		ctx.clearRect(0,0,this.dim_x, this.dim_y);
		
		this.drawMessage(ctx);

		this.drawBackgroundMap(ctx, this.map);

		this.drawRupeesCount(ctx);
		
		this.drawHitpointsBar(ctx);

		// ctx.drawImage(this.fireball, 150, 0, 600, 600, 100, 300, 15, 15);


		if (this.link.hitpoints <= 0) {
			this.drawClosing(ctx);
			this.enemies = [];
		} 
	
		this.enemies.forEach(ele => { ele.drawObject(ctx); });
		this.rupees.forEach(ele => { ele.drawObject(ctx); });
		if (this.fireball) this.fireball.drawObject(ctx);
	

		if (this.countToThirty > 0 && this.countToThirty%2 === 0 && this.collision) 
			this.link.drawObject(ctx, true );
		else this.link.drawObject(ctx, false);

		if (this.opening) this.drawOpening(ctx);
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

	drawMessage(ctx){
		if (this.messageCount === 30) this.messageCount = 0;
		else if (this.messageCount > 0 || 
							this.message.startsWith("Good Luck!")) {

			ctx.font = "30px HalfBoldPixel";
			
			ctx.fillStyle = "white";
			ctx.fillText(this.message, this.dim_x / 2, 23);
			this.messageCount++;
		}
	}

	drawBackgroundMap(ctx, map) {
		if (map === 1) {
			let b = new Background1(ctx, this.dim_x, this.dim_y, this.background1);
		} else if (map === 2) {
			let b = new Background2(ctx, this.dim_x, this.dim_y, this.background2, this.plants);
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
		ctx.fillRect(720, 40, 20, 90);
		let hp = this.link.hitpoints;

		if (hp > 2) ctx.fillStyle = "green";
		else ctx.fillStyle = "red";
		let offset = 80 - hp*10;
		ctx.fillRect(725, 45 + offset, 10, 80 - offset);
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "15px HalfBoldPixel";
		ctx.fillText("HP", 731, 145);
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
			
				this.rupees.splice(i, 1)
				this.link.rupees++;
				if (this.link.rupees === 3) {
					this.message = "Fireballs when you attack!"
					this.link.unlock = true;
				}
				else this.message = "You found a rupee!"

				this.messageCount = 1;
			}
		});
	}

	checkHit() {
		const tip = this.link.swordTipPos();

		this.enemies.forEach((enemy,i) => { 
			if (tip !== null) {
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
			}

			if (this.fireball && Util.distance(this.fireball.center(), enemy.center()) < 21) {
				this.countToThirty++;
				this.message = "Hit!"
				enemy.hitPoints--;
				this.messageCount = 1;
				if (enemy.hitPoints <= 0) {
					this.enemies.splice(i, 1)
					this.message = "Enemy Killed";
					this.add(new Rupee(enemy.pos, this.rupeeImg));
				}
			}

			
		})
		
	}

	launchFireball() {
		let position = this.link.swordTipPos();
		let direction = this.link.direction;
		let velocity;
		
		switch (direction) {
			case 8:
				velocity = [0, -1];
				break;
			case 9:
				velocity = [-1, 0];
				break;
			case 10:
				velocity = [0, 1];
				break;
			case 11:
				velocity = [1, 0];
				break;				
			default:
				velocity = [0, 0];
		}

		this.fireball = new Fireball({
			pos: [position[0] - 7, position[1] - 7],
			vel: velocity,
			radius: 15,
			img: this.fireballImg
		})
	}

	moveObjects(timeDelta) {
		this.enemies.forEach(enemy => { enemy.move(timeDelta); });
		if (this.fireball) this.fireball.move(4);
	}


	loadBackground1() {
		this.background1 = new Image();
		this.background1.onload = () => { return true; }
		this.background1.src = './images/tiles.png';
	}

	loadBackground2() {
		this.background2 = new Image();
		this.background2.onload = () => { return true; }
		this.background2.src = './images/terrain_atlas.png';
	}

	loadPlants() {
		this.plants = new Image();
		this.plants.onload = () => { return true; }
		this.plants.src = './images/plant_repack.png';
	}

	loadFireball() {
		this.fireballImg = new Image();
		this.fireballImg.onload = () => { return true; }
		this.fireballImg.src = './images/fireball.png';
	}

	loadEnemiesImg() {
		// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)
		this.enemiesImg = new Image();
		this.enemiesImg.onload = () => { return true; }
		this.enemiesImg.src = './images/enemies.png';
	}

	loadRupee() {
		let rup = new Image();
		rup.onload = () => { return true; }
		rup.src = './images/BotW_Green_Rupee_Icon.png';
		return rup;
	}
	
}


module.exports = Game;