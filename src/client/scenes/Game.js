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

    setUpPiecesOrder(piece,adder,heigthTurn, heigthTurn2){
        let turn = this.turn == 0 ? 'W' : 'B'
        let turn2 = turn == 'W' ? 'B' : 'W'
        if(piece != 'king' && piece != 'queen'){
            this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE * heigthTurn2, piece + turn);
            this.add.sprite(Utils.CENTER_PIECE * (15-adder+1),Utils.CENTER_PIECE * heigthTurn2, piece + turn);
            this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE * heigthTurn,piece + turn2);
            this.add.sprite(Utils.CENTER_PIECE * (15-adder+1),Utils.CENTER_PIECE * heigthTurn,piece + turn2); 
        }else{
            this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE * heigthTurn2, piece + turn);
            this.add.sprite(Utils.CENTER_PIECE * adder,Utils.CENTER_PIECE * heigthTurn,piece + turn2);
        }
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
        let pieces = ['rook','horse','bishop','queen','king']
        for(let i = 0; i < 4; i++){0
            this.setUpPiecesOrder('pawn',adder,3,13)
            adder += 2
        }
        adder = 1;
        pieces.forEach(piece => {
            this.setUpPiecesOrder(piece, adder,1,15);
            adder += 2;
        });

    }

    update(){

    }
}