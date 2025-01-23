import Container from "../objects/Container";
import { Player } from "../objects/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    const { width, height } = this.scale;

    // background configuration
    this.bg = this.add.image(width * 0.5, height * 0.5, "bg").setOrigin(0.5);
    this.bg.setScale(1.8);

    // box container
    this.box = new Container(
      this,
      width / 2,
      height / 2,
      width / 3,
      height / 1.5
    );


    this.player = new Player(this, width / 2, height / 2);
  }

  update() {}
}
