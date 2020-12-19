
function setup() {
  createCanvas(1200,800);
  b = createSprite(600, 400, 50, 80);
  b.shapeColor = "green";
  
  a = createSprite(400,200,80,30);
  a.shapeColor = "green";
  c = createSprite(700,200,80,30);
  c.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  a.x = World.mouseX;
  a.y = World.mouseY;
if(touch(a,c)){
 a.shapeColor = "red";
 c.shapeColor = "red";
}
  else{
   a.shapeColor = "green";
 c.shapeColor = "green";
  }
  drawSprites();
}