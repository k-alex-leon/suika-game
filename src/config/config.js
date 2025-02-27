import Phaser from "phaser";

const isDebug = true;
const scene = document.getElementById("game")
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

export const GameConfig = {
  type: Phaser.CANVAS,
  canvas: scene,
  width: windowWidth,
  height: windowHeight,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: "matter",
    matter: {
      gravity: { y: 1 },
      debug: isDebug,
    }
  },
  scne: [],
  //   parent: parent.id
};
