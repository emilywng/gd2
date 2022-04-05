var t;

function setup() {
  createCanvas(1000, 1000);
  background(131,222,225);
  stroke(0, 95);
  noFill();
  t = 0;
}

function draw() {
    translate(300,300);
    background(393,121,122,1)
    beginShape();
    for (var i = 0; i < 1000; i++) {
    var ang1 = map(i,500, 400, 25, 22);
    var rad = 900 * noise(i * 0.01 , t * 0.005);
    var x = rad * cos(ang1);
    var y = rad * sin(ang1);
    curveVertex(x, y)
    }
    endShape(CLOSE);
    t += 1;
    
}

function mousePressed(){
    saveCanvas("sketch 21","png")
  }
  