const form = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");
const classificacao = document.getElementById("classificacao");
const valorClassificacao = document.getElementById("valorClassificacao");

valorClassificacao.textContent = classificacao.value;

classificacao.addEventListener("input", () => {
    valorClassificacao.textContent = classificacao.value;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const filme = document.getElementById("filme").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    const personagem = document.getElementById("personagem").value;
    const motivo = document.getElementById("motivo").value;

    resultado.style.display = "block";
    resultado.innerHTML = `
        <h2>Resumo</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Filme favorito:</strong> ${filme}</p>
        <p><strong>Ano:</strong> ${ano}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Personagem favorita:</strong> ${personagem}</p>
        <p><strong>Classificação:</strong> ${classificacao.value}/10</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
    `;
});