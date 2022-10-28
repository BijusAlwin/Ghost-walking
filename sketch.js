var ghost ,ghost_walking
function preload(){
  ghost_walking= loadAnimation("ghost1.png","ghost2.png","ghost3.png","ghost1.png")
}
function setup(){
  createCanvas(400,400)
  ghost=createSprite(200,200,10,10)
  ghost.addAnimation("walking",ghost_walking)
}
 function draw(){
  background("white")
  drawSprites()
 }