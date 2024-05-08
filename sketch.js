//--Final Game Project - Michelle Beth Teo 

//--Hi, I hope you have fun playing my game project. I encourage you to find all the potions in the game before finding the flag to win the game!

//--In the beginning, everything was easily understandable. I was able to code and implement my game character, trees, canyons, clouds, and collectables easily. However, when it came to array, for loops, and functions part, I had a few struggles trying to understand how it works and how it can be implemented in this game project. I hope I was able to deliver it properly throughout this project, with the help of the professors, Coursera videos, student community and self-research. 

//--Some good skills I have learnt was implementing platforms (add difficulty in the game), changing the background to have a gradient (visual aspect) and to refractor my codes as having all codes on one JavaScript page can be very long and messy, hence to refractor it and to add comments along the way has helped me navigate my codes around easily without being lost. 

//--In all, programming this game project has helped me have a better understanding and learning towards JavaScript as a whole. Although I may not be good at it yet, it makes me want to continue learning and to improve my skills along the way. Thank you.



var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var trees_x;
var mountains;
var collectables;
var canyons;
var clouds;
var scrollPos;
var platforms;   
var onPlatform;

var lives;
var flagpole;
var game_score;

var collectSound;   
var jumpSound;
var fallSound;
var winSound; 
var soundReady;
var soundLoadCounter;


////----Loading File Sounds or Images----////
function preload(){
    
    soundReady = false; 
    soundLoadCounter = 0;
    
    //Sound effect obtained from httpe://mixkit.co/free-sound-effects/
    soundFormats("mp3");
    
    collectSound = loadSound("assets/collectable.mp3", soundLoaded);
    jumpSound = loadSound("assets/jump.mp3", soundLoaded);
    fallSound = loadSound("assets/falling.mp3", soundLoaded);
    winSound = loadSound("assets/win.mp3", soundLoaded);
    collectSound.setVolume(0.35);
    jumpSound.setVolume(0.4);
    fallSound.setVolume(0.35);
    winSound.setVolume(0.4);
}


function soundLoaded(){
    soundLoadCounter++;
    if(soundLoadCounter==4){
        soundReady = true; 
    }
}



////----Setting up of Canvas----////

function setup()
{
    createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    lives = 3;       
    startGame();
}



    
////----Drawing Code----////

function draw()
{
    //---Sound---//
    
    if(!soundReady){
        return;
    }
    
    //--Sky Gradient--//
    
    background(220);
    var color1 = color(250,128,114);  //salmon 
    var color2 = color(153, 50, 204);  //dark orchid 
    setGradient(0, 0, 1024, 576, color1, color2, "Y");
    
    drawGround();

    push();                                  //--Game Scrolling--//
    translate(scrollPos,0);
    drawMountains();                
    animateClouds();
    drawClouds();
    drawTrees();
    drawCanyons();
    drawCollectables();
    collectCollectables();
    checkIfGameCharFallIntoCanyon();         //--Game Character falling into canyon--//
    drawFlagpole();                          
    checkFlagpole();                         //--Checking of flagpole--//
    checkPlayerDie(); 
    drawPlatforms(); 
    pop();
    drawLifeTokens();                        //--Call out life token--// 
    drawGameScore();                         //--Call out game score--// 
    drawGameChar();                          //--Drawing of game character--//
    
    
    //--To check if game is over--//
    
    if(checkIsGameOver()){
        drawGameOver();                      //--Game over text will be drawn--//
        return;                              //--Once return dont have to touch it anymore--// 
    }

    
    
    ////----Game Interaction Code----////
    
    //--Conditional statements to move the game character--//
    
    var isGameOver = checkIsGameOver();
    if(isGameOver == true){
        drawGameOver();
        return;
    }
    
    if(isPlummeting==true){
        gameChar_y += 8;                  //--Incrementing y to let game character fall--//
        checkPlayerDie();
        return;            
    }
    
    if(gameChar_y<floorPos_y){
        isFalling=true; 
    }else{
        isFalling=false;
    }
    
    
    //--Constrain game character from moving out of the canvas frame.--//
    
    gameChar_x = constrain(gameChar_x, -2000+scrollPos, 2000+scrollPos);
        
    
    
    //--Logic for Game Character to move.--// 
    
    if(isLeft==true){
        if(gameChar_x > width * 0.2){       //--If game char is within the original frame--//
            gameChar_x -= 3.5; 
        }else{                              //--Translate drawing towards the right to get the effect of moving to the left.--//
            scrollPos += 4;
        }
    }
    if(isRight==true){                      //--If game char is within the original frame--// 
        if(gameChar_x < width * 0.8){
            gameChar_x += 3.5; 
        }else{       //--translate drawing towards the left to get the effect of moving to the right. Negative for moving against the background.--//
            scrollPos -= 4;
        }
    }
    
   
    checkIfCharacterIsOverAnyPlatforms();
	gameChar_world_x = gameChar_x - scrollPos;   //--Update real position of gameChar for collision detection.--//
}





