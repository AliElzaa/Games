var pianokeys = [] //creates the array called 'pianokeys'
var generated = [] //creates the array called 'generated' where all the AI keys will be stored in.
var user = [] //creates the array called 'generated' where all the AI keys will be stored in.
var count = 0; //sets the count to 0
var keys = [];
var notes = ['objects/note1.wav','objects/note2.wav','objects/note3.wav','objects/note4.wav','objects/note5.wav','objects/note6.mp3'] // Array with different sounds for the keys
var state; // the state of the game 
var simulate = true; //so that it automatically plays a random key
var win=true; // meaning the game will resume because if win=false then the game will pause
var counter =1;
var score=0;
var img,img2,img3;
function preload() {
  img = loadImage("objects/homescreen.jpg")
  img2 = loadImage("objects/gameplaybg.jpg")
  img3 = loadImage("objects/lostbg.png")

  // img = image(img,0,0,1000,1000);
  for (var i = 0; i < notes.length; i++)
    keys[i] = loadSound(notes[i]); // this loop loads each of the sounds in the array 'notes'

}

function myfunc(){
  pianokeys[0].colour="red";
  pianokeys[1].colour="green";
  pianokeys[2].colour="yellow";
  pianokeys[3].colour="blue";
  pianokeys[4].colour="purple";
  pianokeys[5].colour="orange";
  CreateKey();
}

  
function setup(){
  createCanvas(800,700);
  append(pianokeys, new createpianokey(100,300,100,300,"red", "note1.wav")) // adds all the different keys to my array which is 'pianokeys'
  append(pianokeys, new createpianokey(200,300,100,300,"green", "note2.wav"))
  append(pianokeys, new createpianokey(300,300,100,300,"yellow", "note3.wav"))
  append(pianokeys, new createpianokey(400,300,100,300,"blue", "note4.wav"))
  append(pianokeys, new createpianokey(500,300,100,300,"purple", "note5.wav"))
  append(pianokeys, new createpianokey(600,300,100,300,"orange", "note6.mp3"))

  
 state = mainscreen;
  }

  


function draw(){
  // image(img,0,0,1000,1000);

  state();
  // image(img,0,0,1000,1000);
}


function createpianokey(x,y,width,height,colour,sound){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.colour=colour;
  this.sound
  
}


function mousePressed(){
 
 if ( state == lose){
  state = mainscreen;
  generated = [];
  user = [];
  win = true;
  simulate = true;
  b=true;
  testing();
  }
  
  if (state == gameplay){
    
    // println(pianokeys[0].x);
  if (mouseX>pianokeys[0].x && mouseX<pianokeys[0].x+pianokeys[0].width && mouseY>pianokeys[0].y && mouseY<pianokeys[0].y+pianokeys[0].height){
    
        pianokeys[0].colour="#B22222"
        CreateKey();
        keys[0].play();
        append(user,0)
  }
  if (mouseX>pianokeys[1].x && mouseX<pianokeys[1].x+pianokeys[1].width && mouseY>pianokeys[1].y && mouseY<pianokeys[1].y+pianokeys[1].height){
        
        pianokeys[1].colour="#006633"
        CreateKey();
        keys[1].play();
        append(user,1)
  }
  if (mouseX>pianokeys[2].x && mouseX<pianokeys[2].x+pianokeys[2].width && mouseY>pianokeys[2].y && mouseY<pianokeys[4].y+pianokeys[2].height){
        
        pianokeys[2].colour="#CCCC00"
        CreateKey();
        keys[2].play();
         append(user,2)
  }
  if (mouseX>pianokeys[3].x && mouseX<pianokeys[3].x+pianokeys[3].width && mouseY>pianokeys[3].y && mouseY<pianokeys[3].y+pianokeys[3].height){
       
        pianokeys[3].colour="#1805C0"
        CreateKey();
        keys[3].play();
        append(user,3)
  }
  if (mouseX>pianokeys[4].x && mouseX<pianokeys[4].x+pianokeys[4].width && mouseY>pianokeys[4].y && mouseY<pianokeys[4].y+pianokeys[4].height ){
     
        pianokeys[4].colour="#75029F"
        CreateKey();
        keys[4].play();
        append(user,4)
        
  }
  if (mouseX>pianokeys[5].x && mouseX<pianokeys[5].x+pianokeys[5].width && mouseY>pianokeys[5].y && mouseY<pianokeys[5].y+pianokeys[5].height ){
       
        pianokeys[5].colour="#B56D10"
        CreateKey();
        keys[5].play();
        append(user,5)
  }

      }  

  if (state == mainscreen) {
    state = gameplay;
    score=0;
  
  }
  if (state == gameplay){
    check();
}
}
      


