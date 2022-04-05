var t;

function setup() {
  createCanvas(1000, 1000);
  background(221,182,215);
  stroke(0, 25);
  noFill();
  t = 0;
}

function draw() {
    translate(width/2, height/2);
    background(193,121,122,1)
    beginShape();
    for (var i = 0; i < 1000; i++) {
    var ang = map(i,20, 500, 300, TWO_PI);
    var rad = 1000 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y)
    }
    endShape(CLOSE);
    t += 10;
    
}

function mousePressed(){
    saveCanvas("sketch 20","png")
  }
  