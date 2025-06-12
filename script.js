let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        checkWinner();
        if (gameActive) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("status").textContent = "Player " + currentPlayer + "'s turn";
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], //  He wale aadvya line sthi
        [0,3,6], [1,4,7], [2,5,8], // Hw wale column sathi
        [0,4,8], [2,4,6]           //Hw wale tyachytley diagonals
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            document.getElementById("status").textContent = "Player " + currentPlayer + " wins!";
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById("status").textContent = "It's a draw!";
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.getElementById("status").textContent = "Player X's turn";
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.textContent = "";
    }
}
function disableBoard() {
    for (let cell of document.getElementsByClassName("cell")) {
        cell.classList.add("disabled");
    }
}
function updateStatus(text, type) {
    const status = document.getElementById("status");
    status.textContent = text;
    status.className = type;
}
function highlightWin(pattern) {
    for (let index of pattern) {
        document.getElementsByClassName("cell")[index].style.backgroundColor = "#90ee90"; // yethe light green color
    }
}
