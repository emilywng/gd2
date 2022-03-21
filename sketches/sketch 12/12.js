function setup() {
  createCanvas(1000, 1000, WEBGL);
  colorMode(HSB)
  blendMode(REMOVE);

}

function draw() {
  rotateY(frameCount * 0.02);
  for (let j = 0; j < 50; j++) {
    push();
    for (let i = 0; i < 50; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 - j) * 100,
        noise(frameCount * 0.001 - j) * 100,
        i * 0.4
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(9, 2, 2, 4);
      pop();
    }
    pop();
  }
}
