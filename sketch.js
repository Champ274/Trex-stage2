var trex,trexanimation;
var ground,groundImage;
var ground2;
var cloud,cloudImage;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstaclesImage;
var score;
function preload() {
trexanimation=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage=loadImage("ground2.png")
cloudImage=loadImage("cloud.png")
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  
  
  
  
}
function setup() {
  createCanvas(600, 200);
  trex = createSprite( 60,170,20,20);
  trex.addAnimation("t1",trexanimation);
  trex.scale=0.5;
  ground=createSprite(300,190,600,4);
  ground.addImage("g1",groundImage);
  ground2=createSprite(300,195,600,4);
  ground2.visible=false
  score=0;

}

function draw() {
  background(0);
 if (keyDown("space")&&trex.y>169){
trex.velocityY=-10;  
  }
  
    if(ground.x<0){
      ground.x=ground.width/2
    }
      ground.velocityX=-2
    
  
  trex.velocityY = trex.velocityY + 0.8;
  
  score=score+Math.round(getFrameRate()/60);
  
  trex.collide(ground2)
 // console.log(trex.y)
  spawnclouds();
  spawnObstacles();
  drawSprites();
  text("score"+score,520,10);
}
function spawnclouds (){
   if ( frameCount % 60 === 0) {
    var cloud = createSprite(580,100,40,10);
    cloud.y = random(60,100);
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //CloudsGroup.add(cloud);
  }
}
  
  
function spawnObstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,180,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
   switch(rand){
       case 1 : obstacle.addImage(obstacle1);
                    break;
                    case 2 : obstacle.addImage(obstacle2);
                    break;
                    case 3 : obstacle.addImage(obstacle3);
                    break;
                    case 4 : obstacle.addImage(obstacle4);
                    break;
                    case 5 : obstacle.addImage(obstacle5);
                    break;
                    case 6 : obstacle.addImage(obstacle6);
                    break;
                    default:break;}
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    
    //add each obstacle to the group
    //ObstaclesGroup.add(obstacle);
    
     
  }
}
  
  
  