function setup(){
    createCanvas(1000,1000)
    background(90,214,201)
    stroke(255)

//    fill(210,321,44)
//    rect(50,50,200,100) // X,Y,WIDTH, HEIGHT
//    circle(300,350,120) // X,Y,RADIUS
//    ellipse(200,500,80,120) // X,Y,X STRETCH,Y STRETCH 
    arc(500, 530, 500, 400, 0, PI + HALF_PI, CHORD);
    fill(90,214,201)
    arc(500, 530, 320, 250, 0, PI + HALF_PI, CHORD);

}

function draw(){
    fill(105,20,230)
    var circleRadius= 10+mouseX/20+mouseY/16

    circle(mouseX, mouseY, circleRadius)
}

function mousePressed(){
   saveCanvas("sketch 01","png")
} ///////// saves image of canvas

console.log("woooo")
