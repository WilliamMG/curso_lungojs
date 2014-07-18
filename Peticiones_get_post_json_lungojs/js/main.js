Lungo.init({
	name: "App Programacion Azteca",
	version: "0.0.1"
});

Lungo.ready(function (){
	// Configuracion de conexion asincrona
	Lungo.Service.async = true;
	Lungo.Service.Settings.error = function (type, xhr){
		console.log("Error al realizar la peticion; tipo="+type);
	}
	Lungo.Service.Settings.crossDomain = false;
	Lungo.Service.Settings.timeout = 0;

	// Peticion Get
	var url = "http://demos.programandowebs.com/appweb.php";
	var data = {id:10,limit:50};
	var respuesta = function (data){
		//data = JSON.parse(data);
		for(var json in data){
			document.getElementById("json").innerHTML += "<li>"+data[json]["id"]+ ": "+data[json]["status"]+"</li>"
		}
	}

	Lungo.Service.json(url, data, respuesta, "Json");
});