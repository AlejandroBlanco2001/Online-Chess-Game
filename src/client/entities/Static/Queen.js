import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Queen extends Piece{
    constructor(color){
        super('queen',color,9,Utils.MOVEMENTS['QUEEN']);
    }
}