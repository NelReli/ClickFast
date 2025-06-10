let score = 0;
let timeLeft = 5;
let timerId;
let gameActive = false;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

function startGame() {
    score = 0;
    timeLeft = 5;
    gameActive = true;

    if (scoreDisplay && timerDisplay) {
        scoreDisplay.textContent = score;
        timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
    }

    timerId = setInterval(() => {
        timeLeft--;
        if (timerDisplay) {
            timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
        }

        if (timeLeft === 0) {
            clearInterval(timerId);
            gameActive = false;
            if (timerDisplay) {
                timerDisplay.textContent = `⏱️ Temps écoulé ! Ton score : ${score}`;
            }
        }
    }, 1000);
}

function incrementScore() {
    if (gameActive) return;
    score++;
    if (scoreDisplay) {
        scoreDisplay.textContent = score;
    }
}

// Pour les tests
module.exports = { startGame, incrementScore };
