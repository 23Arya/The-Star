//create variable for star
var starImg,bgImg;
var star, starBody;
//create variable for fairy
var fairy1,fairy1Img;
var fairy2, fairy2Img;
var fairy,fairyanime;
//variable for sound
var joysound;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//load image for star and background
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy 
    fairyanime = loadAnimation("fairyImage1.png" , "fairyImage2.png");
	//load sound 
	joysound = loadSound("joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	joysound.play();


	//create fairy sprite and add animation for fairy
	fairy = createSprite(30,500,20,20);
	fairy.addAnimation("fairy", fairyanime);
	fairy.scale = 0.2;

	
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	if(fairy.positionX = 450){
		fairy.velocityX = 0;
	}
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  joysound.play();

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);


  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20;
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20;	
	}

	if (keyCode === SPACE) {
		fairy.velocityX = 0;
	}
}
