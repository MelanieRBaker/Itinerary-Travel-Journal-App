
var app = angular.module('app', ['daterangepicker']);





// var map;
// var infowindow;

// function initMap() {
//   var nashville =  {lat: 36.174, lng: -86.767},
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: nashville,
//     zoom: 15
//     // mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: nashville,
//     radius: 1000,
//     type: ['store']
//   }, callback);
// }

// function callback(results, status) {
//   // console.log("status", status);
//   // console.log("results", results);
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
//   // console.log("place", place);
//   var placeLoc = place.geometry.location;
//   // console.log("place", placeLoc);
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });
//   console.log("marker", marker);

//   google.maps.event.addListener(marker, 'click', function() {
//     console.log("place", place.name);
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }





















// function initAutocomplete() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 36.174465, lng: -86.767960},
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     });

//     // Create the search box and link it to the UI element.
//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener('bounds_changed', function() {
//       searchBox.setBounds(map.getBounds());
//     });

//     var markers = [];
//     searchBox.addListener('places_changed', function() {
//       var places = searchBox.getPlaces();

//       if (places.length == 0) {
//         return;
//       }

//       function createPlace(place) {
//         // console.log("place", place);

//       var request = {
//         placeId: place.id
//       }

//             google.maps.event.addListener(place, 'click', function() {
//             console.log("click");
//    })
//        service = new google.maps.places.PlacesService(map);
//        service.getDetails(request, callback);

//       function callback(place, status){
//         console.log("status", place, status);
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//           console.log("if statement");
//      /
//        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//          'Place ID: ' + place.place_id + '<br>' +
//          place.formatted_address + '</div>');
//        infowindow.open(map, this);
//      });
//         }
//       }


//         var infowindow = new google.maps.InfoWindow({
//         content:"Hello World"
//       });

//       google.maps.event.addListener(place, 'click', function() {
//         console.log("click");
//         infowindow.open(map,place);
//       });
//     }
//       Clear out the old markers.
//       markers.forEach(function(marker) {
//         marker.setMap(null);
//       });
//       markers = [];

//       // For each place, get the icon, name and location.
//       var bounds = new google.maps.LatLngBounds();
//       places.forEach(function(place) {

//         createPlace(place);
//         var icon = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25)
//         };

//         // Create a marker for each place.
//         markers.push(new google.maps.Marker({
//           map: map,
//           icon: icon,
//           title: place.name,
//           position: place.geometry.location
//         }));

//         if (place.geometry.viewport) {
//           // Only geocodes have viewport.
//           bounds.union(place.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });
//       map.fitBounds(bounds);
//     });


//   }



















// ORIGINAL DON'T CHANGE

function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 36.174465, lng: -86.767960},
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // var marker = new google.maps.Marker({
    //   position
    // })
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      function createPlace(place) {
        var infowindow = new google.maps.InfoWindow({
        content:"Hello World"
      });

      google.maps.event.addListener(place, 'click', function() {
        console.log("click");
        infowindow.open(map,place);
      });
    }


      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        console.log("place", place.id);
        createPlace(place);
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });


  }


// date picker

