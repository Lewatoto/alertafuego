function obtenerposicion(){navigator.geolocation?navigator.geolocation.getCurrentPosition(reporte):alert("Geolocalización no soportada")}function reporte(o){$("#lat").val(o.coords.latitude),$("#long").val(o.coords.longitude);L.marker([o.coords.latitude,o.coords.longitude]).addTo(map);alert("Reporte realizado con éxito")}var map=L.map("map").setView([15.753,-90.291],8);$(function(){L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',maxZoom:14,minZoom:6}).addTo(map);$.get("datos.csv",function(o){console.log(o[0]);var t=L.geoCsv(o,{titles:["lat","lng","popup"],firstLineTitles:!0,fieldSeparator:","});map.addLayer(t)}),$("#reportar").click(function(){obtenerposicion()})});
