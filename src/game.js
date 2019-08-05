const Util = require("./utils");
const Enemy = require("./enemy");
const Link = require("./link");


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

		this.add(new Enemy({
			pos: [100, 100],
			vel: [1, 1],
			radius: 15, 
			color: "blue",
			map: this.map
		}))

		this.add(new Enemy({
			pos: [100, 400],
			vel: [1, 1],
			radius: 15,
			color: "red",
			map: this.map
		}))
		
		this.add(new Enemy({
			pos: [650, 600],
			vel: [1, 1],
			radius: 15,
			color: "blue",
			map: this.map
		}))

		this.loadImage();

		
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

		this.drawBackgroundMap (ctx);

		this.enemies.forEach(ele => { ele.drawObject(ctx); });
		
		if (this.countToThirty > 0 && this.countToThirty%2 === 0 && this.collision) 
			this.link.drawObject(ctx, true );
		else this.link.drawObject(ctx, false);
	}


	drawMessage(ctx){
		if (this.messageCount === 30) this.messageCount = 0;
		else if (this.messageCount > 0 || 
							this.message.startsWith("Use a,w,s,d")) {

			ctx.font = "20px Comic Sans MS";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText(this.message, this.dim_x / 2, 18);
			this.messageCount++;
		}
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

		const linkCenter = this.link.center();

		const rad = this.link.radius;
		this.collision = false;
		// debugger
		this.enemies.forEach(enemy => { 
			const distance = Util.distance(linkCenter,enemy.pos);

			if (distance < (rad + enemy.radius +2)) {
				this.countToThirty++;
				this.collision = true;
				this.message = "Ouch!";
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

	drawBackgroundMap(ctx, map = 1) {

			if (map === 1) {
				ctx.fillStyle = "#8DC435";
				ctx.fillRect(0, 20, this.dim_x, this.dim_y);

				for (let i = 0; i < 11; i++) { 
					//top
					ctx.drawImage(this.background, 128, 0, 64, 64, i*64, 20, 64, 64);
					
					//trail
					ctx.drawImage(this.background, 64, 0, 64, 64, i * 64, 404, 64, 64);




					// //bottom
					if (i !== 0 && i!=15) {
						ctx.drawImage(this.background, 192, 0, 64, 64, i * 64, 660, 64, 64);
						ctx.drawImage(this.background, 128, 0, 64, 64, i * 64, 724, 64, 64);
					}
				}

				//clumps
				ctx.drawImage(this.background, 192, 0, 64, 64, 128, 148, 64, 64);
				ctx.drawImage(this.background, 128, 0, 64, 64, 128, 212, 64, 64);

				ctx.drawImage(this.background, 192, 0, 64, 64, 192, 148, 64, 64);
				ctx.drawImage(this.background, 128, 0, 64, 64, 192, 212, 64, 64);

				ctx.drawImage(this.background, 256, 0, 64, 64, 440, 468, 64, 64);
				ctx.drawImage(this.background, 256, 0, 64, 64, 440, 532, 64, 64);
				ctx.drawImage(this.background, 256, 0, 64, 64, 504, 468, 64, 64);
				
				for (let i = 0; i <6; i++) {
					// left side
			
					if (i!==2)ctx.drawImage(this.background, 192, 0, 64, 64, 0, 84 + i * 2 * 64, 64, 64);
					if (i!==3)ctx.drawImage(this.background, 128, 0, 64, 64, 0, 20 + i * 2 * 64, 64, 64);
					

					//right side
					
					ctx.drawImage(this.background, 192, 0, 64, 64, 700, 84 + i * 2 * 64, 64, 64);
					ctx.drawImage(this.background, 128, 0, 64, 64, 700, 20 + i * 2 * 64, 64, 64);
			

				}
			}
		}


	loadImage() {
		this.background = new Image();
		this.background.onload = () => { return true; }
		this.background.src = './images/tiles.png';
	}
	
}


module.exports = Game;