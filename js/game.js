import { createBoard } from './board.js';

let cardCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    askCardCount();
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetGame);
});

function askCardCount() {
    cardCount = parseInt(prompt("Syötä korttien määrä (parillinen luku):"), 10);
    if (isNaN(cardCount) || cardCount % 2 !== 0) {
        alert("Korttien määrän täytyy olla parillinen luku.");
        return askCardCount();
    }
    createBoard(cardCount);
}

function resetGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    askCardCount();
}
