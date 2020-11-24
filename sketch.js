
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4

function preload()
{
	
}

function setup() {
canvas=	createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;





	//Create the Bodies Here.
    bob1 = new Pendulum(windowWidth/8,windowHeight - 100,"blue")
	bob2 = new Pendulum(windowWidth/6,windowHeight - 100,"blue")
	bob3 = new Pendulum(windowWidth/4,windowHeight - 100,"blue")
	bob4 = new Pendulum(windowWidth/2,windowHeight - 100,"blue")

	rope1 = new Sling(bob1.body,{x:100, y:50});
	rope2 = new Sling(bob2.body,{x:160, y:50});
	rope3 = new Sling(bob3.body,{x:220, y:50});
	rope4 = new Sling(bob4.body,{x:280, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(bob1.body,{ x: mouseX, y: mouseY})

}


