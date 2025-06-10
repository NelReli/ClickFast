/**
 * @jest-environment jsdom
 */

// import { startGame, incrementScore } from './script';npm
const { incrementScore, startGame } = require( '/script.js');

beforeEach(() => {
    // Simule le DOM
    document.body.innerHTML = `
        <div id="score">0</div>
        <div id="timer">Temps restant : 5s</div>
    `;
});

test('startGame reset le score et le temps', () => {
    startGame();
    expect(document.getElementById("score").textContent).toBe("0");
    expect(document.getElementById("timer").textContent).toContain("Temps restant : 5");
});

test('incrementScore ajoute 1 au score si jeu actif', () => {
    startGame();
    incrementScore();
    expect(document.getElementById("score").textContent).toBe("1");
});

test('incrementScore ne fait rien si jeu inactif', () => {
    // Ne pas appeler startGame()
    incrementScore();
    expect(document.getElementById("score").textContent).toBe("0");
});
