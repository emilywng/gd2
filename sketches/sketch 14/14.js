// when i go live go to the url localhost:5500
var img;


function preload() {
  img = loadImage('sketch 13-1.png')
}



function setup() {
    createCanvas(1000, 1000);
  
  }
  
  function draw() {
    image(img,0,0)
  }
  
  

  function mousePressed(){
    saveCanvas("sketch 14","png")
  }
  