// board.js

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  
  function printBoard() {
    board.forEach(row => console.log(row.join(" | ")));
  }
  
  function resetBoard() {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  }


  
  export { board, printBoard, resetBoard };
  