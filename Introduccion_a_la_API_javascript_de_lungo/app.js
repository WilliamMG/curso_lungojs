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
	  /***********************************************
	Notificaciones en lungo
	***********************************************/
	// Notificacion success
	Lungo.Notificacion.success(
    	'Aqui va el titulo de la notificacion',
	    'Aqui va la descripcion de la notificacion',
	    'check', // Icono que se muestra en la notificacion
	    3, // Duracion en pantalla de la notificacion
	    afterNotification // [Opcional] Funcion que se dispara despues del tiempo
	);
	var afterNotification = Function (){
    	// Hacemos algo
	}

	// Notificacion error
	Lungo.Notificacion.error(
	    'Aqui va el titulo de la notificacion',
	    'Aqui va la descripcion de la notificacion',
	    'remove',
	    3,
	    afterNotification
	);
	var afterNotification = Function (){
    	// Hacemos algo
	}

	// Notificacion confirm
	Lungo.Notification.confirm({
	    icon: 'user',
	    title: 'Titulo de la confirmacion',
	    description: 'Descripcion de la confirmacion',
	    accept: {
	        icon: 'check',
	        label: 'Aceptar',
	        callback: function () {
	            alert('Si');
	        }
	    },
	    cancel: {
	        icon: 'remove',
	        label: 'cancelar',
	        callback: function () {
	            alert('No');
	        }
	    }
	});

	// Notificacion html
	Lungo.Notificacion.html('<h1>Hello Word</h1>', 'Cerrar');

	// Mostrar pantalla cargando
	Lungo.Notification.show();
});