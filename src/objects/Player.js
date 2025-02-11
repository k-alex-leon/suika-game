export class Player extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y) {
    super(scene.matter.world, x, y, "player");
    scene.add.existing(this);
    // this.scene.matter.add.spring(this);
    this.idle = this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", { frames: [0, 1] }),
      frameRate: 2,
      repeat: -1,
    });
    this.body.ignoreGravity = true;
    this.play("idle");

    this.setSensor(true)
    console.log('player: ', this.body)
    // init cursor keys
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  update() {
    this.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.setVelocityX(-10);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(10);
    }
  }

  dropFruit(callback) {
    this.scene.input.keyboard.on("keydown-SPACE", () => {
      callback();
    });
  }
}
