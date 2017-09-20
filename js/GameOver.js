eventHandler.addListener('gameOver', onGameOver);


function GameOver(stage) {
  this.textSprite = new PIXI.Text(
    "",
    {fontFamily: "Arial", fontSize: 72, fill: "red", fontWeight: 700}
  );
  this.textSprite.position.set(150, 150);
  this.textSprite.visible = false;
  this.showGameOver = function () {
    var text;
    if(!guys.length){
      text = "YOU WIN!";
    } else {
      text = "YOU LOST!";
    }
    this.textSprite.visible = true;
    this.textSprite.text = text;
  };
  stage.addChild(this.textSprite);
}


function onGameOver() {
  gameOver.showGameOver();
  setTimeout(function () {
    gameActive = false;
  }, 800)
}