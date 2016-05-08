

$(function(){

	// Asignamos los objetos JQuery a las variables
	
	var num 		= $("#num");
	var sumar 		= $("#btn1");
	var restar 		= $("#btn2");
	var multiplicar = $("#btn3");
	var dividir 	= $("#btn4");
	var potencia 	= $("#btn5");
	var cuadrado 	= $("#btn6");
	var inverso 	= $("#btn7");
	var raiz 		= $("#btn8");
	var entero 		= $("#btn9");
	var potencia_n 	= $("#btn10");
	var factor	 	= $("#btn11");
	var sumatorio 	= $("#btn12");
	var producto 	= $("#btn13");

	var resultado 	= $("#igual");

	// Declaramos una variable para guardar el valor acumulado y otra para recoger la operación a realizar.
	var acc;
	var op;


	num.on('click', function() {
		num.val("");
		/* Vacia el cajetin al hacer click */
	});

	// OPERACIONES BINARIAS

	sumar.on('click', function() {
		
		acc = num.val(); op= "sumar"; return acc, op;		
		/* Carga el primer numero y espera al igual para sumar el segundo */
	});

	restar.on('click', function() {
		
		acc = num.val(); op= "restar"; return acc, op;		
		/* Carga el primer numero y espera al igual para restar el segundo */
	});

	multiplicar.on('click', function() {
		
		acc = num.val(); op= "multiplicar"; return acc, op;		
		/* Carga el primer numero y espera al igual para multiplicar por el segundo */
	});

	dividir.on('click', function() {
		
		acc = num.val(); op= "dividir"; return acc, op;		
		/* Carga el primer numero y espera al igual para dividir entre el segundo */
	});

	potencia.on('click', function() {
		
		acc = num.val(); op= "potencia"; return acc, op;		
		/* Carga el primer numero y espera al igual elevarlo a la potencia del segundo */
	});

	// OPERACIONES UNITARIAS
	 
	cuadrado.on('click', function() {
		
		return num.val(+num.val() * +num.val());
		/* Calcula el cuadrado del número introducido */
	});

	inverso.on('click', function() {
		
		return num.val(1/+num.val());
		/* Calcula el valor de 1/número introducido */
	});

	raiz.on('click', function() {
		
		return num.val(Math.sqrt(+num.val()));
		/* Calcula la raiz cuadrada del número introducido */
	});

	entero.on('click', function() {
		
		if (num.val()>0) { num.val(Math.floor(num.val()));}
        else {num.val(-Math.ceil(num.val()));}

		/* Extrae la parte entera de un número, ya sea positivo o negativo*/
	});

	potencia_n.on('click', function() {
		
		num.val(Math.pow(2, +num.val()));
		/* Calcula la potencia de 2 elevado al número dado*/
	});

	factor.on('click', function() {
		res = 1;
		for (var i = num.val(); i > 0; i--) {
			res=res*i;
		}

		return num.val(res);

		/* Calcula el factorial del número dado*/
	});

	sumatorio.on('click', function() {
		
		var lista = num.val().split(","); //convierte la lista en un array 
		var acc = 0;

		for (var i = lista.length-1; i >= 0; i--) {
			
			acc= acc + (+lista[i]);
			// Suma los elementos del array y almacena el resultado en acc
		}
		
		return num.val(acc);
	});

	producto.on('click', function() {
		
		var lista = num.val().split(","); //convierte la lista en un array 
		var acc = 1;

		for (var i = lista.length-1; i >= 0; i--) {
			
			var acc= acc * (+lista[i]);
			// Multiplica los elementos del array y almacena el resultado en acc
		}
		
		return num.val(acc);
		
	});



	resultado.on('click', function() {
		
		if (op==="sumar") 		{	return num.val(+acc + +num.val());}
		if (op==="restar") 		{	return num.val(+acc - +num.val());}
		if (op==="multiplicar") {	return num.val(+acc * +num.val());}
		if (op==="dividir") 	{	return num.val(+acc / +num.val());}
		if (op==="potencia") 	{	return num.val(Math.pow(+acc, +num.val()));}
		}); 


	// *** MEMORIA ***

	$( num ).draggable({ revert: "valid" });
	
    $( "#memoria" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

})
