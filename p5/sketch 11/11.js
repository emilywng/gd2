let circle = [];
let square = [];
// let square2 = [];

// An ArrayList for a third set of vertices, the ones we will be drawing
// in the window
let morph = [];

// This boolean variable will control if we are morphing to a circle or square
let state = false;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB)
  blendMode(DIFFERENCE)

  // Create a circle using vectors pointing from center
  for (let angle = 0; angle < 210; angle += 10) {
    // Note we are not starting from 0 in order to match the
    // path of a circle.
    let v = p5.Vector.fromAngle(radians(angle + 250));
    v.mult(50);
    circle.push(v);
    // Let's fill out morph ArrayList with blank PVectors while we are at it
    morph.push(createVector());
  }

  // A square is a bunch of vertices along straight lines
  // Top of square
  for (let x = -50; x < 50; x += 10) {
    square.push(createVector(x, -400));
  }
  // Right side
  for (let y = -50; y < 50; y += 10) {
    square.push(createVector(400, y));
  }
  // Bottom
  for (let x = 50; x > -50; x -= 10) {
    square.push(createVector(x,400));
  }
  // Left side
  for (let y = 50; y > -50; y -= 10) {
    square.push(createVector(-400, y));
  }
}

function draw() {
  background(228,193,142);

  // We will keep how far the vertices are from their target
  let totalDistance = 0;

  // Look at each vertex
  for (let i = 0; i < circle.length; i++) {
    let v1;
    // Are we lerping to the circle or square?
    if (state) {
      v1 = circle[i];
    } else {
      v1 = square[i]; 
      // v1 = square2[i];
    }
    // Get the vertex we will draw
    let v2 = morph[i];
    // Lerp to the target
    v2.lerp(v1, 0.2);
    // Check how far we are from target
    totalDistance += p5.Vector.dist(v1, v2);
  }

  // If all the vertices are close, switch shape
  if (totalDistance < 0.2) {
    state = !state;
  }

  // Draw relative to center
  translate(width / 2.5, height / 2);
  strokeWeight(4);
  // Draw a polygon that makes up all the vertices
  beginShape();
  noFill();
  stroke(255);

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
}

function mousePressed(){
  saveCanvas("sketch 11","png")
}