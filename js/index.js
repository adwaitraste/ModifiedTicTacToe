import { Board } from './Board.js';

function drawBoard(board) {
  let outputString = "";
  let length = board.side_length;
  for (let i = 0; i < length; i++) {
    outputString += '|'
    for (let j = 0; j < length; j++) {
      if (board.gameArray[i + 2][j + 2] == 'e')
        outputString += ' ';
      else
        outputString += board.gameArray[i + 2][j + 2];
      outputString += '|'
    }
    outputString += "<br />";
  }
  console.log(outputString)
  let container = document.getElementById("container");
  let content = document.createElement("span");
  content.innerHTML = outputString;
  container.appendChild(content);
}

function gameCase() {
  let board = new Board(3);
  board.square_is(1, 1, 'X')
  board.square_is(1, 0, 'O')
  board.square_is(0, 1, 'X')
  board.square_is(2, 1, 'O')
  board.square_is(0, 2, 'X')
  board.square_is(2, 0, 'O')
  board.square_is(0, 0, 'X')
  return board
}

function playgame() {

  let board = gameCase();

  if (!board.winner) {
    let winnerText = document.getElementById("winner")
    winnerText.innerHTML = "No Winner"
  }
  drawBoard(board);

}

playgame();

