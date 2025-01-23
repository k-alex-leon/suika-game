import { GameConfig } from "./config/config";
import "./main.css";
import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";
import MainMenuScene from "./scenes/MainMenuScene";
import PreloaderScene from "./scenes/PreloaderScene";

const config = {
  ...GameConfig,
  scene: [BootScene, PreloaderScene, MainMenuScene, GameScene],
};

const game = new Phaser.Game(config);
