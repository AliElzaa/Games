var amount=14;
var bubblesarray = [[],[],[],[]]; //2d array which stores the bubbles
var colours = ["red","green","blue","pink"]; 
var modmouse;
var mouse, center, copymouse, copycenter; //variables for pointer direction
var spherex,spherey;
var bob; //bubble that is being fired
var posdir; //the vector you add in to move the bubble
var coor = true; //bolean expression for shooting the bubble
var stopbubble = false; //the bolean expression for shooting
var index; //index to search through the array to add vectors laters
var distance; //variable to see distance between te shooting bubble and the bubbles in the array
var storeindex; //it stores the bubble that was hit by the bubble
var state; //statje of the game
var storage =[];
var shoot;
var bg;

function preload(){
shoot = loadSound('blop.mp3');
bg = loadImage("bubble.png");
}
function setup() {
  createCanvas(600,600);
  addbubbles();
  mouse = createVector(mouseX,mouseY); // creates a vector for
  center = createVector(width/2,height);
  posdir = createVector(0,0);
  
// bubbleshot = createVector(bob.x,bob.y);
  // arrayvector = createVector(0,0);
state = mainscreen;
addvectors();
}


function draw() {
  
  state();//always calling the states of the game

 
}

function addbubbles(){
  for (i=0; i<bubblesarray.length; i++){
    for (j=0; j<amount; j++){
          var index = Math.floor(random(0, (colours.length)));//chooses 1 of the colour in the array
           //noStroke();
        append(bubblesarray[i], new bubbles(20+40*j,25+40*i,40,40, colours[index])); //adds the bubbles to the bubblearray
      }
    }

}

function bubbles(_x,_y,width, height, _color){ //object for the bubble
  this.x= _x;
  this.y= _y;
  this.width= 40;
  this.height= 40;
  this.color= _color;
  
  this.draw = function(){
    ellipse(i*40, 50, 50, 50);
  }
}

function pointer(){
  mouse.x=mouseX;
  mouse.y=mouseY;

  copymouse = mouse.copy(); //copies the current position of the mouse
  copymouse.sub(center)//subtracts it from the center
  copymouse.normalize(); //square roots it to get a unit vector of 1 

       if(coor ===true){
   posdir = copymouse.copy(); 
  posdir.mult(3);
coor=false;
  


  }
  copymouse.mult(100); // multiplies it by 100 to get the pointer length
  copycenter= center.copy();
  copycenter.add(copymouse); //adds it to the center point
  




}
function fire(){ //the function that allows the user to fire.
  
if (mouseIsPressed){
  var index = Math.floor(random(0, (colours.length)))
  bob = new bubbles(300,600,40,40, colours[index]);
  coor = true;
  stopbubble = false;
  shoot.play();

  }
}  


function addvectors(){ //checks 
bubblesarray.forEach(function(bubarray,index){ //for each array within my 2d array
bubarray.forEach(function(bubbles,index){//for each object within my subset of array
  if (bubbles !== null){
    bubbles.vector = createVector(bubbles.x,bubbles.y) //create a vector with those coordinates
  }
  
  // for(i=0; i<bubblesarray.length; i++){ //searches through bubblesarray
  //   for (j=0; j<bubblesarray[i].length; j++){ //nested loop which looks for the subarrays within that
  //     bubbles.vector = createVector(bubbles.x,bubbles.y);
  //   }
  // }

 })

 })
}

 
function checkvector(){ //checks each vector to the distance of the shooting bubble
bubblesarray.forEach(function(bubarray,index){
  bubarray.forEach(function(bubbles,index){
   
    if (bubbles !== null ){
       distance = p5.Vector.dist(shootingbubble,bubbles.vector);
  
    if(distance < bubbles.width){
      // posdir.x = 0
      // posdir.y = 0;
      posdir.mult(0)
     
      stopbubble=true;

  
     storeindex = index;
     append(storage, bob);

    }
    }
  
  })
})
}

function mainscreen(){
  background(bg);
      
    
}

function playscreen(){
  
    background(132);
    //console.log(storeindex);
if(bob!== undefined){
  fill(bob.color);
ellipse(bob.x,bob.y, bob.width, bob.height);
bob.x = bob.x + posdir.x;  //x coordinate of the bubble thats about to be shot
bob.y = bob.y + posdir.y; //y coordinate of the bubble thats about to be shot
shootingbubble = createVector(bob.x,bob.y)  //creating a vector for the shooting bubble
arrayvectors = createVector(0,0);

checkvector(); //this checks the vector of the moving bubble and compares it to the bubble that was being hit.
//arrays with the values and if they match



if (bob!== undefined){ //
  if(bob.y < 0){

  coor = true;
}
}

}
   

  
  fire();
  pointer();
  line(center.x,center.y,copycenter.x,copycenter.y)
  for(i=0; i<bubblesarray.length; i++){ //searches through bubblesarray
    for (j=0; j<bubblesarray[i].length; j++){//nested loop which looks for the subarrays within that
    
    if (bubblesarray[i][j] !== null){
            fill(bubblesarray[i][j].color); //adds the properties of the bubbles like a placeholder.
      ellipse(bubblesarray[i][j].x,bubblesarray[i][j].y, bubblesarray[i][j].width, bubblesarray[i][j].height);
      
    }

    }
  }
  
  for (x=0; x<storage.length; x++){
    
       fill(storage[x].color);
    ellipse(storage[x].x, storage[x].y, storage[x].width, storage[x].height);
    }
   
  }
  


function mousePressed(){
  if (state == mainscreen){
    state = playscreen;
  }
  
}

function pause(){
background(145,244,155,2)
text("Game paused!", width/2, height/2);
}

function keyPressed(){
  if (keyCode == 80 && state == playscreen){
    state = pause;
  }
  else if ( keyCode == 80 && state == pause){
    state = playscreen;
    
}
}