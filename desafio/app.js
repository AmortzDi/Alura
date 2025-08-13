// Lista com todos os nomes inseridos
let listaNome = [];
// Lista com os índices já sorteados (evita repetir)
let listaNomesSorteados = [];

// Gera um índice aleatório que ainda não foi sorteado
function gerarAletorio(){
    let numSort = parseInt(Math.random() * listaNome.length);

    if (listaNomesSorteados.includes(numSort)) {
        return gerarAletorio(); // repete até achar um índice novo
    } else {
        listaNomesSorteados.push(numSort);
        return numSort;
    }
}

// Limpa o campo de entrada de texto
function limparCampo(){
    item = document.querySelector('input');
    item.value = '';
}

// Adiciona um amigo à lista e exibe na tela
function adicionarAmigo(){
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Por favor, insira um nome valido :)");
    }

    listaNome.push(nome);

    let listaNomeTela = document.getElementById('listaAmigos');
    listaNomeTela.innerHTML = listaNomeTela.innerHTML + `<li>${nome}</li>`;

    console.log(listaNome);
    limparCampo();
}

// Limpa a lista exibida na tela
function limparLitstaTela(){
    let listaAux = document.getElementById('listaAmigos');
    listaAux.innerHTML = '';
}

// Sorteia um nome e exibe o resultado
function sortearAmigo(){
    if (listaNome.length < 2) {
        alert('Adiciona pelo menos 2 amigos para realizar o sorterio!');
        return;
    }

    let indexSorteado = gerarAletorio();
    let nomeSorteado = listaNome[indexSorteado];
 
    console.log(listaNome.length);
    console.log(indexSorteado);

    let nomeVencendor = document.getElementById('resultado');
    nomeVencendor.innerHTML = ` O amigo secreto sorteado é: ${nomeSorteado}`;

    limparLitstaTela();
    limparCampo();
}
