import Lobby from './scenes/Lobby.js'
import Game from './scenes/Game.js'

const config = {
    type: Phaser.AUTO,
    width: 864,
    height: 864,
    scene: [Lobby,Game]
}

const game = new Phaser.Game(config)
