
function setup() {
    createCanvas(1000, 1000);
    background(155, 55, 205);
    colorMode(HSB)
    blendMode(SCREEN)  
    // translucent stroke using alpha value
    stroke(180, 220, 12, 15);
  }
  
  function draw() {
    fill(211,311,91)
    // draw two random chords each frame
    randomChord();
    randomChord();
  }
  
  function randomChord() {
    // find a random point on a circle
    let angle1 = random(0, 2 * PI);
    let xpos1 = 1000 + 1000 * cos(angle1);
    let ypos1 = 1000 + 1000 * sin(angle1);
  
  
    let angle2 = random(0, 2 * PI);
    let xpos2 = 0 + 360 * cos(angle2);
    let ypos2 = 300 + 300 * sin(angle2);
  
    let angle3 = random(0, 2 * PI);
    let xpos3 = 360 + 0 * cos(angle3);
    let ypos3 = 300 + 300 * sin(angle3);

    // draw a line between them
    line(xpos1, ypos1, xpos2, ypos2, xpos3, ypos3);
  }

  function mousePressed(){
    saveCanvas("sketch 13","png")
  }
  