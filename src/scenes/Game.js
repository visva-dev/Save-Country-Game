import Phaser from 'phaser';

class Game extends Phaser.Scene {
  preload() {}

  create() {
    this.add.text(400, 250, 'Game');
  }
}

export default Game;
