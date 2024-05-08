////----Conditions of Game Character when it is moving----////

function drawGameChar(){
    //update drawGameChar() conditions to draw the game char 
    if(onPlatform && isLeft){  //##add this 
        drawWalkingLeft();
    }
    else if(onPlatform && isRight){   //##add this 
        drawWalkingRight();
    }
    else if(isLeft && isFalling)
    {
        drawJumpingLeft();
    }
    else if(isRight && isFalling)
    {
        drawJumpingRight();
    }
    else if(isLeft)
    {
        drawWalkingLeft();
    }
    else if(isRight)
    {
        drawWalkingRight();
    }
    else if(onPlatform){       //##add this (for the platfrom) for the front facing 
        drawStandingFrontFacing();
    }
    else if(isFalling || isPlummeting)
    {
        drawJumpingFacingForwards();
    }
    else
    {
        drawStandingFrontFacing();
    }
}


////----Drawings of the Game Character----////

function drawJumpingLeft(){
    //FOOT
    fill(0);
    rect(gameChar_x-6, gameChar_y-19, 11, 17, 3);
    //BODY
    fill(220 , 20 , 60);
    triangle(gameChar_x, gameChar_y-50,
             gameChar_x+10, gameChar_y-70,
             gameChar_x-10, gameChar_y-70);
    fill(210, 180, 140);
    rect(gameChar_x-16, gameChar_y-63, 30, 46, 5);
    //HANDS
    fill(0);
    ellipse(gameChar_x-18, gameChar_y-28, 12,12);
    //EYES 
    fill(105, 105, 105);
    rect(gameChar_x-11, gameChar_y-55, 13, 11,3);
}

function drawJumpingRight(){
    //FOOT
    fill(0);
    rect(gameChar_x-6, gameChar_y-19, 11, 17, 3);
    //BODY
    fill(220 , 20,  60);
    triangle(gameChar_x, gameChar_y-50,
             gameChar_x+10, gameChar_y-70,
             gameChar_x-10, gameChar_y-70);
    fill(210, 180, 140);
    rect(gameChar_x-16, gameChar_y-63, 30, 46, 5);
    //HANDS
    fill(0);
    ellipse(gameChar_x+16, gameChar_y-28, 12,12);
    //EYES 
    fill(105, 105, 105);
    rect(gameChar_x-3, gameChar_y-55, 13, 11,3);
}

function drawWalkingLeft(){
    //FOOT
    fill(0);
    rect(gameChar_x-6, gameChar_y-10, 11, 13, 3);
    //BODY
    fill(0);
    triangle(gameChar_x, gameChar_y-50,
             gameChar_x+10, gameChar_y-70,
             gameChar_x-10, gameChar_y-70);
    fill(210, 180, 140);
    rect(gameChar_x-16, gameChar_y-53, 30, 46, 5);
    //HANDS
    fill(0);
    ellipse(gameChar_x-18, gameChar_y-28, 12,12);
    //EYES 
    fill(105, 105, 105);
    rect(gameChar_x-11, gameChar_y-48, 13, 11,3);
}

function drawWalkingRight(){
    //FOOT
    fill(0);
    rect(gameChar_x-6, gameChar_y-10, 11, 13, 3);
    //BODY
    fill(0);
    triangle(gameChar_x, gameChar_y-50,
             gameChar_x+10, gameChar_y-70,
             gameChar_x-10, gameChar_y-70);
    fill(210, 180, 140);
    rect(gameChar_x-16, gameChar_y-53, 30, 46, 5);
    //HANDS
    fill(0);
    ellipse(gameChar_x+16, gameChar_y-28, 12,12);
    //EYES 
    fill(105, 105, 105);
    rect(gameChar_x-3, gameChar_y-48, 13, 11,3);
    
    
}

function drawJumpingFacingForwards(){
    //FOOT
    fill(0);
    rect(gameChar_x+6, gameChar_y-19, 11, 17, 3);
    rect(gameChar_x-16, gameChar_y-19, 11, 17, 3);
    //BODY
    fill(220 , 20,  60);
    triangle(gameChar_x, gameChar_y-50,
             gameChar_x+10, gameChar_y-70,
             gameChar_x-10, gameChar_y-70);
    fill(210, 180, 140);
    rect(gameChar_x-20, gameChar_y-63, 40, 46, 5);
    //HANDS
    fill(0);
    ellipse(gameChar_x-18, gameChar_y-28, 12,12);
    ellipse(gameChar_x+18, gameChar_y-28, 12,12);
    //EYES 
    fill(105, 105, 105);
    rect(gameChar_x-11, gameChar_y-55, 22, 11,3);
}

function drawStandingFrontFacing(){
    //FOOT
    fill(0);
    rect(gameChar_x+6, gameChar_y-10, 11, 13, 3);
    rect(gameChar_x-16, gameChar_y-10, 11, 13, 3);
    //BODY
    fill(0);
    triangle(gameChar_x, gameChar_y-50,
             gameChar_x+10, gameChar_y-70,
             gameChar_x-10, gameChar_y-70);
    fill(210, 180, 140);
    rect(gameChar_x-20, gameChar_y-53, 40, 46, 5);
    //HANDS
    fill(0);
    ellipse(gameChar_x-18, gameChar_y-28, 12,12);
    ellipse(gameChar_x+18, gameChar_y-28, 12,12);
    //EYES 
    fill(105, 105, 105);
    rect(gameChar_x-11, gameChar_y-48, 22, 11,3);
}
