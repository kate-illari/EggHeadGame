eventHandler.addListener('eggShoot', onEggShoot);
eventHandler.addListener('gameOver', onGameOver);

function onEggShoot() {
  eggCounter.updateCounter();
}

function onGameOver() {
    gameOver.showGameOver();
    setTimeout(function () {
      gameActive = false;
    }, 800)
}