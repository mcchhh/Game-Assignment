////----Drawing of Clouds----////
function drawClouds(){
    fill(255);
    for(var i in clouds){
        drawCloud(clouds[i]);
    }
}

function drawCloud(t_Cloud){
    fill(220 ,220, 220);
    ellipse(t_Cloud.pos_x-4, t_Cloud.pos_y-17, 55, 40);
    ellipse(t_Cloud.pos_x+34, t_Cloud.pos_y-20, 80, 65);
    ellipse(t_Cloud.pos_x+74, t_Cloud.pos_y-17, 55, 40);  
    fill(248 ,248, 255);
    ellipse(t_Cloud.pos_x, t_Cloud.pos_y-27, 55, 40);
    ellipse(t_Cloud.pos_x+40, t_Cloud.pos_y-30, 80, 65);
    ellipse(t_Cloud.pos_x+80, t_Cloud.pos_y-27, 55, 40);  

}


////----Initialising the Clouds----////

function initClouds(){
    for(var i=0; i<8;i++){
        var x = random(10, width-10);
        var y = random(70, 200);
        var w = random(40, 70);
        var s = random(0.1, 1.5);  //some clouds are faster, some are slower 
        var cloud = {pos_x: x, pos_y: y, width: w, speed: s};
        clouds.push(cloud);
    }
}


////----Animate the Clouds----////

function animateClouds(){
    for(i in clouds){
        var cloud = clouds[i];
        cloud.pos_x += cloud.speed;
        
        if(cloud.pos_x>width+1050){     //width+100 is where the clouds starts to disappear 
            cloud.pos_x =- random(2200, 1900);    //shfiting it back to the extreme left side as a loop, this is where the cloud will start - random is to make sure the clouds dont appear at the same place 
        }
    }
}

