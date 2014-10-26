Lungo.init({
	name: "Mi primera app",
	version: "0.0.1"
});

Lungo.ready(function (){
	/***********************************************
	Mostrar un elemento count
	***********************************************/
	setTimeout(function (){
		Lungo.Element.count('#contador',3);
	},3000);
	/***********************************************
	Ocultar el elemento count
	***********************************************/
	$$('#contador').tap(function (){
		Lungo.Element.count('#contador',0)
	});
	/***********************************************
	Mostramos el elemento loading
	***********************************************/
	$$('#main_section').swipeDown(function (){
		Lungo.Element.loading('#loading','blue');
		setTimeout(function (){
			$$('#loading').hide();
		}, 3000);
	});
});