
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
}

function setup() {
  createCanvas(1250,600);
  background(30,30,30,255);

  for(var counter=0;counter<10;counter=counter+1){
    push();
    translate(50+counter*100,200);
    rotate(radians(counter*45));
      image(Kappa,0,0,200,200);
    translate();
    pop();
  }

}

function draw() {

}
