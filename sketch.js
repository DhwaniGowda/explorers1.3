var player1;
var ground;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var obstacle1Group,obstacle2Group,obstacle3Group,obstacle4Group;
var coins1image,coins2image,coins3image,coins4image,coins5image,coins6image;
var trees1image,trees2image,trees3image,trees4image,trees5image,trees6image,trees7image,trees8image,trees9image,trees10image,trees11image;
var treasuresimage;
var rocksimage1;
var points1image,points2image,points3image,points4image,points5image,points6image,points7image,points8image,points9image,points10image,points11image,points12image,points13image,points14image,points15image,points16image,points17image,points18image,points19image,points20image,points21image,points22image,points23image,points24image,points25image,points26image;
var monkey1image,monkey2image,monkey3image,monkey4image,monkey5image,monkey6image,monkey7image,monkey8image,monkey9image,monkey10image,monkey11image,monkey12image,monkey13image,monkey14image;
var player1image,player2image,player3image; 
var forestimage;
var roadimage;

function setup() 
{
  createCanvas(3500,2500);
 
  //ground = createSprite(300,1100,900,20);
  sprite1 = createSprite(300,150,100,100);
  sprite1.addAnimation("forestimage",forestimage);
  sprite1.rotation = 0;
  sprite1.scale = 2;

  sprite2 = createSprite(2000,150,100,100);
  sprite2.addAnimation("forestimage",forestimage);
  sprite2.scale = 2;

  sprite3 = createSprite(1450,150,100,100);
  sprite3.addAnimation("forestimage",forestimage);
  sprite3.scale = 2;

  sprite4 = createSprite(1460,770,100,100);
  sprite4.addAnimation("forestimage",forestimage);
  sprite4.rotation = 90;
  sprite4.scale = 2

  sprite5 = createSprite(1990,720,100,100);
  sprite5.addAnimation("forestimage",forestimage);
  sprite5.scale = 2

  sprite6 = createSprite(1460,1350,100,100);
  sprite6.addAnimation("forestimage",forestimage);
  sprite6.rotation = 90;
  sprite6.scale = 2

  sprite7 = createSprite(2450,735,100,100);
  sprite7.addAnimation("forestimage",forestimage);
  sprite7.scale = 2

  sprite8 = createSprite(930,720,100,100);
  sprite8.addAnimation("forestimage",forestimage);
  sprite8.scale = 2

  sprite9 = createSprite(350,720,100,100);
  sprite9.addAnimation("forestimage",forestimage);
  sprite9.scale = 2

  sprite10 = createSprite(300,1250,100,100);
  sprite10.addAnimation("forestimage",forestimage);
  sprite10.scale = 2
  sprite10.rotation = 90;

  sprite11 = createSprite(830,1300,100,100);
  sprite11.addAnimation("forestimage",forestimage);
  sprite11.scale = 2

  sprite12 = createSprite(830,1750,100,100);
  sprite12.addAnimation("forestimage",forestimage);
  sprite12.scale = 2

  sprite13 = createSprite(870,150,100,100);
  sprite13.addAnimation("forestimage",forestimage);
  sprite13.scale = 2
  
  sprite14 = createSprite(2500,200,100,100);
  sprite14.addAnimation("forestimage",forestimage);
  sprite14.scale = 2
  sprite14.rotation = 90;

  sprite15 = createSprite(2500,1220,100,100);
  sprite15.addAnimation("forestimage",forestimage);
  sprite15.scale = 2
  sprite15.rotation = 90;

  sprite16 = createSprite(3000,1200,100,100);
  sprite16.addAnimation("forestimage",forestimage);
  sprite16.scale = 2

  sprite17 = createSprite(3500,1200,100,100);
  sprite17.addAnimation("forestimage",forestimage);
  sprite17.scale = 2

  sprite18 = createSprite(3500,700,100,100);
  sprite18.addAnimation("forestimage",forestimage);
  sprite18.scale = 2
  sprite18.rotation = 90;

  sprite19 = createSprite(3500,200,100,100);
  sprite19.addAnimation("forestimage",forestimage);
  sprite19.scale = 2
  sprite19.rotation = 90;

  sprite20 = createSprite(3000,200,100,100);
  sprite20.addAnimation("forestimage",forestimage);
  sprite20.scale = 2

  sprite21 = createSprite(2950,1730,100,100);
  sprite21.addAnimation("forestimage",forestimage);
  sprite21.scale = 2
  sprite21.rotation = 90;

  sprite22 = createSprite(1400,1750,100,100);
  sprite22.addAnimation("forestimage",forestimage);
  sprite22.scale = 2

  sprite23 = createSprite(1950,1750,100,100);
  sprite23.addAnimation("forestimage",forestimage);
  sprite23.scale = 2

  sprite24 = createSprite(2450,1750,100,100);
  sprite24.addAnimation("forestimage",forestimage);
  sprite24.scale = 2

  road = createSprite(265,160,300,100);
  road.addAnimation("roadimage",roadimage);

  road2 = createSprite(775,160,300,100);
  road2.addAnimation("roadimage",roadimage);

  road3 = createSprite(1285,160,300,100);
  road3.addAnimation("roadimage",roadimage);

  road4 = createSprite(1795,160,300,100);
  road4.addAnimation("roadimage",roadimage);

  road5 = createSprite(2205,160,300,100);
  road5.addAnimation("roadimage",roadimage);

  road6 = createSprite(3210,160,300,100);
  road6.addAnimation("roadimage",roadimage);

  road7 = createSprite(2700,160,300,100);
  road7.addAnimation("roadimage",roadimage);

  road8 = createSprite(3500,355,300,100);
  road8.addAnimation("roadimage",roadimage);
  road8.rotation = 90;

  road9 = createSprite(3500,750,300,100);
  road9.addAnimation("roadimage",roadimage);
  road9.rotation = 90;

  road10 = createSprite(3500,1000,300,100);
  road10.addAnimation("roadimage",roadimage);
  road10.rotation = 90;

  road11 = createSprite(2750,1200,300,100);
  road11.addAnimation("roadimage",roadimage);

  road12 = createSprite(3190,1200,300,100);
  road12.addAnimation("roadimage",roadimage);

  road13 = createSprite(2500,1000,300,100);
  road13.addAnimation("roadimage",roadimage);
  road13.rotation = 90;

  road14 = createSprite(2500,905,300,100);
  road14.addAnimation("roadimage",roadimage);
  road14.rotation = 90;

  road15 = createSprite(2185,710,300,100);
  road15.addAnimation("roadimage",roadimage);

  road16 = createSprite(1700,710,300,100);
  road16.addAnimation("roadimage",roadimage);

  road17 = createSprite(1300,710,300,100);
  road17.addAnimation("roadimage",roadimage);

  road18 = createSprite(900,710,300,100);
  road18.addAnimation("roadimage",roadimage);

  road19 = createSprite(500,710,300,100);
  road19.addAnimation("roadimage",roadimage);

  road20 = createSprite(300,910,300,100);
  road20.addAnimation("roadimage",roadimage);
  road20.rotation = 90;

  road21 = createSprite(300,1100,300,100);
  road21.addAnimation("roadimage",roadimage);
  road21.rotation = 90;

  road22 = createSprite(610,1295,300,100);
  road22.addAnimation("roadimage",roadimage);

  road23 = createSprite(860,1490,300,100);
  road23.addAnimation("roadimage",roadimage);
  road23.rotation = 90;

  road24 = createSprite(1055,1750,300,100);
  road24.addAnimation("roadimage",roadimage);

  road25 = createSprite(1400,1750,300,100);
  road25.addAnimation("roadimage",roadimage);

  road26 = createSprite(1900,1750,300,100);
  road26.addAnimation("roadimage",roadimage);

  road27 = createSprite(2300,1750,300,100);
  road27.addAnimation("roadimage",roadimage);

  road28 = createSprite(2600,1750,300,100);
  road28.addAnimation("roadimage",roadimage);

  road29 = createSprite(2910,1555,300,100);
  road29.addAnimation("roadimage",roadimage);
  road29.rotation = 90;

  road30 = createSprite(1460,1440,300,100);
  road30.addAnimation("roadimage",roadimage);
  road30.rotation = 90;

  road31 = createSprite(1460,1200,300,100);
  road31.addAnimation("roadimage",roadimage);
  road31.rotation = 90;

  //bg = createSprite(1500,1500,50,50);
  

  player1 = createSprite(380, 1000, 50, 50);
  player1.addAnimation("player1image",player1image);

 
  obstacle1Group = new Group();
  obstacle2Group = new Group();
  obstacle3Group = new Group();
  obstacle4Group = new Group();

 
 
}

