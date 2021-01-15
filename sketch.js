const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var playerScore = 0
var computerScore = 0

function preload(){
    field = loadImage('field.jpg');
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    player = new Player (400,200,50,50);
    computerPlayer = new CompPlayer (900,200,50,50);
    
    playerGoal = new Goal (1000,150,100,200);
    computerGoal = new Goal (150,150,100,200);
    
    ball = new Ball (600,200,50,50);
    
    leftBoundary = new Boundary (10,200,10,400)
    rightBoundary = new Boundary (1200,200,10,400)
    topBoundary = new Boundary (600,10,1200,10)
    bottomBoundary = new Boundary (600,400,1200,10)


    engine.world.gravity.y = 0;
   

}

function draw(){
    background(field);
  textSize(20);
    fill('white')
    text('Player Score:'+ computerScore, 400,50)
    text('Computer Score:'+ playerScore, 700,50);
    Engine.update(engine);
    player.display();
    computerPlayer.display();
    playerGoal.display();
    computerGoal.display();
    ball.display();
    leftBoundary.display();
    rightBoundary.display();
    topBoundary.display();
    bottomBoundary.display();

  //  computerPlayer.body.position.y = ball.body.position.y
   // computerPlayer.body.position.x = ball.body.position.x

    if(ball.body.position.x < 240){
        Matter.Body.setPosition(ball.body,{x:600, y:200})
        playerScore = playerScore + 1;
    }
    if(ball.body.position.x > 920 ){
        Matter.Body.setPosition(ball.body,{x:600, y:200})
        computerScore = computerScore + 1
    }
    if(playerScore == 5||computerScore == 5){
        text('gameOver',400,200)
    }
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
    console.log('LEFT')
     player.move(-5,0)
    }
    if(keyCode == RIGHT_ARROW){
        player.move(5,0)
    }
    if(keyCode == UP_ARROW){
        player.move(0,5)
    }
    if(keyCode == DOWN_ARROW){
        player.move(0,-5)
    }
    if(keyCode == 87){
        
        computerPlayer.move(-10,0)
        }
        if(keyCode == 83){
            computerPlayer.move(10,0)
        }
        if(keyCode == 85 ){
            computerPlayer.move(0,10)
        }
        if(keyCode == 86){
            computerPlayer.move(0,-10)
        }

      if(keyCode == 32){
        ball.movement()
    }
}

