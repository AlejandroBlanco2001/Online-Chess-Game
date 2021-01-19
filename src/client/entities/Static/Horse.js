import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Horse extends Piece{
    constructor(color,x,y,scene,texture){
        super(x,y,scene,texture,'horse',color,3,Utils.MOVEMENTS['HORSE']);
    }
}