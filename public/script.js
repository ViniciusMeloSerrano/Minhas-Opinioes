const pesquisa = document.getElementById("pesquisa");
const lista = document.getElementById("lista");


// ORGANIZAR EM ORDEM ALFABÉTICA
const cards = Array.from(lista.children);

cards.sort((a, b) => {
    const nomeA = a.innerText.toLowerCase();
    const nomeB = b.innerText.toLowerCase();

    return nomeA.localeCompare(nomeB);
});

cards.forEach(card => lista.appendChild(card));


// PESQUISA
pesquisa.addEventListener("input", () => {

    const valor = pesquisa.value.toLowerCase();

    cards.forEach(card => {

        const nomeAnime = card.innerText.toLowerCase();

        if(nomeAnime.includes(valor)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});