import Phaser from 'phaser';
const PIPES_TO_RENDER = 4;
class MenuScene extends Phaser.Scene {
  constructor(config) {
    super('MenuScene');
    this.config = config;
  }
  preload() {
    this.load.image('sky', 'assets/sky.png');
  }

  create() {
  this.add.image(0, 0, 'sky').setOrigin(0);
  }
};

export default MenuScene;


