const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,375,50,50);
    pig1 = new Pig(187,375);
    box2 = new Box(175,375,50,50);
    log1 = new Log(188,325,123,PI/2);
    box3 = new Box(150,300,50,50);
    pig2 = new Pig(187,305);
    box4 = new Box(225,300,50,50);
    log2 = new Log(188,275,123,PI/2);
    box5 = new Box(187,225,50,50);
    log3 = new Log(180,225,100,PI/8);
    log4 = new Log(190,225,100,PI/-8);

    ground = new Ground(100,400,800,25);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}