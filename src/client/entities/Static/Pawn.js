import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Pawn extends Piece{
    constructor(x,y,scene,texture,color){
        super(x,y,scene,texture,'pawn',color,1,Utils.MOVEMENTS['PAWN']);
        
        this.initialStep = true;
    }

    move(){
        console.log('PAWN MOVEMENT')
    }

}