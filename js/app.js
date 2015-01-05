$(document).ready(function() {
  
  initialize();

  $('a').on( 'click', getPlacesData );

});


var mapCenterLat = 40.6807476;
var mapCenterLng = -111.8767596;

function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(mapCenterLat, mapCenterLng),
      zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
}


function getPlacesData() {
  var type = $(this).attr('id');

  var locations = $.ajax(
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters',
      key: 'AIzaSyBc-VC_aNuBYz094lOMuSpt5nof1ra42bE',
      location: ( mapCenterLat, mapCenterLng ),

  );

}

// SLC coordinates below, 
// 40.776608,-111.920485
// the current settings center the map 
// on Fashion Place Mall to better center on the valley
// google.maps.event.addDomListener(window, 'load', initialize);