////----Reset Game if Win or Lose.----////

function reset()
{
    setup();
}




////----Starting the Game----////

function startGame(){

    ////---Initialising the Game---////
    
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    gameChar_width = 50; 
    
    game_score = 0; 
    
    //--Everytime restarting the game will reset to false.--//
	//--Boolean variables to control the movement of the game character.--//
    
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    onPlatform = false; 
    scrollPos = 0;   	                         // Variable to control the background scrolling.
    splash = false;
    
    
    //--Variable to store the real position of the gameChar in the game world. Needed for collision detection.--//
    
    gameChar_world_x = gameChar_x - scrollPos;   
    
    
    //--Dont need to initialise beacuse it is not going to be random.--//
    
    flagpole = {pos_x: 1950, 
               pole_height: 350, 
               flag_height: 40, 
               flag_width: 90, 
               isReached: false}                 //--isReached is to determine whether the flag will be up or down.--//
    
    //--Initialising the mountains.--//
    mountains = [];
    
    //--Initialising the trees.--//
    trees_x = [-2220, -1740, -1550, -1150, -1000, -655, -270, -125, 780, 1750];
    
    //--Initialising the canyons.--//
    canyons = [];
    initCanyons();

    //--Initialising the collectables.--//
    collectables = [];
    initCollectables();
    
    //--Initialising the clouds by random.--//
    clouds = [];   
    initClouds();
    
    //--Initiliasing platforms into an array.--//
    platforms = [];
    var p1 = createPlatform(-1930, floorPos_y-120, 80);
    var p2 = createPlatform(-1750, floorPos_y-180, 90);
    var p3 = createPlatform(-930, floorPos_y-120, 100);
    var p4 = createPlatform(-710, floorPos_y-180, 115);
    var p5 = createPlatform(640, floorPos_y-110, 90);
    var p6 = createPlatform(1100, floorPos_y-110, 100);
    var p7 = createPlatform(1300, floorPos_y-160, 85);
    var p8 = createPlatform(1450, floorPos_y-210, 80);
    platforms.push(p1);
    platforms.push(p2);
    platforms.push(p3);
    platforms.push(p4);
    platforms.push(p5);
    platforms.push(p6);
    platforms.push(p7);
    platforms.push(p8);

}


////----Game Over----////

//--Game Over text--//

function drawGameOver(){
    if(gameCart == 2)
    {
    
    fill(0);
    textSize(40);
    
    if(lives>0){
        fill(255, 255, 255, 170);
        rect(180, height/2-40, 685, 55, 20);
        fill(0);
        text("You Win! Press (Space Bar) to start.", 222, height/2);
    }else{
        fill(255, 255, 255, 170);
        rect(180, height/2-40, 690, 55, 20);
        fill(0);
        text("You Lose! Press (Space Bar) to restart.", 205, height/2);
         }
    }
}


//--To check if game is over when there is no more lives.--// 

function checkIsGameOver(){
    var gameOver = false;
    
    if(lives<1 || flagpole.isReached){       //--If lives<1, it will be game over.--//
        gameOver = true; 
//    }else if(collectCollectables<5 || flagpole.isReached){
//        gameOver = true;
    }
    gameCart = 2;
    return gameOver;
}





////----Key Control Functions----////

//--If statements to control the animation of the character when keys are pressed.--//
//=--Open up console to see how these work.--//

function keyPressed(){
	console.log("press" + keyCode);
	console.log("press" + key);

    
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = true; 
        
    }
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = true;   

    }
    else if(keyCode == 38){
        //--ensure that the character only jump when it is touching the ground.--//
        if(gameChar_y >= floorPos_y || onPlatform){
                console.log("up arrow");
     
                gameChar_y -= 150;       //--Height that the game character is able to jump up from the ground.--//
                jumpSound.play();
        
        }
    }
    
    
////----Pressing of Space Bar to reset the Game----////
    
    else if(gameCart > 1){
        if(keyCode == 32){
            reset(); 
        }
    }
    
}



//--If statments to control the animation of the game character when keys are released.--//

function keyReleased()
{
     

	console.log("keyRelease" + key);
	console.log("keyRelease" + keyCode);
    
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = false; 
     }
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = false; 
    }
}

