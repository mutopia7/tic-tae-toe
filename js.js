const board = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function printBoard(){
    console.clear();
    board.forEach(row => console.log(row.join(" | ")))
}

