



// RICEVO PARAMETRO
function funzioneZafferana(colore) {
	// le tonde rappresentano i parametri, la funzione funzioneZafferana dichiara a js di poter ACCETTARE un parametro, chiamato da noi 'colore'
	document.getElementById("sito-body").style.backgroundColor = colore;
}

function funzioneCiao() {
	// function {nome_funzione}() { contenuto funzione }
	//alert("ciao");
	var stringa_funzioneCiao = "ciao";
	document.getElementById("dinamico").innerHTML = stringa_funzioneCiao; // innerHTML contiene il testo dentro il paragrafo
	console.log(stringa_funzioneCiao);
}

function funzioneArrivederci() {
	// console.log() stampa una stringa nella console di chrome
	//alert("arrivederci");
	var arrivederci = "daniele bertani";
	document.getElementById("dinamico").innerHTML = "arrivederci";
	console.log("arrivederci"); // stampo stringa
	console.log(arrivederci); // stampo valore variabile arrivederci
}

function cambiaColore() {
	var coloreLetto = document.getElementById("colore-js").value; // cerco l elemento in base all id e ne chiedo il valore
	console.log("Ho letto il colore: " + coloreLetto);
	document.getElementById("sito-body").style.backgroundColor = coloreLetto; // style contiene tutti gli attributi di stile, nei quali accedo al background-color e gli assegno la variabile coloreLetto dall input color
}
