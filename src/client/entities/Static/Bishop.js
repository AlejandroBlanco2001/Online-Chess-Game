import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Bishop extends Piece{
    constructor(color,x,y,scene,texture){
        super(x,y,scene,texture,'bishop',color,3,Utils.MOVEMENTS['BISHOP']);
    }
}