var z = 10000;
function setup() {
    createCanvas(1000, 1000);
    background(262,211,234);
    stroke(0);
  }
  function draw() {
    if (keyIsPressed === true) {
      let x = keyCode - 32;
      let y = keyCode - 32;
      arc(x, y, x, z, -PI, x+100, CHORD);  // upper half of circle
    }
  }