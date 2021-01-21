export default class Square{
    
    constructor(row,column){
        this.row = row;
        this.column = column;
        this.piece = null;
    }

    setPiece(piece){
        if(this.piece != null){
            this.piece = piece;
        }
        throw new Error('Null paramater')
    }

    isOcuppied(){
        return this.piece !== null ? true : false
    }
}