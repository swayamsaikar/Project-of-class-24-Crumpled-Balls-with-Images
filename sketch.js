
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftWall, rightWall;

var paper;
var ground;
var lw, rw;
var bt;
var dustbinImage;

function preload() {
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 1200);

	engine = Engine.create();
	world = engine.world;


	var option2 = {
		isStatic: true
	}
	strokeWeight(4);
	stroke("red");
	fill("pink");
	leftWall = Bodies.rectangle(10, 1140, 50, 25000, option2);
	World.add(world, leftWall);

	var option4 = {
		isStatic: true
	}
	strokeWeight(4);
	stroke("red")
	fill("pink");
	rightWall = Bodies.rectangle(1590, 1140, 50, 25000, option4);
	World.add(world, rightWall);

	//Create the Bodies Here.
	paper = new Paper(200, 600, 30);
	//paper.scale = 0.8;
	ground = new Ground(800, 1190);

	lw = new Dustbin(1280, 1020, 30, 350);
	rw = new Dustbin(1480, 1020, 30, 350);
	bt = new Dustbin(1380, 1150, 200, 30);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("white");
	rect(leftWall.position.x, leftWall.position.y, 50, 25000);
	rect(rightWall.position.x, rightWall.position.y, 50, 25000);

	paper.display();
	paper.scale = 1;
	ground.display();
	bt.display();
	lw.display();
	rw.display();

	imageMode(CENTER);
	image(dustbinImage, 1380, 1005, 250, 350);

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body, paper.body.position, { x: 105, y: -105 });
	}

	if (keyCode === RIGHT_ARROW) {
		Body.applyForce(paper.body, paper.body.position, { x: 105, y: 50 });
	}

	if (keyCode === LEFT_ARROW) {
		Body.applyForce(paper.body, paper.body.position, { x: -105, y: 50 });
	}
}
