var car,wall;
var speed,weight;
var height


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
weight=random(400,1500);
height=random(200,300);
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(700,200,60,height/2)
 wall.shapeColor=(80,80,80);
 car.velocityX=speed;
}

function draw() {
  background(255,255,255);
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = car.velocityX * (-1);
      wall.velocityX = wall.velocityX * (-1);
}  
  if (car.y - wall.y < wall.width/2 + car.width/2
  && wall.y - car.y < wall.width/2 + car.width/2) {
    car.velocityY = car.velocityY* (-1);
    wall.velocityY = wall.velocityY * (-1);
  }
  drawSprites();
}