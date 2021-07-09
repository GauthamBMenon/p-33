var image1 
const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 
var engine , world 
var snow = []
function preload (){
  image1= loadImage ("PLANE GA4256T.jpg")
}

function setup() {

  createCanvas(800,400);
  engine = Engine.create ()
  world=engine.world
  if (frameCount % 100==0){
    for (var i=0;i <10;i++){
      snow.push(new Snowfall(random(0,800),0))
    }
  }
}

function draw() {
  background(image1);  
  Engine.update (engine)
  for (var i=0;i>10;i++) {
    snow [i].display()
  }
}