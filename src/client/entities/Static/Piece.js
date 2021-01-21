export default class Piece extends Phaser.GameObjects.Sprite{

    constructor(x,y,scene,texture,id,color,value,movement){
        super(scene,x,y,texture)

        if(this.constructor == Piece){
            throw new Error('Abstract classes cant be instantiaded');
        }
        
        //Sync with scene
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);

        this.setInteractive({draggable: true});
        scene.input.setDraggable(this);

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