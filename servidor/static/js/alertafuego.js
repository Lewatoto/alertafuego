$(function(){
  // initialize the map
  var map = L.map('map').setView([15.753, -90.291], 8);

  // load a tile layer
  var capa = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 13,
      minZoom: 8
  });
  map.addLayer(capa);

  var kmlLayer = new L.KML('https://lewatoto.github.io/alertafuego/MODIS_C6_Central_America_24h.kml', {async: true});
    kmlLayer.on("loaded", function(e) {
      console.log(e);
    //map.fitBounds(e.target.getBounds());
    });
  map.addLayer(kmlLayer);

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
});
