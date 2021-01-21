import Pawn from "../entities/Static/Pawn.js";
import Bishop from "../entities/Static/Bishop.js";
import Queen from "../entities/Static/Queen.js";
import King from "../entities/Static/King.js";
import Horse from "../entities/Static/Horse.js";
import Rook from "../entities/Static/Rook.js";
import Board from "../entities/Enviorement/Board.js";

export default class GameManager{

    constructor(game,){
        this.game = game
        this.board = game.getBoard();
    }

    checkPosisbleMovements(piece){
        console.log(piece.getPosition());
    }

    init(){
    }

    preload(){
    }

    create(){

    }

    update(){

    }
}