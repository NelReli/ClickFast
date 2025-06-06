let score = 0;
let timeLeft = 5;
let timerId;
let gameActive = false;

const button = document.getElementById("button-clicker");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

// Fonction de mise à jour du score
button.addEventListener("click", () => {
    if (!gameActive) return;

    score++;
    scoreDisplay.textContent = score;
});

// Lancer le jeu quand le bouton est activé
button.addEventListener("click", () => {
    if (!gameActive) {
        startGame();
    }
});

function startGame() {
    score = 0;
    timeLeft = 5;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
    gameActive = true;

// Compte à rebours
    timerId = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

        if (timeLeft === 0) {
        clearInterval(timerId);
        gameActive = false;
        timerDisplay.textContent = `⏱️ Temps écoulé ! Ton score : ${score}`;
        }
    }, 1000);
}
