import Utils from '../Utils/Utils.js';
import GameManager from "./GameManager.js"
import Piece from '../entities/Static/Piece.js';
import Pawn from "../entities/Static/Pawn.js";
import Bishop from "../entities/Static/Bishop.js";
import Queen from "../entities/Static/Queen.js";
import King from "../entities/Static/King.js";
import Horse from "../entities/Static/Horse.js";
import Rook from "../entities/Static/Rook.js";
import Board from "../entities/Enviorement/Board.js";

export default class Game extends Phaser.Scene{
    constructor(){
        super({key: 'Game'})
        this.gsm = new GameManager(this)
        this.board = new Board();
        this.turn = 0;
    }


    placePieces(){
        let pos = 7;
        let color = 'W';
        let heightP = 13;
        let heigtR = 15; 
        for(let i = 1; i <= 2; i++){
            if(i == 2){
                color = 'B';
                heightP = 3;
                heigtR = 1;
                pos = 2;
            }
                this.board.getSquares()[pos][0] = new Pawn(Utils.CENTER_PIECE * 1,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                this.board.getSquares()[pos][1] = new Pawn(Utils.CENTER_PIECE * 3,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i)
                this.board.getSquares()[pos][2] = new Pawn(Utils.CENTER_PIECE * 5,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                this.board.getSquares()[pos][3] = new Pawn(Utils.CENTER_PIECE * 7,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                this.board.getSquares()[pos][4] = new Pawn(Utils.CENTER_PIECE * 9,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                this.board.getSquares()[pos][5] = new Pawn(Utils.CENTER_PIECE * 11,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                this.board.getSquares()[pos][6] = new Pawn(Utils.CENTER_PIECE * 13,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                this.board.getSquares()[pos][7] = new Pawn(Utils.CENTER_PIECE * 15,Utils.CENTER_PIECE * heightP, this,'pawn' + color,i);
                
                pos = (pos == 2 && color == 'B') ? 0 : pos;

                this.board.getSquares()[pos+1][0] = new Rook(Utils.CENTER_PIECE * 1, Utils.CENTER_PIECE * heigtR, this, 'rook' + color, i);
                this.board.getSquares()[pos+1][1] = new Rook(Utils.CENTER_PIECE * 15, Utils.CENTER_PIECE * heigtR, this, 'rook' + color, i);
                this.board.getSquares()[pos+1][2] = new Horse(Utils.CENTER_PIECE * 3, Utils.CENTER_PIECE * heigtR, this, 'horse' + color, i);
                this.board.getSquares()[pos+1][3] = new Horse(Utils.CENTER_PIECE * 13, Utils.CENTER_PIECE * heigtR, this, 'horse' + color, i);
                this.board.getSquares()[pos+1][4] = new Bishop(Utils.CENTER_PIECE * 5, Utils.CENTER_PIECE * heigtR, this, 'bishop' + color, i);
                this.board.getSquares()[pos+1][5] = new Bishop(Utils.CENTER_PIECE * 11, Utils.CENTER_PIECE * heigtR, this, 'bishop' + color, i);;
                this.board.getSquares()[pos+1][6] = new Queen(Utils.CENTER_PIECE * 7, Utils.CENTER_PIECE * heigtR, this, 'queen' + color, i);
                this.board.getSquares()[pos+1][7] = new King(Utils.CENTER_PIECE * 9, Utils.CENTER_PIECE * heigtR, this, 'king' + color, i);;
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
        board.createLayer('topLayer', [this.terrain], 0,0);
        
        this.placePieces();

        
        this.input.on('drag', (pointer, gameO, dragX, dragY) => {
            gameO.x = dragX;
            gameO.y = dragY;
        })
    }

    update(){

    }
}