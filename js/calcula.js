var jogos = document.querySelectorAll(".partida");

for (var i = 0; i < jogos.length; i++) {

    var partida = jogos[i];

    var tdpartida = partida.querySelector(".info-jogo");
    var jogo = tdpartida.textContent;

    var jogoEhValido = validaPartida(partida);    // true ou false

    if (!jogoEhValido) {
        console.log("Jogo inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Jogo inválido";
        partida.classList.add("partida-inválida");
    }

    }
    
function validajogo(jogo){
    if(jogo >= 1 && jogo < 1000){
        return true;
    }else{
        return "Jogo inválido";
    }
}