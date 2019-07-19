const Util = require("./utils");
const Enemy = require("./enemy");
const Link = require("./link");


class Game {

	constructor(dim_x, dim_y){
		this.enemies = [];
		this.dim_x = dim_x;
		this.dim_y = dim_y;
		this.link

		this.add(new Enemy({pos: [30, 30],
	 											vel: [1, 1],
	 											radius: 25, 
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

	draw(ctx, img) {

		ctx.clearRect(0,0,this.dim_x, this.dim_y);
	
		// this.enemies[0].drawObject(ctx);
		this.enemies.forEach(ele => { ele.drawObject(ctx); });
		this.link.drawObject(ctx, img);
	}

	moveObjects() {
		this.enemies.forEach(ele => { ele.move(); });
	}
}


module.exports = Game;