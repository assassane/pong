function Barre() {
	this.height=100;
	this.width=20;
	this.x;
	this.y;
	
	this.haut=false;
	this.bas=false;
	
	this.H;
	this.B;
	
	this.show = function() {
		fill(255);
		rect(this.x, this.y, this.width, this.height);
	}
	this.update = function() {
		if(this.haut && this.y>=0) {
			this.y-=5;
		} else if(this.bas && this.y<height-this.height) {
			this.y+=5;
		}
	}
	
}
