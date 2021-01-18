import Pawn from "../entities/Static/Pawn.js";
import Bishop from "../entities/Static/Bishop.js";
import Queen from "../entities/Static/Queen.js";
import King from "../entities/Static/King.js";
import Horse from "../entities/Static/Horse.js";
import Rook from "../entities/Static/Rook.js";

export default class GameManager{

    setUpBoard(){
        let board = [[]]
        for(let row = 0; row < 8; row++){
            let temp = []
            for(let col = 0; col < 8; col++){
                temp.push(-1)
            }
            board.push(temp)
        }
        return board
    }

    setUpPieces(){
        let pieces = []
        for(let i = 0; i < 2; i++){
            let pawns = [0,0,0,0,0,0,0,0].map(item => {return new Pawn(i)});
            let bishops = [0,0].map(item => {return new Bishop(i)});
            let horse = [0,0].map(item => {return new Horse(i)});
            let rook = [0,0].map(item => {return new Rook(i)})
            let king = new King(i);
            let queen = new Queen(i);
            pieces.push[pawns,bishops,horse,rook,king,queen];
        }
        console.log([].concat(...pieces));
        return [].concat(...pieces)
    }

    constructor(game){
        this.game = game
        this.board = [];
        this.pieces = [];
    }

    init(){
    }

    preload(){
        this.board = this.setUpBoard();
        this.pieces = this.setUpPieces();
    }

    create(){

    }

    update(){

    }
}