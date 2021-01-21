import Square from "./Square.js";

export default class Board{
    constructor(){
        this.squares = [];
        for(let i = 1; i <= 8;i++){
            this.squares[i] = [];
            for(let j = 1; j <= 8; j++){
                this.squares[i].push(new Square(i,j));
            }
        }
    }

    getSquares(){
        return this.squares;
    }
}