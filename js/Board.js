export let Board = function (side_length) {
    this.gameArray = [];
    this.side_length = side_length
    for (let i = 0; i < side_length + 4; i++) {
        this.gameArray[i] = []
        for (let j = 0; j < side_length + 4; j++) {
            this.gameArray[i][j] = 'e';
        }
    }
    this.winner = null;
}

Board.prototype.square_is = function (row, col, X_or_O) {
    this.gameArray[row + 2][col + 2] = X_or_O;
    this.check_for_win(row + 2, col + 2, X_or_O)
    if(this.winner)
    {
        let winnerText = document.getElementById("winner")
        winnerText.innerHTML = "Player " + this.winner + " won!"
        console.log("Player " + this.winner + " won!");
    }
}

Board.prototype.check_for_win = function (row, col, X_or_O) {
    if (this.gameArray[row - 1][col] == X_or_O && this.gameArray[row + 1][col] == X_or_O) { return this.winner = X_or_O }
    if (this.gameArray[row - 1][col] == X_or_O && this.gameArray[row - 2][col] == X_or_O) { return this.winner = X_or_O }
    if (this.gameArray[row + 1][col] == X_or_O && this.gameArray[row + 2][col] == X_or_O) { return this.winner = X_or_O }

    if (this.gameArray[row][col - 1] == X_or_O && this.gameArray[row][col + 1] == X_or_O) { return this.winner = X_or_O }
    if (this.gameArray[row][col - 1] == X_or_O && this.gameArray[row][col - 2] == X_or_O) { return this.winner = X_or_O }
    if (this.gameArray[row][col + 1] == X_or_O && this.gameArray[row][col + 2] == X_or_O) { return this.winner = X_or_O }
}