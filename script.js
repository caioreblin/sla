const botao = document.getElementById("botao");
const telaInicial = document.querySelector(".tela-inicial");
const cartao = document.querySelector(".cartao");

const acessos = localStorage.getItem('acessos') || 0;
const novoValor = Number(acessos) + 1;
localStorage.setItem('acessos', novoValor);

const mensagensEspeciais = [
    "Já é a {n}ª vez que você entra aqui, tô de olho 👀",
    "Vou ter que tirar isso do ar pra você não ficar entrando tanto 😅",
    "Você tá viciada nessa página, né?",
    "Isso tá virando rotina já hein, rsrs"
];

if (novoValor >= 3) {
    const telaInicial = document.querySelector('.tela-inicial');
    const linha1 = document.querySelector('.linha1');
    const linha2 = document.querySelector('.linha2');
    const toque = document.querySelector('#botao');

    let msg;
    if (novoValor === 3) {
        msg = "Terceira vez aqui? Pode pedir música no Fantástico.";
    } else {
        msg = mensagensEspeciais[Math.floor(Math.random() * mensagensEspeciais.length)]
            .replace('{n}', novoValor);
    }

    linha1.classList.remove('linha1');
    linha2.classList.remove('linha2');
    linha1.style.borderRight = 'none';
    linha2.style.borderRight = 'none';

    linha1.textContent = msg;
    linha2.textContent = '';
}


botao.addEventListener("click", () => {
    telaInicial.classList.add("hidden");
    cartao.classList.remove("hidden");
});
