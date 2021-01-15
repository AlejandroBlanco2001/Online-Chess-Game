import Lobby from './scenes/Lobby.js'

const config = {
    type: Phaser.AUTO,
    width: window.screen.height,
    height: window.screen.width,
    scene: [Lobby]
}

const game = new Phaser.Game(config)