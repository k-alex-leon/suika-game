export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");
    this.scene.add.existing(this);

    this.idle = this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", { frames: [0, 1] }),
        frameRate: 2,
      repeat: -1,
    });

    this.play("idle");
  }
}
