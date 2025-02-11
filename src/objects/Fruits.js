import { FRUITS_TYPES } from "../config/constants";
import Fruit from "./Fruit";

export default class Fruits {
  constructor(scene) {
    this.scene = scene;
    this.scene.add.existing(this);
    this.objects = [];
  }

  pickFruit() {
    // pick a random fruit from FRUITS_TYPES
    const pick = Phaser.Math.Between(0, 4);
    const randomFruit = FRUITS_TYPES[pick];

    return randomFruit
  }

  spawnFruit(player, randomFruit) {
    // pick a random fruit from FRUITS_TYPES
    // const pick = Phaser.Math.Between(0, 4);
    // const randomFruit = FRUITS_TYPES[pick];
    // create a new fruit
    const margin = player.height / 2 + player.y + randomFruit.scale;
    this.scene.sound.play("drop");
    const fruit = new Fruit(this.scene, player.x, margin, { ...randomFruit });

    // add fruit to the group
    this.objects.push(fruit);
    console.log("picked fruit: ", fruit);
  }

  scaleUpFruits(coords, scale) {
    if (scale >= FRUITS_TYPES.length) return;
    const nextFruit = FRUITS_TYPES[scale];
    const newFruit = new Fruit(this.scene, coords.x, coords.y, {
      ...nextFruit,
    });

    this.objects.push(newFruit);
  }
}
