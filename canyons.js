////----Drawing of Canyons----////
function drawCanyons(){
    for(var i=0; i<canyons.length; i++){
        var canyon = canyons[i];
        drawCanyon(canyon);
    }    
}


////----Drawing of Canyons----////

function drawCanyon(t_Canyon){
    fill(192, 192, 192, 165);

    rect(t_Canyon.pos_x, floorPos_y, t_Canyon.width, height-floorPos_y);

    fill(0, 0, 0, 110);  ////CENTER RECTANGLE////
    rect(t_Canyon.pos_x+10, floorPos_y+115, t_Canyon.width-28, height-floorPos_y-132);
    
    fill(178, 34, 34, 175);  
    triangle( t_Canyon.pos_x+15, floorPos_y+115,
              t_Canyon.pos_x+25, floorPos_y+95,
              t_Canyon.pos_x+35, floorPos_y+115);
    triangle( t_Canyon.pos_x+35, floorPos_y+115,
              t_Canyon.pos_x+45, floorPos_y+95,
              t_Canyon.pos_x+55, floorPos_y+115);
    triangle( t_Canyon.pos_x+55, floorPos_y+115,
              t_Canyon.pos_x+65, floorPos_y+95,
              t_Canyon.pos_x+75, floorPos_y+115);
    triangle( t_Canyon.pos_x+75, floorPos_y+115,
              t_Canyon.pos_x+85, floorPos_y+95,
              t_Canyon.pos_x+95, floorPos_y+115)
    triangle( t_Canyon.pos_x+95, floorPos_y+115,
              t_Canyon.pos_x+105, floorPos_y+95,
              t_Canyon.pos_x+115, floorPos_y+115);
    triangle( t_Canyon.pos_x+115, floorPos_y+115,
              t_Canyon.pos_x+125, floorPos_y+95,
              t_Canyon.pos_x+135, floorPos_y+115);
    triangle( t_Canyon.pos_x+135, floorPos_y+115,
              t_Canyon.pos_x+145, floorPos_y+95,
              t_Canyon.pos_x+155, floorPos_y+115);
    triangle( t_Canyon.pos_x+155, floorPos_y+115,
              t_Canyon.pos_x+165, floorPos_y+95,
              t_Canyon.pos_x+175, floorPos_y+115);
    triangle( t_Canyon.pos_x+175, floorPos_y+115,
              t_Canyon.pos_x+185, floorPos_y+95,
              t_Canyon.pos_x+195, floorPos_y+115);
    triangle( t_Canyon.pos_x+195, floorPos_y+115,
              t_Canyon.pos_x+205, floorPos_y+95,
              t_Canyon.pos_x+215, floorPos_y+115);
    triangle( t_Canyon.pos_x+215, floorPos_y+115,
              t_Canyon.pos_x+225, floorPos_y+95,
              t_Canyon.pos_x+235, floorPos_y+115);
    triangle( t_Canyon.pos_x+235, floorPos_y+115,
              t_Canyon.pos_x+245, floorPos_y+95,
              t_Canyon.pos_x+255, floorPos_y+115);
    triangle( t_Canyon.pos_x+255, floorPos_y+115,
              t_Canyon.pos_x+265, floorPos_y+95,
              t_Canyon.pos_x+275, floorPos_y+115);
}


////----Initialising the Canyons----////

function initCanyons()   //Allocating canyons at their specific positions using the different X and Y axis.  
{
    canyons = [{pos_x: -170, width: 300},
               {pos_x: 800, width: 300},
               {pos_x: 1350, width: 300},
               {pos_x: -1800, width: 300},
               {pos_x: -700, width: 300}];
}


////----Game Character Falling into the Canyon.----////

function checkIfGameCharFallIntoCanyon(){
    
    if(checkIsGameOver()){    
        return;
    }

    
    for(var i=0; i<canyons.length; i++){
        var canyon = canyons[i];
        //--Check if game character is over the canyon.--// 
        if((gameChar_world_x > canyon.pos_x + gameChar_width/2  && 
            gameChar_y == floorPos_y)
          && 
          (gameChar_world_x < canyon.pos_x + canyon.width - gameChar_width/2 && gameChar_y == floorPos_y)){
            isPlummeting = true;
            lives--;                 //--When left with 1 life and game character dies, game character doesn't fall into canyon. If removed, it falls, if it isn't removed, it stays on top--//
            fallSound.play();
            console.log("playsound");
        }
    }

}



