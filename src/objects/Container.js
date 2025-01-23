export default class Container extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, width, height) {
    super(scene, x, y, "container");
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setDisplaySize(width, height);
    this.setImmovable(true);
    this.body.setAllowGravity(false);

    // disable collision on top
    this.body.checkCollision.up = false;
  }
}
