function preload() {
    // preload OTF font file
    font = loadFont('assets/SpaceMono-Bold.ttf')
}

function setup() {
    createCanvas(1000, 1000)
    
    fSize = 1000
    // blendMode()
    textFont(font)
    textSize(fSize)
    msg = 'D'
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
    background(0)

    // 1. interactive
    // const d = dist(mouseX, mouseY, width/2, height/2)
    // const angle = atan2(mouseY-height/2, mouseX-width/2)

    // 2. animate on its own
    const d = 10 + sin(frameCount/30) * 120
    const angle = frameCount/100.

    push()
    translate(60, height*5/8)

    for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        push()
        translate(p.x, p.y)
        rotate(angle)
        line(-d, -d, +d, +d)
        pop()
    }
    pop()
}
