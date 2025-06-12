/**
 * @jest-environment jsdom
 */

const { startGame, incrementScore } = require("./script.js");

describe("test", () => {

    beforeEach(() => {
        document.body.innerHTML = `
        <div id="score">0</div>
        <p id="timer">Clique pour démarrer !</p>
        <button id="button-clicker"></button>
        `;
    });
    
    test("startGame initialise score et timer", () => {
        startGame();
        expect(document.getElementById("score").textContent).toBe("0");
        expect(document.getElementById("timer").textContent).toContain("Temps restant : 5");
        
        jest.advanceTimersByTime(1000);
        expect(document.getElementById("timer").textContent).toContain("Temps restant : 4");
    });
    
    test("incrementScore ajoute 1 si jeu actif", () => {
        startGame();
        incrementScore();
        expect(document.getElementById("score").textContent).toBe("1");
    });
    
    test("incrementScore ne fait rien si jeu inactif", () => {
        incrementScore();
        expect(document.getElementById("score").textContent).toBe("0");
    });
})
