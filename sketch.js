const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var supplyPackage, packageImage;
var helicopter;
var ground;
var redBox1, redBox2, redBox3;

function preload() {
    packageImage = loadImage("./package.png");
    helicopter = loadImage("./helicopter.png");
}

function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    options = {
        isStatic: true,
        restitution: 1
    }

    supplyPackage = Bodies.rectangle(200, 100, 30, 30, options);
    ground = Bodies.rectangle(200, 400, 400, 50, {isStatic: true});
    redBox1 = Bodies.rectangle(200, 365, 200, 20, {isStatic: true});
    redBox2 = Bodies.rectangle(310, 325, 20, 100, {isStatic: true});
    redBox3 = Bodies.rectangle(90, 325, 20, 100, {isStatic: true});

    World.add(world, supplyPackage);
    World.add(world, ground);
    World.add(world, redBox1);
    World.add(world, redBox2);
    World.add(world, redBox3);
}

function draw() {
    background(0);

    imageMode(CENTER);
    image(packageImage, supplyPackage.position.x, supplyPackage.position.y, 30, 30);

    image(helicopter, 200, 100, 110, 55);

    if(keyDown("down")){
        Matter.Body.setStatic(supplyPackage, false);
    }

    push();
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 50);
    pop();

    push();
    fill("red");
    rectMode(CENTER);
    rect(redBox1.position.x, redBox1.position.y, 200, 20);
    rect(redBox2.position.x, redBox2.position.y, 20, 100);
    rect(redBox3.position.x, redBox3.position.y, 20, 100);
    pop();

    Engine.update(engine);
}
