import Piece from "./Piece.js";
import Utils from "../../Utils/Utils.js"

export default class Pawn extends Piece{
    constructor(x,y,scene,texture,color){
        super(x,y,scene,texture,'pawn',color,1,Utils.MOVEMENTS['PAWN']);

        // Sync with the scene 
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        
        this.initialStep = true;
    }

    move(){
        console.log('PAWN MOVEMENT')
    }
}