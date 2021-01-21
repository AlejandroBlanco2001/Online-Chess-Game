export default class Square{
    
    constructor(row,column){
        this.row = row;
        this.column = column;
        this.piece = null;
    }

    setPiece(piece){
        if(piece != null){
            this.piece = piece;
            piece.setSquare(this);
        }else{
            throw new Error('Null paramater')
        }   
    }

    isOcuppied(){
        return this.piece !== null ? true : false
    }

    getPosition(){
        return {row: this.row, column: this.column};
    }
}