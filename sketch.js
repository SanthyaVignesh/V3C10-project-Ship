var sea, seaImage;
var ship, shipBobbing, shipLight;

  function preload(){
    shipBobbing = loadAnimation("ship-1.png","ship-2.png");
    shipLight = loadAnimation("ship-3.png","ship-4.png");
    seaImage = loadImage("sea.png");
  }

  function setup(){
    createCanvas(600,400);
        
    sea = createSprite(100,80);
    sea.addImage(seaImage);
    sea.velocityX = -3;   
      
    ship= createSprite(100,160,20,50);
    ship.addAnimation("shipbobbing",shipBobbing);
    ship.scale = 0.3;
    ship.velocityX = 0; 
    
        
  }

  function draw() {
    background("blue");
    if(sea.x<0){
      sea.x = sea.width/2;
    }
    
    if (keyDown("space")) {
  ship.addAnimation("shipLightOn",shipLight);
}
    
    drawSprites();
  }