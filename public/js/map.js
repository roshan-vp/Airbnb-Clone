maptilersdk.config.apiKey = mapKey;

const coordinates = listing.geometry && listing.geometry.coordinates
    ? listing.geometry.coordinates
    : [77.2090, 28.6139]; // Default to New Delhi

const map = new maptilersdk.Map({
    container: 'map', // container id
    style: maptilersdk.MapStyle.STREETS,
    center: coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

const marker = new maptilersdk.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(new maptilersdk.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.location}</h4><p>Exact Location will be provided after booking</p>`))
    .addTo(map);
