
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint;

var dground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
treeimg=loadImage("tree.png");
boying=loadImage("boy.png");
{
	
}

function setup() {
	createCanvas(1000,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dground= new Ground();
	stones=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,16);
    mango6=new Mango(700,250,35);
    mango7=new Mango(825,170,33);
    mango8=new Mango(880,260,35);
    mango9=new Mango(940,220,35);
	mango10=new Mango(980,385,35);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



