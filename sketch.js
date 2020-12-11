var drop1, gamestate = 1, drop2;
var bgImg, a, d1, d2;
var button, button2, name1, intro, title, rules, flag = 0, okay;


function preload(){
   bgImg = loadImage("bg.jpg")
  d1 = loadAnimation("drop1.png","drop2.png")
   d2 = loadAnimation("d1.png","d2.png")
}

function setup() {
  createCanvas(800,500);
  drop1 = createSprite(200,200,30,30)
  drop1.addAnimation('d1',d1)
  drop1.scale = 0.5;
   
  drop2 = createSprite(400,300,30,30)
   drop2.addAnimation('d2',d2)
   drop2.scale = 0.2;

   rules = createSprite(10,10,50,20)
   okay = createSprite(400,480,50,20)
   okay.visible = false;
  
}

function draw() {
  background(0);  
  drawSprites();
  if(mousePressedOver(rules)){
     flag = 1;
  }
  

if(flag === 1){
  info();
}
if(flag === 2){
  okay.visible = false;
  flag = 0;
}

  if(gamestate === 0){
     start();
  }
  if(gamestate === 1){
   play();
  
  }
  if(gamestate === 2){
    end();
  }
 
}
