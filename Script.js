const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como se escreve Gato na língua Inglesa?",
        alternativas: [
            {
                texto: "Cat",
                afirmacao: "Correto. "
            },
            {
                texto: "Dog",
                afirmacao: "Errado."
            }
        ]
    },
    {
        enunciado: "Como se fala *Lar-Doce-Lar* em inglês?",
        alternativas: [
            {
                texto: "House Sweet House",
                afirmacao: "Errado."
            },
            {
                texto: "Home Sweet Home",
                afirmacao: "Correto."
            }
        ]
    },
    {
        enunciado: "O que é *Good Morning* traduzido para o Poruguês?",
        alternativas: [
            {
                texto: "Boa Noite",
                afirmacao: "Errado."
            },
            {
                texto: "Bom Dia",
                afirmacao: "Correto."
            }
        ]
    },
    {
        enunciado: "The Teacher Rafael (Buiu) is teacher of the how matter?",
        alternativas: [
            {
                texto: "Programmation",
                afirmacao: "Correto, é a matéria que o professor Rafael da aula."
            },
            {
                texto: "Robotics",
                afirmacao: "Não, porque é a matéria que o professor Thadeu dá aula."
            }
        ]
    },
    {
        enunciado: "Qual é a melhor turma do professor Buiu?",
        alternativas: [
            {
                texto: "3° Ano E",
                afirmacao: "Porquê é a melhor turma do professor e é a que ele mais se diverte."
            },
            {
                texto: "3° Ano E",
                afirmacao: "Porquê é a melhor turma do professor e é a que ele mais se diverte."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
