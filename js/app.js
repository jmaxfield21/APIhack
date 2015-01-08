$(document).ready(function() {
  
  initialize();

  $('a').on( 'click', function(event) {
    event.preventDefault();
    getPlacesData( $(this).attr('id') );
    toggleSelected( $(this) );
  });

});

var map;
var service;
var infowindow;

var mapCenter = new google.maps.LatLng(40.6807476, -111.8767596);

var recTypes = ['aquarium', 'art_gallery', 'bowling_alley', 'casino', 'museum', 'night_club', 'park', 'stadium', 'zoo'];
var markers = new Array();

function initialize() {
    var mapOptions = {
      center: mapCenter,
      zoom: 11
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

function toggleSelected( selected ) {
  $('.selected').removeClass('selected');
  $( selected ).closest('li').addClass('selected');
}

function getRecTypes() {
  return recTypes;
}

function getPlacesData( type ) {
  if ( type === 'recreation' ) {
    type = getRecTypes();
  } else {
    type = [type];
  }

  var request = {
    location: mapCenter,
    radius: 11000,
    types: type
  };

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if ( status == google.maps.places.PlacesServiceStatus.OK ) {
    clearMarkers();
    for ( var i = 0; i < results.length; i++ ) {
      createMarker(results[i]);
    }
  }
}

function clearMarkers() {
  for ( var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers = new Array();
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  
  markers.push(marker);

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

// SLC coordinates below, 
// 40.776608,-111.920485
// the current settings center the map 
// on Fashion Place Mall to better center on the valley
// google.maps.event.addDomListener(window, 'load', initialize);
