import Square from '../Enviorement/Square.js';

export default class Piece extends Phaser.GameObjects.Sprite{

    constructor(x,y,scene,texture,id,color,value,movement){
        super(scene,x,y,texture)

        // Javascript don't allow abstract classes, this is the implementation
        if(this.constructor == Piece){
            throw new Error('Abstract classes cant be instantiaded');
        }
        
        //Sync with scene
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);

        // Allow to be drag in the scene
        this.setInteractive({draggable: true});
        scene.input.setDraggable(this);

        this.movement = movement;
        this.id = id;
        this.color = color;
        this.value = value;
        this.square = [];
    }

    setSquare(square){
        if(square != undefined){
            if(square instanceof Square){
                this.square.push(square);
            }
        }
    }

    getSquare(){
        return this.square;
    }

    getPosition(){
        let {row,column} = this.getSquare().slice(-1)[0].getPosition();
        return `Row: ${row} with Column: ${column}`
    }

    move(){
        console.log("MOVE")
    }
}