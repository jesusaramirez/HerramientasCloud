function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    data.results.forEach(personajes => {
        const article = document.createRange().createContextualFragment(/*HTML*/`
        
        <article>

            <div class="image-container">
                <img src="${personajes.image}" alt="Cyclops Rick">
            </div>

            <h2>${personajes.name}</h2>
            <span>${personajes.status}</span>

        </article>
        `);

        const main = document.querySelector("main");
        main.append(article);

    });
});

