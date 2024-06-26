const query = `
{
  characters(page: 1) {
    results {
      id
      name
      status
      species
      type
      gender
      image
    }
  }
}`;

fetch('https://rickandmortyapi.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query })
})
  .then(response => response.json())
  .then(data => {
    const characters = data.data.characters.results;
    const charactersDiv = document.getElementById('characters');
    characters.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.className = 'character';
      characterDiv.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Type: ${character.type || 'N/A'}</p>
        <p>Gender: ${character.gender}</p>
      `;
      charactersDiv.appendChild(characterDiv);
    });
  })
  .catch(error => console.error('Error:', error));
