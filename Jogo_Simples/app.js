// Lista para armazenar números já sorteados (evita repetições)
let listaNum = [];

// Define o limite máximo para o número aleatório (número será entre 1 e 3)
let numLimite = 3;

// Gera o número secreto aleatório que o jogador deve adivinhar
let numSecreto = gerarNumeroAleatorio();

// Contador de tentativas
let tentativa = 1;

// Exibe o número secreto no console (útil para testes)
console.log(numSecreto);

// Função para exibir texto em uma tag HTML (e também fala o texto em voz alta)
function exibirTela(tag, texto) {
    let conteudo = document.querySelector(tag); // Seleciona a tag HTML (ex: 'h1', 'p')
    conteudo.innerHTML = texto; // Substitui o conteúdo da tag pelo novo texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); // Fala o texto com voz sintetizada
}

// Função que gera um número aleatório entre 1 e numLimite (evita repetições)
function gerarNumeroAleatorio() {
    let numInclusao = parseInt(Math.random() * numLimite + 1); // Gera número entre 1 e numLimite

    // Se todos os números já foram sorteados, reseta a lista
    if (listaNum.length == numLimite)
        listaNum = [];

    // Se o número já foi sorteado antes, tenta novamente recursivamente
    if (listaNum.includes(numInclusao)) {
        return gerarNumeroAleatorio();
    } else {
        listaNum.push(numInclusao); // Adiciona o número à lista de já sorteados
        console.log(listaNum); // Exibe a lista no console
        return numInclusao; // Retorna o número gerado
    }
}

// Função para limpar o campo de entrada do usuário
function limparCampo() {
    chute = document.querySelector('input'); // Seleciona o input
    chute.value = ''; // Limpa o conteúdo
}

// Função para ativar o botão "Reiniciar"
function desativarBotao() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

// Função principal: verifica se o chute do jogador está correto
function verificarChute() {
    let chute = document.querySelector('input').value; // Pega o valor digitado

    if (chute == numSecreto) {
        // Se o chute estiver correto
        let textoTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let text1 = `Você descobriu o número secreto com ${tentativa} ${textoTentativa}`;
        exibirTela('h1', 'ARRRAZOU VOCÊ ACERTOU!!!!!!');
        exibirTela('p', text1);
        desativarBotao(); // Ativa o botão de reiniciar
    } else if (chute > numSecreto) {
        // Se o chute for maior que o número secreto
        exibirTela('p', 'O número secreto é menor');
    } else {
        // Se o chute for menor que o número secreto
        exibirTela('p', 'O número secreto é maior');
    }

    tentativa++; // Incrementa o número de tentativas
    limparCampo(); // Limpa o campo de entrada
}

// Função que exibe a mensagem inicial do jogo
function exibirMensagemIni() {
    exibirTela('h1', 'Jogo do número secreto');
    let textoTela = `Digite um valor entre 1 a ${numLimite}`;
    exibirTela('p', textoTela);
}

// Mostra a mensagem inicial assim que o script é executado
exibirMensagemIni();

// Função para reiniciar o jogo
function reiniciarJogo() {
    numSecreto = gerarNumeroAleatorio(); // Gera novo número secreto
    limparCampo(); // Limpa o campo
    tentativa = 1; // Reinicia o contador de tentativas
    exibirMensagemIni(); // Mostra mensagem inicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desativa botão reiniciar
}
