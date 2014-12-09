// JavaScript Document


$(document).ready(function(e){
	//watchID se refiere a la aceleracion 'actual'
	//
	var watchID = null;
	
	document.addEventListener("deviceready", Dispositivo_Listo,false);
	

//Cuando esta listo el dispositivo
//
function Dispositivo_Listo(){
	Comienza();
}
//Empieza la 'observacion' de la aceleracion
//
function Comienza(){
	
	//Actualiza la aceleracion cada 2 segundos
	//
	var opciones = {frequency:2000};
	
	watcID = navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
	navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
}


//Detiene la 'observacion' de la aceleracion
//
function Detente() {
	if (wachID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

//Correcto: Toma una captura de la aceleracion
//
function Correcto(acceleration) {
	var element = document.getElementById('acelerometro');
	
	element.innerHTML = 'Aceleracion en X: ' + aceleration.x + '<br />' +
	'Aceleracion en Y: ' + aceleration.y + '<br />' +
	'Aceleracion en Z: ' + aceleration.z + '<br />' +
	'Intervalo: '        + '<br />';
}

//Error:Falla al obtener la aceleracion
//
function Error() {
	alert('Error!');
}
//Existo al localizar

function Localizar(posicion) {
	var element = document.getElementById('geolocalizacion');
	element.innerHTML = 'Latitud: '    + posicion.coords.latitude   + '<br />' +
	'Longitud: '    + posicion.coords.longitude   + '<br />' +
	'Altitud: '    + posicion.coords.altitude   + '<br />' +
	'Precision: '    + posicion.coords.accuracy   + '<br />' +
	'Presion de Altitud: '    + posicion.coords.altitudeAccuracy  + '<br />' +
	'Direccion: '    + posicion.coords.coords.heading   + '<br />' +
	'Velocidad: '    + posicion.coords.speed  + '<br />' +
	'Intervalo: '    + posicion.coords.timestamp   + '<br />';
  }
//Error en la geolocalizacion
//
function ErrorLocalizacion(error) {
	alert('codigo: '  + error.code  + '\n' +
	'mensaje: ' + error.message + '\n');
}
});//documento ready