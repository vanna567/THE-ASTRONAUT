var canvas;
var backgroundImage;
var astronaut, astronaut_img;
var alien1, alien2, alien3;
var alien1_img, alien2_img, alien3_img;
var egg, sushi, vegetables;
var oxigen;

function preload() {
  backgroundImage = loadImage("./assets/espacio.jpg")
  astronaut_img = loadImage("./assets/Astronaut.png");
  alien1_img = loadImage("./assets/Alien 1.png");
  alien2_img = loadImage("./assets/Alien 2.png");
  alien3_img = loadImage("./assets/Alien 3.png");
  egg = loadImage("./assets/huevo.png");
  sushi = loadImage("./assets/sushi.png");
  vegetables = loadImage("./assets/vegetales.png");
  oxigen = loadImage("./assets/oxigeno.png");
} 

function setup() {
 canvas = createCanvas(windowWidth,windowHeight);
  
 astronaut = createSprite(60, 180, 400, 20);
 astronaut.addImage("Astronaut", astronaut_img);
 astronaut.scale =0.6;

}

function draw() {
  background(255,255,255);  
  drawSprites();
}