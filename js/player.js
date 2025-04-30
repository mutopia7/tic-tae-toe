// player.js
import { board } from "./board.js";  // Import printBoard from board.js

// player.js

function createPlayer(name, symbol) {
    return {
        name,
        symbol,
        makeMove(row, col) {
            if (board[row][col] !== "") {
                return false;
            }

            board[row][col] = symbol;


            return true;
        }
    };
}



export { createPlayer };
