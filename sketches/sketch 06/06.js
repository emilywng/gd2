function setup() {
    createCanvas(1000, 1000);
    background(262,211,234);
    stroke(0);
  }
  function draw() {
    if (keyIsPressed === true) {
      let x = keyCode - 32;
      arc(x, x, x, x, -PI, x, CHORD);  // upper half of circle
    }
  }