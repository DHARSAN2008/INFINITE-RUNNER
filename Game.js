class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    a1 = createSprite(100,200);
    a1.addImage(car1Image);
    a1.scale=0.3

    a2 = createSprite(300,200);
    a2.addImage(car2Image);
    a2.scale=0.15

    a3 = createSprite(500,200);
    a3.addImage(car3Image);
    a3.scale=0.2

    a4 = createSprite(700,200);
    a4.addImage(car4Image);
    a4.scale=0.2

    animals = [a1, a2, a3, a4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      
      background("lime")
      //image(groundImage,0,displayWidth*4,displayHeight,displayWidth*5)
     
      var index = 0;

     
      var x;
      var y = 200;

      for(var plr in allPlayers){
        
        index = index + 1 ;

        
        y = y + 150;
        
        x = displayWidth + allPlayers[plr].distance;
        animals[index-1].x = x;
        animals[index-1].y = y;

        if (index === player.index){
          animals[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
          camera.position.x = animals[index-1].x
        }
       
        
      }

    }


    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    } 
    drawSprites();
   
  }
}
