export default class Wall extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, color) {
        super(scene, x, y, width, height, color);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this);
        this.body.immovable = true;
        this.body.isStatic = true;
    }
}