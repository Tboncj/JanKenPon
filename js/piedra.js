
var ganar = 0;
var perder = 0;
var empate = 0;
var frase;

function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random()*(maximo - minimo + 1)+ minimo);
	return numero;
}

function jugar(opcionUsuario){

	var opcionSistema = aleatorio(0,4); 

	// var valor = [ [0,2], [0,4], [1,3], [1,4], [2,3] ];
	var valor = [ [2,3],[0,4],[1,3],[1,4],[0,2]];

	var respuesta = "Perdiste ";
	
	if (opcionUsuario == opcionSistema) {
		respuesta = "Empate ";
		empate++;
		} else if(valor[opcionUsuario].indexOf(opcionSistema) > -1) {
			respuesta = "Ganaste!! ";
			ganar++;
			} else {
			perder++;
		}

	var contador= ganar-perder;
	if(contador==0){
		
		frase="Empatados!! esto esta reñido";

		}else if(contador>0){
		
			frase="Vas ganando!!  ";
		
		}else{
		
		frase = "perdiste ante una máquina... uuh! ";
	}

	var txtMarcador = "Marcador";
	var txtDetalle = "Ganados: "+ ganar+" <br>Perdidos: "+perder+" <br>Empates: "+ empate + "<br> "+ frase;
	document.getElementById('titulo').innerHTML = txtMarcador;
	document.getElementById('contador').innerHTML = txtDetalle;
	resultado(opcionUsuario, opcionSistema, respuesta);
}

function resultado(opcionUsuario, opcionSistema, respuesta){

	var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
	var usuario = opciones[opcionUsuario];
	var sitema = opciones[opcionSistema];
	var src = 'img/'+ sitema +'.png';	
	var text = '<p>'+usuario+' VS '+sitema+'</p>' +'<img src="img/'+usuario+'.png"/>'+'<span>vs</span>'+'<img src="img/'+sitema+'.png" /><br>';

	
	document.getElementById('resultado').innerHTML = respuesta;
	document.getElementById('combate').innerHTML = text;
}

	