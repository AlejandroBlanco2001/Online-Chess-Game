import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Horse extends Piece{
    constructor(x,y,scene,texture,color){
        super(x,y,scene,texture,'horse',color,3,Utils.MOVEMENTS['HORSE']);
    }
}