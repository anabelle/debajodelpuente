$( document ).ready( function($){
	// Definiciones
	var x = 25;
	var y = 15;

	var palabras = [ 
		// Verticales
		{ palabra: "luz", orientacion: "v", link: "http://google.com/5" },
		{ palabra: "naranjas", orientacion: "v", link: "http://google.com/6" },
		{ palabra: "pez", orientacion: "v", link: "http://google.com/" },
		{ palabra: "lobo", orientacion: "v", link: "http://google.com/2" },
		{ palabra: "compersión", orientacion: "v", link: "https://www.google.com/#q=compersion" },

		// Horizontales
		{ palabra: "perros", orientacion: "h", link: "http://google.com/3" },
		{ palabra: "murcielago", orientacion: "h", link: "http://google.com/4" },
		{ palabra: "nada", orientacion: "h", link: "http://google.com/7" },
		{ palabra: "mar", orientacion: "h", link: "http://google.com/8" },
		{ palabra: "sol", orientacion: "h", link: "http://google.com/9" },
	];

	generarTabla( x, y);
	ubicarPalabras();

	function generarTabla( x, y ){
		var container = $('#words');
		container.append('<table></table>');
		for (var i=0; i<y; i++){	
			container.children('table').append('<tr>');
		}

		$('tr').each(function(){
			for (var i=0; i<x; i++){
				$(this).append('<td></td>');
			}
		});
	}

	function ubicarPalabras(){
		
		//variables
		var largoPalabra = 0;
		var consecutivosLibres = 0;
		var inicioPosibleH = [];

		// iterations
		for ( var i=0; i<palabras.length; i++ ){
			console.log( palabras[i].orientacion );

			largoPalabra = palabras[i].palabra.length;
			
			if( palabras[i].orientacion === "h"){
				console.log( "ubicando h" );
				// cleanup
				$('.posible_h').removeClass('posible_h');


				$( 'tr' ).each( function(){
					$(this).children( 'td:empty' ).each(function(){
						consecutivosLibres = $(this).nextUntil( ':not(:empty)' ).addBack().length	
						if( consecutivosLibres >= largoPalabra ){
							$(this).addClass('posible_h');
						}
						// console.log( consecutivosLibres );
					})
				});

				var inicio_h = shuffle($(".posible_h")).slice(0, 1);
				var prev = null;
				for (var c = 0; c < largoPalabra; c++) {
					if( prev === null ){
						inicio_h.removeClass().text( palabras[i].palabra[c] ).addClass('palabra_'+i).data( 'link', palabras[i].link );
						prev = inicio_h;
					}else{
						prev.next().removeClass().addClass('palabra_'+i).text( palabras[i].palabra[c] ).data( 'link', palabras[i].link );
						prev = prev.next();
					}
					// console.log( palabras[i].palabra[c] );
				}

			}else if( palabras[i].orientacion === "v" ){
				console.log( "ubicando v" ); 	
				var consecutivosLibres = 0;
				var posibleInicio = -1;
				var prevEmpty = false;

				for (var c = 0; c < x; c++) {
					consecutivosLibres = 0;
					// $('.posible_v_'+posibleInicio).text($('.posible_v_'+posibleInicio).length);
					posibleInicio++;

					$("table tr > :nth-child("+(c+1)+")").each(function(i, e){
						if( isEmpty( $(e) ) ){
							if( prevEmpty === false ){
								posibleInicio++;
							}
							consecutivosLibres++;
							prevEmpty = true;
							// $(e).text( consecutivosLibres );
							$(e).addClass('posible_v_'+posibleInicio);
						}else{
							// $('.posible_v_'+posibleInicio).text($('.posible_v_'+posibleInicio).length);

							consecutivosLibres = 0;
							prevEmpty = false;
						}

						if( $('.posible_v_'+posibleInicio).length >= largoPalabra ){
							console.log( largoPalabra + " es menor o igual que " + $('.posible_v_'+posibleInicio).length  );
							$('.posible_v_'+posibleInicio).first().addClass('posible_v');
						}
					});

				}


				if( c === x ){
					// $('.posible_v_'+posibleInicio).text($('.posible_v_'+posibleInicio).length);
				}

				var inicio_v = shuffle($(".posible_v")).slice(0, 1);
				$(".posible_v").removeClass();

				var prev = null;
				for (var c = 0; c < largoPalabra; c++) {
					if( prev === null ){
						inicio_v.text( palabras[i].palabra[c] ).removeClass().addClass('palabra_'+i).data( 'link', palabras[i].link );
						prev = inicio_v;
						console.log( nextV( prev ) );
					}else{
						nextV( prev ).removeClass().addClass('palabra_'+i).text( palabras[i].palabra[c] ).data( 'link', palabras[i].link );
						prev = nextV( prev );
					}
					// console.log( palabras[i].palabra[c] );
				}
			}

		}

		rellenarTabla();	
	}

	function letraAleatoria(){
		var possible = "abcdefghijklmnñopqrstuvwxyz";
		var letra = possible.charAt(Math.floor(Math.random() * possible.length));
		return letra;
	}

	function nextV( element ){
		// First, get the index of the td.
		var cellIndex = element.index();

		// next, get the cell in the next row that has
		// the same index.
		var next = element.closest('tr').next().children().eq(cellIndex);

		return next;
	}

	function rellenarTabla(){
		$('td:empty').each( function(){
			$(this).text( letraAleatoria() );
		});
	}

	function isEmpty( el ){
		return !$.trim(el.html())
	}

	function shuffle(array) {
		var m = array.length, t, i;

		// While there remain elements to shuffle…
		while (m) {

			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

	// INTERACCIONES
	$("[class^='palabra_']").css({
		cursor: 'pointer',
		transition: 'all 0.5s ease-in-out'
	});

	$("[class^='palabra_']").hover(
		function () {
			var groupNumber = $(this).attr('class').split('_')[1];
			$('.palabra_' + groupNumber).css({
				background: 'green',
				color: 'white'
			});; 
		},function() {
			var groupNumber = $(this).attr('class').split('_')[1];
			$('.palabra_' + groupNumber).css({
				background: 'white',
				color: 'black'
			});; 
		}
	);

	$("[class^='palabra_']").on( 'click', function(e){
		window.open( $(this).data('link'), '_blank'); 
	});
});