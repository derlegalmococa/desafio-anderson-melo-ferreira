//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//let listaDeNumerosSorteados = [];
let amigos = [];
let selecao=0;

function atualizarLista(){
    // Cria um novo item de lista
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    //while (lista.firstChild) {
   //     lista.removeChild(lista.firstChild);
   // } 
    //Verifico o vetor amigos e se estiver com valores vou percorrer e Add na Lista
    if (amigos.length>0) {
       amigos.forEach(function (nomeA) {
        const novoItem = document.createElement('li');
        novoItem.textContent = nomeA; 
        // Adiciona o item à lista
        lista.appendChild(novoItem);   

       } );
    }   
    

    
}

function adicionarAmigo(){
    let nome = document.querySelector('input');
    if (nome.value==='') {
        window.alert('Por favor, insira um nome.');
        } else {
    //ADICIONAMOS AO VETOR
    amigos.push(nome.value);
    
    // Cria um novo item de lista
    atualizarLista();
    //LIMPAMOS O CAMPO NOME
    nome.value='';
    }
}


function sortearAmigo() {
    //VERIFICA-SE SE O VETOR TEM VALORES -  CASO NÃO TENHA, EXIBE-SE A MENSAGEM PARA
    if (amigos.length===0) {
        window.alert('Lista Vazia! Favor Inserir Nomes!!!');
    }
    else {
    let totalNomes = amigos.length;
    let nomeEscolhido = amigos [parseInt(Math.random() * totalNomes)];
   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML="";
     selecao+=1; 
    const itemResultado = document.createElement('li');
    itemResultado.innerHTML ='O Amigo secreto é: '+ nomeEscolhido;

    // Adiciona o item à lista
    resultado.appendChild(itemResultado); 
    // REDEFININDO O CAMPO DE TEXTO PARA VAZIO/LIMPANDO A LISTA DE AMIGOS
    let caixat = document.querySelector('input');
     caixat.value = '';
    let lista2 = document.getElementById('listaAmigos');
    while (lista2.firstChild) {
        lista2.removeChild(lista2.firstChild);
    }
    //Esvazio a Lista
    amigos=[]; 
    }
}












