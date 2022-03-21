function setup(){
    createCanvas(1000,1000)
    background(60,114,81)
    stroke(255)
}

var a = 4.9, b = -3.2, c = 1.4, d = -2.1;
var x=1, y=1;

function draw() {
  for(var i=0; i<1000;i++) {
    var oldX = x;
    var oldY = y;
    x = sin(a * oldY) - cos(b * oldX);
    y = sin(c * oldX) - cos(d * oldY);
    var scaledX = map(x, -2,2,0, width);
    var scaledY = map(y, -2,2,0, height);
    point(scaledX, scaledY);

    stroke(random(0,105), random(0,205), random(0,255));
  }
    var circleRadius= 15+mouseX/15+mouseY/15
    stroke(255, 255, 255);
    noFill();
    circle(mouseX, mouseY, circleRadius)
}


function mousePressed(){
    saveCanvas("sketch 01","png")
 } ///////// saves image of canvas
 