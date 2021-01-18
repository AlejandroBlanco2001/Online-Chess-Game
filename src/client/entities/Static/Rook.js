import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Rook extends Piece{
    constructor(color){
        super('rook',color,5,Utils.MOVEMENTS['ROOK'])
    }
}