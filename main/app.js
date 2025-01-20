//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista_amigos = [];

function adicionarAmigo(){
    let caixa_de_texto = document.getElementById("amigo");
    let amigo = caixa_de_texto.value;
    
    if(amigo == ''){
        alert("Erro, você deve digitar um nome")
    }
    else{
        lista_amigos.push(amigo);
        console.log(lista_amigos);
    }
    caixa_de_texto.value = '';
    exibir_lista_tela();
}

function sortearAmigo(){
    let tamanho_lista = lista_amigos.length;

    if(tamanho_lista == 0){
        alert("Lista de Amigos vazia. Por favor, insira alguns nomes.")
    }
    else{
        let indice_sorteado = Math.round(Math.random()*tamanho_lista-1);
        let amigo_sorteado = lista_amigos[indice_sorteado];
        let exibir_resultado = document.getElementById("resultado");
        exibir_resultado.innerHTML = amigo_sorteado;
        lista_amigos.splice(indice_sorteado,1);
        console.log(lista_amigos);
    }
    exibir_lista_tela();
}

function exibir_lista_tela(){
    tela_amigos = document.getElementById("listaAmigos");
    tela_amigos.innerHTML = ""; 

    for (let amigo of lista_amigos){
        let item = document.createElement("li");
        item.textContent = amigo;
        tela_amigos.appendChild(item);
    }
}

