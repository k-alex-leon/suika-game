import Wall from "./Wall";

export default class Container {
  constructor(scene, x, y, width, height) {
    // super(scene, x, y);
    y += 30
    this.scene = scene;
    this.width = width;
    this.height = height;
    // this.scene.add.existing(this);
    // this.scene.physics.add.existing(this);
    this.thickness = 20;

    let bottom = new Wall(
      scene,
      x,
      y + height / 2,
      width,
      this.thickness + 30,
      0x383838
    );

    let left = new Wall(
      scene,
      x - width / 2, // x
      y, // y
      this.thickness,
      height,
      0x383838
    );

    let right = new Wall(
      scene,
      x + width / 2,
      y,
      this.thickness,
      height,
      0x383838
    );

    this.walls = [bottom, left, right];
  }

  enablePhysics(fruitsGroup) {
    this.walls.forEach((wall) => {
      this.scene.matter.world.add.collider(wall, fruitsGroup);
    });
  }
}
