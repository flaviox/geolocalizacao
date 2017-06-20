$(document).ready(function() {
	if (!!navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(p){
				$('#coordenadas').html('Latitude: ' + p.coords.latitude + ' - ' + 'Longitude: ' + p.coords.longitude);
			},
			function(e){
				switch (e.code){
					case e.PERMISSION_DENIED: 	 $('#coordenadas').html('Você negou a permissão de visualizar a sua localização'); break;
					case e.POSITION_UNAVAILABLE: $('#coordenadas').html('Sua localização não está disponivel.'); break;
					case e.TIMEOUT: $('#coordenadas').html('Tempo esgotado ao tentar obter a localização.'); break;
					default: $('#coordenadas').html('Erro desconhecido ' + e.code + '.'); break;
				}
			});
	} else {
		$('#coordenadas').html('Sem suporte a geolocalização!');
	}
});
	
