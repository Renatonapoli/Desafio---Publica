	var botaoAdicionar = document.querySelector("#adicionar-partida");
	botaoAdicionar.addEventListener("click", function(event){

	});


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

//-- testando possibilidade de mensagem de erro quando digitar número do jogo negativo
//    var erro = validaPartida(jogo); 

//    if (erro.length > 0) {
//      var mensagemErro = document.querySelector("#mensagem-erro");
//       mensagemErro.textContent = erro;
//     return;
//} 
    
    var jogo = form.jogo.value;
    var placar = form.placar.value;
    var minimoTemporada = form.minimoTemporada.value;
    var maximoTemporada = form.maximoTemporada.value;
    var quebraRecordeMin = form.quebraRecordeMin.value;
    var quebraRecordeMax = form.quebraRecordeMax.value;

   	var partidaTr = document.createElement("tr");

 	var jogoTd = document.createElement("td");
 	var placarTd = document.createElement("td");
 	var minimoTemporadaTd = document.createElement("td");
 	var maximoTemporadaTd = document.createElement("td");
 	var quebraRecordMinTd = document.createElement("td");
 	var quebraRecordMaxTd = document.createElement("td");

 	jogoTd.textContent = jogo;
 	placarTd.textContent = placar;
 	minimoTemporadaTd.textContent = minimoTemporada;
 	maximoTemporadaTd.textContent = maximoTemporada;
 	quebraRecordMinTd.textContent = quebraRecordeMin;
 	quebraRecordMaxTd.textContent = quebraRecordeMax;

 	partidaTr.appendChild(jogoTd);
 	partidaTr.appendChild(placarTd);
 	partidaTr.appendChild(minimoTemporadaTd);
 	partidaTr.appendChild(maximoTemporadaTd);
 	partidaTr.appendChild(quebraRecordMinTd);
 	partidaTr.appendChild(quebraRecordMaxTd);

 	var tabela = document.querySelector("#tabela-jogos");

 	tabela.appendChild(partidaTr);
	

});


function validaPartida(partida) {

    if (jogoEhvalido(partida.jogo))  {
        return "";
    } else {
        return "Jogo inválido";
    }
}

