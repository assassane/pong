function Balle(barre1,barre2) {	
	this.size=20;
	
	this.x=width/2-this.size/2;
	this.y=height/2-this.size/2;
	
	this.speed=5;
	do{
		this.dx=floor(random(-1,2));
		this.dy=floor(random(-1,2));
	}while(this.dx==0);
	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, this.size, this.size);
	}
	this.update = function() {
		this.x+=this.dx*this.speed;
		this.y+=this.dy*this.speed;
		if(this.y<=this.size || this.y>=height-this.size) {
			this.dy=-this.dy;
		}
		if(this.x<40){
			score2++;
			this.x=width/2-this.size/2;
			this.y=height/2-this.size/2;
			do{
				this.dx=floor(random(-1,2));
				this.dy=floor(random(-1,2));
			}while(this.dx==0);
			this.speed=5;
		}
		if(this.x>width-40){
			score1++;
			this.x=width/2-this.size/2;
			this.y=height/2-this.size/2;
			this.dy=floor(random(-1,2));
			this.speed=5;
		}
		if(this.y>barre1.y && this.y<barre1.y+barre1.height && this.x<barre1.x+20){
			this.dy=((this.y-barre1.y)/barre1.height-0.5)*2;
			this.dx=-this.dx;
			this.x=barre1.x+barre1.width;
			this.speed+=0.2;
		}
		if(this.y>barre2.y && this.y<barre2.y+barre2.height && this.x>barre2.x){
			this.dy=((this.y-barre2.y)/barre2.height-0.5)*2;
			this.dx=-this.dx;
			this.x=barre2.x-barre2.width;
			this.speed+=0.2;
		}
	}
}
