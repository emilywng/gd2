var t;
var x = [];
var y = [];

function setup() {
  createCanvas(1000, 1000);
  // background(121,182,315);
  stroke(0, 25);
  noFill();
  t = 0;
}

function draw() {
    translate(width/2, height/2);
    background(213,21,122,2)
    beginShape();
    for (var i = 0; i < 400; i++) {
    var ang = map(i, 20, 50, 90, TWO_PI);
    var rad = 900 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y)
    }
    endShape(CLOSE);
    t += 1;
    
}

function mousePressed(){
    saveCanvas("sketch 19","png")
  }
  