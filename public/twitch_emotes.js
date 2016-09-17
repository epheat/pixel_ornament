
var AMPTropPunch, BrokeBack, deIlluminati, EleGiggle, imGlitch, Kappa, MingLee, OhMyDog, OpieOP, SeemsGood, WutFace;
// var Emotes = [AMPTropPunch, BrokeBack, deIlluminati, EleGiggle, imGlitch, Kappa, MingLee, OhMyDog, OpieOP, SeemsGood, WutFace];

function preload() {
  // load some twitch emotes
  AMPTropPunch = loadImage("./TwitchEmotes/AMPTropPunch.png");
  BrokeBack = loadImage("./TwitchEmotes/BrokeBack.png");
  deIlluminati = loadImage("./TwitchEmotes/deIlluminati.png");
  EleGiggle = loadImage("./TwitchEmotes/EleGiggle.png");
  imGlitch = loadImage("./TwitchEmotes/imGlitch.png");
  Kappa = loadImage("./TwitchEmotes/Kappa.png");
  MingLee = loadImage("./TwitchEmotes/MingLee.png");
  OhMyDog = loadImage("./TwitchEmotes/OhMyDog.png");
  OpieOP = loadImage("./TwitchEmotes/OpieOP.png");
  SeemsGood = loadImage("./TwitchEmotes/SeemsGood.png");
  WutFace = loadImage("./TwitchEmotes/WutFace.png");
  frame = loadImage("frame.png");
}

function setup() {
  createCanvas(1250,750);
  background(200,200,200,255);
  frameRate(50);
}

var j = 0;
function draw() {
  background(200,200,200,255);
  fill(255,220,200,255);
  quad(80,40,80+900,40,80+900,40+600,80,40+600);
  j = ((j+1)%25);
  for(var i=0;i<58;i++){
    push();
    translate(80+13*i,120+30*sin((i+j)/4));
    image(Kappa,0,0,80,80);
    image(BrokeBack,0,60,80,80);
    image(OhMyDog,0,120,80,80);
    image(SeemsGood,0,180,80,80);
    image(OpieOP,0,240,80,80);
    image(MingLee,0,300,80,80);
    image(deIlluminati,0,360,80,80);
    image(WutFace,0,420,80,80);
    pop();
  }
  image(frame,0,0,1100,750);


}
