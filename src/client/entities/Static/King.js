import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class King extends Piece{
    constructor(color){
        super('king',color,0, Utils.MOVEMENTS['KING']);
    }
}