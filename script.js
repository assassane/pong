var balle,balle2;
var barre1,barre2;
var score1,score2;

function setup() {
	createCanvas(700,400);
	
	barre1 = new Barre();
	barre2 = new Barre();
	
	balle = new Balle(barre1,barre2);
	balle2= new Balle(barre1,barre2);
	
	balle2.dx=-balle.dx;
	balle2.dy=-balle.dy;
	
	barre1.x=50;
	barre1.y=height/2-barre1.height/2;
	barre1.H=65;
	barre1.B=81;
	
	barre2.x=width-50-barre2.width;
	barre2.y=height/2-barre2.height/2;
	barre2.H=80;
	barre2.B=77;
	
	score1=0;
	score2=0;
	frameRate(60);
}
function draw() {
	background(0);
	balle.show();
	balle.update();
	balle2.show();
	balle2.update();
	barre1.show();
	barre2.show();
	barre1.update();
	barre2.update();
	textSize(20);
	textAlign(RIGHT);
	text(score1 , 200,60);
	textAlign(LEFT);
	text(score2 ,width-200,60);
}
function keyPressed(){
	if (keyCode == barre1.H) {
		barre1.haut=true;
	}else if (keyCode == barre1.B) {
		barre1.bas=true;
 } 	
	if (keyCode == barre2.H) {
		barre2.haut=true;
	}else if (keyCode == barre2.B) {
		barre2.bas=true;	
 }   
}
function keyReleased(){
	if(keyCode == barre1.H){
		barre1.haut=false;
	}else if (keyCode == barre1.B) {
		barre1.bas=false;
 } 	
	if (keyCode == barre2.H) {
		barre2.haut=false;
	}else if (keyCode == barre2.B) {
		barre2.bas=false;
 }   
 if(touch(balle,balle2)){
	 console.log("true");
 }
}
function touch(a, b){
	if(b.x<a.x+a.size && a.x<b.x+a.size && b.y<a.y+b.size && a.y<b.y+a.size){
		return true;
	}else{
		return false;
	}
}
