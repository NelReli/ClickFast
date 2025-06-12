let score = 0;
let timeLeft = 5;
let timerId = null;
let gameActive = false;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const button = document.getElementById("button-clicker");

function startGame() {
    score = 0;
    timeLeft = 5;
    gameActive = true;

    scoreDisplay.textContent = score;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

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

function incrementScore() {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = score;
}

button.addEventListener("click", () => {
    if (!gameActive) {
        startGame();
    }
    incrementScore();
});

// Pour tests unitaires

// module.exports = { startGame, incrementScore };

// Comment manipuler l'API ?
// Comment envoyer mon score:

const postData = async () => {
    const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

    const data = {
        createdAt: new Date().toISOString(),
        username: "JohnDoe",
        avatar:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0EpIWybDPfI%2Fhqdefault.jpg&f=1&nofb=1&ipt=ce88f4f6a1f2aee8e614210b05c3d89497b10763c7fd4ff1651ce821f5b3cd8d&ipo=images",
        score: 100,
        website_url: "NelReli.github.io/ClickFast",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Data posted successfully:", result);
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

postData();


// Comment lire les scores:

const getData = async () => {
    const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Data retrieved successfully:", data);
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
};

getData();


// Comment remplacer mon ancien score avec le nouveau:

const usernameToDelete = "JohnDoe";

const deleteUserByUsername = async (username) => {
    const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

    try {
        // Étape 1 : Récupérer les utilisateurs avec le même username
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();
        const usersToDelete = users.filter(
            (user) => user.username === username
        );

        // Étape 2 : Supprimer chaque utilisateur trouvé
        for (const user of usersToDelete) {
            const deleteResponse = await fetch(`${url}/${user.id}`, {
                method: "DELETE",
            });

            if (!deleteResponse.ok) {
                console.error(
                    `Error deleting user with ID ${user.id}:`,
                    deleteResponse.statusText
                );
            } else {
                console.log(`User with ID ${user.id} deleted successfully.`);
            }
        }

        // Étape 3 : Ajouter un nouvel utilisateur
        const newUserData = {
            createdAt: new Date().toISOString(),
            username: "JohnDoe", // Vous pouvez changer le nom d'utilisateur si nécessaire
            avatar:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0EpIWybDPfI%2Fhqdefault.jpg&f=1&nofb=1&ipt=ce88f4f6a1f2aee8e614210b05c3d89497b10763c7fd4ff1651ce821f5b3cd8d&ipo=images",
            score: 100,
            website_url: "NelReli.github.io/ClickFast",
        };

        const postResponse = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserData),
        });

        if (!postResponse.ok) {
            throw new Error("Network response was not ok");
        }

        const newUserResult = await postResponse.json();
        console.log("New user posted successfully:", newUserResult);
    } catch (error) {
        console.error("Error:", error);
    }
};

// Appel de la fonction pour supprimer et ajouter un utilisateur
deleteUserByUsername(usernameToDelete);
