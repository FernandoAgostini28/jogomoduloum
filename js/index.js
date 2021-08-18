
// buscar elementopara ativar botão


/// variavel  para salvar o login
var btn1 = document.getElementById("btn-1");
btn1.disabled = true;
var btn2 = document.getElementById("btn-2");
btn2.disabled = true;
var btn3 = document.getElementById("btn-3");
btn3.disabled = true;

var escolhaJogador;
var email = "";
var confEmail = '';
var fase = 0;
var vida = 3;
var porta;
var num;



// cadastra e-mail ok
function cadastrar() {
    email = prompt("cadastre seu email:")
    if (email !== '') {
        alert("parabens email cadastrado", email)
    } else {
        alert("campo vazio cadastre novamente")
    }

}

// inicia o jogo se o email for correto ok

function iniciar() {
    
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
            console.log("disable", btn1.disabled)
    confEmail = prompt("confirme seu email:");
    var contador = 3
    while (email !== confEmail && contador > 0) {
        alert(`Voce digitou o email incorreto: voce tem ${contador--} tentaivas`)
        confEmail = prompt("confirme seu email:")

        if (email === confEmail) {
            
            //buttonb.disabled = false;
            escolheJogador()
        }
        else {

            alert(`fazer novo cadstro`)

        }
    }

}

//=======================================================================================

// função para escolher um jogador
function escolheJogador(num) {
    escolhaJogador = num
    //escolhaJogador = prompt(" escolha 0 para Luigi, escolha 1 para Mario, escolha 2 para Princesa")
    if (escolhaJogador === 1) {
        alert("bem vindo Luigi")
        faseUm()

    } else if (escolhaJogador === 2) {
        alert("bem vindo Mario")
        faseUm()

    } else if (escolhaJogador === 3) {
        alert("bem vinda Princesa")
        faseUm()

    } else {
        alert("voce digitou un numero invalido")
    } return
}


function faseEscolha() {
    fase = prompt("escolha a fase : 1; 2; 3")
}

function faseUm() {
    alert("Bem vindo a fase 01")
    var continua = true;
    var portaFase1 = prompt("escolha o quadradro: 1 para verde; 2 para rosa; 3 para amarelo")
    while (continua) {
    
    if (portaFase1 === "1") {
        alert("voce achou uma tartaruga perdeu 01 vida")
        portaFase1 = prompt("escolha o quadradro: 2 para rosa; 3 para amarelo")
        continua = true;
    }
    else if (portaFase1 === "2") {
        alert(" O dragão de terra te matou Game Over")
        continua = false;

    }
    else if (portaFase1 === "3") {
        alert("voce venceu o dragão de terra parabens")
        faseDois()
        continua = false;
        }
    }
}

function faseDois() {
    alert("Bem vindo a fase 02")
    var continua = true    
    var portaFase2 = prompt("escolha o quadradro: 1 para verde; 2 para rosa; 3 para amarelo")
    while (continua) {
        
        if (portaFase2 === "1") {
            alert("voce achou um cogumelo ganhou 01 vida")
            portaFase2 = prompt("escolha o quadradro: 2 para rosa; 3 para amarelo")
            continua = true;
        }
        else if (portaFase2 === "2") {
            alert("voce venceu o dragão de fogo parabens")
            faseTres()
            continua = false;
        }
        else if (portaFase2 === "3") {
            alert(" O dragão de fogo te matou Game Over")
            continua = false;
        }

    }
}
function faseTres() {
    alert("Bem vindo a fase 03")
    var continua = true
    var portaFase3 = prompt("escolha o quadradro: 1 para verde; 2 para rosa; 3 para amarelo")
    
    while (continua) {
    if (portaFase === "1") {
        alert(" O morreu no ultimo dragão 'Game Over")
        continua = false;
    }
    if (portaFase === "2") {
        alert("voce venceu o ultimo dragão  e libertou seu povo")
        continua = false;
    }
    if (portaFase === "3") {
        alert("voce achou uma flor de fogo e ficou com super poderes")
        portaFase2 = prompt("escolha o quadradro: 2 para rosa; 1 para amarelo")
        continua = true;
        }
    }
}



