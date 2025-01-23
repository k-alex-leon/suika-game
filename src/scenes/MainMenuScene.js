export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super("MainMenuScene");
  }

  create() {
    const { width, height } = this.scale;

    // background configuration
    this.bg = this.add.image(width * 0.5, height * 0.5, "bg").setOrigin(0.5);
    this.bg.setScale(1.8);

    // title text
    this.add
      .text(width / 2, height / 2, '"Suika Game"', {
        fontSize: "64px",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke("#000000", 6);

    // start text
    this.add
      .text(width / 2, height / 2 + 100, "Press SPACE to start!", {
        fontSize: "32px",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke("#000000", 2);

    // start the game when SPACE is pressed
    this.input.keyboard.on("keydown-SPACE", () => {
      this.scene.start("GameScene");
    });
  }
}
