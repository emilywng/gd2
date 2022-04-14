var x1, y1, x2, y2;
function setup(){
    createCanvas(1000, 1000)
    background(313,214,221)
    x1 = width/1200;
    y1 = height/2000;
    x2 = width/800;
    y2 = height/200;
}

function draw(){
    background(255)
    point(x1, y1);
    point(x2, y2);
    strokeWeight(2);
    line(x1, y1, x2, y2);
    stroke(0);
    strokeWeight(10);
    x1 = cos(frameCount * 0.02) * 100 + (20);
    y1 = cos(frameCount * 0.02) * 1000 + (height/11);
    x2 = sin(frameCount * 0.009) * 320 + (width - 23);
    y2 = sin(frameCount * 0.009) * 630 + (height/17);
}

function mousePressed(){
    saveCanvas("sketch 09","png")
  }