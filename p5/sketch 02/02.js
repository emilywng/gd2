function setup(){
    createCanvas(1000,1000)
    background(270,224,81)
    stroke(255)
}

function draw() {
    var rectWidth = map(mouseX, 0, width, 20, 200);
    var rectHeight = map(mouseY, 0, height, 20, 200);
  
    stroke(random(0,255), random(0,255), random(0,255));
    noFill();
    rect(mouseX, mouseY, rectWidth, rectHeight);
    console.log("hi");
  }

  function mousePressed(){
    saveCanvas("sketch 02","png")
 } ///////// saves image of canvas