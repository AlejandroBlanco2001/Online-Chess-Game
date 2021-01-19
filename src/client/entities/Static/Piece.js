export default class Piece extends Phaser.GameObjects.Sprite{

    constructor(x,y,scene,texture,id,color,value,movement){
        if(this.constructor == Piece){
            throw new Error('Abstract classes cant be instantiaded');
        }
        super(scene,x,y,texture)
        this.movement = movement;
        this.position = {x:x, y:y}
        this.id = id;
        this.color = color;
        this.value = value;
    }

    move(){
        console.log("MOVE")
    }
}