function preload()
{
  coins1image = loadImage("images/coins1.png");
  coins2image = loadImage("images/coins2.png");
  coins3image = loadImage("images/coins3.png");
  coins4image = loadImage("images/coins4.png");
  coins5image = loadImage("images/coins5.png");
  coins6image = loadImage("images/coins6.png");

  trees1image = loadImage("images/trees1.png");
  trees2image = loadImage("images/trees2.png");
  trees3image = loadImage("images/trees3.png");
  trees4image = loadImage("images/trees4.png");
  trees5image = loadImage("images/trees5.png");
  trees6image = loadImage("images/trees6.png");
  trees7image = loadImage("images/trees7.png");
  trees8image = loadImage("images/trees8.png");
  trees9image = loadImage("images/trees9.png");
  trees10image = loadImage("images/trees10.png");
  trees1i1mage = loadImage("images/trees11.png");

  treasuresimage = loadImage("images/treasures.png");

  points1image = loadImage("images/points1.png");
  points2image = loadImage("images/points2.png");
  points3image = loadImage("images/points3.png");
  points4image = loadImage("images/points4.png");
  points5image = loadImage("images/points5.png");
  points6image = loadImage("images/points6.png");
  points7image = loadImage("images/points7.png");
  points8image = loadImage("images/points8.png");
  points9image = loadImage("images/points9.png");
  points10image = loadImage("images/points10.png");
  points11image = loadImage("images/points11.png");
  points12image = loadImage("images/points12.png");
  points13image = loadImage("images/points13.png");
  points14image = loadImage("images/points14.png");
  points15image = loadImage("images/points15.png");
  points16image = loadImage("images/points16.png");
  points17image = loadImage("images/points17.png");
  points18image = loadImage("images/points18.png");
  points19image = loadImage("images/points19.png");
  points20image = loadImage("images/points20.png");
  points21image = loadImage("images/points21.png");
  points22image = loadImage("images/points22.png");
  points23image = loadImage("images/points23.png");
  points24image = loadImage("images/points24.png");
  points25image = loadImage("images/points25.png");
  points26image = loadImage("images/points26.png");

  monkey1image = loadImage("images/monkey1.png");
  monkey2image = loadImage("images/monkey2.png");
  monkey3image = loadImage("images/monkey3.png");
  monkey4image = loadImage("images/monkey4.png");
  monkey5image = loadImage("images/monkey5.png");
  monkey6image = loadImage("images/monkey6.png");
  monkey7image = loadImage("images/monkey7.png");
  monkey8image = loadImage("images/monkey8.png");
  monkey9image = loadImage("images/monkey9.png");
  monkey10image = loadImage("images/monkey10.png");
  monkey11image = loadImage("images/monkey11.png");
  monkey12image = loadImage("images/monkey12.png");
  monkey13image = loadImage("images/monkey13.png");
  monkey14image = loadImage("images/monkey14.png");

  rocksimage1 = loadImage("images/rocksimage.png");

  player1image = loadAnimation("images/player1.png","images/player2.png","images/player3.png");
  
  forestimage = loadImage("images/forest.jpg");

  roadimage = loadImage("images/road.jpg");


}

