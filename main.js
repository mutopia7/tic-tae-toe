// main.js
import { anounce, playTurn, setCurrentPlayer, setGameOver} from "./js/game.js";
import { board ,resetBoard} from "./js/board.js"; 



// Get the game board element from the DOM
const gameBoard = document.getElementById("game-board");

// Create the board in the DOM
function renderBoard() {
  gameBoard.innerHTML = "";
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.textContent = ""; // Initially empty
      cell.addEventListener("click", handleCellClick);
      gameBoard.appendChild(cell);
    }
  }
}

// Handle cell click (user input)
function handleCellClick(event) {
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;

  // Call playTurn and pass the row and col from the clicked cell
  playTurn(Number(row), Number(col));

  // Re-render the board to reflect the new move
  renderBoard();
  updateBoard();
}

// Update the board in the DOM with the current state
function updateBoard() {
  const cells = document.querySelectorAll("#game-board .cell");
  cells.forEach(cell => {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const symbol = board[row][col];
    cell.textContent = symbol; // Update the cell content
  });
}

// Add event listener to reset button
document.getElementById("reset-button").addEventListener("click", () => {
  resetBoard();
  renderBoard(); // Re-render the empty board
  updateBoard();
  setGameOver(false);
  setCurrentPlayer();
  anounce.textContent = "new round"
});

// Initial render
renderBoard();



