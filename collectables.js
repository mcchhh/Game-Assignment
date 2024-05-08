////----Game Character collecting the collectables.----////

function collectCollectables(){
    for(var i=0; i<collectables.length; i++){
        if(collectables[i].isFound==false){
            //check if game character is in the range of the collectable 
            if(dist(gameChar_world_x, gameChar_y, collectables[i].pos_x+15, collectables[i].pos_y)<25){
            collectables[i].isFound=true;
            game_score++;  //incrementing it when collectables are collected 
            collectSound.play();
            console.log("game_score:"+game_score);
        }
      }
   }
}


////----Drawing of collectables.----////

function drawCollectables()
{
    for(var i=0; i<collectables.length; i++){
        if(collectables[i].isFound==false){
            drawCollectable(collectables[i]);
        }
    }
}


function drawCollectable(t_Collectable)
{
    fill(250, 250 ,210);
    rect(t_Collectable.pos_x, t_Collectable.pos_y-38, 30, 35, 8);
    rect(t_Collectable.pos_x+11, t_Collectable.pos_y-50, 8.5, 16, 5);
    fill(255, 127,  80);
    ellipse(t_Collectable.pos_x+15, t_Collectable.pos_y-55, 16, 16);
    fill(  0, 255 ,255, 180);
    rect(t_Collectable.pos_x, t_Collectable.pos_y-28, 30, 25, 8);
}


////----Initialising the collectables----////

function initCollectables()
{
    var total_collectables = 5;
    while (collectables.length < total_collectables)  //ensure that no collectables are rejected and print out number will always be 80 
    {
            var x = random(-1950, 1800);   //randomly placed on the scene 
            var c = {pos_x: x, pos_y: floorPos_y, size: 40, isFound: false};
            
            if(isCollectableOnCanyon(c) == false)
            {
                collectables.push(c);   //always need to push 
            }
        }
    console.log(collectables.length);  // to check the number of collectables - not 80 for every refresh in the for loop 

}

//return a true if the collectable is on top of a canyon , else return false 
function isCollectableOnCanyon(t_c)   //rejecting collectables 
{
    var onCanyon = false;
    
    //only need to write the code once cos can loop
    for(i in canyons){
        var canyon = canyons[i];
        var x1_limit = canyon.pos_x - t_c.size;      //left side , why size? 
        var x2_limit = canyon.pos_x + canyon.width;   //right side 
        if(t_c.pos_x > x1_limit && t_c.pos_x < x2_limit)  //condition statement to check 
        {
            onCanyon = true;   //cos initially assumes that it was false 
            break;    //break from for loop 
        }
    }
    return onCanyon;
}

