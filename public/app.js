
var mr_dragon; //this is global variable

function preload() {
  mr_dragon = loadImage("./dragon.png");
}

function setup() {
  createCanvas(1250,600);
  background(255,200,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)
  // frameRate(60);

  // for(var counter=0;counter<10;counter=counter+1){
  //   push();
  //   translate(50+counter*100,200);
  //   rotate(radians(counter*45));
  //     image(mr_dragon,0,0,200,200);
  //   translate();
  //   pop();
  // }

}

var i = 0;
function draw() {
  background(255,200,0,255);
  push();
  translate((50+i*12.5)%1250,350);
  rotate(radians(i*45/8));
    image(mr_dragon,0,0,200,200);
  translate();
  pop();
  i++;
}
