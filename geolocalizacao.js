$(document).ready(function() {
	if (!!navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(p){
				$('#coordenadas').html('Latitude: ' + p.coords.latitude + ' - ' + 'Longitude: ' + p.coords.longitude);
				var urlMapa = 'https://maps.googleapis.com/maps/api/staticmap?center=' + p.coords.latitude + ',' + p.coords.longitude + '&size=640x480&zoom=15&mapType=roadmap&markers=color:blue|' + p.coords.latitude + ',' + p.coords.longitude;
				$('#mapa').html("<img src='" + urlMapa + "' />");
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
	
