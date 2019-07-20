const Util = require("./utils");
const Enemy = require("./enemy");
const Link = require("./link");


class Game {

	constructor(dim_x, dim_y){
		this.enemies = [];
		this.dim_x = dim_x;
		this.dim_y = dim_y;
		this.link;
		this.countToThirty = 0;

		this.add(new Enemy({pos: [50, 30],
	 											vel: [1, 1],
	 											radius: 15, 
												color: "blue"}))

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
		
		this.enemies.forEach(ele => { ele.drawObject(ctx); });
		
		if (this.countToThirty > 0 && this.countToThirty%3 === 0) 
			this.link.drawObject(ctx, true );
		else this.link.drawObject(ctx, false);
	}

	step() {
		// debugger
		if (this.countToThirty === 30) this.countToThirty = 0;
		else if (this.countToThirty > 0) this.countToThirty++;
		else {
			this.checkCollisions();
			this.checkHit();
		}

		this.moveObjects();
	}

	checkCollisions() {

		const linkCenter = this.link.center();

		const rad = this.link.radius;

		this.enemies.forEach(enemy => { 
			const distance = Util.distance(linkCenter,enemy.pos);

			if (distance < (rad + enemy.radius +2)) {
				this.countToThirty++;
				console.log("collision");
			}
		})
	}

	checkHit() {
		const tip = this.link.swordTipPos();
		if (tip !== null ) {
			this.enemies.forEach(enemy => { 
				const distance = Util.distance(tip, enemy.pos);

				if (distance < enemy.radius) {
					this.countToThirty++;					
					console.log("hit");
				} 
			})
	 	}
	}

	moveObjects() {
		this.enemies.forEach(enemy => { enemy.move(); });
	}
}


module.exports = Game;