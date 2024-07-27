let listaDeNumerossortiados = [""];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirtextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto,"Brazilian Portuguese Female" ,{rate: 1.2});
}
function exibirMensagem(texto){
    exibirtextoNaTela("h1","jogo do número secreto");
    exibirtextoNaTela("p","escolha um número de 1 a 10 ");
}
exibirMensagem();



function verificarChute(){
    let chute = document.querySelector("input").value
    
 if (chute==numeroSecreto){
    exibirtextoNaTela('p',"você ACERTOU!!",true);
    let palavratentativa = tentativa> 1 ? 'tentativas' : 'tentativa';
    let mensagemtentativas = `você descobriu o número secreto com ${tentativa} ${palavratentativa}`;
    exibirtextoNaTela('p',mensagemtentativas,true);
    document.getElementById("reiniciar").removeAttribute("disabled");
 }else {
    if(chute<numeroSecreto){
    exibirtextoNaTela('p',`número é maior que ${chute}`,true );
    } else{
        exibirtextoNaTela('p',`número secreto é menor que ${chute}`,true)
    }
    tentativa++;
    limparCampo();
 }
 }

function gerarNumeroAleatorio() {
    let numeroescolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerossortiados.length
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerossortiados = [""];
    }

    if (listaDeNumerossortiados.includes(numeroescolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerossortiados.push(numeroescolhido);
        return numeroescolhido;
    }
    
    
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
} 
function reiniciarjogo(){
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1; 
    exibirMensagem();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
reiniciarjogo();
exibirMensagem();
document.getElementById("reiniciar").setAttribute("disabled",true);

function correçãodepalavras(tentativa) {
    let palavras = ['zero', 'uma','duas', 'Três', 'quatro', 'quinco', 'seis', 'sete', 'oito', 'nove', 'dez'  ];
    return palavras[numero] || numero;
}