let player1Sum = 0;
let player2Sum = 0;

function rollDice(player) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const resultElement = document.getElementById(`${player}-result`);
    
    if (player === 'player1') {
        player1Sum += diceNumber;
        resultElement.innerHTML = `Player 1 rolled: ${diceNumber}<br>Current sum: ${player1Sum}`;
    } else {
        player2Sum += diceNumber;
        resultElement.innerHTML = `Player 2 rolled: ${diceNumber}<br>Current sum: ${player2Sum}`;
    }

    checkWinner();
}

function checkWinner() {
    const winnerMessage = document.getElementById('winner-message');
    if (player1Sum >= 16) {
        winnerMessage.innerHTML = 'Congrats, Player 1 wins the game!';
        disableButtons();
    } else if (player2Sum >= 16) {
        winnerMessage.innerHTML = 'Congrats, Player 2 wins the game!';
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll('.button').forEach(button => {
        button.disabled = true;
    });
}