function draw() 
{
  background("green"); 

  /*if(keyDown("space"))
  {  
    player1.velocityY = -12;
  }
  */
  //player1.velocityY = player1.velocityY + 0.8;
  //player1.collide(ground);

  if(keyDown("UP_ARROW"))
  {
    player1.y = player1.y -10;
  }
  if(keyDown("LEFT_ARROW"))
  {    
    player1.x = player1.x - 10;
  }
  if(keyDown("RIGHT_ARROW"))
  {   
    player1.x = player1.x + 10;
  }
  if(keyDown("DOWN_ARROW"))
  {   
    player1.y = player1.y + 10;
  }
 camera.x = player1.x;
  camera.y = player1.y-100;

  
  //ground.debug = true;
  player1.debug = true;
 // console.log(player1.x);
  //console.log(player1.y)

  player1.collide(road);  
  player1.collide(road2);
  player1.collide(road3); 
  player1.collide(road4); 
  


  //console.log(frameCount);
  //console.log(canvas);


  drawSprites();
  obstacle1();
  obstacle2();
  obstacle3();
  obstacle4();
}

function obstacle1() 
{
  if (frameCount % 100 === 0)
  {
    var obstacle1 = createSprite(3400,0,150,30);
    //obstacle1.y = Math.round(random(450,500));
    
    obstacle1.addImage("rocksimage",rocksimage1);
    obstacle1.lifetime = 10;
    
    
    obstacle1Group.add(obstacle1);
  }
  
}
function obstacle2() 
{
  if (frameCount% 100 === 0)
  {
    var obstacle2 = createSprite(2000,0,130,20);
    //obstacle2.y = Math.round(random(100,101));
    
    obstacle2.addImage("rocksimage2",rocksimage1);
    obstacle2.lifetime = 20;
    
    obstacle2Group.add(obstacle2);
  }
  
}
function obstacle3() 
{
  if (frameCount % 100 === 0)
  {
    var obstacle3 = createSprite(2900,0,150,20);
    //obstacle3.y = Math.round(random(120,500));
   
    obstacle3.addImage("rocksimage3",rocksimage1);
    obstacle3.lifetime = 30;
    
    obstacle3Group.add(obstacle3);
  }
  
}
function obstacle4() 
{
  if (frameCount % 100 === 0)
  {
    var obstacle4 = createSprite(1200,0,150,20);
   // obstacle4.y = Math.round(random(120,130));
  
    obstacle4.addImage("rocksimage4",rocksimage1);
    obstacle4.lifetime = 40;
    
    obstacle4Group.add(obstacle4);
  }
  
}
