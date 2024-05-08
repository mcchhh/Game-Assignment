////----Basic Background Design----////

function drawGround(){
    noStroke();
    fill(74, 134, 94); //sea green 
    rect(0, floorPos_y, width, height-floorPos_y);   //draw green ground 
    //SOIL////
    fill( 71, 125, 91);
    rect(0, floorPos_y+36, width, height-floorPos_y);
    fill( 61, 119, 85);
    rect(0, floorPos_y+76, width, height-floorPos_y);
    fill( 105, 105, 105, 140);
    rect(0, floorPos_y+110, width, height-floorPos_y);
}


////---Sky Gradient---////

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      line(j, y, j, y+h);
    }
  }
}


////----Tree Design (Single only) ----////

function drawTrees(){
    for(var i=0; i<trees_x.length; i++)
    {
        fill(107, 142,  35, 175);
        rect(trees_x[i]+40, floorPos_y-194, 100, 170, 35);
        fill(107, 142,  35);
        rect(trees_x[i]+28, floorPos_y-200, 100, 170, 35);
        fill(160, 82, 45);
        rect(75+trees_x[i], floorPos_y-160, 8, 160, 5);
        rect(trees_x[i]+48, floorPos_y-143, 30, 8, 35);
        rect(trees_x[i]+48, floorPos_y-75, 30, 8, 35);
        rect(trees_x[i]+80, floorPos_y-108, 30, 8, 35);
        fill(255, 195,   0);
        ellipse(trees_x[i]+57, floorPos_y-147, 10, 10, 35);
        ellipse(trees_x[i]+68, floorPos_y-78, 10, 10, 35);
        ellipse(trees_x[i]+102, floorPos_y-112, 10, 10, 35);
    }
}


////----Flagpole and Flag----////

function drawFlagpole(){
    
    
    fill(0);
    noStroke();
    rect(flagpole.pos_x,floorPos_y-flagpole.pole_height,
        5,flagpole.pole_height);
    

    ////CIRCLE////
    fill(0);
    ellipse(flagpole.pos_x+2, floorPos_y-flagpole.pole_height,
           18, 18);
    
    fill(255);   ////FLAG COLOUR////
    if(flagpole.isReached){  //when isReached is TRUE. It will rise. 
        rect(flagpole.pos_x, 
            floorPos_y-flagpole.pole_height, //can minus off with absolute number first. 
            flagpole.flag_width,
            flagpole.flag_height);
        

        //if isReached == TRUE then the flag will be raise to the top of the pole. 
    }else{
        rect(flagpole.pos_x,  //when isReached is FALSE. It will drop.
            floorPos_y-flagpole.flag_height,
            flagpole.flag_width,
            flagpole.flag_height)
        //50 cos the height is 50, this is when the flag is still on the floor waiting for it to be raised. isReached == FALSE.
    }
    
}


//--Checking if flag the flag reaches the top of the flagpole--//

function checkFlagpole(){
    if(flagpole.isReached==false){
        var d = dist(gameChar_world_x, gameChar_y,
                     flagpole.pos_x, floorPos_y);
        if(d<10){
            flagpole.isReached = true; 
            winSound.play();
        }
    }
}


////----Life Token (Top right corner)----//// if the game char dies, it will minus one life token.

function drawLifeTokens(){
    fill(0);
    textSize(19);
    text("How to play:", 850, 100);
    text("1. Use Arrow keys to", 850, 125);
    text("move left & right.",850, 145);
    text("2. Up arrow to jump.",850, 175)
 
    
    for(var i=0; i<lives; i++){
        fill(65 ,105, 225);
        rect(60*i+850, 35, 27, 32, 3);
        fill(210, 180, 140);
        rect(60*i+855, 40,17, 22, 3);
        fill(255 ,255 , 0);
        ellipse(60*i+863, 23, 19, 29);
        fill(255, 140,   0);
        ellipse(60*i+863, 29, 11, 17);


    }
}

//--(Life Token) Check if the Game Char dies--//

function checkPlayerDie(){
    //to check if the game char reaches the end of the canvas then the game will restart again.
    if(gameChar_y>height){
        if(lives>0){
            startGame();
        }
    } 
}


////----Game Score----////

function drawGameScore(){
    fill(0);
    textFont('Candara');
    textSize(30);
    text("Potions Collected:" + game_score, 15, 40);   //10, 30 is the position of the text in x & y axis 
    textSize(19);
    text("Mission:", 15, 68);
    text("To collect all 5 potions,", 15, 93);
    text("then find the flag to win.", 15, 115);
    textSize(13);
    text("By: Michelle", 15, 145);
    
}



////----Platforms----////
 
function drawPlatforms(){
    for (i in platforms ){
        var platform = platforms[i];   //grab platform one by one from the initliasing array 
        platform.draw();    //build into the platform object ^refer to the above 
    }
}

function createPlatform(x, y, length){
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
            fill(	205, 133,  63, 150);
            noStroke();
            rect(this.x+2, this.y+8, this.length, 13, 10);
            fill(218, 165,  32);
            rect(this.x, this.y, this.length, 13, 10);   //15 is the height


            
        },
        checkContact: function(gc_x, gc_y){
            //check for x axis, make sure game char is within the x axis of the platform 
            var c1 = gc_x+20>this.x;    //thickness of the gamechar is about 20 px, mine might be different 
            var c2 = gc_x < this.x+20 + this.length;
            if(c1 && c2){
                //check for y axis 
                var d = this.y - gc_y;
                if(d>=0 && d<1){
                    return true;
                }
            }
            return false;
        }
    }
    return p; 
}

function checkIfCharacterIsOverAnyPlatforms(){
    //##check if character is under the platform 
    if(isFalling){
        var isContact = false;
        onPlatform = false;
        for(i in platforms){
            var platform = platforms[i];
            isContact = platform.checkContact(gameChar_world_x, gameChar_y);
            if(isContact){
                onPlatform = true;
                break;
            }
        }
        if(isContact == false){
            gameChar_y+=2;
        }
    }
}




