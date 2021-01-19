import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Rook extends Piece{
    constructor(x,y,scene,texturecolor){
        super(x,y,scene,texture,'rook',color,5,Utils.MOVEMENTS['ROOK'])
    }
}