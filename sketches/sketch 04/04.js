var circles = [];

function setup() {
	createCanvas(1000,1000);
	colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
	background(0, 15); 
    for(var i = 0; i < circles.length; i++){
        circles[i].display();
	}
}

function mousePressed(){
	circles.push(new dot(mouseX, mouseY));
}

function dot(x, y){
    this.xpos = x;
    this.ypos = y;
    this.col = random(360);
	  
	this.display = function(){
	    for(var i = 0; i < 5; i++){
	    	push();
	    	translate(this.xpos, this.ypos);
		    fill(this.col, this.xpos, this.ypos);
            circle(2,2,15);
		    pop();
	    }
	}
}