export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image("bg", "./images/supermarket.avif");
  }

  create() {
    this.scene.start("PreloaderScene");
  }
}