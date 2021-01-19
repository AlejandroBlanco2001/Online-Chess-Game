import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class King extends Piece{
    constructor(x,y,scene,texture,color){
        super(x,y,scene,texture,'king',color,0, Utils.MOVEMENTS['KING']);
    }
}