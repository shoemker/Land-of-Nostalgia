

class Background1 {
	constructor(ctx,img, dim_x, dim_y) {
		this.ctx = ctx;
		this.img = img;
		this.dim_x = dim_x;
		this.dim_y = dim_y;
		this.draw();
	}


	draw () {
		this.ctx.fillStyle = "#8DC435";
		this.ctx.fillRect(0, 20, this.dim_x, this.dim_y);

		for(let i = 0; i < 11; i++) {
			//top
			this.ctx.drawImage(this.img, 128, 0, 64, 64, i * 64, 20, 64, 64);

			//trail
			this.ctx.drawImage(this.img, 64, 0, 64, 64, i * 64, 404, 64, 64);

			// drawImage(this.image, xOnSheet,yOnSheet,width, height,xcoord, ycoord, width, height)


			// //bottom
			if (i !== 0 && i != 15) {
				this.ctx.drawImage(this.img, 192, 0, 64, 64, i * 64, 660, 64, 64);
				this.ctx.drawImage(this.img, 128, 0, 64, 64, i * 64, 724, 64, 64);
			}
		}

	//clumps
		this.ctx.drawImage(this.img, 192, 0, 64, 64, 128, 148, 64, 64);
		this.ctx.drawImage(this.img, 128, 0, 64, 64, 128, 212, 64, 64);

		this.ctx.drawImage(this.img, 192, 0, 64, 64, 192, 148, 64, 64);
		this.ctx.drawImage(this.img, 128, 0, 64, 64, 192, 212, 64, 64);

		this.ctx.drawImage(this.img, 256, 0, 64, 64, 440, 468, 64, 64);
		this.ctx.drawImage(this.img, 256, 0, 64, 64, 440, 532, 64, 64);
		this.ctx.drawImage(this.img, 256, 0, 64, 64, 504, 468, 64, 64);

		for (let i = 0; i < 6; i++) {
			// left side

			if (i !== 2) this.ctx.drawImage(this.img, 192, 0, 64, 64, 0, 84 + i * 2 * 64, 64, 64);
			if (i !== 3) this.ctx.drawImage(this.img, 128, 0, 64, 64, 0, 20 + i * 2 * 64, 64, 64);


			//right side

			this.ctx.drawImage(this.img, 192, 0, 64, 64, 700, 84 + i * 2 * 64, 64, 64);
			this.ctx.drawImage(this.img, 128, 0, 64, 64, 700, 20 + i * 2 * 64, 64, 64);


		}
	}
	
}

module.exports = Background1;