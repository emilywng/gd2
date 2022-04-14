var circleWidth = 200;
function setup(){
    createCanvas(1000,1000);
    colorMode(HSB)
    blendMode(MULTIPLY)
    noStroke()
}

function draw(){
    background(255)
    var r = random(); //// generates random numbers between 0 and 1

    var n = noise(frameCount);  ///random but not from number 

    var s = sin(frameCount/100); /// sine wave

    var cX = map(s,-1,1,circleWidth/2,width-circleWidth-2)

    var cColor = map(sin(frameCount/100), -1,1,0,255); /// getting a number frmo 255 used to determine fill value
    var cNoise = map()
    fill(cColor,255,255)

    circleWidth = noise(frameCount/100)+100

    var cY = noise(frameCount) ///getting a noisy number based on framecount but between 0 and 1
        cY = map(cY,0,1,0,height) // remapping that variable to be between 0 and the canvas height
        
    circle(cX,cY,circleWidth)


}


function mousePressed(){
    saveCanvas("sketch 10","png")
  }
  