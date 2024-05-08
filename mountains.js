//MOUNTAINS////   -- find a way to traverse array 
function drawMountains(){
   //    console.log("draw mountains");
    ////CENTER TRIANGLE////
        

    fill(65 ,105, 225, 150);   
    triangle(mountains + 180, floorPos_y,   //left side 
             mountains + 330, mountains + 100,   //center 
             mountains + 480, floorPos_y);   //right side 
    fill( 0,   0, 205, 100);   
    triangle(mountains + 390, floorPos_y,   //left side 
             mountains + 330, mountains + 100,   //center 
             mountains + 480, floorPos_y);   //right side 
    fill(255, 255, 255, 180);
    triangle(mountains + 279, floorPos_y-220,   //left side 
             mountains + 330, mountains + 100,   //center 
             mountains + 392, floorPos_y-195);   //right side
    
    
    ////LEFT TRIANGLE////
    fill(65 ,105, 225, 200);
    triangle(mountains , floorPos_y,   //right side 
             mountains + 100, mountains + 190,   //center 
             mountains + 200, floorPos_y);   //left side 
    fill( 0,   0, 205, 90); 
    triangle(mountains + 150, floorPos_y,   //right side 
             mountains + 100, mountains + 190,   //center 
             mountains + 200, floorPos_y);   //left side 
    
    fill(255, 255, 255, 200);
    triangle(mountains + 65, floorPos_y-160,   //right side 
             mountains + 100, mountains + 190,   //center 
             mountains + 135, floorPos_y-160);   //left side 
    
    
    ////RIGHT TRIANGLE////
    fill(65 ,105, 225, 210);
    triangle(mountains + 430, floorPos_y,   //left side 
             mountains + 530,  mountains + 250,   //center 
             mountains + 630, floorPos_y);   //right side
    fill( 0,   0, 205, 90); 
    triangle(mountains + 570, floorPos_y,   //left side 
             mountains + 530,  mountains + 250,   //center 
             mountains + 630, floorPos_y);   //right side
    fill(255, 255, 255, 210);
    triangle(mountains + 485, floorPos_y-100,   //left side 
             mountains + 530,  mountains + 250,   //center 
             mountains + 575, floorPos_y-100);   //right side

        
    
    //ANOTHER SET//
    ////CENTER TRIANGLE////
    fill(65 ,105, 225, 150);   
    triangle(mountains - 500, floorPos_y,   //left side 
             mountains - 350, mountains + 100,   //center 
             mountains - 200, floorPos_y);   //right side 
    fill( 0,   0, 205, 80);
    triangle(mountains - 300, floorPos_y,   //left side 
             mountains - 350, mountains + 100,   //center 
             mountains - 200, floorPos_y);   //right side 
    fill(255, 255, 255, 180);
    triangle(mountains - 410, floorPos_y-200,   //left side 
             mountains - 350, mountains + 100,   //center 
             mountains - 283, floorPos_y-185);   //right side
    
    
    ////LEFT TRIANGLE////
    fill(65 ,105, 225, 200);
    triangle(mountains - 850, floorPos_y,   //right side 
             mountains - 750, mountains + 190,   //center 
             mountains - 650, floorPos_y);   //left side 
    fill( 0,   0, 205, 90);
    triangle(mountains - 710, floorPos_y,   //right side 
             mountains - 750, mountains + 190,   //center 
             mountains - 650, floorPos_y);   //left side
    
    fill(255, 255, 255, 200);
    triangle(mountains - 785, floorPos_y-160,   //right side 
             mountains - 750, mountains + 190,   //center 
             mountains - 715, floorPos_y-160);   //left side 
    
    
    ////CENTER TRIANGLE////
    fill(65 ,105, 225, 150);   
    triangle(mountains - 1550, floorPos_y,   //left side 
             mountains - 1400, mountains + 100,   //center 
             mountains - 1250, floorPos_y);   //right side 
    fill( 0,   0, 205, 80);
    triangle(mountains - 1350, floorPos_y,   //left side 
             mountains - 1400, mountains + 100,   //center 
             mountains - 1250, floorPos_y);   //right side 
    fill(255, 255, 255, 180);
    triangle(mountains - 1451, floorPos_y-220,   //left side 
             mountains - 1400, mountains + 100,   //center 
             mountains - 1349, floorPos_y-220);   //right side
    
    
    ////RIGHT TRIANGLE////
    fill(65 ,105, 225, 210);
    triangle(mountains - 1300, floorPos_y,   //left side 
             mountains - 1200,  mountains + 250,   //center 
             mountains - 1100, floorPos_y);   //right side
    fill( 0,   0, 205, 90);
    triangle(mountains - 1150, floorPos_y,   //left side 
             mountains - 1200,  mountains + 250,   //center 
             mountains - 1100, floorPos_y);   //right side
    fill(255, 255, 255, 200);
    triangle(mountains - 1155, floorPos_y-100,   //right side 
             mountains - 1200,  mountains + 250,   //center 
             mountains - 1233, floorPos_y-125);   //left side

    
   
    
    ////LEFT TRIANGLE////
    fill(65 ,105, 225, 150);
    triangle(mountains - 1900, floorPos_y,   //right side 
             mountains - 1800, mountains + 190,   //center 
             mountains - 1700, floorPos_y);   //left side 
    fill( 0,   0, 205, 80);
    triangle(mountains - 1750, floorPos_y,   //right side 
             mountains - 1800, mountains + 190,   //center 
             mountains - 1700, floorPos_y);   //left side 
    fill(255, 255, 255, 180);
    triangle(mountains - 1835, floorPos_y-160,   //right side 
             mountains - 1800, mountains + 190,   //center 
             mountains - 1765, floorPos_y-160);   //left side 
        
     ////CENTER TRIANGLE////
    fill(65 ,105, 225, 150);   
    triangle(mountains - 2150, floorPos_y,   //left side 
             mountains - 2000, mountains + 100,   //center 
             mountains - 1850, floorPos_y);   //right side 
    fill( 0,   0, 205, 80);
    triangle(mountains - 1945, floorPos_y,   //left side 
             mountains - 2000, mountains + 100,   //center 
             mountains - 1850, floorPos_y);   //right side 
    fill(255, 255, 255, 180);
    triangle(mountains - 1936, floorPos_y-190,   //right side 
             mountains - 2000, mountains + 100,   //center 
             mountains - 2051, floorPos_y-220);   //left side
    
        
    ////CENTER TRIANGLE////
    fill(65 ,105, 225, 150);   
    triangle(mountains + 1400, floorPos_y,   //left side 
             mountains + 1250, mountains + 80,   //center 
             mountains + 1100, floorPos_y);   //right side 
    fill( 0,   0, 205, 100);
    triangle(mountains + 1400, floorPos_y,   //right side 
             mountains + 1250, mountains + 80,   //center 
             mountains + 1320, floorPos_y);   //left side
    fill(255, 255, 255, 180);
    triangle(mountains + 1193, floorPos_y-220,   //left side 
             mountains + 1250, mountains + 80,   //center 
             mountains + 1307, floorPos_y-220);   //right side
    
    
    ////LEFT TRIANGLE////
    fill(65 ,105, 225, 200);
    triangle(mountains + 950, floorPos_y,   //right side 
             mountains + 1050, mountains + 180,   //center 
             mountains + 1150, floorPos_y);   //left side 
    fill( 0,   0, 205, 90);
    triangle(mountains + 1085, floorPos_y,   //left  side 
             mountains + 1050, mountains + 180,   //center 
             mountains + 1150, floorPos_y);   //right side 
    fill(255, 255, 255, 200);
    triangle(mountains + 1013, floorPos_y-160,   //right side 
             mountains + 1050, mountains + 180,   //center 
             mountains + 1099, floorPos_y-130);   //left side 
    
    ////LEFT TRIANGLE////
    fill(65 ,105, 225, 200);
    triangle(mountains + 1530, floorPos_y,   //right side 
             mountains + 1630, mountains + 190,   //center 
             mountains + 1730, floorPos_y);   //left side 
    fill( 0,   0, 205, 100);
    triangle(mountains + 1665, floorPos_y,   //right side 
             mountains + 1630, mountains + 190,   //center 
             mountains + 1730, floorPos_y);   //left side 
    fill(255, 255, 255, 200);
    triangle(mountains + 1595, floorPos_y-160,   //right side 
             mountains + 1630, mountains + 190,   //center 
             mountains + 1665, floorPos_y-160);   //left side 
    
    
    ////RIGHT TRIANGLE////
    fill(65 ,105, 225, 210);
    triangle(mountains + 1360, floorPos_y,   //left side 
             mountains + 1460,  mountains + 250,   //center 
             mountains + 1560, floorPos_y);   //right side
   fill( 0,   0, 205, 90);
    triangle(mountains + 1495, floorPos_y,   //left side 
             mountains + 1460,  mountains + 250,   //center 
             mountains + 1560, floorPos_y);   //right side
    fill(255, 255, 255, 200);
    triangle(mountains + 1415, floorPos_y-100,   //left side 
             mountains + 1460,  mountains + 250,   //center 
             mountains + 1505, floorPos_y-100);   //right side
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

}