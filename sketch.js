
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p;
var h;
var s;
var r;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15
var i;

function preload()
{
	
}

function setup() {
    var canvas=createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
  p=new plane(600,height,1200,20);
	s=new stone(600,100,100,100);
	h=new hammer(100,100);
  r=new rubber(200,200,40,40);

  s1=new sand(150,200,10,10);
  s2=new sand(152,200,10,10);
  s3=new sand(154,200,10,10);
  s4=new sand(156,200,10,10);
  s5=new sand(158,200,10,10);
  s6=new sand(160,200,10,10);
  s7=new sand(162,200,10,10);
  s8=new sand(164,200,10,10);
  s9=new sand(152,200,10,10);
  s10=new sand(153,200,10,10);
  s11=new sand(163,200,10,10);
  s12=new sand(157,200,10,10);
  s13=new sand(168,200,10,10);
  s14=new sand(166,200,10,10);
  s15=new sand(164,200,10,10);

  i=new iron(300,300,60,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  p.display()
  h.display()
  s.display()
  r.display()

  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()
  s6.display()
  s7.display()
  s8.display()
  s9.display()
  s10.display()
  s11.display()
  s12.display()
  s13.display()
  s14.display()
  s15.display()

  i.display();

  drawSprites();
 
}



