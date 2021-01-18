import Utils from '../Utils/Utils.js';
import GameManager from "./GameManager.js"
import Player from "../entities/Change/Player.js"

export default class Game extends Phaser.Scene{
    constructor(){
        super({key: 'Game'})
        let random = Math.floor(Math.random() * 2)
        this.players = [new Player(random), new Player(random == 1 ? 0: 1)]
        this.gsm = new GameManager(this)
        this.turn = 0;
    }

    init(){

    }

    preload(){
        // Loading board
        this.load.image('tileset', 'src/Assets/backgroundTiles/tileset.png');
        this.load.tilemapTiledJSON('board','src/Assets/backgroundTiles/board.json')
        
        // Loading Pieces images - Black White
        this.load.image('pawnB','src/Assets/Pieces/b_pawn.png');
        this.load.image('bishopB','src/Assets/Pieces/b_bishop.png');
        this.load.image('horseB','src/Assets/Pieces/b_knight.png');
        this.load.image('rookB','src/Assets/Pieces/b_rook.png');
        this.load.image('queenB','src/Assets/Pieces/b_queen.png');
        this.load.image('kingB','src/Assets/Pieces/b_king.png');
    
        this.load.image('pawnW','src/Assets/Pieces/w_pawn.png');
        this.load.image('bishopW','src/Assets/Pieces/w_bishop.png');
        this.load.image('horseW','src/Assets/Pieces/w_knight.png');
        this.load.image('rookW','src/Assets/Pieces/w_rook.png');
        this.load.image('queenW','src/Assets/Pieces/w_queen.png');
        this.load.image('kingW','src/Assets/Pieces/w_king.png');
    }

    create(){
        let board = this.add.tilemap('board');
        this.terrain = board.addTilesetImage('tileset','tileset')
        let layer = board.createLayer('topLayer', [this.terrain], 0,0);
        var adder = 1
        for(let i = 0; i < 8; i++){0
            if(i < 4){ 
                if(this.turn == 0){
                    this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE * 3,'pawnB');
                    this.add.sprite(Utils.CENTER_PIECE * (15-adder+1),Utils.CENTER_PIECE * 3,'pawnB');
                    this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE*13,'pawnW');
                    this.add.sprite(Utils.CENTER_PIECE * (15-adder+1),Utils.CENTER_PIECE*13,'pawnW');
                }else{
                    this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE * 3,'pawnW');
                    this.add.sprite(Utils.CENTER_PIECE * (15-adder+1),Utils.CENTER_PIECE * 3,'pawnW');
                    this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE*13,'pawnB');
                    this.add.sprite(Utils.CENTER_PIECE * (15-adder+1),Utils.CENTER_PIECE*13,'pawnB');
                }
                adder += 2
            }else{

            }
        }
    }

    update(){

    }
}