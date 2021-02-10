
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new ball(275, 400, 62.5)

	bob2 = new ball(337.5, 400, 62.5)

	bob3 = new ball(400, 400, 62.5)

	bob4 = new ball(462.5, 400, 62.5)

	bob5 = new ball(525, 400, 62.5)

	roof = new ground(400, 150, 400, 25)

	chain1 = new chain(bob1.body, roof.body, 275, 160)

	chain2 = new chain(bob2.body, roof.body, 337.5, 160)

	chain3 = new chain(bob3.body, roof.body, 400, 160)

	chain4 = new chain(bob4.body, roof.body, 462.5, 160)

	chain5 = new chain(bob5.body, roof.body, 525, 160)


	Engine.run(engine);
  
}


function draw() {
  background("lightgrey");

  Engine.update(engine)
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 
}



