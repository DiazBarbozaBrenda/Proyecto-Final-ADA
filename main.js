const urlBase = "https://rickandmortyapi.com/api/character";
const containerMain = document.querySelector("main");

const renderCharacter= ({image,name,species,status,gender,origin})=>{
    return ` <div class="card">
    <img src="${image}" alt="imagen de personaje">
    <h1>${name}</h1>
    <div class="data">
        <h2>Species: <small>${species}</small></h2>
        <h2>Status: <small>${status}</small></h2>
        <h2>Gender: <small>${gender}</small></h2>
        <h2>Origin: <small>${origin.name}</small></h2>
    </div>
</div>`;
}

const renderToHtml = (characters)=>{
    const renderCards = characters.map((character)=>renderCharacter(character));
    containerMain.innerHTML = renderCards;
}

const callCharacters = async ()=>{
    const response = await fetch(urlBase);
    const data = await response.json();
    renderToHtml(data.results);
    console.log(data.results);
}

callCharacters();