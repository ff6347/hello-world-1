var h = 0;
var s = 0;
var b = 0;
  
function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  background(360);
  strokeWeight(0.1);
  frameRate(10);
  smooth();
}

function draw() {

  for (var i = 0; i < width; i++) {
    var w = random(600);
    var h = random(600);
    stroke (h + random (100), s + random (100), b + random (100), 50);
    line( w, 0, h*2, w*2);
    
    }
}

function mousePressed(){
noLoop();
save('image.jpg');
}
