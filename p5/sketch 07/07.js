var t;

function setup(){
    createCanvas(1000,1000)
    colorMode(HSB)
    background(412,315,122);
    blendMode(DIFFERENCE)
    t = 5;
}

function draw() {
    let a = 100;
    let inc = TWO_PI / 0;
        for (let i = 0; i <500; i++) {
        line(i * 5, 1000, i * 5, 10 + sin(a) * 50.0);
        stroke(131,293,133);
        a = a + inc;
    }
        for (let i = 0; i <170; i++) {
            line(i *5, 1000, i * 6,25 + sin(a) *40.0);
            stroke(110,20,80);
            a = a + inc;
    }
    for (let i = 0; i <1000; i++) {
        line(i *5, 1000, i * 10,100 + sin(a) *600.0);
        stroke(255,255,250);
        a = a + inc;
    }

    var x1 = width * noise(t + 725);
    var x2 = width * noise(t + 225);
    var x3 = width * noise(t + 352);
    var x4 = width * noise(t + 432);
    var y1 = height * noise(t + 545);
    var y2 = height * noise(t + 635);
    var y3 = height * noise(t + 432);
    var y4 = height * noise(t + 25);
    var z1 = height * noise(t + 5);
    var z2 = height * noise(t + 5);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.005;
}

function mousePressed(){
    saveCanvas("sketch 07","png")
  }