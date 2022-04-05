// when i go live go to the url localhost:5500
var img;
var colors = [];
var sortMode = null;

function preload() {
  loadImage('assets/sketch 07-6.jpg', setImage);
}

function setup() {
  createCanvas(1000, 1000);
  noCursor();
  noStroke();
}

function draw() {
  var tileCount = floor(width / max(mouseX,9));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 5;
      var c = color(img.pixels[i], img.pixels[i + 3], img.pixels[i + 3], img.pixels[i + 4]);
      colors.push(c);
    }
  }

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function setImage(loadedImageFile) {
  img = loadedImageFile;
}

  function mousePressed(){
    saveCanvas("sketch 14","png")
  }
  