import Phaser from 'phaser';

const config ={
  type: Phaser.AUTO,
  height:600,
  width:800,
  physics: {
    default: 'arcade',
    debug: true,
    arcade: {
    gravity: {y: 200}
   }
  },
  scene: {
    preload,
    create,
    update
  }
};
function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');

}

const VELOCITY = 500;

let bird = null;
let  totalDelta = null;
function create() {
  this.add.image(0, 0, 'sky').setOrigin(0);
  bird = this.physics.add.sprite(config.width * 0.5 / 2, config.height / 2, 'bird').setOrigin(0)
  bird.body.velocity.x = VELOCITY;
}


  function update(time, delta) {
    if(bird.x >= config.width - bird.width) {
     bird.body.velocity.x = -VELOCITY;
    } else if (bird.x <= 0) {
      bird.body.velocity.x = VELOCITY
    }
  }

new Phaser.Game(config);

