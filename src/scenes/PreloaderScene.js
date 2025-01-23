export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("PreloaderScene");
  }

  preload() {
    // image resources
    this.load.image("cherry", "./images/cherry.png");
    this.load.image("strawberry", "./images/strawberry.png");
    this.load.image("grape", "./images/grape.png");
    this.load.image("orange", "./images/orange.png");
    this.load.image("container", "./images/container.png");
    this.load.spritesheet('player', './images/dummy.png', {frameWidth: 128, frameHeight: 128});

    // audio resources
    this.load.audio("combine", "./audio/combine.mp3");
    this.load.audio("drop", "./audio/drop.mp3");
    this.load.audio("env", "./audio/enviroment.mp3");

    // font resources
  }

  create() {
    this.scene.start("MainMenuScene");
  }
}
