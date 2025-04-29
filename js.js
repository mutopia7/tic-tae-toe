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

            if (checkWinner(symbol)) {
                console.log(`${name} with symbol: ${symbol} wins! 🎉`);
                return true;
            }

            return true;
        }
    }
}

function checkWinner(symbol) {
    // بررسی ردیف‌ها
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) {
        return true;
      }
    }
  
    // بررسی ستون‌ها
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) {
        return true;
      }
    }
  
    // بررسی قطر اصلی
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
      return true;
    }
  
    // بررسی قطر مخالف
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
      return true;
    }
  
    return false;
  }
  

const player1 = createPlayer("mohamad", "X");
const player2 = createPlayer("hanah", "O");

player1.makeMove(0, 0);
player2.makeMove(1, 0);
player1.makeMove(0, 1);
player2.makeMove(1, 1);
player1.makeMove(0, 2);
