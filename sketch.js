//Create variables here
var dog, happyDog; 
var database;
var foodS, foodStock;
var readStock;
function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 20, 20);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  else{
    dog.addImage(dogImage)
      }
 dog.scale = .3;
    drawSprites();
 

    fill("white")
    text("FoodStock:" + foodS, 125, 75);
    fill("white");
    text("Press UP_ARROW Ky To Feed Drago Milk!", 125, 100);

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){

if(x<=0){
x=0;
}
else{
  x=x-1;
}


database.ref('/').update({
Food:x 
})

}