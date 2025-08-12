# Amigo Secreto 🎁

Este é um projeto de uma aplicação web simples para realizar o sorteio de um "Amigo Secreto". O principal objetivo do desenvolvimento foi praticar e fortalecer habilidades em lógica de programação com JavaScript, manipulação de elementos HTML (DOM) e estilização com CSS.

## 📜 Sobre o Projeto

A aplicação permite que o usuário adicione uma lista de participantes e, com um clique, sorteie um nome aleatoriamente. O resultado é exibido de forma clara na tela, proporcionando uma experiência de sorteio rápida e divertida.

## ✨ Funcionalidades

* **Adicionar Participantes:** Campo de texto para inserir os nomes dos amigos.
* **Listagem Dinâmica:** A lista de participantes é atualizada na tela em tempo real.
* **Sorteio:** Um botão realiza o sorteio de um único nome da lista.
* **Exibição do Resultado:** O nome do amigo sorteado é exibido com destaque.
* **Limpeza Automática:** A lista de nomes some da tela após o sorteio para focar no resultado.
* **Validações:**
    * Impede a adição de nomes vazios.
    * Exige um mínimo de dois participantes para realizar o sorteio.

## 🚀 Como Usar

1.  Clone ou baixe os arquivos do projeto.
2.  Abra o arquivo `index.html` em qualquer navegador de internet.
3.  Digite o nome do primeiro participante no campo "Digite um nome" e clique em **Adicionar**.
4.  Repita o passo 3 para todos os amigos que participarão do sorteio.
5.  Quando todos os nomes estiverem na lista, clique no botão **Sortear amigo**.
6.  O nome do amigo sorteado será exibido em verde na tela.

## 💻 Tecnologias Utilizadas

* **HTML5:** Para a estrutura da página.
* **CSS3:** Para a estilização e o design responsivo.
* **JavaScript (Vanilla JS):** Para toda a lógica de programação e interatividade.

## 📝 Lógica do Algoritmo (`app.js`)

O coração da aplicação está no arquivo `app.js`, que contém a lógica para adicionar, sortear e exibir os nomes.

### Variáveis Globais
* `listaNome`: Um array (`[]`) que armazena a lista de nomes de todos os participantes adicionados.
* `listaNomesSorteados`: Um array que guarda os índices já sorteados para evitar repetições (embora na implementação atual apenas um nome seja sorteado, a estrutura está pronta para sorteios mais complexos).

### Funções Principais

#### `adicionarAmigo()`
* Captura o nome digitado pelo usuário no campo de input.
* Verifica se o campo não está vazio.
* Adiciona o nome ao array `listaNome` usando `push()`.
* Atualiza a lista visível na tela (`<ul id="listaAmigos">`) para mostrar o nome recém-adicionado.
* Chama a função `limparCampo()` para apagar o texto do input, deixando-o pronto para a próxima inserção.

#### `sortearAmigo()`
* Primeiro, verifica se o `listaNome.length` é menor que 2. Se for, exibe um alerta e interrompe a função.
* Chama a função `gerarAletorio()` para obter um índice numérico aleatório e único.
* Usa o índice retornado para encontrar o `nomeSorteado` dentro do array `listaNome`.
* Seleciona o elemento de resultado (`<ul id="resultado">`) e insere o texto com o nome do vencedor usando `innerHTML`.
* Seleciona a lista de amigos na tela (`<ul id="listaAmigos">`) e limpa seu conteúdo (`innerHTML = ''`) para fazê-la desaparecer.

#### `gerarAletorio()`
* Gera um número inteiro aleatório entre 0 e o tamanho do array `listaNome`.
* Verifica se o número gerado já existe no array `listaNomesSorteados`.
* Se já existir, a função chama a si mesma (recursividade) para gerar um novo número.
* Se for um número inédito, ele é adicionado ao `listaNomesSorteados` e retornado.
