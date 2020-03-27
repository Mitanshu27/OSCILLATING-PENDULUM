const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,holder,ball,thread;
function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,380,400,20);
  holder = new Holder(200,82,10,10);
  ball = new Ball(200,200);
  thread = new Thread(ball.body,holder.body);
}
function draw()
{
  background(0); 
  Engine.update(engine);
  fill("orange");
  rectMode(CENTER);
  rect(100,200,10,300);
  fill("brown");
  rectMode(CENTER);
  rect(180,82,220,10);
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(100,340,50,10);
  holder.display();
  ball.display();
  thread.display();
  fill("white");
  text("Press space bar to set the pendulum according to mouse X and Y",18,20);
  text("Press Enter to stop the Pendulum from moving",60,50);
  keyPressed();
}
function keyPressed()
{
  if(keyCode===32)
  {
    ball.body.position.x = mouseX;
    ball.body.position.y = mouseY;
  }
    
    else if (keyCode === ENTER)
  {
    ball.body.position.x = 200;
  }
    
}