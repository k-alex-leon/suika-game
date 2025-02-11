export default class Fruit extends Phaser.Physics.Matter.Image {
  constructor(scene, x, y, { type, scale = 32, mass = 1, points = 0 }) {
    // super(scene, x, y, type);
    super(scene.matter.world, x, y, type);
    this.scene = scene;
    this.type = type;
    this.points = points
    this.scene.add.existing(this);
    this.isFruit = true;
    this.mass = mass;
    this.setDisplaySize(scale, scale);
    this.setBounce(1, 1);

    this.setBody({
      type: "circle",
      radius: (this.width * this.scaleX) / 2,
    });
  }
}
