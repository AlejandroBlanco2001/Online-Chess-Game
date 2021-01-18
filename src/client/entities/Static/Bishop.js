import Piece from "./Piece.js";
import Utils from "../../Utils/Movement.js"

export default class Bishop extends Piece{
    constructor(color){
        super('bishop',color,3,Utils.MOVEMENTS['BISHOP']);
    }
}