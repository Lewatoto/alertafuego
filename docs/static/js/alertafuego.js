var map = L.map('map').setView([15.753, -90.291], 8);

$(function(){
  // initialize the map
  //var map = L.map('map').setView([15.753, -90.291], 8);

  // load a tile layer
  var capa = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 14,
      minZoom: 1
  }).addTo(map);

/*
  var kmlLayer = new L.KML('https://lewatoto.github.io/alertafuego/MODIS_C6_Central_America_24h.kml', {async: true});
    kmlLayer.on("loaded", function(e) {
      console.log("SI");
    //map.fitBounds(e.target.getBounds());
    });
  map.addLayer(kmlLayer);*/


/*
  $.ajax ({
    type:'GET',
    dataType:'text/plain',
    url:"/csv",
    error: function() {
      alert('No se pudieron cargar los datos');
    },
    success: function(csv) {
      var geoLayer = L.geoCsv(csv, {firstLineTitles: true, fieldSeparator: ','});
      map.addLayer(map);
    }
  });*/

  var incendios = L.geoCsv(null, {
    titles: ['lat', 'lng', 'popup'],
    firstLineTitles: true,
    fieldSeparator: ',',
    onEachFeature: function (feature, layer){
      var popup = '';
      for (var clave in feature.properties){
        var title = incendios.getPropertyTitle(clave);
        popup += '<b>'+'Fecha'+'</b><br />'+feature.properties[clave]+'<br /><br />';
      }
      layer.bindPopup(popup);
    }
  });

  $.get('datos.csv', function(csv) {
    //console.log(csvContents[0]);
    //var geoLayer = L.geoCsv(csvContents, {titles: ['lat', 'lng', 'popup'],firstLineTitles: true, fieldSeparator: ','});
    //map.addLayer(geoLayer);
    var cluster = new L.MarkerClusterGroup();
		incendios.addData(csv);
		cluster.addLayer(incendios);
		map.addLayer(cluster);
		map.fitBounds(cluster.getBounds());
  });

  $("#reportar").click(function(){
    obtenerposicion();

  });
});

function obtenerposicion(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(reporte);
  } else {
    alert("Geolocalización no soportada");
  }
}

function reporte(posicion){
  $('#lat').val(posicion.coords.latitude);
  $('#long').val(posicion.coords.longitude);
  var marker = L.marker([posicion.coords.latitude,posicion.coords.longitude]).addTo(map);
  alert("Reporte realizado con éxito");
};
