import Piece from "./Piece.js";
import Utils from "../../Utils/Movement.js"

export default class Pawn extends Piece{
    constructor(color){
        super('pawn',color,1,Utils.MOVEMENTS['PAWN']);
        this.initialStep = true;
    }

    move(){
        console.log('PAWN MOVEMENT')
    }
}