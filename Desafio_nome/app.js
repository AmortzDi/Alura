//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNome = [];
let listaNomesSorteados = [];

function gerarAletorio(){

    let numSort = parseInt(Math.random() * listaNome.length );

    if(listaNomesSorteados.includes(numSort)){
        return gerarAletorio();
    }else{
        listaNomesSorteados.push(numSort);
        return numSort;
    }

}

function limparCampo(){
    item = document.querySelector('input');
    item.value = '';
}

function destativarBotao(){
    document.getElementById
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;

    listaNome.push(nome);
    console.log(listaNome);
    limparCampo();

}
function sortearAmigo(){
    let indexSorteado = gerarAletorio();
    let nomeSorteado = listaNome[indexSorteado];

    alert(nomeSorteado);
   // if(listaNome.length == 1000)
   
    console.log(listaNome.length);
    console.log(indexSorteado);

    
}