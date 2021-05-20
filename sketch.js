var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400); 
  speed=random(223,321); 
  weight=random(30,52);
  bullet=createSprite(1200,200,50,50);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,thickness,height/2); 
}

function draw()   
{
  if (hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5*speed*weight*speed/(thickness*thickness*thickness);

   if (damage>10)
  {
    wall.shapecolor=(255,0,0);
  }

  if (damage<10)
  {
    wall.shapecolor=(0,255,0);
  }

  }
  

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
 bulletRightEdge=lbullet.x +lbullet.width;
 wallLeftEdge=lwall.x
 if (bulletRightEdge>= wallRightEdge)
 {
  return true
 }
 return false
}