function CreateKey(){
  while (count<6){
      fill(pianokeys[count].colour)
      rect(pianokeys[count].x,pianokeys[count].y,pianokeys[count].width,pianokeys[count].height)
      count=count+1
    
  }
      count=0;
      
}

function randomkeys(){
  a=a+1;
  var id =  Math.floor(random(6))
  append(generated,id)
  if (id === 0){
  pianokeys[id].colour="#FFFFFF"
  keys[0].play();
  }
  else if (id == 1){
    pianokeys[id].colour="#FFFFFF"
     keys[1].play();
  }
  else if (id == 2){
    pianokeys[id].colour="#FFFFFF"
     keys[2].play();
  }
  else if (id == 3){
    pianokeys[id].colour="#FFFFFF"
     keys[3].play();
  }
  else if (id == 4){
    pianokeys[id].colour="#FFFFFF"
     keys[4].play();
  }
  else if (id == 5){
    pianokeys[id].colour="#FFFFFF"
     keys[5].play();
  }
}

function check(){
    if(generated.length<=user.length){
     //println(win);
     
      for (var i = 0; i < generated.length; i++){
              if(generated[i]!=user[i])
                  {
                    win=false;
                    user=[];
                    generate=[];
                    state = lose;
                    clearInterval(c);
                    counter=1;
                    break;
                    
                    
                  }
                else{
                  win=true;
                  score=score+1;
                  if (i==generated.length-1){ //if both arrays are equal then resimulates new sets of keys and empty the arrays.
                  simulate=true;
                  generated=[];
                  user=[];
                  b=true;
                  }
                  
                }
   }
    }

    
    }



function mouseReleased(){
  // if (state== gameplay){
  // pianokeys[0].colour="red";
  // pianokeys[1].colour="green";
  // pianokeys[2].colour="yellow";
  // pianokeys[3].colour="blue";
  // pianokeys[4].colour="purple";
  // pianokeys[5].colour="orange";
  // CreateKey();
  // }
}

function mainscreen(){
    // background(250,231,60);
      image(img,0,0,1000,1000);
    textSize(32);
    text("Press to start the game!", width/2-40, height/2);
    fill(255,152,16)
}

var a = 0;
var b=true;
var c;
var lol;
function gameplay(){
  // background(255,255,255);
    image(img2,0,0,800,700);
  text("score: "+score,50,50);
  println(score);
  // myfunc();

  CreateKey(); //calls Createkey
    if (simulate === true){
      if (b===true){
        c=setInterval(randomkeys,1000);
        lol=setInterval(testing,1234);
        b=false;
      }
    }
    
    if (a>=counter){
      a=0;
      counter=counter+1;
      clearInterval(c);
      println(generated);
      println(user);
    }
    
}
 
function testing(){
  pianokeys[0].colour="red";
  pianokeys[1].colour="green";
  pianokeys[2].colour="yellow";
  pianokeys[3].colour="blue";
  pianokeys[4].colour="purple";
  pianokeys[5].colour="orange";
  CreateKey();
}     
      

    
function lose(){

    background(255,0,0);
    image(img3,0,0,800,700);
    textSize(32);
    text("Click to start again!", width/2-40, height/2);
    text("score: "+score,50,50);
    fill(255,152,16)
}
