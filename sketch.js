var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var animals, a1, a2, a3, a4;

function preload(){

  car1Image=loadImage("../images/cheeta.png")
  car2Image=loadImage("../images/horse.png")
  car3Image=loadImage("../images/deer.png")
  car4Image=loadImage("../images/lion.png")

  groundImage=loadImage("../images/ground.png")

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.update(2);
    game.end();
  }
}


