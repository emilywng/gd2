
function setup(){
    createCanvas(1000,1000)
    background(60.14,81)
}

function draw() {
    let a = 5.0;
    let inc = TWO_PI / 50;
        for (let i = 0; i <200; i++) {
        line(i * 10, 900, i * 3, 10 + sin(a) * 20.0);
        stroke(20,40,122);
        a = a + inc;
    }
        for (let i = 0; i <170; i++) {
            line(i *5, 500, i * 6,25 + sin(a) *40.0);
            stroke(110,20,80);
            a = a + inc;
    }
    for (let i = 0; i <1000; i++) {
        line(i *5, 900, i * 10,100 + sin(a) *600.0);
        stroke(255,255,250);
        a = a + inc;
    }
}