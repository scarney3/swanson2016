var map = L.map('map').setView([39.061824, -86.341048], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'agiii.o6bb24ek',
  accessToken: 'pk.eyJ1IjoiYWdpaWkiLCJhIjoiY2loMml1eHRuMHh0N3c3bTVrY29tbWdtbiJ9.N5VuPGDJRM0Hr5dmOyqpEA'
}).addTo(map);

var marker = L.marker([39.061824, -86.341048]).addTo(map);

var circle = L.circle([39.061824, -86.341048], 100, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var popup = L.popup()
  .setLatLng([39.061824, -86.341048])
  .setContent('<b>Ron\'s Cabin</b><br>Ron Swanson 2016')
  .openOn(map);

var marker = L.marker([41.591, -93.608]).addTo(map);

var circle = L.circle([41.591, -93.608], 100, {
  color: 'blue',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var marker = L.marker([43.2081, -71.5376]).addTo(map);

var circle = L.circle([43.2081, -71.5376], 100, {
  color: 'green',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var marker = L.marker([36.16892253622745, -115.16693115234375]).addTo(map);

var circle = L.circle([36.16892253622745, -115.16693115234375], 100, {
  color: 'yellow',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var marker = L.marker([34.0007, -81.0348]).addTo(map);

var circle = L.circle([34.0007, -81.0348], 100, {
  color: 'orange',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var marker = L.marker([44.257, -72.6079]).addTo(map);

var circle = L.circle([44.257, -72.6079], 100, {
  color: 'turqoise',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
  popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
