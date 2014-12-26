function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(40.6807476,-111.8767596),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
}


google.maps.event.addDomListener(window, 'load', initialize);


// SLC, currently centered on Fashion Place Mall to better center on the valley
// 40.776608,-111.920485