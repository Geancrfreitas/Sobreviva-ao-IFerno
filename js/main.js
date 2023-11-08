//base de js não questione
// Este é um comentário de uma linha

/*
   Este é um comentário de várias linhas
*/

// Declarando variáveis
let nome = "SeuNome";
let idade = 25;

// Exibindo valores no console
console.log("Olá, " + nome + "!");
console.log("Sua idade é " + idade + " anos.");

// Função simples
function saudacao() {
    console.log("Olá, mundo!");
}

// Chamando a função
saudacao();

// Evento de clique de botão
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});
