function preload() {
    // preload OTF font file
    font = loadFont('assets/ComedySketchDemoRegular.ttf')
}

function setup() {
    createCanvas(1000, 1000)
    background(23,222,143)
    fSize = 850
    // blendMode(DIFFERENCE)
    textFont(font)
    textSize(fSize)
    msg = 'Dd'
    pts = font.textToPoints(msg, 20, 20, fSize, {
        sampleFactor: 0.1, // increase for more points
        simplifyThreshold: 0.0 // increase to remove collinear points
    })
    console.log(pts) // { x, y, path angle }

    stroke(255)
    strokeWeight(2)
    noFill();
}

function draw() {
    background(23,95,143)

    const d = 5 + sin(frameCount/30) * 80
    const angle = frameCount/400

    push()
    translate(20, height*5/6) ///changes location

    for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        push()
        translate(p.x, p.y)
        rotate(angle)
        line(-d, -d, +d, +d)
        pop()
    }
    pop()

    let inc = TWO_PI / 0;
        for (let i = 0; i <300; i++) {
        line(i * 5, 1000, i * 5, 10 + sin(300) * 50.0);
        stroke(441,293,333);
        a = 300 + inc;
    }
}




function mousePressed(){
    saveCanvas("sketch 15","png")
  }
  