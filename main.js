mapboxgl.accessToken ="pk.eyJ1IjoiZ2lnYTEzOSIsImEiOiJjbGlzeWJnNGcxOWdwM2RueHNvcXF5aDYwIn0.KdY6Xt2_Bhzpm4xuGpT6Sw";

var naksha= new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/satellite-streets-v12',
    center:[77.99986548474664,30.29726623773578],
    zoom:20
})

naksha.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackUserLocation:true
    })
)

