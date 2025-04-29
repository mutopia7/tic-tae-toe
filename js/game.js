// game.js
import { board } from "./board.js";
import { createPlayer } from "./player.js";


const anounce = document.querySelector("#anounce");


let player1 = createPlayer("Player 1", "X");
let player2 = createPlayer("Player 2", "O");

let currentPlayer = player1;
let gameOver = false;

// for change gameOver value in other js files 
function setGameOver(value) {
    gameOver = value;
}

// for change currentPlayer value in other js files
function setCurrentPlayer(){
    currentPlayer = player1;
}

function checkWinner(symbol) {
  // Check rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) {
      return true;
    }
  }

  if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
    return true;
  }

  if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
    return true;
  }

  return false;
}

function isBoardFull() {
  return board.every(row => row.every(cell => cell !== ""));
}

function playTurn(row, col) {
  if (gameOver) {
    anounce.textContent = "The game has already ended.";
    return;
  }

  const success = currentPlayer.makeMove(row, col);

  if (!success) {
    anounce.textContent = "Please choose another cell.";
    return;
  }

  if (checkWinner(currentPlayer.symbol)) {
    anounce.textContent = `🏆 ${currentPlayer.name} wins the game!`;
    gameOver = true;
    return;
  }

  if (isBoardFull()) {
    anounce.textContent = "🔁 It's a draw.";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1;
  anounce.textContent = `It's ${currentPlayer.name}'s (${currentPlayer.symbol}) turn.`;
}

export { playTurn , setGameOver , setCurrentPlayer , anounce};
