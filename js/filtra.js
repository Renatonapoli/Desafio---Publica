var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var jogos = document.querySelectorAll(".partida");

    if (this.value.length > 0) {
        for (var i = 0; i < jogos.length ; i++) {
            var partida = jogos[i];
            var tdjogo = partida.querySelector(".info-jogo");
            var jogo = tdjogo.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(jogo)) {
                partida.classList.add("invisivel");
            } else {
                partida.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < jogos.length; i++) {
            var partida = jogos[i];
            partida.classList.remove("invisivel");
        }
    }
});