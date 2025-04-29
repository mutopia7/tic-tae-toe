const board = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function printBoard(){
    console.clear();
    board.forEach(row => console.log(row.join(" | ")))
}

function createPlayer(name , symbol){
    return{
        name,
        symbol,
        makeMove(row , col){
            if(board[row][col] !== ""){
                console.log("This cell completed before!")
                return false
            }

            board[row][col] = symbol;
            printBoard();
            return true;
        }
    }
}

const player1 = createPlayer("mohamad", "X");
const player2 = createPlayer("hanah", "O");

player1.makeMove(0, 0);
player2.makeMove(0, 0); 
player2.makeMove(1, 1);
