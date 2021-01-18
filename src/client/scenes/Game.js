import GameManager from "./GameManager.js"
import Player from "../entities/Change/Player.js"

export default class Game extends Phaser.Scene{
    constructor(){
        super({key: 'Game'})
        let random = Math.floor(Math.random() * 2)
        this.players = [new Player(random), new Player(random == 1 ? 0: 1)]
        this.gsm = new GameManager(this);
    }

    init(){

    }

    preload(){
        this.load.image('tileset', 'src/Assets/backgroundTiles/tileset.png');
        this.load.tilemapTiledJSON('board','src/Assets/backgroundTiles/board.json')
    }

    create(){
        let board = this.add.tilemap('board');
        this.terrain = board.addTilesetImage('tileset','tileset')


    }

    update(){

    }
}