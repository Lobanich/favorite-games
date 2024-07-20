document.addEventListener("DOMContentLoaded", function() {
    const games = {
        action: [
            { title: "DOOM", description: "Классический шутер от первого лица" },
            { title: "Half-Life 2", description: "Революционный шутер с захватывающим сюжетом" },
            { title: "Uncharted 4", description: "Приключенческий экшн с потрясающей графикой и сюжетом" },
            { title: "Call of Duty", description: "Популярная военная игра" },
            { title: "GTA V", description: "Игра с открытым миром и захватывающим сюжетом" },
            { title: "Red Dead Redemption 2", description: "Приключенческий экшн в открытом мире" }
        ],
        rpg: [
            { title: "The Witcher 3", description: "Эпическая RPG с открытым миром" },
            { title: "Mass Effect 2", description: "Научно-фантастическая RPG с захватывающим сюжетом" },
            { title: "Skyrim", description: "Легендарная RPG с открытым миром" },
            { title: "Dragon Age: Inquisition", description: "Фэнтезийная RPG с увлекательной историей" },
            { title: "Cyberpunk 2077", description: "Futuristic RPG with open world" },
            { title: "Divinity: Original Sin 2", description: "Классическая RPG с пошаговыми боями" }
        ],
        strategy: [
            { title: "StarCraft", description: "Культовая стратегия в реальном времени" },
            { title: "Civilization VI", description: "Глобальная пошаговая стратегия" },
            { title: "Age of Empires II", description: "Классическая стратегия в реальном времени" },
            { title: "Command & Conquer", description: "Культовая стратегическая игра" },
            { title: "Total War: Three Kingdoms", description: "Стратегия в реальном времени и пошаговая" },
            { title: "Warcraft III", description: "Классическая стратегия в реальном времени" }
        ]
    };

    function renderGames() {
        const mainContent = document.querySelector(".main");
        mainContent.innerHTML = "";

        for (const genre in games) {
            if (games.hasOwnProperty(genre)) {
                const section = document.createElement("section");
                section.id = genre;
                section.className = "section";
                section.innerHTML = `
                    <h2>${capitalizeFirstLetter(genre)}</h2>
                    <table class="table">
                        <tr>
                            <th>Игра</th>
                            <th>Описание</th>
                        </tr>
                        ${games[genre].map(game => `
                            <tr>
                                <td>${game.title}</td>
                                <td>${game.description}</td>
                            </tr>
                        `).join('')}
                    </table>
                `;
                mainContent.appendChild(section);
            }
        }
    }

    function renderNav() {
        const nav = document.querySelector(".nav ul");
        nav.innerHTML = "";

        for (const genre in games) {
            if (games.hasOwnProperty(genre)) {
                const li = document.createElement("li");
                li.innerHTML = `<a href="#${genre}">${capitalizeFirstLetter(genre)}</a>`;
                nav.appendChild(li);
            }
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderNav();
    renderGames();
});
