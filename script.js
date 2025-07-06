const botao = document.getElementById("botao");
const telaInicial = document.querySelector(".tela-inicial");
const cartao = document.querySelector(".cartao");

botao.addEventListener("click", () => {
    telaInicial.classList.add("hidden");
    cartao.classList.remove("hidden");
});
