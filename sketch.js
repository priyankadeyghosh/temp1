var garden,garden_im;
var tom,tom_im1,tom_im2,tom_im3,tom_im4;
var jerry,jerry_im1,jerry_im2,jerry_im3,jerry_im4;








function preload() {
    //load the images here
    garden_im=loadImage("garden.png");

    tom_im1=loadAnimation("cat1.png");
    
    tom_im2=loadAnimation("cat2.png","cat3.png");
   
    tom_im4=loadAnimation("cat4.png");

    jerry_im1=loadAnimation("mouse1.png");
    jerry_im2=loadAnimation("mouse2.png","mouse3.png");
    
    jerry_im4=loadAnimation("mouse4.png");
    

}

function setup(){
    createCanvas(1000,800);
   
   // garden=createSprite(500,400);
   // garden.addImage(garden_im);

    //create tom and jerry sprites here
    tom=createSprite(800,600);
    tom.addAnimation("tomsleeping",tom_im1);
    
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",jerry_im1);
    jerry.scale=0.1;


}

function draw() {

    
    background(garden_im);

    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomruning",tom_im2);
        tom.changeAnimation("tomruning",tom_im2);
        
        jerry.addAnimation("jerryTeasing", jerry_im2);
        //jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");

    }

  //For moving and changing animation write code here


}
