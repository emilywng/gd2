var yoff = 10;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(1000,1000);
  colorMode(HSB)
  blendMode(DIFFERENCE)
  background(255)
  
}

function draw() {
  background(0);

  fill(0);

  beginShape(); 
  
  var xoff = 200; 
  for (var x = 0; x <= width; x += 10) {

    var y = map(noise(xoff, yoff), 0, 1,900,200);

    vertex(x, y); 
    xoff += 0.2;
  }

  let inc = TWO_PI / 0;
        for (let i = 0; i <500; i++) {
        line(i * 5, 1000, i * 5, 10 + sin(300) * 50.0);
        stroke(131,293,133);
        a = 300 + inc;
    }

  
  yoff += 0.009;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  var x1 = width * noise(3 + 725);
  var y1 = height * noise(5 + 545);

  bezierVertex(x1,y1,300,300,300,100)
}

function mousePressed(){
  saveCanvas("sketch 08","png")
}