
export default class Lobby extends Phaser.Scene{
    constructor(){
        super({key: 'Lobby'});
        this.stopped = false
    }

    init(){
    }

    preload(){

    }

    create(){
        this.keys = this.input.keyboard.createCursorKeys();
    }

    update(){
        if(this.keys.space.isDown){
            if(!this.stopped){
                this.scene.start('Game');
                this.scene.stop();
                this.stopped = true
            }
        }
    }
}