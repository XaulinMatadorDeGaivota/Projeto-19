var fox,foxImg,foxGroup;
var rat,ratImg;

var background,backgroundImg;

var invisibleGround;

var gameState = "play";

function preload(){
    foxImg = loadImage("fox.png");
    ratImg = loadImage("rat.png");

    backgroundImg = loadImage("florest.jpg");
}

function setup() {
  createCanvas(600,300); 

  invisibleGround = createSprite(100,355,100,100);
  invisibleGround.visible = true;

  background = createSprite(300,100);
  background.addImage("background",backgroundImg);

  fox = createSprite(450,275,20,20);
  fox.addImage("fox",foxImg);
  fox.scale = 0.15;

  rat = createSprite(100,280,10,10);
  rat.addImage("rat",ratImg);
  rat.scale = 0.4;
}
function draw() {

 if(keyDown("space")){
    rat.y = rat.y-10;
    rat.velocityY = rat.velocityY+0.2;
 }
 
 if(gameState === "play"){
  background.velocityX = -3;
  fox.velocityX =-3;
}

  if(rat.isTouching(fox)){
    gameState === end;
  }

  if(background.x < 0){
    background.x = 600;
  }

  rat.collide(invisibleGround);

  fox.setCollider["rectangle",0,0,fox,width,fox,height];
  fox.debug = true

  rat.setCollider["rectangle",0,0,rat,width,rat,height];
  rat.debug = true


 invisibleBlock();

 drawSprites();

 if(gameState === "end"){
  text("Game Over!",300,300);
  textSize(25);
  
  fox.velocityX = 0;
  rat.velocityX = 0;
  background.velocityX = 0;
}
}

function invisibleBlock(){
  if(frameCount % 240 === 0){
 fox.x = Math.round(random(599,600));
 fox.velocityX = -3;
 fox.lifetime = 600;
}
}