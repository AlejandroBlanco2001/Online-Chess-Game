export default class Utils {
    
    static SIZE_TILE = 108;
    
    static CENTER_PIECE = this.SIZE_TILE/2;

    static MOVEMENTS = {
        'PAWN' : [{x:0, y:1}],
        'BISHOP': [{x:1, y:1}, {x:-1, y:1}, {x:1, y: -1}, {x:-1, y:-1}],
        'HORSE': [{x:1, y:2}, {x:2, y:1}, {x:-1, y:2},{x:-2, y:1},{x:1, y:-2},{x:2, y:-1},{x:-1, y:-2},{x:-2,y:-1}],
        'ROOK': [{x:1, y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}],
        'QUEEN': [{x:1, y:1}, {x:-1, y:1}, {x:1, y: -1}, {x:-1, y:-1},{x:1, y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}],
        'KING': [{x:1, y:1}, {x:-1, y:1}, {x:1, y: -1}, {x:-1, y:-1},{x:1, y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}]
    }
}   