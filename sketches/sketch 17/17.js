var font;

var textTyped = '1233498';
var drawMode = 1;
var fontSize = 80;
var padding = 10;
var nOff = 0;
var pointDensity = 10;

var colors;

var paths;
var textImg;

function preload() {
  font = loadFont('assets/futura.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(15);

  colors = [color(231, 205, 185), color(145, 95, 220), color(325, 213, 222)];
  pixelDensity(2);

  setupText();
}

function setupText() {
  // create an offscreen graphics object to draw the text into
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(50);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 100, fontSize + 50);
  textImg.loadPixels();
}

function draw() {
  background(115);

  nOff++;

  for (var x = 0; x < textImg.width; x += pointDensity) {
    for (var y = 0; y < textImg.height; y += pointDensity) {
      // Calculate the index for the pixels array from x and y
      var index = (x + y * textImg.width) * 4;
      // Get the red value from image
      var r = textImg.pixels[index];

      if (r < 128) {

        if (drawMode == 1){
          strokeWeight(1);

          var noiseFac = map(mouseX, 0, width, 0, 1);
          var lengthFac = map(mouseY, 0, height, 0.01, 1);

          var num = noise((x + nOff) * noiseFac, y * noiseFac);
          if (num < 0.6) {
            stroke(colors[0]);
          } else if (num < 0.7) {
            stroke(colors[1]);
          } else {
            stroke(colors[2]);
          }

          push();
          translate(x, y);
          rotate(radians(frameCount));
          line(0, 0, fontSize * lengthFac, 0);
          pop();
        }

        if (drawMode == 2){
          stroke(0, 0, 0);
          strokeWeight(1);
          noStroke();
          push();
          translate(x, y);

          var num = noise((x + nOff) / 10, y / 10);

          if (num < 0.6) {
            fill(colors[0]);
          } else if (num < 0.7) {
            fill(colors[1]);
          } else {
            fill(colors[2]);
          }

          var w = noise((x - nOff) / 10, (y + nOff * 0.1) / 10) * 20;
          var h = noise((x - nOff) / 10, (y + nOff * 0.1) / 10) * 10;
          ellipse(0, 0, w, h); // rect() is cool too
          pop();
        }

        if (drawMode == 3){
          stroke(0, 0, 0);
          strokeWeight(1);
          noStroke();

          var num = random(1);

          if (num < 0.6) {
            fill(colors[0]);
          } else if (num < 0.7) {
            fill(colors[1]);
          } else {
            fill(colors[2]);
          }

          push();
          beginShape();
          for (var i = 0; i < 3; i++){
            var ox = (noise((i * 1000 + x - nOff) / 30, (i * 3000 + y + nOff) / 30) - 0.5) * pointDensity * 6;
            var oy = (noise((i * 2000 + x - nOff) / 30, (i * 4000 + y + nOff) / 30) - 0.5) * pointDensity * 6;
            vertex(x + ox, y + oy);
          }
          endShape(CLOSE);
          pop();
        }

        if (drawMode == 4){
          stroke(colors[0]);
          strokeWeight(3);

          point(x - 10, y - 10);
          point(x, y);
          point(x + 10, y + 10);

          for (var i = 0; i < 5; i++){
            if (i == 1) {
              stroke(colors[1]);
            } else if (i == 3) {
              stroke(colors[2]);
            }

            if (i % 2 == 0){
              var ox = noise((10000 + i * 100 + x - nOff) / 10) * 10;
              var oy = noise((20000 + i * 100 + x - nOff) / 10) * 10;
              point(x + ox, y + oy);
            } else {
              var ox = noise((30000 + i * 100 + x - nOff) / 10) * 10;
              var oy = noise((40000 + i * 100 + x - nOff) / 10) * 10;
              point(x - ox, y - oy);
            }
          }
        }

      }
    }
  }

}

function mousePressed(){
  saveCanvas("sketch 17","png")
}
