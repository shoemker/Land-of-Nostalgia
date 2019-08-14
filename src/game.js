const Util = require("./utils");
const Enemy = require("./enemy");
const Snake = require("./snake");
const Link = require("./link");
const Background1 = require("./background1")

class Game {

	constructor(dim_x, dim_y, map){
		this.enemies = [];
		this.dim_x = dim_x;
		this.dim_y = dim_y;
		this.link;
		this.map = map;
		this.countToThirty = 0;
		this.messageCount = 0;
		this.message = "Use a,w,s,d to move and space to attack, Kill all enemies! Only touch them with your sword.";

		this.openingMessage = true;

		this.add(new Snake({
			pos: [100, 100],
			vel: [1, 1],
			radius: 15, 
			color: "blue",
			map: this.map
		}))

		this.add(new Snake({
			pos: [100, 400],

			vel: [1, 1],
			radius: 15,
			color: "red",
			map: this.map
		}))
		
		this.add(new Snake({
			pos: [650, 600],
			vel: [1, 1],
			radius: 15,
			color: "blue",
			map: this.map
		}))

		this.loadBackground1();

		
	}

	add(object) {
		if (object instanceof Enemy){
			this.enemies.push(object);
			return this.enemies;
		}
		if (object instanceof Link){
			this.link = object;
			return this.link;
		}
	}

	draw(ctx) {

		ctx.clearRect(0,0,this.dim_x, this.dim_y);
		
		this.drawMessage(ctx);

		this.drawBackgroundMap(ctx);
		
		this.drawHitpointsBar(ctx);

		this.enemies.forEach(ele => { ele.drawObject(ctx); });
		
		if (this.countToThirty > 0 && this.countToThirty%2 === 0 && this.collision) 
			this.link.drawObject(ctx, true );
		else this.link.drawObject(ctx, false);

		if (this.openingMessage) {
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Welcome to Land of Nostalgia", this.dim_x / 2, 200);
		}
	}


	drawMessage(ctx){
		if (this.messageCount === 30) this.messageCount = 0;
		else if (this.messageCount > 0 || 
							this.message.startsWith("Use a,w,s,d")) {

			ctx.font = "14px PressStart2P";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText(this.message, this.dim_x / 2, 18);
			this.messageCount++;
		}
	}

	drawBackgroundMap(ctx, map = 1) {
		if (map === 1) {
			let b = new Background1(ctx, this.background1, this.dim_x, this.dim_y);
		}
	}

	drawHitpointsBar(ctx) {
		ctx.fillStyle = "white";
		ctx.fillRect(720, 40, 20, 65);
		ctx.fillStyle = "green";
		let hp = this.link.hitpoints;

		if (hp > 2) ctx.fillStyle = "green";
		else ctx.fillStyle = "red";
		let offset = 60 - hp*10;
		ctx.fillRect(725,45+offset,10,55-offset);
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("HP", 730, 130);
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
			const distance = Util.distance(this.link.center(),enemy.center());

			if (distance < (this.link.radius + enemy.radius +2)) {
				this.countToThirty++;
				this.collision = true;
				this.message = "Ouch!";
				
				this.link.reduceHitPoints();
				this.messageCount=1;
			}
		})
	}

	checkHit() {
		const tip = this.link.swordTipPos();
		if (tip !== null ) {
			this.enemies.forEach((enemy,i) => { 
				const distance = Util.distance(tip, enemy.pos);

				if (distance < enemy.radius) {
					this.countToThirty++;		
					this.message = "Hit!"	
					enemy.hitPoints--;
					this.messageCount=1;
					if (enemy.hitPoints <= 0)		{
						this.enemies.splice(i,1)
						this.message = "Enemy Killed";
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
	
}


module.exports = Game;