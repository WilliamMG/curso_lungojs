Lungo.init({
	name: "Mi primera app",
	version: "0.0.1"
});

Lungo.ready(function (){
	/***********************************************
	Mostrar y ocultar menu lateral
	***********************************************/

    // Mostramos el menu al inciar la APP
    Lungo.Aside.show("settings");

    // Ocultamos el menu despues de 3 segundos
    setTimeout(function (){
        Lungo.Aside.hide();
    }, 3000);

    /***********************************************
	Navegar con el metodo Router
	***********************************************/
	$$("#main_section").swipeLeft(function (){
		Lungo.Router.section("sec-2");
	});
	$$("#sec-2").swipeRight(function (){
		// Esta line tambien la podemos cambiar por Lungo.Router.back();
		Lungo.Router.section("main_section");
	});
});