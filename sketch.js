var player1,player1_running;
var path,pathImage;

function preload(){
  //imagens pré-carregadas
  player1_running = loadAnimation("Runner-1.png","Runner-2.png")

  pathImage = loadImage("path.png");

}

function setup(){
  
  createCanvas(400,400);
  //crie sprite aqui
  
  path = createSprite(200,200,40,20);
  path.addImage("path(solo)",pathImage);
  //path.y = ground.width /2;
  path.velocityY = 10;

  player1 = createSprite(200,320,40,90);
  player1.addAnimation("running", player1_running);
  player1.scale = 0.1

}

function draw() {
  
  background("black");
  
  if(path.y > 400){
    path.y = 0;
    
   }
  drawSprites();

}
