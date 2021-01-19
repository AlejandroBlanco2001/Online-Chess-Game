import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Queen extends Piece{
    constructor(x,y,scene,texture,color){
        super(x,y,scene,texture,'queen',color,9,Utils.MOVEMENTS['QUEEN']);
    }
}