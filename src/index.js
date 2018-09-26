const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb254aGFuZyIsImEiOiJjam1pNjJ5ajIwMW1lM3JwazVyZWE1bW4xIn0.xt5U4JljOeJoD7ArM66mIA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-73.976, 40.765],
  zoom: 11, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});




const ritzCarlton = buildMarker("ritz-carlton", "hotels", [-73.976, 40.765]);
ritzCarlton.addTo(map);


const oliveGarden = buildMarker("olive-garden", "restaurants", [-73.960459, 40.818040]);
oliveGarden.addTo(map);

const unionSquare = buildMarker("union-square", "activities", [-73.990768, 40.736519]);
unionSquare.addTo(map);

document.addEventListener("click", (event) => {
  console.log(event.target.id)
})
