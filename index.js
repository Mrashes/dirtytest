function getCurrentLocation() {
    function geo_success(position) {
        display(position.coords.latitude, position.coords.longitude);
    }
    
    function geo_error() {
        console.log("Sorry, no position available.");
    }
    
    var geo_options = {
        enableHighAccuracy: true,
        maximumAge        : Infinity, 
        timeout           : Infinity
    };
    
    navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
}

function display(lat, lon) {
    elementLat = document.getElementById('lat');
    elementLon = document.getElementById('lon');
    elementLat.innerText = lat;
    elementLon.innerText = lon;
}

getCurrentLocation()