import Container from "../objects/Container";
import Fruits from "../objects/Fruits";
import { Player } from "../objects/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.currentFruit = null;
    this.nextFruit = null;
    this.score = 0;
  }

  create() {
    const { width, height } = this.scale;

    // background configuration
    this.bg = this.add.image(width * 0.5, height * 0.5, "bg").setOrigin(0.5);
    this.bg.setScale(1.8);

    // sound theme
    this.soundTheme = this.sound.add("env", { loop: true });
    // this.soundTheme.play();

    // score text
    this.scoreText = this.add
      .text(50, 100, "Score: \n0", {
        font: "24px Jersey",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke("#000", 4);

    // box container
    this.box = new Container(
      this, // scene
      width / 2, // x
      height / 2, // y
      600, // width
      height / 1.5 // height
    );

    // fruits
    this.fruits = new Fruits(this);

    // box container physics
    // this.box.enablePhysics(this.fruits);

    this.nextFruit = this.fruits.pickFruit();
    // player
    this.player = new Player(this, width / 2, height / 10);
    this.player.dropFruit(() => {
      this.currentFruit = this.nextFruit;
      this.fruits.spawnFruit(this.player, this.currentFruit);
      this.nextFruit = this.fruits.pickFruit();
      console.log("next fruit: ", this.nextFruit);
    });

    // check for collisions
    this.matter.world.on("collisionstart", (event) => {
      event.pairs.forEach((pair) => {
        let bodyA = pair.bodyA.gameObject;
        let bodyB = pair.bodyB.gameObject;

        // console.log("collision event: ", event);
        if (bodyA.isFruit == undefined || bodyB.isFruit == undefined) return; // check if objects are fruits
        if (bodyA && bodyB && bodyA.type === bodyB.type) {
          let spawnX = (bodyA.x + bodyB.x) / 2;
          let spawnY = (bodyA.y + bodyB.y) / 2;
          let nextScale = bodyA.mass;
          this.score += bodyA.points

          this.scoreText.setText(`Score: ${this.score}`)

          bodyA.setVisible(false);
          bodyB.setVisible(false);
          // Delay destruction to prevent immediate removal issues
          this.time.delayedCall(10, () => {
            this.sound.play("combine");
            if (bodyA.scene) bodyA.destroy();
            if (bodyB.scene) bodyB.destroy();
          });

          this.fruits.scaleUpFruits({ x: spawnX, y: spawnY }, nextScale);
        }
      });
    });
  }

  update() {
    this.player.update();
  }
}
