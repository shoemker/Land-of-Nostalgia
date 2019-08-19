
class Background2 {
	constructor(ctx, dim_x, dim_y, img, imgPlants) {
		this.ctx = ctx;
		this.img = img;
		this.imgPlants = imgPlants;
		this.dim_x = dim_x;
		this.dim_y = dim_y;
		this.draw();
	}


	draw() {
		this.ctx.fillStyle = "#B88751";

		this.ctx.fillRect(0, 30, this.dim_x, this.dim_y);

		// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)

		
		//top
		this.ctx.drawImage(this.img, 800, 50, 50, 110, 0, 30, 900, 64);

		this.ctx.drawImage(this.img, 800, 50, 50, 110, 0, 690, 900, 64);

		//puddle
		this.ctx.drawImage(this.img, 300, 355, 80, 80, 300, 410, 64, 64);
		this.ctx.drawImage(this.img, 300, 355, 80, 80, 600, 160, 64, 64);

		//cactus
		this.ctx.drawImage(this.imgPlants, 350, 190, 80, 100, 50, 110, 64, 64);		
		this.ctx.drawImage(this.imgPlants, 350, 190, 80, 100, 500, 610, 64, 64);	
		this.ctx.drawImage(this.imgPlants, 350, 190, 80, 100, 100, 510, 64, 64);	

	

	}
}

module.exports = Background2