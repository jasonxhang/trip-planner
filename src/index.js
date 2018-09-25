const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb254aGFuZyIsImEiOiJjam1pNjJ5ajIwMW1lM3JwazVyZWE1bW4xIn0.xt5U4JljOeJoD7ArM66mIA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});




const hotel1 = buildMarker("hotels", [40.7653, 73.9760]);
hotel1.addTo(map);

