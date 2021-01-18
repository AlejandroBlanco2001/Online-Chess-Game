import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Horse extends Piece{
    constructor(color){
        super('horse',color,3,Utils.MOVEMENTS['HORSE']);
    }
}