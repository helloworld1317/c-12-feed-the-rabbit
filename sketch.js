var garden,rabbit;
var gardenImg,rabbitImg;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("redImage.png");
}

function setup(){
  createCanvas(400,400);


garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  
  var select_sprites=Math.round(random(1,2));
  if (frameCount%80==0){
    if (select_sprites==1){
      spawnApples();
    }
    else{
      spawnLeaves();
    }
 }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}  
function spawnApples(){
  var apple=createSprite(random(50,350),40,10,10);
  apple.addImage("apple",appleImg);
  apple.scale=0.05;
  apple.velocityY=4;
  apple.lifetime=150;
  }
  function spawnLeaves(){
    var leaf=createSprite(random(50,350),40,10,10);
    leaf.addImage("leaf",leafImg);
    leaf.scale=0.05;
    leaf.velocityY=4;
    leaf.lifetime=150;
  }