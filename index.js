const GEOCODIO_API_KEY = process.env.GEOCODIO_API_KEY

const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio(GEOCODIO_API_KEY);
const geoJSON = require('node-geojson');
const turf = require('@turf/turf');

async function main() {
    var geoResponse = await geocoder.geocode('City Hall Park, New York, NY 10007') // Address for City Hall NYC

    // console.log(JSON.stringify(geoResponse, null, 4))

    var lng = geoResponse.results[0].location.lng
    var lat = geoResponse.results[0].location.lat

    var pt = turf.point([lng,lat]);

    // console.log("Our coordinates are: ", [lat,lng])
    // console.log("Our point is: ", pt)

    var geodata = await geoJSON.createUsingFile("./nyc-city-council.json");
    var features = geodata.GetAllFeatures();

    features.forEach(feature => {
        // This check ensures the correct Polygon, either Polygon or MultiPolygon, gets passed into 
        // the booleanPointInPolygon function later on. Could alternatively be a ternary operator
        if(feature.geometry.type == 'Polygon') {
            var poly = turf.polygon(feature.geometry.coordinates);
        } else if(feature.geometry.type == 'MultiPolygon') {
            var poly = turf.multiPolygon(feature.geometry.coordinates)
        }

        var isPointInPoly = turf.booleanPointInPolygon(pt, poly);

        if(isPointInPoly) {
            console.log("Your point is in Council District: ", feature.properties.CounDist)
        }
    })
}

main();
