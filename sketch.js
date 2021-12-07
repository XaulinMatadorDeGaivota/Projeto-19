var fox,foxImg;
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

  background = createSprite(300,100);
  background.addImage("background",backgroundImg);

  fox = createSprite(450,270,20,20);
  fox.addImage("fox",foxImg);
  fox.scale = 0.2;

  rat = createSprite(100,275,10,10);
  rat.addImage("rat",ratImg);
  rat.scale = 0.5;
}
function draw() {

 if(keyDown("space")){
    rat.y = rat.y-7;
    rat.velocityY = rat.velocityY+0.2;
 }
 
  if(gameState === "play"){
    background.velocityX = -3;
  }

  if(rat.isTouching(fox)){
    rat.destroy();
    gameState === "end"
  }

  if(background.x < 0){
    background.x = 600;
  }

 invisibleBlock();

 drawSprites();

 if(gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over!",300,150);
 }
}

function invisibleBlock(){
  if(frameCount % 240 === 0){
 fox.x = Math.round(random(599,600));
 fox.velocityX = -3;
 fox.lifetime = 600;
}
}