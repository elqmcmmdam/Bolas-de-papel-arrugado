//MAESTRA, CUANDO HAGO CLICK EN "GO LIVE" EL PROYECTO NO SE EJECUTA CORRECTAMENTE,
//SALE ERROR, Y EL PROGRAMA DICE QUE ES PORQUE LA CLASE "GROUND" NO ESTÁ DEFINIDA,
//PERO NO ENTIENDO, YO YA DEFINÍ LA CLASE, Y NO SÉ PORQUE ME SIGUE MARCANDO COMO ERROR,
//SEGURAMENTE ESTOY HACIENDO ALGO MAL, PERO DE TODOS MODOS LE ENVÍO EL PROYECTO,
//HICE LA VARIABLE "BALL", LA VARIABLE "BALL_OPTIONS", LA CLASE "GROUND", EL METODO "DISPLAY",
//LAS VARIABLES "LEFTSIDE" Y "RIGHTSIDE", Y LA FUNCIÓN "KEYPRESSED", ESPERO QUE EN LA SIGUIENTE
//CLASE ME PUEDA ACLARAR LAS DUDAS, GRACIAS.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var Ground;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1500, 1400);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	};

	ball = Bodies.circle(750,200, 50, ball_options);
	World.add(world, ball);

	Ground = new ground(750,1200,100,100);
	World.add(world,Ground);

	leftSide = new ground(100,600,20,120);
	rightSide = new ground(1400,600,20,120);
	World.add(world,leftSide);
	World.add(world,rightSide);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Ground.display();
  leftSide.display();
  rightSide.display();
  
  ellipse(ball.x,ball.y,50);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
}



