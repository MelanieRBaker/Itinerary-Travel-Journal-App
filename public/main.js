var app = angular.module('app', ['daterangepicker']);

 var config = {
    apiKey: "AIzaSyBWFjhf484iUQ3B3VX94wQuZ9pcjAaZgsI",
    authDomain: "pro-planet-134118.firebaseapp.com",
    databaseURL: "https://pro-planet-134118.firebaseio.com",
    storageBucket: "pro-planet-134118.appspot.com",
  };
  firebase.initializeApp(config);


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















// ORIGINAL DON'T CHANGE

// function initAutocomplete() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 36.174465, lng: -86.767960},
//       zoom: 8,
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
//     // var marker = new google.maps.Marker({
//     //   position
//     // })
//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener('places_changed', function() {
//       var places = searchBox.getPlaces();

//       if (places.length == 0) {
//         return;
//       }

//       function createPlace(place) {
//         var infowindow = new google.maps.InfoWindow({
//         content:"Hello World"
//       });

//       google.maps.event.addListener(place, 'click', function() {
//         console.log("click");
//         infowindow.open(map,place);
//       });
//     }


//       // Clear out the old markers.
//       markers.forEach(function(marker) {
//         marker.setMap(null);
//       });
//       markers = [];

//       // For each place, get the icon, name and location.
//       var bounds = new google.maps.LatLngBounds();
//       places.forEach(function(place) {
//         console.log("place", place.id);
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
