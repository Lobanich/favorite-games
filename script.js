document.addEventListener("DOMContentLoaded", function() {
    const games = [
        {
            genre: "Action",
            games: [
                { title: "DOOM", description: "Классический шутер от первого лица" },
                { title: "Half-Life 2", description: "Революционный шутер с захватывающим сюжетом" },
                { title: "Uncharted 4", description: "Приключенческий экшн с потрясающей графикой и сюжетом" },
                { title: "Call of Duty", description: "Популярная военная игра" },
                { title: "GTA V", description: "Игра с открытым миром и захватывающим сюжетом" },
                { title: "Red Dead Redemption 2", description: "Приключенческий экшн в открытом мире" }
            ]
        },
        {
            genre: "RPG",
            games: [
                { title: "The Witcher 3", description: "Эпическая RPG с открытым миром" },
                { title: "Mass Effect 2", description: "Научно-фантастическая RPG с захватывающим сюжетом" },
                { title: "Skyrim", description: "Легендарная RPG с открытым миром" },
                { title: "Dragon Age: Inquisition", description: "Фэнтезийная RPG с увлекательной историей" },
                { title: "Cyberpunk 2077", description: "Futuristic RPG with open world" },
                { title: "Divinity: Original Sin 2", description: "Классическая RPG с пошаговыми боями" }
            ]
        },
        {
            genre: "Strategy",
            games: [
                { title: "StarCraft", description: "Культовая стратегия в реальном времени" },
                { title: "Civilization VI", description: "Глобальная пошаговая стратегия" },
                { title: "Age of Empires II", description: "Классическая стратегия в реальном времени" },
                { title: "Command & Conquer", description: "Культовая стратегическая игра" },
                { title: "Total War: Three Kingdoms", description: "Стратегия в реальном времени и пошаговая" },
                { title: "Warcraft III", description: "Классическая стратегия в реальном времени" }
            ]
        }
    ];

    function renderGames() {
        const mainContent = document.querySelector(".main");
        
        games.forEach(({ genre, games }) => {
            const section = document.createElement("section");
            section.id = genre.toLowerCase();
            section.className = "section";
            section.innerHTML = `
                <h2>${genre}</h2>
                <table class="table">
                    <tr>
                        <th>Игра</th>
                        <th>Описание</th>
                    </tr>
                    ${games.map(game => `
                        <tr>
                            <td>${game.title}</td>
                            <td>${game.description}</td>
                        </tr>
                    `).join('')}
                </table>
            `;
            mainContent.appendChild(section);
        });
    }

    function renderNav() {
        const nav = document.querySelector(".nav ul");
        
        games.forEach(({ genre }) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#${genre.toLowerCase()}">${genre}</a>`;
            nav.appendChild(li);
        });
    }

    renderNav();
    renderGames();
});
