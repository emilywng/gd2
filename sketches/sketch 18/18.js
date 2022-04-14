var letters = [];
var density = 8;
var ribbonWidth = 10;
var fontSize = 900;
var pathSimplification = 0;
var pathSampleFactor = 0.5;

var textTyped = 'D';

var font;

function preload() {
  font = loadFont('assets/futura.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  background(213,122,212)
  noFill();
  strokeWeight(1);
  shapeColor = color(231);

  createLetters();
}

function draw() {
  // background(188);

  translate(100, height * 0.75);

  pathSampleFactor = 0.1 * pow(0.02, mouseX / width);
  ribbonWidth = map(mouseY, 0, height, 1, 500);

  for (var i = 0; i < letters.length; i++) {
    letters[i].draw();
  }
}

function createLetters() {
  letters = [];
  var chars = textTyped.split('');
  colorMode(HSB)
  fill(221,312,233)
  blendMode(DIFFERENCE)
  var x = 0;
  for (var i = 0; i < chars.length; i++) {
    if (i > 0) {
      var charsBefore = textTyped.substring(0, i);
      x = font.textBounds(charsBefore, 220, 10, fontSize).w;
    }
    var newLetter = new Letter(chars[i], x, 10);
    letters.push(newLetter);
  }
}

function Letter(char, x, y) {
  this.char = char;
  this.x = x;
  this.y = y;

  Letter.prototype.draw = function() {
    var path = font.textToPoints(this.char, this.x, this.y, fontSize, {sampleFactor: pathSampleFactor});
    stroke(shapeColor);

    for (var d = 0; d < ribbonWidth; d += density) {
      beginShape();

      for (var i = 0; i < path.length; i++) {
        var pos = path[i];
        var nextPos = path[i + 1];

        if (nextPos) {
          var p0 = createVector(pos.x, pos.y);
          var p1 = createVector(nextPos.x, nextPos.y);
          var v = p5.Vector.sub(p1, p0);
          v.normalize();
          v.rotate(HALF_PI);
          v.mult(d);
          var pneu = p5.Vector.add(p0, v);
          curveVertex(pneu.x, pneu.y);
        }
      }

      endShape(CLOSE);
    }
  };
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    createLetters();
  }
}

function mousePressed(){
  saveCanvas("sketch 18","png")
}
