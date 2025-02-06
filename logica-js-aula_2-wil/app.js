//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um Número de 1 a 50";

// simplificação das linhas de 1 a 5;

let listaDeNumerosSorteados = [];
let numeroLimite = 5;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);    //aqui criei a função;
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female" , {rate:1.2});
}

function mensagemInicial(){
    textoNaTela ("h1", "Jogo do Número Secreto");
    textoNaTela ("p", "Escolha um Número de 1 a 5");
}

textoNaTela ("h1", "Jogo do Número Secreto");
textoNaTela ("p", "Escolha um Número de 1 a 5");

function verificarChute(){
    let chute = document.querySelector("input").value;
        
    if (chute == numeroSecreto) {
            textoNaTela("h1", "Você acertou!");
            let palavraTentativa = tentativas > 1? "tentativas":"tentativa";
            let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
            textoNaTela("p", mensagemTentativas);
            document.getElementById("reiniciar").removeAttribute("disabled");
            } else {
            if (chute > numeroSecreto) {
                textoNaTela ("p", " O numero secreto é menor");
            } else {
                textoNaTela ("p", " O Numero secreto é maior");
            }  
            tentativas++;   
            limparCampo();   

        }
        
    console.log ("clicou");
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let qtdElementosDaLista = listaDeNumerosSorteados.length;

    if (qtdElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value="";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}