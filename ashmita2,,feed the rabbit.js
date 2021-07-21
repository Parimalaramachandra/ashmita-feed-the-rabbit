var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage("picking",gardenImg);

 //creating invisible ground
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;

 //creating rabbit jumping
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage("running",rabbitImg);

 if (frameCount % 80 == 0){ 
  Apple=createSprite(182,99,40,10);
  Apple.addImage("loading",appleImg);
  Apple.velocityX=-3;
  Apple.scale =0.07
  Apple.x=Math.round(random(10,100))
   
 }

 //generate random numbers
 var rand =  Math.round(random(10,100))
 console.log(rand)

}


function draw() {
  background(0);

  console.log(rabbit.y)


  rabbit.velocityY = rabbit.velocityY + 0.8

  if (frameCount % 80 == 0){ 
    Apple=createSprite(182,99,40,10);
    Apple.addImage("loading",appleImg);
    Apple.velocityX=-3;
    Apple.scale =0.07
    Apple.x=Math.round(random(10,100))
     
  }
    
  rabbit.y = World.mouseY;
  rabbit.x = World.mouseX;
   
   
  if(rabbit.isTouching(Apple)) {
    Apple.destroy()
  }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //stop apple from falling down
  Apple.collide(invisibleGround);

  if (keyDown("LEFT_ARROW")) {
    rabbit.velocityY = 0;
    rabbit.velocityX = -3;
    rabbit.x = World.mouseX;
  }
  if (keyDown("UP_ARROW")) {
    rabbit.velocityX = 0;
    rabbit.velocityY = -3;
    rabbit.y = World.mouseY;
  }
  if (keyDown("DOWN_ARROW")) {
    rabbit.velocityX = 0;
    rabbit.velocityY = -3;
    rabbit.y = World.mouseY;
  }
  if (keyDown("RIGHT_ARROW")) {
    rabbit.velocityX = -3;
    rabbit.velocityY = 0;
    rabbit.x = World.mouseX;
  }


  drawSprites();
}

