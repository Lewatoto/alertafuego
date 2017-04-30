var map = L.map('map').setView([15.753, -90.291], 8);

$(function(){
  // initialize the map
  //var map = L.map('map').setView([15.753, -90.291], 8);

  // load a tile layer
  var capa = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 13,
      minZoom: 8
  }).addTo(map);

/*
  var kmlLayer = new L.KML('https://lewatoto.github.io/alertafuego/MODIS_C6_Central_America_24h.kml', {async: true});
    kmlLayer.on("loaded", function(e) {
      console.log(e);
    //map.fitBounds(e.target.getBounds());
    });
  map.addLayer(kmlLayer);

*/
  /*
  $.ajax ({
    type:'GET',
    dataType:'text',
    url:'https://lewatoto.github.io/alertafuego/MODIS_C6_Central_America_24h.csv',
    error: function() {
      alert('No se pudieron cargar los datos');
    },
    success: function(csv) {
      var kmlLayer = new L.KML(csv, {async: true});
        kmlLayer.on("loaded", function(e) {
        map.fitBounds(e.target.getBounds());
        });
        map.addLayer(kmlLayer);
    }
  });*/

  $("#reportar").click(function(){
    alert("reporte con éxito");
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
};
