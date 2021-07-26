var space,shuttle,doc



function preload(){
  space = loadImage("images/spacebg.jpg");
  shuttle = loadImage("images/iss.png");
  doc = loadImage("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");



}


function setup() {
  createCanvas(800,400);
  doc = createSprite(400, 200, 50, 50);
  doc.addImage("doc");

  shuttle = createSprite(300,180,40,40);
  shuttle.addImage("shuttle"/iss.png);
}

function draw() {
  background(255,255,255); 
  background.addImage("space"/spacebg.jpg) 
  drawSprites();
}