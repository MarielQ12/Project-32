const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0 ;
var backgroundImg, bg;

function preload() {
    getTime()
  }

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,600,3000,20)
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)
    ball = new Ball(150,200,60)
    rope = new Rope(ball.body,{x:150, y:200})
    box1 = new Box(300,275,30,40)
    box2 = new Box(330,275,30,40)
    box3 = new Box(360,275,30,40)
    box4 = new Box(390,275,30,40)
    box5 = new Box(420,275,30,40)
    box6 = new Box(450,275,30,40)
    box7 = new Box(480,275,30,40)
    box8 = new Box(330,235,30,40)
    box9 = new Box(360,235,30,40)
    box10 = new Box(390,235,30,40)
    box11 = new Box(420,235,30,40)
    box12 = new Box(450,235,30,40)
    box13 = new Box(360,195,30,40)
    box14 = new Box(390,195,30,40)
    box15 = new Box(420,195,30,40)
    box16 = new Box(390,155,30,40)
    
    box17 = new Box(640,175,30,40)
    box18 = new Box(670,175,30,40)
    box19 = new Box(700,175,30,40)
    box20 = new Box(730,175,30,40)
    box21 = new Box(760,175,30,40)
    box22 = new Box(670,135,30,40)
    box23 = new Box(700,135,30,40)
    box24 = new Box(730,135,30,40)
    box25 = new Box(700,95,30,40)
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    //Engine.update(engine);
    textSize(30)
    fill ("white")
    text ("Drag the polygon to destroy the blocks",300,30)
    text("Press Space to Get a Second Chance", 650,350)

    ground.display();
    ball.display();
    rope.display();
    fill("red");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("orange");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("yellow");
    box13.display();
    box14.display();
    box15.display();
    fill("green");
    box16.display();
    fill ("blue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("magenta");
    box22.display();
    box23.display();
    box24.display();
    fill("pink");
    box25.display();
    stand1.display();
    stand2.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    text ("Score: " + score, 900, 30)
}
  
function mouseDragged(){
 Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
 rope.fly()
}

function keyPressed(){
    if (keyCode===32){
        rope.attach(ball.body)
    }
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Manila")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime;
    var hour = datetime.slice (11,13)
    
    console.log(hour)
    if (hour>=06&&hour<=19){
        bg = "light.jpg"
    }
    else {
        bg = "dark.jpg"
    }
    backgroundImg = loadImage(bg)
}