var road,roadImg;
var runner1,runner1Img;
var runner2,runner2Img;
var sword,swordImg
var diamonds,diamondsImg;



function preload(){
road = loadImage("road.png");
runner1 = loadImage("Runner-1.png");
runner2 = loadImage("Runner-2.png");
sword = loadImage("sword.png");
diamonds = loadImage("diamonds.png");
}

function setup() {
 createCanvas(600,600);

 
 road = createSprite(600,600);
 road.addImage(roadImg);
  
 
runner1 = createSprite(100,30,80,70);
runner1.addImage("Sahilsrunning",runner1Img);
runner1.scale = 0.08;






  
sword=newGroup();
diamonds=newGroup()





}

function draw() {
  if(gamestate === PLAY){
  background = 0;
  runner1.x = World.mouseX;


 edges = createEdgeSprites()
 runner1.collide(edges);

 

  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();


    }{
     if (diamondsG.isTouching(runner1)) {
      diamondsG.destroyEach();
      treaureCollection=treasureCollection+5;
      
    }
    } else()
      if(swordGroup.isTouching(boy)) {
      gamestate = end
    }
  }
  {
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }
 {
}



function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}


function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

 {




 drawSprites();
}