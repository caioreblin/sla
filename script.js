const botao = document.getElementById("botao");
const telaInicial = document.querySelector(".tela-inicial");
const cartoes = document.querySelectorAll(".cartao");
const body = document.body;
const contador = document.getElementById("contador");

const INICIO_NAMORO = new Date(2025, 7, 17); // 17/08/2025

function atualizarContador() {
    const hoje = new Date();

    let anos = hoje.getFullYear() - INICIO_NAMORO.getFullYear();
    let meses = hoje.getMonth() - INICIO_NAMORO.getMonth();
    let dias = hoje.getDate() - INICIO_NAMORO.getDate();

    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const partes = [];
    if (anos > 0) partes.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
    if (meses > 0) partes.push(`${meses} ${meses === 1 ? "mês" : "meses"}`);
    partes.push(`${dias} ${dias === 1 ? "dia" : "dias"}`);

    contador.textContent = `Juntos há ${partes.join(", ")} 💕`;
}

atualizarContador();

botao.addEventListener("click", () => {
    telaInicial.classList.add("hidden");
    cartoes.forEach((cartao) => cartao.classList.remove("hidden"));
    body.style.height = "auto";
    body.style.width = "auto";
});

document.querySelectorAll(".motivo-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
});
