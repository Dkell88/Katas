let whiteQueen = [0, 0];
let blackQueen = [0, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


function generateBoard(Q1, Q2){
    let board = [];
    for (let i = 0; i < 8; i++){
        board.push([]);
        for(let j = 0; j < 8; j++){
            if((i === Q1[0] && j === Q1[1]) ||(i === Q2[0] && j === Q2[1]) ){
                board[i].push(1);
            }else board[i].push(0);      
        }
    }
    return board;
}

function queenThreat(board){
    let whiteQueenDiag = [];
    let index = 0;

    for(let x = 1; x < 8; x++){

        if(whiteQueen[0]+x < 8 && whiteQueen[1]+x < 8){
            whiteQueenDiag.push([]);
            whiteQueenDiag[index].push(whiteQueen[0]+x, whiteQueen[1]+x);
            index++;
        }
        if(whiteQueen[0]-x >= 0 && whiteQueen[1]-x >= 0){
            whiteQueenDiag.push([]);
            whiteQueenDiag[index].push(whiteQueen[0]-x, whiteQueen[1]-x);
            index++;
        }
        if(whiteQueen[0]+x < 8 && whiteQueen[1]-x >= 0){
            whiteQueenDiag.push([]);
            whiteQueenDiag[index].push(whiteQueen[0]+x, whiteQueen[1]-x);
            index++;
        }
        if(whiteQueen[0]-x >= 0 && whiteQueen[1]-x >= 0){
            whiteQueenDiag.push([]);
            whiteQueenDiag[index].push(whiteQueen[0]-x, whiteQueen[1]-x);
            index++;
        }  
    }

    //console.log(whiteQueenDiag);

    for(let f = 0; f < whiteQueenDiag.length; f++){
        if(whiteQueenDiag[f][0] === blackQueen[0] && whiteQueenDiag[f][1] === blackQueen[1]){
           // console.log("Found at diag")
            return true
        }
    }

    if(whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]){
        //console.log("Found horz or vert")
        return true;
    }else return false
}