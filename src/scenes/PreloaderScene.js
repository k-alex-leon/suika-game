export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("PreloaderScene");
  }

  preload() {
    // IMAGE RESOURCES

    // fruits textures
    this.load.image("cherry", "./images/cherry.png");
    this.load.image("strawberry", "./images/strawberry.png");
    this.load.image("blueberry", "./images/blueberry.png");
    this.load.image("orange", "./images/orange.png");
    this.load.image("tomato", "./images/tomato.png");
    this.load.image("apple", "./images/apple.png");
    this.load.image("pear", "./images/pear.png");
    this.load.image("peach", "./images/peach.png");
    this.load.image("pineapple", "./images/pineapple.png");
    this.load.image("melon", "./images/melon.png");
    this.load.image("watermelon", "./images/watermelon.png");


    // environment elements
    this.load.image("container", "./images/container.png");
    this.load.spritesheet('player', './images/dummy.png', {frameWidth: 128, frameHeight: 128});

    // audio resources
    this.load.audio("combine", "./audio/combine.mp3");
    this.load.audio("drop", "./audio/drop.mp3");
    this.load.audio("env", "./audio/environment.mp3");

    // font resources
  }

  create() {
    this.scene.start("MainMenuScene");
  }
}
