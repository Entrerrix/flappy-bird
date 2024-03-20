import Phaser from 'phaser';

const config ={
  type: Phaser.AUTO,
  height:600,
  width:800,
  physics: {
    default: 'arcade'
  },
  scene: {
    preload,
    create,
  }
};
function preload() {
  debugger
}

function create() {
  debugger
}
new Phaser.Game(config);