function EggCounter(stage) {
  this.textSprite = new PIXI.Text(
    "eggs left: " + totalEggs,
    {fontFamily: "Arial", fontSize: 14, fill: "white"}
  );
  this.textSprite.position.set(500, 10);

  this.updateCounter = function () {
    console.log(totalEggs);

    if(totalEggs <= 0){
      this.textSprite.text = "No more eggs!";
      this.textSprite.style = {fontFamily: "Arial", fontSize: 14, fill: "red"};
    } else {
      this.textSprite.text = "eggs left: " + totalEggs;
    }
  };
  stage.addChild(this.textSprite);
}