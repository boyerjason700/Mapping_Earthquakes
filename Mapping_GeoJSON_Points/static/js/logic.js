// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  // pointToLayer: function(feature, latlng) {
  //   console.log(feature);
  //   return L.marker(latlng)
  //   .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
  }

}).addTo(map);


// Coordinates for each point to be used in the line.
// let line = [
//     [37.7749, -122.4194],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
//   ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     weight: 4,
//     dashArray: '20, 20',
//     opacity: 0.5

//   }).addTo(map);


//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// An array containing each city's location, state, and population.
// Get data from cities.js
// let cityData = cities;
// console.log(cityData)


// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//  console.log(city)
//  L.circleMarker(city.location, {
//      radius: city.population/200000,
//      color: "orange",
//      fillColor: "orange"
//  })
//  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(map);
// });


// // Add circle to map
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
//  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: apiKey
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// mapbox://styles/mapbox/navigation-night-v1