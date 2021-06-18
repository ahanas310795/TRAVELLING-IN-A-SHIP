var seaImage, sea, shipImage, ship;

function preload(){
seaImage=loadImage("sea.png");
shipImage=loadAnimation("ship-1.png", "ship-2.png")
}

function setup(){
  createCanvas(600,400);
  
  sea = createSprite(300, 200, 600, 10);
  sea.addAnimation("s1", seaImage);
  sea.scale=0.3;
  sea.velocityX=-2;

  ship = createSprite(70, 180, 20, 20);
  ship.addAnimation("s2", shipImage);
  ship.scale=0.2;
}

function draw() {
   background("skyblue");

  if(sea.x<0) {
    sea.x=sea.width/8;
  }

  drawSprites();

}
