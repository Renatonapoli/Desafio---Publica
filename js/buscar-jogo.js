var botaoAdicionar = document.querySelector("#buscar-partidas");

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-tabelaJogos.herokuapp.com/Jogos");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;

        var partidas = JSON.parse(resposta);

        pacientes.forEach(function(partida) {
            adicionaPartidaNaTabela(partida);
        });
    });

    xhr.send();
});
