// player.js
import { board, printBoard } from "./board.js";  // Import printBoard from board.js

// player.js

function createPlayer(name, symbol) {
    return {
      name,
      symbol,
      makeMove(row, col) {
        if (board[row][col] !== "") {
          console.log("This cell is already occupied!");
          return false;
        }
  
        board[row][col] = symbol;
        printBoard();
  
        return true;
      }
    };
  }
  
  export { createPlayer };
  