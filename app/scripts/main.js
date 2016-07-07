$( document ).ready( function($){
	// Definiciones
	var x = 15;
	var y = 15;

	var palabras = [ 
		// Verticales
		{ palabra: 'Bitácora', orientacion: 'v', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' , link: 'http://bitacora.debajodelpuente.com/', img: 'http://placehold.it/280x180' },
		{ palabra: 'PuentePalabra', orientacion: 'v', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' , link: 'http://palabras.debajodelpuente.com/', img: 'http://placehold.it/280x180' },
		{ palabra: 'Rio', orientacion: 'v', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' , link: 'http://rio.debajodelpuente.com/', img: 'http://placehold.it/280x180' },
		{ palabra: 'Caricultura', orientacion: 'v', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' , link: 'http://caricultura.debajodelpuente.com/', img: 'http://placehold.it/280x180' },

		// Horizontales
		{ palabra: 'ZapatoLab', orientacion: 'h', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' , link: 'http://zapatolab.debajodelpuente.com/', img: 'http://placehold.it/280x180' },
		{ palabra: 'Radio', orientacion: 'h', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' , link: 'http://radio.debajodelpuente.com/', img: 'http://placehold.it/280x180' }
	];

	generarTabla( x, y);
	ubicarPalabras();
	generarCajas();

	function generarCajas(){
		for (var i = palabras.length - 1; i >= 0; i--) {
			$('#reticula .row').append('<div class="col-xs-12 col-sm-6 col-md-3 proyecto"><div class="efecto"><img src="'+ palabras[i].img +'"><div class="overlay"><a class="verproyecto" href="'+ palabras[i].link +'">ver proyecto</a></div></div><a href="'+ palabras[i].link +'"><h4>'+ palabras[i].palabra +'</h4><p>'+ palabras[i].desc +'</p></a></div>');
			// palabras[i]
		}
	}

	function resaltarpalabras(){
		var i = 0;
		function f() {
			if( i >= palabras.length ) {
			  i = 0;
			  var prevClass = '.palabra_' + 9;
			}else{
			  var prevClass = '.palabra_' + ([i] - 1);
			}
			var currentClass = '.palabra_' + [i];
			i += 1;

			$( currentClass ).css('background', 'orange');
			setTimeout(function(){ $( currentClass ).css('background', 'white') }, 500 );
			// $( prevClass ).css('background', 'white');

			setTimeout(f, 3000 );
		}
		f();
	}

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
			
			if( palabras[i].orientacion === 'h'){
				console.log( 'ubicando h' );
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

				var inicio_h = shuffle($('.posible_h')).slice(0, 1);
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

			}else if( palabras[i].orientacion === 'v' ){
				console.log( 'ubicando v' ); 	
				var consecutivosLibres = 0;
				var posibleInicio = -1;
				var prevEmpty = false;

				for (var c = 0; c < x; c++) {
					consecutivosLibres = 0;
					// $('.posible_v_'+posibleInicio).text($('.posible_v_'+posibleInicio).length);
					posibleInicio++;

					$('table tr > :nth-child('+(c+1)+')').each(function(i, e){
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
							// console.log( largoPalabra + ' es menor o igual que ' + $('.posible_v_'+posibleInicio).length  );
							$('.posible_v_'+posibleInicio).first().addClass('posible_v');
						}
					});

				}


				if( c === x ){
					// $('.posible_v_'+posibleInicio).text($('.posible_v_'+posibleInicio).length);
				}

				var inicio_v = shuffle($('.posible_v')).slice(0, 1);
				$('.posible_v').removeClass();

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
		setTimeout( resaltarpalabras, 2000);
	}

	function letraAleatoria(){
		var possible = 'abcdefghijklmnñopqrstuvwxyz';
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
	$('[class^=\'palabra_\']').css({
		cursor: 'pointer',
		transition: 'all 0.5s ease-in-out'
	});

	$('[class^=\'palabra_\']').hover(
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

	$('[class^=\'palabra_\']').on( 'click', function(e){
		window.open( $(this).data('link'), '_blank'); 
	});

    // cambio de vista
	$(".vista_s").on( "click", function() {
		$('#letras').fadeOut("fast");
		$('#reticula').fadeIn('slow');
	});

	$(".vista_r").on( "click", function() {
		$('#reticula').fadeOut("fast");
		$('#letras').slideDown();
	});

	// mostrar información
    $("div.info").click(function(){
     $(this).next("#informacion").slideToggle("slow,");
    });


});