export default class Piece{

    constructor(id,color,value,movement){
        if(this.constructor == Piece){
            throw new Error('Abstract classes cant be instantiaded');
        }
        this.movement = movement;
        this.position = {x:0, y:0}
        this.id = id;
        this.color = color;
        this.value = value;
    }

    move(){
        console.log("MOVE")
    }
}