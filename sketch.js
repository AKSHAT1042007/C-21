var fixedRect,movingRect;
var car,wall


function setup() {
  createCanvas(1000,1000);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(200,400,100,50);
  movingRect.shapeColor="green";
  car = createSprite(100,100,100,50);
  car.shapeColor="blue"
  car.velocityX=7;
  wall = createSprite(1000,100,50,100);
  wall.shapeColor="red"
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  

isTouching(movingRect,fixedRect);

bounceOff(car,wall);

  drawSprites();
}

